import { Container, SeoHead } from '~/components'

const CookiePolicy = () => {
  return (
    <>
      <SeoHead
        description="Read our cookie policy to understand how Maudlin Works, LLC uses cookies on fmeatool.ai."
        title="Cookie Policy | FMEA Tool"
      />

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
                Cookie Policy
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
                  This Cookie Policy explains how{' '}
                  <strong>Maudlin Works, LLC</strong> (&quot;we&quot;,
                  &quot;us&quot;, and &quot;our&quot;) uses cookies and similar
                  technologies to recognize you when you visit our website at{' '}
                  <strong>fmeatool.ai</strong>. It explains what these
                  technologies are and why we use them, as well as your rights
                  to control our use of them.
                </p>
              </div>

              <div>
                <h2>What are Cookies?</h2>
                <p>
                  Cookies are small data files that are placed on your computer
                  or mobile device when you visit a website. They are widely
                  used by website owners in order to make their websites work,
                  or to work more efficiently, as well as to provide reporting
                  information.
                </p>
              </div>

              <div>
                <h2>How We Use Cookies</h2>
                <p mb="4">
                  We use cookies for several reasons. Some cookies are required
                  for technical reasons in order for our Website to operate, and
                  we refer to these as &quot;essential&quot; or &quot;strictly
                  necessary&quot; cookies. Other cookies enable us to track and
                  target the interests of our users to enhance the experience on
                  our Website.
                </p>

                <ul list="disc" mt="2" pl="6" space-y="2">
                  <li>
                    <strong font="semibold">Essential Cookies:</strong> These
                    are necessary for the Site to function properly and cannot
                    be switched off in our systems.
                  </li>

                  <li>
                    <strong font="semibold">Analytics Cookies:</strong> We use
                    these cookies (e.g., Google Analytics) to help us understand
                    how visitors interact with the Site by collecting and
                    reporting information anonymously.
                  </li>
                </ul>
              </div>

              <div>
                <h2>Your Choices</h2>
                <p>
                  You have the right to decide whether to accept or reject
                  cookies. You can set or amend your web browser controls to
                  accept or refuse cookies. If you choose to reject cookies, you
                  may still use our website though your access to some
                  functionality and areas of our website may be restricted.
                </p>
              </div>

              <div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or other
                  technologies, please email us:
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
                  <li>Company: Maudlin Works, LLC</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CookiePolicy
