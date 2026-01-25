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
          process to meet deadlines, potentially leaving important risks
          undiscovered.
        </p>

        <p>
          Our application is designed to resolve this tension. By leveraging
          advanced generative AI within a specialized engineering framework, we
          automate the heavy lifting of structure creation, failure mode
          identification, and risk mapping, delivering a comprehensive analysis
          in a single run.
        </p>

        <h3 id="agentic-workflow" scroll-m="lg:t-150px t-120px">
          An Agentic Workflow: The Virtual Engineering Team
        </h3>

        <p>
          Unlike standard AI tools that simply &quot;predict text,&quot; our
          application utilizes an <span font="bold">agentic workflow</span>.
          This means the AI simulates a cross-functional team of experts working
          in collaboration, rather than a single entity attempting to perform
          all tasks at once.
        </p>

        <p>
          Instead of generating a flat list of risks, the system employs a
          multi-stage process with built-in{' '}
          <span font="bold">quality gates</span>. It deconstructs your documents
          to understand system architecture, generates logical failure chains,
          and rigorously self-corrects against engineering standards before the
          output is presented.
        </p>

        <p>
          This approach enables the system to generate{' '}
          <span font="bold">up to 200 </span>technically distinct, logically
          consistent failure modes in a single run, with a depth that mirrors a
          facilitated engineering workshop.
        </p>

        <h3 id="best-practices" scroll-m="lg:t-150px t-120px">
          Best Practices: Optimizing Your Output
        </h3>

        <p>
          The quality of the generated FMEA is directly proportional to the
          quality, clarity, and relevance of the documents you provide. The AI
          does not invent technical knowledge; it{' '}
          <span font="bold">grounds</span> its analysis strictly in your inputs.
        </p>

        <h4 text="18px">File Formats</h4>

        <p>
          The application supports PDF, CSV, TXT, XLSX, and image files.
          However, <span font="bold">PDF</span> format is strongly recommended.
        </p>

        <p>
          Modern multimodal AI models do not only read text, but they also
          interpret visual structure. PDFs allow the system to extract
          information from:
        </p>

        <ul list="disc" space="y-2">
          <li>Block and boundary diagrams</li>

          <li>Schematics and drawings</li>

          <li>Tables, callouts, and annotations</li>

          <li>Page structure and hierarchy</li>
        </ul>

        <p>
          This visual understanding significantly improves system decomposition,
          interface identification, and functional accuracy.
        </p>

        <h4 text="18px">Capacity Limit</h4>

        <p>
          To preserve deep contextual reasoning, each analysis run currently
          supports up to <span font="bold">100,000 tokens</span>, equivalent to
          <span font="bold"> approximately 300-400 pages</span> of typical
          technical documentation.{' '}
        </p>

        <p>
          Uploading fewer, higher-quality, and well-structured documents usually
          produces better results than uploading many loosely related files.
        </p>

        <h3
          id="recommended-documents-by-fmea-type"
          scroll-m="lg:t-150px t-120px">
          Recommended Documents by FMEA Type
        </h3>

        <h4 text="18px">For Design FMEA (DFMEA)</h4>

        <p>
          Focus on documents that define system behaviour, boundaries, and
          physics:
        </p>

        <ul list="disc" space="y-2">
          <li>Requirements specifications</li>

          <li>Architecture and block diagrams</li>

          <li>Design descriptions and schematics</li>

          <li>Interface definitions</li>

          <li>Bill of Materials (BOM)</li>

          <li>Validation and verification plans</li>
        </ul>

        <p>
          These documents allow the AI to ground functions, interfaces,
          prevention controls, and detection logic in objective design intent.
        </p>

        <h4 text="18px">For Process FMEA (PFMEA)</h4>

        <p>
          PFMEA requires documentation that connects manufacturing execution to
          product characteristics:
        </p>

        <ul list="disc" space="y-2">
          <li>Process flow diagrams</li>
          <li>Work instructions and SOPs</li>
          <li>Control plans</li>
          <li>Engineering drawings and tolerances</li>
          <li>Design FMEA (for severity linkage)</li>
          <li>Scrap history, deviations, and lessons learned</li>
        </ul>

        <p>
          This enables accurate 4M analysis and realistic prevention and
          detection control identification.
        </p>

        <h3 id="output" scroll-m="lg:t-150px t-120px">
          Output
        </h3>

        <h4 text="18px">Standards Alignment</h4>

        <p>
          All outputs are delivered in an
          <span font="bold"> AIAG & VDA aligned Excel structure</span> using the
          harmonized 7-Step approach and Action Priority logic.
        </p>

        <p>
          While originally developed for automotive applications, this
          methodology has become the de facto standard for technical risk
          analysis across aerospace, medical, industrial, and high-reliability
          industries.
        </p>

        <p>
          Using this structure ensures that your FMEA remains review-ready,
          auditable, and logically <span font="bold">consistent</span>.
        </p>

        <h4 text="18px">How to Interpret the Results</h4>

        <p>The generated output is a complete, structured FMEA draft.</p>

        <p>Each row represents a full failure chain, connecting:</p>

        <ul list="disc" space="y-2">
          <li>Structure (system or process hierarchy)</li>

          <li>Functions and requirements</li>

          <li>Failure Causes → Failure Modes → Failure Effects</li>

          <li>Current controls</li>

          <li>Risk ratings and Action Priority</li>

          <li>Recommended optimization actions</li>
        </ul>

        <p>
          The application generates approximately the requested number of
          technically distinct failure modes, distributed across the system or
          process structure to ensure broad and balanced coverage.
        </p>

        <p>
          The output should be treated as a{' '}
          <span font="bold">high-quality engineering draft</span>, intended to
          accelerate structured FMEA development rather than replace
          professional judgment.
        </p>

        <h4 text="18px">Evidence-Based Controls</h4>

        <p>
          The AI searches your uploaded documents to locate objective support
          for:
        </p>

        <ul list="disc" space="y-2">
          <li>Current Prevention Controls</li>

          <li>Current Detection Controls</li>
        </ul>

        <p>
          The Remarks column explicitly shows the source and reasoning used.
          This allows rapid validation and easy identification of assumptions or
          gaps.
        </p>

        <h4 text="18px">Optimization Actions</h4>

        <p>
          Preventive and detection actions are generated as engineering
          suggestions based on the failure physics. These should be reviewed and
          adjusted by the engineering team to confirm:
        </p>

        <ul list="disc" space="y-2">
          <li>Technical feasibility</li>

          <li>Economic justification</li>

          <li>Organizational applicability</li>
        </ul>

        <h4 text="18px">Administrative Fields</h4>

        <p>
          Project management fields (responsibility, dates, status) are
          intentionally left blank. These must be assigned through your internal
          processes.
        </p>

        <h4 text="18px">The Human in the Loop</h4>

        <p>
          This application applies advanced self-review logic and quality gates
          to produce a disciplined FMEA draft. However, no automated system can
          fully replace engineering judgment.
        </p>

        <p>The output should always be:</p>

        <ul list="disc" space="y-2">
          <li>Reviewed by qualified subject matter experts</li>

          <li>Adjusted to reflect final design and process intent</li>

          <li>Approved through your standard FMEA governance process</li>
        </ul>

        <h3 id="practical-tips" scroll-m="lg:t-150px t-120px">
          Practical Tips for Efficient Use
        </h3>

        <h4 text="18px">Simplicity of Use</h4>

        <p>
          The application is intentionally designed to remain simple and
          focused. A typical workflow consists of only four steps:
        </p>

        <ul list="decimal" space="y-2">
          <li>Select the FMEA type (DFMEA or PFMEA).</li>

          <li>Upload the relevant technical documents.</li>

          <li>Define the desired number of failure modes.</li>

          <li>
            Click <span font="bold">Run FMEA Analysis</span>.
          </li>
        </ul>

        <p>No additional configuration is required.</p>

        <h4 text="18px">Selecting the Number of Failure Modes</h4>

        <p>
          The requested number of failure modes is the primary cost and
          computation driver.
        </p>

        <p>
          The value is adjustable up to{' '}
          <span font="bold">200 failure modes</span> and should be selected
          based on:
        </p>

        <ul list="disc" space="y-2">
          <li>System or process complexity</li>

          <li>Level of decomposition required</li>

          <li>Project phase and risk exposure</li>
        </ul>

        <p>
          For early concept phases, fewer failure modes may be sufficient. For
          detailed design or manufacturing release, higher values are usually
          justified.
        </p>

        <h4 text="18px">Document Format and Token Usage</h4>

        <p>
          Whenever possible, <span font="bold">PDF format should be used</span>.
          PDF files preserve layout, diagrams, tables, and hierarchy, which
          significantly improves system understanding.
        </p>

        <p>
          The application supports up to{' '}
          <span font="bold">100,000 tokens per analysis run</span>, which is
          sufficient for most real-world projects. Token usage per document is
          visible to the user.
        </p>

        <p>
          If the <span font="bold">token</span> limit is approached, users can:
        </p>

        <ul list="disc" space="y-2">
          <li>Remove less relevant documents</li>

          <li>Shorten repetitive or administrative content</li>

          <li>Replace low-value files with higher-quality technical sources</li>
        </ul>

        <p>
          This allows users to optimize input quality without sacrificing
          essential information.
        </p>

        <h4 text="18px">Analysis Duration</h4>

        <p>FMEA generation time depends on:</p>

        <ul list="disc" space="y-2">
          <li>Total document volume</li>

          <li>Document complexity</li>

          <li>Requested number of failure modes</li>
        </ul>

        <p>
          In large analyses, generation can take{' '}
          <span font="bold">up to one hour</span>. This reflects the multi-stage
          reasoning and internal quality review process applied during analysis.
        </p>

        <h4 text="18px">Credit Usage Policy</h4>

        <p>
          Credits are charged only when the delivered Excel file contains{' '}
          <span font="bold">more than 75% of the requested failure modes</span>.
        </p>

        <p>
          If the system generates{' '}
          <span font="bold">more complete FMEA entries than requested</span>, no
          additional credits are charged.
        </p>

        <p>
          This ensures that users only pay for usable, complete engineering
          output.
        </p>

        <h4 text="18px">Importance of Document Quality</h4>
        <p>
          Document quality is the single most important factor influencing FMEA
          quality.
        </p>
        <p>
          Clear, structured, technically meaningful documents lead directly to:
        </p>

        <ul list="disc" space="y-2">
          <li>Better failure chain logic</li>

          <li>More realistic controls</li>

          <li>More accurate ratings</li>

          <li>More practical optimization actions</li>
        </ul>

        <p>
          Poor, incomplete, or inconsistent documentation will limit output
          quality regardless of AI capability.
        </p>

        <h4 text="18px">Support and Feedback</h4>

        <p>
          If you have questions, require guidance, or wish to share feedback,
          your input is always welcome and our team is available to support you.
        </p>
      </div>
    </Wrapper>
  )
}

export default AboutOurProduct
