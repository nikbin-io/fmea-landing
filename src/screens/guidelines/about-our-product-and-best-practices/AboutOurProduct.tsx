import Wrapper from '../components/Wrapper'

const AboutOurProduct = () => {
  return (
    <Wrapper>
      <div h="full">
        <h2
          id="page-top"
          m="b-2"
          scroll-m="lg:t-180px t-120px"
          text="2xl font-semibold">
          About Our Product and Best Practices
        </h2>

        <p>
          Conducting a high-quality FMEA has historically presented a difficult
          trade-off between depth and speed. Engineers often face the choice of
          spending weeks meticulously building failure chains or rushing the
          process to meet deadlines, potentially leaving risks undiscovered.
        </p>

        <p>
          Our application is designed to resolve this tension. By leveraging
          advanced generative AI within a specialized engineering framework, we
          automate the heavy lifting of structure creation, failure mode
          identification, and risk mapping with delivering a comprehensive
          analysis in a single click.
        </p>

        <h3 id="agentic-workflow" scroll-m="lg:t-150px t-120px">
          An Agentic Workflow: The Virtual Engineering Team
        </h3>

        <p>
          Unlike standard AI tools that simply &quot;predict text,&quot; our
          application utilizes an Agentic Workflow. This means the AI simulates
          a cross-functional team of experts working in sequence, rather than a
          single entity trying to do everything at once.
        </p>

        <p>
          Instead of generating a flat list of risks, the system employs a
          multi-stage process with built-in Quality Gates. It deconstructs your
          documents to understand the system architecture, generates logical
          failure chains, and rigorously self-corrects against engineering
          standards before the output is ever presented to you. This internal
          review process allows the tool to generate up to 200 distinct failure
          modes in a single run with a level of technical depth that mirrors a
          human-led workshop.
        </p>

        <h3 id="best-practices" scroll-m="lg:t-150px t-120px">
          Best Practices: Optimizing Your Output
        </h3>

        <p>
          The quality of the FMEA output is directly proportional to the quality
          and context of the documents you upload. The AI does grounds its
          analysis in the files you provide.
        </p>

        <h4 text="18px">The Power of PDF</h4>

        <p>
          The application supports a wide range of file formats (PDF,CSV, TXT,
          XLSX, Image). However, to get the best results,{' '}
          <span font="bold">
            we strongly recommend uploading documents in PDF format.
          </span>
        </p>

        <p>
          Modern Generative AI models possess{' '}
          <span font="bold">multimodal visual capabilities.</span>
          This means they do not just read the text; they &quot;see&quot; the
          document. By using PDFs, the AI can interpret visual data such as:
        </p>

        <ul list="disc" space="y-2">
          <li>
            <span font="bold">Block & Boundary Diagrams: </span>
            Understanding system interfaces physically rather than just
            textually.
          </li>

          <li>
            <span font="bold">Schematics & Drawings: </span>
            Analyzing geometry and connections.
          </li>
        </ul>

        <p>
          <span font="bold"> Capacity Limit:</span>
          To maintain deep analytical reasoning without losing context, the tool
          currently accepts up to <span>100,000</span> tokens (approximately
          300-400 pages of standard technical documentation) per analysis run.
        </p>

        <h3
          id="recommended-documents-by-fmea-type"
          scroll-m="lg:t-150px t-120px">
          Recommended Documents by FMEA Type
        </h3>

        <h4 text="18px">For Design FMEA (DFMEA)</h4>

        <p>
          Focus on documents that define boundaries, interfaces, and physics:
        </p>

        <ul list="disc" space="y-2">
          <li>
            <span font="bold">Requirements Specifications: </span>
            To define the &quot;Ideal Function.&quot;
          </li>

          <li>
            <span font="bold">Design Description Documents: </span>
            To understand the technical details.
          </li>

          <li>
            <span font="bold">Architecture & Block Diagrams: </span>
            To establish system boundaries and interfaces.
          </li>

          <li>
            <span font="bold">Bill of Materials (BOM): </span>
            To ensure detailed coverage.
          </li>

          <li>
            <span font="bold">Validation Plans: </span>
            To ground &quot;Detection Controls&quot; in reality.
          </li>
        </ul>

        <h4 text="18px">For Process FMEA (PFMEA)</h4>

        <p>
          PFMEA requires specific documentation to link the manufacturing steps
          back to the product design:{' '}
        </p>

        <ul list="disc" space="y-2">
          <li>
            <span font="bold">Process Flow Diagrams (PFD):</span> Essential for
            defining the structure and sequence of operations.
          </li>

          <li>
            <span font="bold">Design FMEA (DFMEA):</span> Critical for linking
            Process Steps to Product Characteristics and defining the Severity
            of effects on the End User.
          </li>

          <li>
            <span font="bold">Engineering Drawings / Specs:</span> To identify
            tolerances and Special Characteristics (SC/CC).
          </li>

          <li>
            <span font="bold">Control Plans:</span> To provide evidence for
            current Prevention and Detection controls.
          </li>
          <li>
            <span font="bold">Lessons Learned / History:</span> Scrap reports
            and customer complaints help the AI prioritize known high-risk
            areas.
          </li>
        </ul>

        <h3 id="standards-output-usage" scroll-m="lg:t-150px t-120px">
          Standards, Output, and Usage
        </h3>

        <h4 text="18px">De Facto Standardization</h4>

        <p>
          The generated analysis is exported directly into an{' '}
          <span font="bold">AIAG & VDA compliant Excel template</span>. While
          this standard originated in the automotive sector, its rigorous 7-Step
          approach and Action Priority (AP) logic have made it the de facto
          standard for technical risk assessment across Aerospace, Medical
          Devices, and high-tech industries. Using this format ensures your risk
          analysis is structured and logical.
        </p>

        <h4 text="18px">Interpreting the Results</h4>

        <p>
          The AI generates a &quot;Draft FMEA,&quot; intended to accelerate the
          engineering workload, not replace it.
        </p>

        <ul list="disc" space="y-2">
          <li>
            <span font="bold">Evidence-Based Controls:</span> The AI searches
            your uploaded documents (such as Test Plans or Design Standards) to
            find actual proof for &quot;Current Prevention&quot; and
            &quot;Current Detection&quot; controls. Check the
            <span font="bold"> &apos;Remarks&apos;</span> column in the Excel
            output to see the specific source document and logic used. This
            ensures the controls are grounded in your documentation.
          </li>

          <li>
            <span font="bold">Optimization Actions:</span> The fields for{' '}
            Preventive Actions and Detection Actions are filled with{' '}
            <span font="bold">suggestions</span> based on the identified failure
            causes. These should be reviewed by the engineering team to
            determine relevancy, feasibility, and cost-effectiveness.
          </li>

          <li>
            <span font="bold">Administrative Fields:</span> Fields such as{' '}
            Responsible Person, Target Completion Date, and Status are
            intentionally left blank. These are project management variables
            that must be assigned by the human team.
          </li>
        </ul>

        <h4 text="18px">Important: The Human in the Loop</h4>

        <p>
          This application uses advanced self-correction and quality checks to
          generate high-quality draft analyses. As with any AI-assisted tool, it
          may occasionally miss edge cases or interpret complex technical
          nuances differently than intended.
        </p>

        <p>
          The generated output should be considered a strong engineering draft
          rather than a finalized, fully compliant FMEA. A human review by
          qualified subject matter experts is required to validate, refine, and
          align the analysis with the final product or process design.
        </p>
      </div>
    </Wrapper>
  )
}

export default AboutOurProduct
