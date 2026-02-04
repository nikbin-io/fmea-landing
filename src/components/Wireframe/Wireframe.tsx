import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Wireframe = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild as Node)
    }

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
    camera.position.set(3, 2, 4)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x232b32, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.style.display = 'block'
    containerRef.current.appendChild(renderer.domElement)

    function resize() {
      const size = 300
      renderer.setSize(size, size)
      camera.aspect = 1
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', resize, false)
    resize()

    let line: THREE.LineSegments | null = null
    let trianglesGeom: THREE.BufferGeometry | null = null
    let animationId: number

    async function loadModel() {
      const res = await fetch('/assets/drill.json')
      const data = await res.json()

      const positions = new Float32Array(data.position)

      trianglesGeom = new THREE.BufferGeometry()
      trianglesGeom.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      )
      trianglesGeom.computeBoundingBox()
      trianglesGeom.center()
      trianglesGeom.computeBoundingSphere()
      {
        const radius = trianglesGeom.boundingSphere
          ? trianglesGeom.boundingSphere.radius
          : 1
        const targetRadius = 1.5
        const s = targetRadius / radius
        trianglesGeom.scale(s, s, s)
      }

      const wireGeo = new THREE.WireframeGeometry(trianglesGeom)
      const material = new THREE.LineBasicMaterial({
        color: 0x374151,
        transparent: true,
        opacity: 1
      })

      line = new THREE.LineSegments(wireGeo, material)
      line.position.y = 0.2
      scene.add(line)
    }

    loadModel()

    function update() {
      animationId = requestAnimationFrame(update)
      if (line) line.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    update()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      if (line) {
        scene.remove(line)
        if (line.geometry) line.geometry.dispose()
        if (Array.isArray(line.material as any)) {
          ;(line.material as any).forEach((m: THREE.Material) => m.dispose())
        } else {
          ;(line.material as THREE.Material).dispose()
        }
        line = null
      }
      if (trianglesGeom) {
        trianglesGeom.dispose()
        trianglesGeom = null
      }
      renderer.dispose()
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div flex="~ items-center" h="300px" ref={containerRef} w="300px" />
}

export default Wireframe
