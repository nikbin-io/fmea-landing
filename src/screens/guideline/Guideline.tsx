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
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Guideline
