import Wrapper from '../components/Wrapper'

const WhatIsFmea = () => {
  return (
    <Wrapper>
      <div h="full">
        <h2
          id="page-top"
          m="b-2"
          scroll-m="lg:t-180px t-120px"
          text="2xl font-semibold">
          What is FMEA?
        </h2>

        <p>
          Failure Mode and Effects Analysis (FMEA) is a systematic, analytical
          methodology used to identify potential technical risks within a
          product or process design, assess their impact, and prioritize
          mitigation strategies. Unlike reactive quality control measures that
          detect defects after they occur, FMEA is a proactive engineering
          discipline designed to eliminate failure mechanisms during the
          development phase.
        </p>

        <p>
          At its core, FMEA is not merely a documentation exercise; it is a
          logic-driven framework that connects physical structures and functions
          to potential failures. By rigorously mapping these relationships,
          engineering teams can predict system behavior and validate designs
          before physical prototypes are built or production lines are
          commissioned.
        </p>

        <h3 id="the-core-methodology" scroll-m="lg:t-150px t-120px">
          The Core Methodology: The Failure Chain
        </h3>

        <p>
          The heart of an effective FMEA is the{' '}
          <span font="bold">Failure Chain.</span> Rather than listing isolated
          defects, the methodology requires establishing a logical causality
          link between three distinct technical elements:
        </p>

        <ul list="decimal" space="y-2">
          <li>
            <span font="bold"> Failure Cause: </span>
            The underlying physical or chemical mechanism at the component level
            (e.g., dielectric breakdown due to overvoltage, fatigue crack
            initiation, or software integer overflow). A valid cause is rooted
            in the physics of failure, not generic descriptions like &quot;part
            broken.&quot;
          </li>

          <li>
            <span font="bold">Failure Mode: </span>
            The specific manner in which the item fails to meet its intended
            function or requirement (e.g., solenoid valve fails to open, sensor
            signal drift outside tolerance).
          </li>
          <li>
            <span font="bold"> Failure Effect: </span>
            The consequence of that failure mode propagating up to the system
            level, the end-user, or regulatory compliance (e.g., loss of
            steering assist, thermal runaway, or vehicle fails emissions test).
          </li>
        </ul>

        <h3 id="quantifying-risk" scroll-m="lg:t-150px t-120px">
          Quantifying Risk: S-O-D and Action Priority
        </h3>

        <p>
          To transition from qualitative analysis to quantitative risk
          management, FMEA assigns ratings to three variables:
        </p>

        <ul list="disc" space="y-2">
          <li>
            <span font="bold">Severity (S): </span>
            The significance of the Failure Effect on the end-user or safety.
            High severity indicates safety hazards or regulatory non-compliance.
          </li>

          <li>
            <span font="bold">Occurrence (O): </span>
            The likelihood that the Failure Cause will occur. This rating is
            heavily influenced by <span font="bold">Prevention Controls</span>.
            Proven design standards, margins of safety, or derating strategies
            that design the failure out.
          </li>

          <li>
            <span font="bold">Detection (D): </span>
            The ability of <span font="bold">Detection Controls</span>{' '}
            (validation testing, simulation, or inspection) to catch the failure
            before the product leaves the development or manufacturing phase.
          </li>
        </ul>

        <p>
          Modern standards, such as the AIAG & VDA harmonization, utilize{' '}
          <span font="bold">Action Priority (AP)</span> logic. Rather than
          simply multiplying these numbers (RPN), AP logic prioritizes risks
          based on a weighted assessment of Severity first, then Occurrence, and
          finally Detection, ensuring that safety-critical high-severity risks
          are never masked by high detection capabilities.
        </p>

        <h3 id="design-fmea" scroll-m="lg:t-150px t-120px">
          Design FMEA (DFMEA): Robustness in Architecture
        </h3>

        <p>
          Design FMEA focuses on the product architecture and the physics of the
          design. It analyzes systems, subsystems, and components to ensure the
          design is robust against physical limits, environmental stressors, and
          interface loads.
        </p>

        <p>
          In a DFMEA, the assumption is that the product will be manufactured
          perfectly to specification; the risk lies in the design itself. Key
          aspects include:
        </p>

        <ul list="disc" space="y-2">
          <li>
            <span font="bold">Structure and Interfaces: </span>
            The analysis begins by defining the system boundaries and
            identifying interfaces (Physical, Energy, Information, or Material
            flow). Many failures occur not within a component, but at the
            interface between them.
          </li>

          <li>
            <span font="bold">Functional Requirements: </span>
            Every failure mode is essentially the negation of a specific
            functional requirement. If a requirement states &quot;Housing must
            seal against water ingress at 5 bar,&quot; the failure mode is
            &quot;Housing leaks.&quot;
          </li>

          <li>
            <span font="bold"> P-Diagram (Parameter Diagram) Thinking: </span>A
            robust DFMEA considers &quot;Noise Factors&quot;, environmental
            conditions (heat, vibration), customer usage profiles, and system
            interactions that might interfere with the intended function.
          </li>
        </ul>

        <p>
          The goal of DFMEA is to drive <span font="bold">Optimization:</span>{' '}
          implementing tangible design changes (e.g., geometry updates, material
          changes, redundancy) or enhanced validation plans to mitigate risk
          before design freeze.
        </p>

        <h3 id="process-fmea" scroll-m="lg:t-150px t-120px">
          Process FMEA (PFMEA): Execution Integrity
        </h3>

        <p>
          While DFMEA ensures the design is sound, Process FMEA (PFMEA) ensures
          the design can be reproduced consistently. It assumes the design is
          fixed and analyzes how the manufacturing or assembly process might
          compromise the product quality.
        </p>

        <p>
          PFMEA examines the &quot;4M&quot; elements;{' '}
          <span font="bold">
            Man, Machine, Material, and Method/Environment
          </span>
          . It looks at each process step to determine how execution errors
          (e.g., insufficient torque applied, wrong part installed,
          contamination during sealing) could prevent the final product from
          meeting design specifications.
        </p>

        <p>
          Process FMEA drives improvements in manufacturing controls, such as
          error-proofing (poka-yoke) devices, automated optical inspection, or
          statistical process control (SPC) to prevent non-conforming parts from
          escaping the facility.
        </p>
      </div>
    </Wrapper>
  )
}

export default WhatIsFmea
