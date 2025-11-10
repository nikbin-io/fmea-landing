import { useEffect, useRef } from 'react'
import {
  Renderer,
  Camera,
  Transform,
  Texture,
  Program,
  Geometry,
  Mesh
} from 'ogl'

const Wireframe = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing canvas
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild)
    }

    const vertex = /* glsl */ `
      attribute vec2 uv;
      attribute vec3 position;
      attribute vec3 normal;

      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform mat3 normalMatrix;

      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragment = /* glsl */ `
      precision highp float;

      uniform sampler2D tMap;

      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vec3 tex = texture2D(tMap, vUv).rgb;
        vec3 normal = normalize(vNormal);

        vec3 light = normalize(vec3(0.5, 1.0, -0.3));
        float shading = dot(normal, light) * 0.15;

        gl_FragColor.rgb = tex + shading;
        gl_FragColor.a = 1.0;
      }
    `

    const renderer = new Renderer({ dpr: 2, alpha: true })
    const gl = renderer.gl
    containerRef.current.appendChild(gl.canvas)
    gl.clearColor(0, 0, 0, 0)

    gl.canvas.style.display = 'block'

    const camera = new Camera(gl, { fov: 30 })
    camera.position.set(3, 2, 4)
    camera.lookAt([0, 0, 0])

    function resize() {
      const size = 400
      renderer.setSize(size, size)
      camera.perspective({ aspect: 1 })
    }
    window.addEventListener('resize', resize, false)
    resize()

    const scene = new Transform()

    const texture = new Texture(gl)

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        tMap: { value: texture }
      }
    })

    let wireframeMesh: Mesh | null = null

    async function loadModel() {
      const data = await (await fetch(`/assets/croissant.json`)).json()

      let index = new Uint16Array((data.position.length / 3 / 3) * 6)
      for (let i = 0; i < data.position.length / 3; i += 3) {
        index.set([i, i + 1, i + 1, i + 2, i + 2, i], i * 2)
      }

      const wireframeGeometry = new Geometry(gl, {
        position: { size: 3, data: new Float32Array(data.position) },
        uv: { size: 2, data: new Float32Array(data.uv) },
        normal: { size: 3, data: new Float32Array(data.normal) },
        index: { data: index }
      })

      wireframeMesh = new Mesh(gl, {
        mode: gl.LINES,
        geometry: wireframeGeometry,
        program
      })
      wireframeMesh.setParent(scene)
      wireframeMesh.position.y = 0
    }

    loadModel()

    let animationId: number

    function update() {
      animationId = requestAnimationFrame(update)

      if (wireframeMesh) wireframeMesh.rotation.y += 0.005

      renderer.render({ scene, camera })
    }

    update()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      if (containerRef.current && gl.canvas) {
        containerRef.current.removeChild(gl.canvas)
      }
    }
  }, [])

  return <div h="400px" ref={containerRef} w="400px" />
}

export default Wireframe
