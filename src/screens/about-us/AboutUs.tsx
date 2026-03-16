import { Container, SeoHead, ContactBanner } from '~/components'

const AboutUs = () => {
  return (
    <>
      <SeoHead
        canonical="https://fmeatool.ai/about-us"
        description="FMEA Tool combines AI efficiency with established FMEA methodologies to automate risk analysis for quality engineers."
        title="About Us | FMEA Tool"
      />

      <div py="lg:40 30">
        <Container>
          <div
            bg="gray-lighter"
            leading="relaxed"
            max-w="5xl"
            mb="20"
            mx="auto"
            p="y-10 sm:x-10 x-4"
            rounded="2xl"
            shadow="xl"
            text="sm:base sm">
            <div mb="12" text="center">
              <h1
                color="gray-darker"
                font="bold"
                mb="4"
                text="3xl sm:5xl"
                tracking="tight">
                About Us
              </h1>

              <p max-w="2xl" mx="auto" text="lg gray-dark">
                Bridging AI efficiency with industry standards
              </p>
            </div>

            <div
              className="[&_h2]:color-gray-darker [&_h2]:font-semibold [&_h2]:mb-4 [&_h2]:text-xl sm:3xl"
              color="gray-dark"
              space-y="8">
              <div>
                <h2>Who We Are</h2>
                <p>
                  FMEA Tool is developed by{' '}
                  <a
                    className="font-semibold text-gray-darker hover:underline"
                    href="https://maudlinworks.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    Maudlin Works, LLC
                  </a>
                  , a software company focused on building practical digital
                  solutions. We combine domain expertise with modern technology
                  to create tools that solve real problems for professionals.
                </p>
              </div>

              <div>
                <h2>Our Mission</h2>
                <p>
                  Traditional FMEA development is resource-intensive, requiring
                  specialized expertise and significant manual effort while
                  often producing inconsistent documentation. FMEA Tool
                  addresses this challenge by automating the structured analysis
                  process without compromising on industry rigor or compliance
                  requirements.
                </p>
                <p mt="4">
                  Our platform enables quality engineers to focus on risk
                  identification and process improvement rather than manual
                  documentation tasks, combining AI efficiency with established
                  FMEA methodologies.
                </p>
              </div>

              <div>
                <h2>Our Approach</h2>
                <p>
                  FMEA Tool is developed by a team of Quality Assurance
                  engineers and AI specialists. This combination ensures that
                  our outputs meet industry standards like AIAG & VDA while
                  leveraging the latest advances in AI technology.
                </p>
                <ul list="disc" mt="4" pl="6" space-y="2">
                  <li>
                    <span font="semibold">Industry Compliance:</span> Our
                    outputs follow established DFMEA and PFMEA conventions
                  </li>
                  <li>
                    <span font="semibold">Agentic Workflow:</span> Built-in
                    quality gates ensure logical consistency
                  </li>
                </ul>
              </div>

              <div>
                <h2>Other Products</h2>
                <p>
                  FMEA Tool is part of our portfolio of specialized SaaS
                  products. We also build:
                </p>
                <ul list="disc" mt="4" pl="6" space-y="2">
                  <li>
                    <a
                      className="font-semibold text-gray-darker hover:underline"
                      href="https://erisascout.com"
                      rel="noopener noreferrer"
                      target="_blank">
                      ERISA Scout
                    </a>{' '}
                    — A platform that transforms Form 5500 filings into
                    actionable leads for financial advisors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>

        <ContactBanner />
      </div>
    </>
  )
}

export default AboutUs
