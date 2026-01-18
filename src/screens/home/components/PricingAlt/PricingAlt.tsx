import { useState } from 'react'
import { Container, LinkButton } from '~/components'
import { CheckIcon, CrossIcon } from '~/components/Icons'

const CREDIT_PACKS = [
  { id: 1, credits: 50, bonus: 0, price: 25, oldPrice: 50 },
  { id: 2, credits: 100, bonus: 10, price: 50, oldPrice: 100, popular: true },
  { id: 3, credits: 250, bonus: 35, price: 125, oldPrice: 250 },
  { id: 4, credits: 500, bonus: 100, price: 250, oldPrice: 500 }
]

const CARDS = [
  {
    id: 'standard',
    title: 'Standard',
    features: [
      {
        isEnabled: true,
        description:
          'Core FMEA template with the essential fields ready to use for a simple workflow.'
      },
      {
        isEnabled: true,
        description:
          'Basic risk scoring and quick prioritization to keep teams aligned across teams.'
      },
      {
        isEnabled: true,
        description:
          'Lightweight collaboration: share links, review changes, and leave notes.'
      },
      {
        isEnabled: true,
        description:
          'Export to common formats for reporting and stakeholder updates.'
      },
      {
        isEnabled: true,
        description: 'Excel FMEA'
      },
      {
        isEnabled: true,
        description: 'Advanced agentic analysis workflow'
      }
    ],
    link: {
      href: '#',
      label: 'Get Standard'
    }
  },
  {
    id: 'custom',
    title: 'Custom',
    features: [
      {
        isEnabled: true,
        description: 'Specific or advanced requirements'
      },
      {
        isEnabled: true,
        description: 'Custom needs beyond standard plans'
      },
      {
        isEnabled: true,
        description: 'Up to 200 complete FMEA entries per run'
      },
      {
        isEnabled: true,
        description: 'Excel FMEA (industry-aligned or customer templates)'
      },
      {
        isEnabled: true,
        description: 'Advanced agentic analysis workflow'
      }
    ],
    link: {
      href: '/contact',
      label: 'Contact Us'
    }
  }
]

