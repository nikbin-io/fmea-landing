import { Container, LinkButton } from '~/components'
import { MapPinIcon, EnvelopeIcon } from '~/components/Icons'

const ContactBanner = () => {
  return (
    <section py="10">
      <Container>
        <div
          b="1 solid gray-light"
          bg-gradient="to-br from-white to-gray-lighter"
          flex="~ col lg:row items-stretch justify-between"
          gap="sm:50px 30px"
          max-w="1200px"
          mx="auto"
          overflow="hidden"
          p="sm:y-12 y-8 sm:x-12 x-6"
          position="relative"
          rounded="2xl"
          shadow="lg">
          <div flex="~ col items-start" gap="6" max-w="650px">
            <div>
              <h2 font="bold" mb="3" text="sm:3xl 2xl brand">
                Get in Touch
              </h2>

              <p leading="relaxed" text="sm:lg base gray-500">
                Have questions? Our team is on standby to help you with the
                platform or discuss any custom requirements.
              </p>
            </div>

            <LinkButton
              h="45px"
              hasEffect
              href="https://app.fmeatool.ai"
              label="Contact Us"
              w="160px"
            />
          </div>

          <div b="0 lg:l-2 l-0 lg:t-0 t-1 solid gray-light"></div>

          <div flex="~ col" gap="8">
            <div flex="~ col" gap="2">
              <div flex="~ items-center" gap="3" text="brand">
                <div
                  className="[&>svg]:w-6 [&>svg]:h-6"
                  flex="~ items-center justify-center">
                  <MapPinIcon />
                </div>

                <span font="bold" text=" tracking-wider ">
                  Address
                </span>
              </div>

              <div flex="~ col" pl="9" text="base gray">
                <span>Maudlin Works, LLC</span>
                <span>1111B S Governors Ave, STE 21109</span>
                <span>Dover, DE 19904 US</span>
              </div>
            </div>

            <div flex="~ col" gap="2">
              <div flex="~ items-center" gap="3" text="brand">
                <div
                  className="[&>svg]:w-6 [&>svg]:h-6"
                  flex="~ items-center justify-center">
                  <EnvelopeIcon />
                </div>

                <span font="bold" text=" tracking-wider ">
                  Email
                </span>
              </div>

              <div pl="9" text="base gray">
                <a
                  href="mailto:support@fmeatool.ai"
                  text=" hover:brand "
                  transition="colors">
                  support@fmeatool.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactBanner
