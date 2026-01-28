import dynamic from 'next/dynamic'
import { Container } from '~/components'
import { TechIcon, GiftIcon } from '~/components/Icons'

const Wireframe = dynamic(() => import('~/components/Wireframe'), {
  ssr: false
})

export default function Hero() {
  return (
    <section p="lg:t-40 t-30" position="relative">
      <Container>
        <div
          flex="~ col items-center justify-center"
          mx="auto"
          position="relative"
          px="3 sm:6 lg:8"
          z="1">
          <div flex="~ col items-center">
            <h1 font="bold" mb="6" text="3xl sm:6xl center lg:7xl gray-darker">
              AI-Powered FMEA Generator{' '}
            </h1>

            <p max-w="4xl" text="lg:xl lg center gray-dark">
              Automate the creation of AIAG & VDA compliant DFMEA and PFMEA
              reports. Transform your technical documents into structured{' '}
              <span font="semibold">Failure Mode and Effects Analysis</span> and
              export to Excel effortlessly.
            </p>

            <div flex="~ items-center justify-between" gap="50px" mt="50px">
              <div
                b="1 white/50"
                backdrop-blur="100px"
                bg="white/15"
                flex="~ col"
                gap="4"
                p="8"
                rounded="3xl"
                shadow="lg"
                transition="all duration-300">
                <div flex="~ items-center justify-start" gap="4">
                  <div
                    bg="gray-lighter"
                    flex="~ items-center justify-center"
                    h="14"
                    rounded="2xl"
                    text="gray-dark"
                    transition="colors duration-300"
                    w="14">
                    <div className="[&>svg]:w-7 [&>svg]:h-7">
                      <TechIcon />
                    </div>
                  </div>
                  <h3 font="bold" text="xs:xl brand">
                    Built by QA Experts
                  </h3>
                </div>

                <div>
                  <p leading="relaxed" text="gray-dark">
                    Created by a team of Quality Engineers who understand the
                    nuances of risk analysis to ensure every output meets
                    rigorous industry standards.{' '}
                  </p>
                </div>
              </div>

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

              <div
                b="1 white/50"
                backdrop-blur="100px"
                bg="white/15"
                flex="~ col"
                gap="4"
                p="8"
                rounded="3xl"
                shadow="lg"
                transition="all duration-300">
                <div flex="~ items-center justify-start" gap="4">
                  <div
                    bg="gray-lighter"
                    flex="~ items-center justify-center"
                    h="14"
                    rounded="2xl"
                    text="gray-dark"
                    transition="colors duration-300"
                    w="14">
                    <div className="[&>svg]:w-7 [&>svg]:h-7">
                      <GiftIcon />
                    </div>
                  </div>
                  <h3 font="bold" text="xs:xl brand">
                    Start with Free Credits{' '}
                  </h3>
                </div>

                <div>
                  <p leading="relaxed" text="gray-dark">
                    Sign up today and get{' '}
                    <span font="bold">25 free credits</span> instantly. Test our
                    AI workflow and generate real FMEA reports without any
                    commitment.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
