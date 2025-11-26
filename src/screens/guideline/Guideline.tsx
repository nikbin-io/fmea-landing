import Keypoints from './components/Keypoints'
import { Container } from '~/components'

const Guideline = () => {
  return (
    <div py="lg:40 30">
      <Container>
        <div flex="~" gap="20px" h="full" position="relative" w="full">
          <div>
            <Keypoints />
          </div>
          <div
            bg="gray-lighter"
            color="gray-dark"
            leading="relaxed"
            max-w="5xl"
            mx="auto"
            p="y-10 sm:x-10 x-4"
            rounded="2xl"
            shadow="xl">
            <h1 id="hello-world" text="4xl center font-bold">
              Guideline
            </h1>
            <div>
              <h2 id="introduction" m="t-8 b-2" text="2xl font-semibold">
                Introduction
              </h2>

              <p m="b-4">
                This is a long dummy documentation meant to showcase headings,
                subheadings, and scrolling behavior. It contains multiple
                sections and nested subsections so that the Keypoints component
                can generate a meaningful outline and enable smooth navigation
                across the content.
              </p>

              <h3 id="purpose" m="t-6 b-2" text="xl font-semibold">
                Purpose
              </h3>

              <p m="b-4">
                The purpose of this guide is to provide placeholder text and
                structure for a comprehensive document. It demonstrates
                consistent heading hierarchy, paragraph spacing, and section
                grouping for clarity.
              </p>

              <h3 id="scope" m="t-6 b-2" text="xl font-semibold">
                Scope
              </h3>

              <p m="b-4">
                The scope covers setup, concepts, workflows, best practices,
                examples, and appendices. Each section uses short, readable
                paragraphs to ensure the page is scrollable and easy to scan.
              </p>

              <h2 id="getting-started" m="t-8 b-2" text="2xl font-semibold">
                Getting Started
              </h2>

              <p m="b-4">
                This section helps readers start quickly with the basics. Follow
                the steps in order and read the notes to understand how the
                pieces fit together.
              </p>

              <h3 id="prerequisites" m="t-6 b-2" text="xl font-semibold">
                Prerequisites
              </h3>

              <p m="b-4">
                Ensure you have access to the required tools, permissions, and
                baseline knowledge. A modern browser and a willingness to
                explore are typically sufficient for this guide.
              </p>

              <h3 id="installation" m="t-6 b-2" text="xl font-semibold">
                Installation
              </h3>

              <p m="b-4">
                Installation steps would usually be listed here. Since this is a
                dummy document, imagine running a few commands and verifying the
                environment by opening the application and confirming it loads
                correctly.
              </p>

              <h3 id="first-run" m="t-6 b-2" text="xl font-semibold">
                First Run
              </h3>
              <p m="b-4">
                After setup, perform a first run to validate basic
                functionality. Navigate through the interface and confirm that
                navigation, layout, and sample data appear as expected.
              </p>

              <h2 id="core-concepts" m="t-8 b-2" text="2xl font-semibold">
                Core Concepts
              </h2>
              <p m="b-4">
                Understanding core concepts helps unlock the value of the
                system. The following topics build a mental model that connects
                features with intended outcomes.
              </p>

              <h3 id="data-model" m="t-6 b-2" text="xl font-semibold">
                Data Model
              </h3>
              <p m="b-4">
                The data model represents how information is structured and
                related. It focuses on clarity and extensibility, favoring
                simple patterns that can evolve over time.
              </p>

              <h4 id="entities" m="t-4 b-2" text="lg font-semibold">
                Entities
              </h4>
              <p m="b-4">
                Entities capture the primary objects of interest. Each entity
                has attributes that describe it and relationships that connect
                it to other entities.
              </p>

              <h4 id="relationships" m="t-4 b-2" text="lg font-semibold">
                Relationships
              </h4>
              <p m="b-4">
                Relationships define how entities interact. Common patterns
                include one-to-many and many-to-many associations, which enable
                flexible modeling of real scenarios.
              </p>

              <h3 id="risk-scoring" m="t-6 b-2" text="xl font-semibold">
                Risk Scoring
              </h3>
              <p m="b-4">
                Risk scoring combines severity, occurrence, and detection into a
                single indicator. While the exact formulas can vary, the goal is
                to prioritize attention based on potential impact.
              </p>

              <h2 id="workflow" m="t-8 b-2" text="2xl font-semibold">
                Workflow
              </h2>
              <p m="b-4">
                A consistent workflow ensures repeatability and quality. The
                steps below outline a typical process from initial planning to
                review and refinement.
              </p>

              <h3 id="create-a-project" m="t-6 b-2" text="xl font-semibold">
                Create a Project
              </h3>
              <p m="b-4">
                Start by creating a new project and defining its scope. Provide
                a concise description and identify key stakeholders to ensure
                alignment from the beginning.
              </p>

              <h3 id="define-functions" m="t-6 b-2" text="xl font-semibold">
                Define Functions
              </h3>
              <p m="b-4">
                Break the system into functions and subfunctions. This
                decomposition reveals potential failure points and clarifies
                responsibilities across the architecture.
              </p>

              <h3
                id="analyze-failure-modes"
                m="t-6 b-2"
                text="xl font-semibold">
                Analyze Failure Modes
              </h3>
              <p m="b-4">
                Enumerate failure modes, their causes, and effects. Use
                qualitative or quantitative methods to evaluate risks and
                propose mitigations that are practical and measurable.
              </p>

              <h2 id="best-practices" m="t-8 b-2" text="2xl font-semibold">
                Best Practices
              </h2>
              <p m="b-4">
                Follow these practices to improve consistency and outcomes. They
                reflect lessons learned and common patterns that scale across
                teams and projects.
              </p>

              <h3 id="naming-and-structure" m="t-6 b-2" text="xl font-semibold">
                Naming and Structure
              </h3>
              <p m="b-4">
                Choose clear, descriptive names for entities, fields, and
                components. Organize content logically so that new contributors
                can onboard quickly and navigate with confidence.
              </p>

              <h3 id="reviews-and-audits" m="t-6 b-2" text="xl font-semibold">
                Reviews and Audits
              </h3>
              <p m="b-4">
                Schedule periodic reviews to verify assumptions and decisions.
                Audits help surface gaps early and maintain a steady pace of
                iterative improvement.
              </p>

              <h2 id="examples" m="t-8 b-2" text="2xl font-semibold">
                Examples
              </h2>
              <p m="b-4">
                Examples provide concrete illustrations of the ideas presented.
                Start with a simple scenario and then explore a more advanced
                case to see how concepts adapt to complexity.
              </p>

              <h3 id="simple-example" m="t-6 b-2" text="xl font-semibold">
                Simple Example
              </h3>
              <p m="b-4">
                In a simple example, a small set of entities interact in
                predictable ways. The focus is on clarity of purpose and
                verifying the end-to-end flow without extraneous detail.
              </p>

              <h3 id="advanced-example" m="t-6 b-2" text="xl font-semibold">
                Advanced Example
              </h3>
              <p m="b-4">
                An advanced example introduces additional entities, conditional
                logic, and edge cases. It demonstrates how to maintain
                readability while handling richer requirements.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Guideline
