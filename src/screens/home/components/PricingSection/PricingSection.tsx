import dynamic from 'next/dynamic'
import { useState } from 'react'
import imgEnterprise from '~/assets/enterprise-bg.jpg'
import { Container, LinkButton } from '~/components'
import { CheckIcon } from '~/components/Icons'
import Image from 'next/image'
const Discount = dynamic(() => import('~/components/Discount'), {
  ssr: false
})

const CREDIT_PACKS = [
  { id: 1, credits: 50, bonus: 0, price: 25, oldPrice: 50 },
  { id: 2, credits: 100, bonus: 10, price: 50, oldPrice: 100, popular: true },
  { id: 3, credits: 250, bonus: 50, price: 125, oldPrice: 250 },
  { id: 4, credits: 1000, bonus: 500, price: 500, oldPrice: 1000 }
]

const CARDS = [
  {
    id: 'standard',
    title: 'Standard',
    features: [
      'Advanced agentic analysis workflow with deep internal quality checks',
      'Supports both Design (DFMEA) & Process (PFMEA)',
      'Supports input formats: PDF, JPEG, WebP, CSV, XLSX, XLS, TXT',
      'Industry-aligned downloadable Excel output & email delivery',
      'Customer support backed by Quality Engineers',
      'Generate up to 200 complete fmea entries in a single run',
      'Strict data privacy & security protocols'
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
      'Includes all Standard features',
      'On-premise (local) deployment options',
      'Custom FMEA template integration',
      'Tailored solutions for advanced requirements',
      'Dedicated account manager & SLA'
    ],
    link: {
      href: '/contact',
      label: 'Contact Us'
    }
  }
]

