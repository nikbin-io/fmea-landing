const CoreConcepts = () => {
  return (
    <div
      className="[&_p]:text-base [&_p]:mb-4 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2"
      h="full">
      <h2 id="core-concepts" m="t-8 b-2" text="2xl font-semibold">
        Core Concepts
      </h2>
      <p>
        Understanding core concepts helps unlock the value of the system. The
        following topics build a mental model that connects features with
        intended outcomes.
      </p>

      <h3 id="data-model">Data Model</h3>
      <p>
        The data model represents how information is structured and related. It
        focuses on clarity and extensibility, favoring simple patterns that can
        evolve over time.
      </p>

      <h4>Entities</h4>

      <p>
        Entities capture the primary objects of interest. Each entity has
        attributes that describe it and relationships that connect it to other
        entities.
      </p>

      <h4>Relationships</h4>

      <p>
        Relationships define how entities interact. Common patterns include
        one-to-many and many-to-many associations, which enable flexible
        modeling of real scenarios.
      </p>

      <h3 id="risk-scoring">Risk Scoring</h3>

      <p>
        Risk scoring combines severity, occurrence, and detection into a single
        indicator. While the exact formulas can vary, the goal is to prioritize
        attention based on potential impact.
      </p>
    </div>
  )
}

export default CoreConcepts