const Pricing = () => {
  const [selectedPack, setSelectedPack] = useState(CREDIT_PACKS[1])

  return (
    <section id="pricing" p="b-30" position="relative">
      <div
        bg="blue-900/5"
        blur="120px"
        h="400px"
        pointer-events="none"
        position="absolute top-[10%] left-1/2"
        rounded="full"
        translate-x="-1/2"
        w="600px "></div>

      <div
        bg-gradient="to-b from-#6B7FED/10 to-transparent"
        blur="80px"
        h="800px"
        pointer-events="none"
        position="absolute top-[30%] left-1/2"
        rounded="[100%]"
        translate-x="-1/2"
        w="150%"></div>
      <Container>
        <div flex="~ col items-center" gap="sm:10 6" mb="sm:20 8" text="center">
          <h2 line-height="tight" text="center lg:3rem 2rem gray-dark ">
            PRICING
          </h2>

          <p font="500" max-w="3xl" text="xl gray">
            Get started instantly with our Standard plan or contact us for
            custom volume licensing and dedicated support.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-10 place-items-center"
          max-w="1200px"
          mx="auto">
          {CARDS.map((card) => {
            const isStandard = card.id === 'standard'

            return (
              <div key={card.id} position="relative" w="full">
                <div
                  className="ribbon"
                  font="bold"
                  mb="-15px"
                  py="5"
                  text="center white xl"
                  tracking="wide">
                  {card.title}
                </div>

                <div px="1em">
                  <div bg="white" flex="~ " gap="10" p="10">
                    <div
                      border="0 r-3 solid gray-lighter"
                      flex="~ shrink-0 col items-center justify-center"
                      pr="10">
                      {isStandard ? (
                        <>
                          <div
                            animated=" infinite"
                            bg="#010A32"
                            className=" animate-sale"
                            flex="~ items-center justify-center"
                            font="bold"
                            h="30px"
                            mb="30px"
                            rounded="full"
                            text="12px white"
                            w="200px">
                            LAUNCH SALE: LIMITED TIME
                          </div>

                          <div className="grid grid-cols-2 gap-3 w-full">
                            {CREDIT_PACKS.map((pack) => {
                              const isSelected = selectedPack.id === pack.id
                              return (
                                <button
                                  b={
                                    isSelected
                                      ? '2 solid brand'
                                      : '2 solid gray-light'
                                  }
                                  bg={isSelected ? 'white' : 'white'}
                                  cursor="pointer"
                                  flex="~ col items-center justify-center"
                                  key={pack.id}
                                  outline="none"
                                  p="4"
                                  position="relative"
                                  rounded="xl"
                                  shadow={
                                    isSelected
                                      ? '[0_0_18px_rgba(1,10,50,0.2)]'
                                      : 'sm'
                                  }
                                  transition="all duration-200"
                                  type="button"
                                  onClick={() => setSelectedPack(pack)}>
                                  {pack.popular && (
                                    <span
                                      bg={isSelected ? 'brand' : 'gray-light'}
                                      color={isSelected ? 'white' : 'brand'}
                                      font="bold"
                                      line-height="10px"
                                      p="x-2.5 b-1.2 t-1.4"
                                      position="absolute top-[-10px] left-1/2"
                                      rounded="lg "
                                      text="[10px] "
                                      translate-x="-1/2">
                                      POPULAR
                                    </span>
                                  )}

                                  <div m="y-1">
                                    <div
                                      flex="~ items-center justify-center"
                                      font="bold"
                                      gap="2"
                                      line-height="30px"
                                      text="3xl center brand">
                                      {pack.credits}

                                      {pack.bonus > 0 && `+${pack.bonus}`}
                                    </div>
                                    <p font="normal" text="xl gray">
                                      Credits
                                    </p>
                                  </div>

                                  <div flex="~ items-baseline" gap="1">
                                    <span
                                      className="line-through decoration-brand decoration-2"
                                      text="gray xl">
                                      ${pack.oldPrice}
                                    </span>
                                    <span font="bold" text="brand 2xl">
                                      ${pack.price}
                                    </span>
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                          <p font="500" mt="3" text="sm gray-dark center">
                            1 Credit = 1 Failure Mode
                          </p>
                        </>
                      ) : (
                        <div
                          flex="~ col items-center justify-center"
                          max-w="300px"
                          w="full">
                          <p font="bold center" mb="6" text="4xl brand">
                            Get a Quote
                          </p>

                          <div
                            bg="gray-lighter"
                            border="2 dashed gray-light"
                            p="6"
                            rounded="xl"
                            text="center">
                            <p line-height="relaxed" text="sm gray-dark">
                              Tailored solutions for{' '}
                              <strong font="semibold" text="gray-dark">
                                high-volume
                              </strong>{' '}
                              needs, enterprise security, and dedicated support.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div flex="~ 1 col justify-between">
                      <div flex="~ items-center" gap="4" mb="6">
                        <span font="bold" text="xs gray-400" uppercase>
                          WHAT&apos;S INCLUDED
                        </span>
                        <div border="t-1 solid gray-light" flex="grow" />
                      </div>

                      <div className="grid grid-cols-1 gap-3 ">
                        {card.features.map((feature, index) => {
                          return (
                            <div key={`${card.id}-${index}`} p="y-1 ">
                              <div flex="~ items-start" gap="10px">
                                <div
                                  className="[&>svg]:h-5 [&>svg]:w-5"
                                  color={
                                    feature.isEnabled ? 'green' : 'gray-dark'
                                  }>
                                  {feature.isEnabled ? (
                                    <CheckIcon />
                                  ) : (
                                    <CrossIcon />
                                  )}
                                </div>

                                <div
                                  color={
                                    feature.isEnabled ? 'gray-dark' : 'gray/60'
                                  }
                                  line-height="normal"
                                  mt="-3px"
                                  text="sm">
                                  {feature.description}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <div
                        flex="~ items-center justify-center"
                        mt="auto"
                        p="sm:x-6 x-3 t-6">
                        <LinkButton
                          h="45px"
                          hasEffect
                          href={card.link.href}
                          label={
                            isStandard
                              ? `Buy ${selectedPack.credits} Credits - $${selectedPack.price}`
                              : card.link.label
                          }
                          w="300px"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    b="rounded-b-3px"
                    bg-gradient="radial from-gray-dark to-gray-darker"
                    h="3"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