const PricingSection = () => {
  const [selectedPack, setSelectedPack] = useState(CREDIT_PACKS[1])

  return (
    <section id="pricing" m="sm:b-20" p="y-10" position="relative">
      <div
        bg="blue-900/5"
        blur="120px"
        h="400px"
        pointerEvents="none"
        position="absolute top-[10%] left-1/2"
        rounded="full"
        translate-x="-1/2"
        w="600px "></div>

      <div
        bg-gradient="to-b from-#6B7FED/10 to-transparent"
        blur="80px"
        h="800px"
        pointerEvents="none"
        position="absolute top-[30%] left-1/2"
        rounded="[100%]"
        translate-x="-1/2"
        w="150%"></div>
      <Container>
        <div flex="~ col items-center" gap="sm:10 6" mb="sm:20 8" text="center">
          <h2 line-height="tight" text="center lg:3rem 2rem gray-dark ">
            PRICING
          </h2>
          <p max-w="4xl" text="lg:xl lg center gray-dark">
            Get started instantly with our Standard plan or contact us for
            custom volume licensing and dedicated support.
          </p>
        </div>

        <div max-w="1200px" mx="auto">
          {CARDS.map((card) => {
            const isStandard = card.id === 'standard'

            return (
              <div key={card.id} mb="20" position="relative" w="full">
                <div
                  className="ribbon"
                  font="bold"
                  mb="-15px"
                  py="5"
                  text="center white 2xl"
                  tracking="wide">
                  {card.title}
                </div>

                <div px="1em">
                  <div
                    bg="white"
                    className="grid lg:grid-cols-2"
                    gap="xl:25 10"
                    p="y-10 sm:x-10 x-3">
                    <div flex="~ col items-center justify-center" w="full">
                      {isStandard ? (
                        <>
                          <div
                            className="animate-sale animated-infinite"
                            font="500"
                            mb="25px"
                            p="x-20px y-8px"
                            rounded="lg"
                            text="sm white"
                            tracking="wider">
                            LAUNCH SALE: LIMITED TIME
                          </div>
                          <div
                            flex="~ justify-center"
                            mb="lg:30px 40px"
                            w="full">
                            <Discount />
                          </div>

                          <div
                            className="grid grid-cols-2 gap-5 w-full"
                            max-w="500px">
                            {CREDIT_PACKS.map((pack) => {
                              const isSelected = selectedPack.id === pack.id
                              return (
                                <button
                                  b={
                                    isSelected
                                      ? '2 solid purple-dark'
                                      : '2 solid gray-light'
                                  }
                                  bg={isSelected ? 'white' : 'white'}
                                  cursor="pointer"
                                  flex="~ col items-center justify-between"
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
                                      bg={
                                        isSelected
                                          ? 'purple-dark'
                                          : 'gray-light'
                                      }
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

                                  <div m="t-1 lg:b-3 b-4" space-y="xs:2 3">
                                    <div
                                      font="bold"
                                      line-height="28px"
                                      text="xs:2xl xl center brand">
                                      {pack.credits} Credits
                                    </div>

                                    <div
                                      bg="purple/10"
                                      font="normal"
                                      p="x-7px y-2px"
                                      rounded="10px"
                                      text="xs:sm xs purple-dark">
                                      {pack.bonus > 0
                                        ? `+${pack.bonus} Bonus Credits`
                                        : 'Starter'}
                                    </div>
                                  </div>

                                  <div flex="~ items-baseline" gap="1">
                                    <span
                                      className="line-through decoration-gray decoration-2"
                                      text="gray xs:xl lg">
                                      ${pack.oldPrice}
                                    </span>
                                    <span font="bold" text="brand xs:2xl xl">
                                      ${pack.price}
                                    </span>
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                          <p font="500" mt="3" text="sm gray-dark center">
                            1 Credit = 1 Complete FMEA Entry
                          </p>
                        </>
                      ) : (
                        <div
                          border="2 dashed gray-light rounded-xl"
                          flex="~ col items-center justify-center"
                          h="full"
                          p="x-10px y-30px"
                          position="relative"
                          w="full">
                          <Image
                            alt="enterprise"
                            fill
                            grayscale="100"
                            object="cover"
                            op="60"
                            rotate-y="180"
                            src={imgEnterprise}
                            style={{
                              objectPosition: 'bottom'
                            }}
                          />

                          <p
                            font="bold center"
                            mb="6"
                            position="relative"
                            text="xs:4xl 2xl brand"
                            z="10">
                            Get a Quote
                          </p>

                          <div
                            backdrop-blur="10px"
                            border="2 solid gray-light"
                            max-w="300px"
                            p="6"
                            position="relative"
                            rounded="xl"
                            text="center"
                            z="10">
                            <p line-height="relaxed" text="sm gray-dark">
                              Enterprise solutions for high-volume needs,
                              on-premise solutions, dedicated support, and
                              custom requirements.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      border="0 t-2 lg:l-2 solid gray-light"
                      flex="~ 1 col justify-between"
                      p="xl:l-10 lg:l-5 t-10"
                      position="relative"
                      rounded="lg:tl-xl">
                      <div
                        bg="white"
                        font="semibold"
                        p="x-20px"
                        position="absolute top-[-12px] lg:left-20px xs:left-30px left-20px">
                        <span>What&apos;s Included</span>
                      </div>

                      <div className="grid grid-cols-1 gap-3 ">
                        {card.features.map((feature, index) => {
                          return (
                            <div key={`${card.id}-${index}`} p="y-1 ">
                              <div flex="~ items-start" gap="10px">
                                <div
                                  className="[&>svg]:h-5 [&>svg]:w-5"
                                  color="green">
                                  <CheckIcon />
                                </div>

                                <div
                                  color="gray-dark"
                                  line-height="normal"
                                  mt="-3px"
                                  text="xs:base sm">
                                  {feature}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <div flex="~ items-center justify-center" p="t-6">
                        <LinkButton
                          h="45px"
                          hasEffect
                          href={card.link.href}
                          label={
                            isStandard
                              ? `Buy ${selectedPack.credits + selectedPack.bonus} Credits - $${selectedPack.price}`
                              : card.link.label
                          }
                          w="xs:300px full"
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

export default PricingSection
