import { Container, LinkButton } from '~/components'
import { CheckIcon, CrossIcon } from '~/components/Icons'

const CARDS = [
  {
    id: 'standard',
    title: 'Standard',
    price: '$20',
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
        isEnabled: false,
        description:
          'Audit-friendly history, approvals, and change tracking for compliance.'
      },
      {
        isEnabled: false,
        description:
          'Role-based access control and permissions for larger organizations.'
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
    price: 'Get a Quote',
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
        description:
          'Audit-friendly history, approvals, and change tracking for compliance.'
      },
      {
        isEnabled: true,
        description:
          'Role-based access control and permissions for larger organizations.'
      }
    ],
    link: {
      href: '/contact',
      label: 'Contact Us'
    }
  }
]

const Pricing = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          {CARDS.map((card) => (
            <div
              key={card.id}
              position="relative"
              style={{
                maxWidth: 420
              }}
              w="full">
              <div
                className="ribbon"
                font="bold"
                mb="-20px"
                py="3"
                text="center white xl"
                tracking="wide">
                {card.title}
              </div>

              <div px="1em">
                <div bg="white">
                  <div flex="~ col items-center justify-center" h="100px">
                    <p
                      font="bold center"
                      text={card.id === 'custom' ? 'xl' : '4xl'}>
                      {card.price}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    {card.features.map((feature, index) => {
                      return (
                        <div
                          border="b-1 solid gray-lighter"
                          key={`${card.id}-${index}`}
                          p="y-3 sm:x-6 x-2">
                          <div flex="~ items-start" gap="10px">
                            <div
                              className="[&>svg]:h-5 [&>svg]:w-5"
                              color={feature.isEnabled ? 'green' : 'gray/50'}>
                              {feature.isEnabled ? (
                                <CheckIcon />
                              ) : (
                                <CrossIcon />
                              )}
                            </div>

                            <div
                              color={
                                feature.isEnabled ? 'gray-dark' : 'gray/50'
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

                  <div p="sm:x-6 x-3 y-6">
                    <LinkButton
                      h="45px"
                      hasEffect={card.id === 'custom' ? false : true}
                      href={card.link.href}
                      label={card.link.label}
                    />
                  </div>
                </div>

                <div
                  b="rounded-b-3px"
                  bg-gradient="radial from-gray-dark to-gray-darker"
                  h="3"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
