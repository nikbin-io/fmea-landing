import { Container } from '~/components'

const PrivacyPolicy = () => {
  return (
    <div py="lg:40 30">
      <Container>
        <div
          bg="gray-light"
          leading="relaxed"
          max-w="5xl"
          mx="auto"
          p="y-10 sm:x-10 x-4"
          rounded="2xl"
          shadow="xl"
          text="sm:base sm">
          <div mb="12" text="center">
            <h1
              color="gray-darker "
              font="bold"
              mb="4"
              text="3xl sm:5xl"
              tracking="tight">
              Privacy Policy
            </h1>

            <p color="gray-dark " text="sm:lg md">
              Last updated: November 8, 2024
            </p>
          </div>

          <div color="gray-dark " space-y="8">
            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Introduction
              </h2>

              <p>
                Welcome to our Privacy Policy. Your privacy is critically
                important to us. This Privacy Policy document contains types of
                information that is collected and recorded by our website and
                how we use it.
              </p>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Information We Collect
              </h2>

              <p>
                We collect several different types of information for various
                purposes to provide and improve our service to you.
              </p>

              <ul list="disc" mt="2" pl="4" space-y="2">
                <li>
                  <strong font="semibold">Personal Data:</strong> While using
                  our service, we may ask you to provide us with certain
                  personally identifiable information that can be used to
                  contact or identify you.
                </li>

                <li>
                  <strong font="semibold">Usage Data:</strong> We may also
                  collect information on how the service is accessed and used.
                </li>

                <li>
                  <strong font="semibold">Cookies and Tracking:</strong> We use
                  cookies and similar tracking technologies to track activity on
                  our service.
                </li>
              </ul>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                How We Use Your Information
              </h2>

              <p mb="4">We use the collected data for various purposes:</p>

              <ul list="disc" mt="2" pl="4" space-y="2">
                <li>To provide and maintain our service</li>

                <li>To notify you about changes to our service</li>

                <li>To allow you to participate in interactive features</li>

                <li>To provide customer support</li>

                <li>
                  To gather analysis or valuable information to improve our
                  service
                </li>

                <li>To monitor the usage of our service</li>

                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Data Security
              </h2>

              <p>
                The security of your data is important to us, but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Third-Party Services
              </h2>

              <p>
                We may employ third-party companies and individuals to
                facilitate our service, provide the service on our behalf,
                perform service-related services, or assist us in analyzing how
                our service is used. These third parties have access to your
                Personal Data only to perform these tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Your Rights
              </h2>

              <p mb="4">
                You have certain rights regarding your personal information:
              </p>

              <ul list="disc" mt="2" pl="4" space-y="2">
                <li>
                  The right to access – You have the right to request copies of
                  your personal data
                </li>

                <li>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate
                </li>

                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions
                </li>

                <li>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data
                </li>

                <li>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you
                </li>
              </ul>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Children&apos;s Privacy
              </h2>

              <p>
                Our service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13. If you are a parent or guardian and you are
                aware that your child has provided us with Personal Data, please
                contact us.
              </p>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Changes to This Privacy Policy
              </h2>

              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quotLast updated&quot date at the
                top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 color="gray-darker " font="semibold" mb="4" text="xl sm:3xl">
                Contact Us
              </h2>

              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>

              <ul list="disc" mt="4" pl="4" space-y="2">
                <li>By email: privacy@example.com</li>

                <li>
                  By visiting this page on our website: www.example.com/contact
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy
