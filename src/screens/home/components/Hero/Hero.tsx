import dynamic from 'next/dynamic'
import { Container, LinkButton } from '~/components'
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
          z="1">
          <div flex="~ col items-center">
            <h1 font="bold" mb="6" text="3xl sm:6xl center lg:7xl gray-darker">
              Agentic FMEA Generator
            </h1>

            <p max-w="4xl" text="lg:xl lg center gray-dark">
              Automate the creation of industry-aligned DFMEA and PFMEA reports.
              Transform your technical documents into structured{' '}
              <span font="semibold">Failure Mode and Effects Analysis</span> and
              export to Excel effortlessly.
            </p>

            <div
              className="xl:grid-cols-[1fr_auto_1fr]"
              gap="2xl:40px md:30px 15px"
              grid="~ md:cols-2 cols-1"
              items="center"
              mt="16">
              <div
                col-span="md:2 xl:1"
                flex="~ shrink-0 items-center justify-center"
                h="300px"
                justify-self="center"
                mb="md:0 15px"
                order="xl:2"
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
                h="xl:auto full"
                max-w="xl:auto 420px"
                order="xl:1"
                p="md:x-8 x-6 y-6"
                rounded="3xl"
                shadow="lg"
                transition="all duration-300"
                w="full">
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
                  <p font="bold" text="lg:xl base brand">
                    Built by QA & AI Experts{' '}
                  </p>
                </div>

                <div>
                  <p leading="relaxed" text="gray-dark">
                    Developed by Quality and AI engineers to ensure deep risk
                    analysis accuracy and strict industry standard compliance.
                  </p>
                </div>
              </div>

              <div
                b="1 white/50"
                backdrop-blur="100px"
                bg="white/15"
                flex="~ col"
                gap="4"
                h="xl:auto full"
                max-w="xl:auto 420px"
                order="xl:3"
                p="md:x-8 x-6 y-6"
                rounded="3xl"
                shadow="lg"
                transition="all duration-300">
                <div flex="~ items-center justify-start" gap="5">
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
                  <LinkButton
                    hasEffect
                    href="https://app.fmeatool.ai"
                    label="Get 25 Free Credits"
                    text="lg:md sm"
                  />
                </div>

                <div>
                  <p leading="relaxed" text="gray-dark">
                    Sign up today and get{' '}
                    <span font="bold">25 free credits</span> instantly. Test our
                    agentic workflow and generate real FMEA reports without any
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
