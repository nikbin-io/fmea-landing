const CoreConcepts = () => {
  return (
    <div>
      <h2 id="core-concepts" m="t-8 b-2" text="2xl font-semibold">
        Core Concepts
      </h2>
      <p m="b-4">
        Understanding core concepts helps unlock the value of the system. The
        following topics build a mental model that connects features with
        intended outcomes.
      </p>

      <h3 id="data-model" m="t-6 b-2" text="xl font-semibold">
        Data Model
      </h3>
      <p m="b-4">
        The data model represents how information is structured and related. It
        focuses on clarity and extensibility, favoring simple patterns that can
        evolve over time.
      </p>

      <h4 id="entities" m="t-4 b-2" text="lg font-semibold">
        Entities
      </h4>
      <p m="b-4">
        Entities capture the primary objects of interest. Each entity has
        attributes that describe it and relationships that connect it to other
        entities.
      </p>

      <h4 id="relationships" m="t-4 b-2" text="lg font-semibold">
        Relationships
      </h4>
      <p m="b-4">
        Relationships define how entities interact. Common patterns include
        one-to-many and many-to-many associations, which enable flexible
        modeling of real scenarios.
      </p>

      <h3 id="risk-scoring" m="t-6 b-2" text="xl font-semibold">
        Risk Scoring
      </h3>
      <p m="b-4">
        Risk scoring combines severity, occurrence, and detection into a single
        indicator. While the exact formulas can vary, the goal is to prioritize
        attention based on potential impact.
      </p>
    </div>
  )
}

export default CoreConcepts
