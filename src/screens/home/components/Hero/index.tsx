import dynamic from 'next/dynamic'
import { Container } from '~/components'

const Wireframe = dynamic(() => import('~/components/Wireframe'), {
  ssr: false
})

export default function Hero() {
  return (
    <section p="lg:t-40 t-30" position="relative">
      <Container>
        <div
          flex="~ col items-center justify-center"
          max-w="7xl"
          mx="auto"
          position="relative"
          px="3 sm:6 lg:8"
          z="1">
          <div flex="~ col items-center">
            <h1
              font="bold"
              leading="tight"
              mb="6"
              text="3xl sm:6xl center lg:7xl gray-800">
              Iterative FMEA Generator
            </h1>

            <p leading="relaxed" max-w="4xl" text="lg:xl lg center gray-700">
              This tool uses a multi-stage AI process to generate, critique, and
              refine a Failer Mode and Effect Analysis(FMEA) from technical
              documents
            </p>

            <div
              flex="~ items-center justify-center"
              h="300px"
              inset="0"
              mt="8"
              pointerEvents="none"
              w="300px"
              z="0">
              <Wireframe />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
