import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const VERT = `
attribute vec3 position;
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

const FRAG = `
precision mediump float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec2 uResolution;
uniform float uBlend;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  float s = step(x0.y, x0.x);
  vec2 i1 = vec2(s, 1.0 - s);
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

vec3 colorRamp(vec3 color0, vec3 color1, vec3 color2, float factor) {
  vec3 c1 = mix(color0, color1, factor * 2.0);
  vec3 c2 = mix(color1, color2, (factor - 0.5) * 2.0);
  float t = step(0.5, factor);
  return mix(c1, c2, t);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  vec3 rampColor = colorRamp(uColor0, uColor1, uColor2, uv.x);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  gl_FragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
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
    amplitude = 0.2,
    blend = 0.5
  } = props
  const propsRef = useRef<AuroraProps>(props)
  propsRef.current = props

  const ctnDom = useRef<HTMLDivElement>(null)
  const [useFallback, setUseFallback] = useState(() => {
    if (typeof navigator !== 'undefined') {
      return /Android/i.test(navigator.userAgent)
    }
    return false
  })

  useEffect(() => {
    const ctn = ctnDom.current
    if (!ctn || useFallback) return

    let renderer: THREE.WebGLRenderer
    let animateId = 0
    let material: THREE.RawShaderMaterial
    let geometry: THREE.BufferGeometry

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        premultipliedAlpha: true,
        antialias: true
      })

      const gl = renderer.getContext()
      if (!gl) {
        setUseFallback(true)
        return
      }

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

      const uniforms = {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColor0: { value: new THREE.Vector3(0, 0, 0) },
        uColor1: { value: new THREE.Vector3(0, 0, 0) },
        uColor2: { value: new THREE.Vector3(0, 0, 0) },
        uResolution: {
          value: new THREE.Vector2(ctn.offsetWidth, ctn.offsetHeight)
        },
        uBlend: { value: blend }
      }

      function resize() {
        if (!ctn) return
        const width = ctn.offsetWidth
        const height = ctn.offsetHeight
        renderer.setSize(width, height, false)
        uniforms.uResolution.value.set(width, height)
      }
      window.addEventListener('resize', resize)

      geometry = new THREE.BufferGeometry()
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

      uniforms.uColor0.value.set(r0, g0, b0)
      uniforms.uColor1.value.set(r1, g1, b1)
      uniforms.uColor2.value.set(r2, g2, b2)

      material = new THREE.RawShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms,
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

      const update = (t: number) => {
        animateId = requestAnimationFrame(update)
        const { time = t * 0.01, speed = 1.0 } = propsRef.current
        uniforms.uTime.value = time * speed * 0.1
        uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0
        uniforms.uBlend.value = propsRef.current.blend ?? blend

        const stops = propsRef.current.colorStops ?? colorStops
        const safeStops = stops.length ? stops : colorStops
        const [cr0, cg0, cb0] = hexToRgb01(
          safeStops[0] ?? safeStops[safeStops.length - 1]
        )
        const [cr1, cg1, cb1] = hexToRgb01(
          safeStops[1] ?? safeStops[safeStops.length - 1]
        )
        const [cr2, cg2, cb2] = hexToRgb01(
          safeStops[2] ?? safeStops[safeStops.length - 1]
        )
        uniforms.uColor0.value.set(cr0, cg0, cb0)
        uniforms.uColor1.value.set(cr1, cg1, cb1)
        uniforms.uColor2.value.set(cr2, cg2, cb2)

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
    } catch {
      setUseFallback(true)
    }
  }, [amplitude, useFallback])

  if (useFallback) {
    return (
      <div
        className="bg-gradient-to-r from-[#6B7FED] via-[#4B3AB3] to-[#6B7FED] opacity-30"
        h="full"
        w="full"
      />
    )
  }

  return <div h="full" ref={ctnDom} w="full" />
}

export default Aurora
