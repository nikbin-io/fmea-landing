import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const VERT = `
in vec3 position;
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`

interface AuroraProps {
  colorStops?: string[]
  amplitude?: number
  blend?: number
  time?: number
  speed?: number
}

const Aurora = (props: AuroraProps) => {
  const {
    colorStops = ['#6B7FED', '#4B3AB3', '#6B7FED'],
    amplitude = 1.0,
    blend = 0.2
  } = props
  const propsRef = useRef<AuroraProps>(props)
  propsRef.current = props

  const ctnDom = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctn = ctnDom.current
    if (!ctn) return

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true
    })
    renderer.setPixelRatio(1)
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.backgroundColor = 'transparent'
    renderer.domElement.style.display = 'block'

    const scene = new THREE.Scene()
    const camera = new THREE.Camera()

    const hexToRgb01 = (hex: string): [number, number, number] => {
      const h = hex.replace('#', '').trim()
      if (h.length === 3) {
        const r = parseInt(h[0] + h[0], 16)
        const g = parseInt(h[1] + h[1], 16)
        const b = parseInt(h[2] + h[2], 16)
        return [r / 255, g / 255, b / 255]
      }
      const r = parseInt(h.slice(0, 2), 16)
      const g = parseInt(h.slice(2, 4), 16)
      const b = parseInt(h.slice(4, 6), 16)
      return [r / 255, g / 255, b / 255]
    }

    function resize() {
      if (!ctn) return
      const width = ctn.offsetWidth
      const height = ctn.offsetHeight
      renderer.setSize(width, height, false)
      uniforms.uResolution.value.set(width, height)
    }
    window.addEventListener('resize', resize)

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
        3
      )
    )

    const initStops = colorStops.length
      ? colorStops
      : ['#6B7FED', '#4B3AB3', '#6B7FED']
    const stop0 = initStops[0] ?? initStops[initStops.length - 1]
    const stop1 = initStops[1] ?? initStops[initStops.length - 1]
    const stop2 = initStops[2] ?? initStops[initStops.length - 1]

    const [r0, g0, b0] = hexToRgb01(stop0)
    const [r1, g1, b1] = hexToRgb01(stop1)
    const [r2, g2, b2] = hexToRgb01(stop2)

    const uniforms = {
      uTime: { value: 0 },
      uAmplitude: { value: amplitude },
      uColorStops: {
        value: [
          new THREE.Vector3(r0, g0, b0),
          new THREE.Vector3(r1, g1, b1),
          new THREE.Vector3(r2, g2, b2)
        ]
      },
      uResolution: { value: new THREE.Vector2(ctn.offsetWidth, ctn.offsetHeight) },
      uBlend: { value: blend }
    }

    const material = new THREE.RawShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      glslVersion: THREE.GLSL3,
      transparent: true,
      premultipliedAlpha: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendEquation: THREE.AddEquation
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.frustumCulled = false
    scene.add(mesh)
    ctn.appendChild(renderer.domElement)

    let animateId = 0
    const update = (t: number) => {
      animateId = requestAnimationFrame(update)
      const { time = t * 0.01, speed = 1.0 } = propsRef.current
      uniforms.uTime.value = time * speed * 0.1
      uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0
      uniforms.uBlend.value = propsRef.current.blend ?? blend

      const stops = propsRef.current.colorStops ?? colorStops
      const stopVecs = uniforms.uColorStops.value as THREE.Vector3[]
      for (let i = 0; i < stopVecs.length; i++) {
        const safeStops = stops.length ? stops : colorStops
        const hex = safeStops[i] ?? safeStops[safeStops.length - 1]
        const [r, g, b] = hexToRgb01(hex)
        stopVecs[i].set(r, g, b)
      }

      renderer.render(scene, camera)
    }
    animateId = requestAnimationFrame(update)

    resize()

    return () => {
      cancelAnimationFrame(animateId)
      window.removeEventListener('resize', resize)
      if (ctn && renderer.domElement.parentNode === ctn) {
        ctn.removeChild(renderer.domElement)
      }
      material.dispose()
      geometry.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
    }
  }, [amplitude])

  return <div h="full" ref={ctnDom} w="full" />
}

export default Aurora
