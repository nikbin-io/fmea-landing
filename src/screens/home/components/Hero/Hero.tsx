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
            <h1 font="bold" mb="6" text="3xl sm:6xl center lg:7xl gray-darker">
              AI-Powered FMEA Software{' '}
            </h1>

            <p max-w="4xl" text="lg:xl lg center gray-dark">
              Automate the creation of AIAG & VDA compliant DFMEA and PFMEA
              reports. Transform your technical documents into structured{' '}
              <span font="semibold">Failure Mode and Effects Analysis</span> and
              export to Excel effortlessly.
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
