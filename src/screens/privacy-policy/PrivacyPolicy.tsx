import { Container, SeoHead } from '~/components'

const PrivacyPolicy = () => {
  return (
    <>
      <SeoHead
        description="Read our privacy policy to understand how Maudlin Works, LLC handles your data on fmeatool.ai."
        title="Privacy Policy | FMEA Tool"
      />

      <div py="lg:40 30">
        <Container>
          <div
            bg="gray-lighter"
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

              <p text="base gray-dark">Last updated: January 12, 2026</p>
            </div>

            <div
              className="[&_h2]:color-gray-darker [&_h2]:font-semibold [&_h2]:mb-4 [&_h2]:text-xl sm:3xl "
              color="gray-dark"
              space-y="8">
              <div>
                <h2>Introduction</h2>
                <p>
                  Maudlin Works, LLC (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) respects your privacy. This Privacy Policy
                  explains how we collect, use, and protect your information
                  when you visit our landing page <strong>fmeatool.ai</strong>{' '}
                  (the &quot;Site&quot;).
                </p>
                <p mt="2">
                  <strong>Note:</strong> This policy applies only to this
                  marketing website (fmeatool.ai). If you create an account or
                  use our application at{' '}
                  <span className="font-semibold">app.fmeatool.ai</span>, that
                  usage is governed by a separate Privacy Policy available on
                  that platform.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2>Information We Collect</h2>
                <p>
                  We collect information to provide better services to all our
                  users. This includes:
                </p>

                <ul list="disc" mt="2" pl="6" space-y="2">
                  <li>
                    <strong font="semibold">
                      Voluntarily Provided Information:
                    </strong>{' '}
                    We collect personal information that you voluntarily provide
                    to us (such as your name and email address) when you contact
                    us via email at{' '}
                    <span className="font-medium text-gray-darker">
                      support@fmeatool.ai
                    </span>{' '}
                    or click on &quot;Get in Touch&quot; buttons.
                  </li>

                  <li>
                    <strong font="semibold">
                      Automatically Collected Information:
                    </strong>{' '}
                    When you visit the Site, we may collect certain information
                    automatically, including your IP address, browser type, and
                    operating system, through the use of cookies or similar
                    tracking technologies.
                  </li>
                </ul>
              </div>

              <div>
                <h2>How We Use Your Information</h2>
                <p mb="4">We use the information we collect solely to:</p>

                <ul list="disc" mt="2" pl="6" space-y="2">
                  <li>
                    Respond to your inquiries, support requests, or business
                    proposals
                  </li>
                  <li>
                    Improve the performance and user experience of our Site
                  </li>
                  <li>Analyze website traffic and usage trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2>Payment Information</h2>
                <p>
                  If you make a purchase through our application, your payment
                  is processed by <strong>Stripe, Inc.</strong>, a third-party
                  payment processor. We do not store your credit card number or
                  full payment details on our servers. Stripe handles all
                  payment information in accordance with PCI-DSS (Payment Card
                  Industry Data Security Standard) requirements.
                </p>
                <p mt="2">
                  We may receive from Stripe limited information such as the
                  last four digits of your card, card type, expiration date,
                  billing address, and transaction history for record-keeping
                  and support purposes. For more information, please review{' '}
                  <a
                    className="font-semibold text-gray-darker hover:underline"
                    href="https://stripe.com/privacy"
                    rel="noopener noreferrer"
                    target="_blank">
                    Stripe&apos;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2>Sharing of Information</h2>
                <p>
                  We do not sell your personal information. We may share your
                  information with trusted third-party service providers (e.g.,
                  hosting providers, email services, payment processors) solely
                  for the purpose of operating our Site and conducting our
                  business. These parties are obligated to keep your information
                  confidential.
                </p>
              </div>

              <div>
                <h2>Data Security</h2>
                <p>
                  We implement reasonable security measures to maintain the
                  safety of your personal information. However, please be aware
                  that no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to protect
                  your data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2>Your Rights</h2>
                <p>
                  Depending on your location (e.g., GDPR for Europe, CCPA for
                  California), you may have specific rights regarding your
                  personal data, such as the right to access, correct, or delete
                  your data.
                </p>
                <p mt="2">
                  To exercise these rights, please contact us at the email
                  provided below.
                </p>
              </div>

              <div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>

                <ul list="disc" mt="4" pl="6" space-y="2">
                  <li>
                    By email:{' '}
                    <a
                      className="text-primary hover:underline font-semibold"
                      href="mailto:support@fmeatool.ai">
                      support@fmeatool.ai
                    </a>
                  </li>
                  <li>Company: Maudlin Works, LLC (Delaware, US)</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default PrivacyPolicy
