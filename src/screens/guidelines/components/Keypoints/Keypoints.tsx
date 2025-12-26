import Link from 'next/link'

type TocNode = {
  href: string
  label: string
  children: {
    id: string
    label: string
  }[]
}

const KEYPOINTS: TocNode[] = [
  {
    href: 'what-is-fmea',
    label: 'What is FMEA?',
    children: [
      {
        id: 'the-core-methodology',
        label: 'The Core Methodology: The Failure Chain'
      },
      {
        id: 'quantifying-risk',
        label: 'Quantifying Risk: S-O-D and Action Priority'
      },
      {
        id: 'design-fmea',
        label: 'Design FMEA (DFMEA): Robustness in Architecture'
      },
      { id: 'process-fmea', label: 'Process FMEA (PFMEA): Execution Integrit' }
    ]
  },

  {
    href: 'about-our-product-and-best-practices',
    label: 'About Our Product and Best Practices',
    children: [
      {
        id: 'agentic-workflow',
        label: 'An Agentic Workflow: The Virtual Engineering Team'
      },
      { id: 'best-practices', label: 'Best Practices: Optimizing Your Output' },
      {
        id: 'recommended-documents-by-fmea-type',
        label: 'Recommended Documents by FMEA Type'
      },
      { id: 'standards-output-usage', label: 'Standards, Output, and Usage' }
    ]
  }
]

const Keypoints = () => {
  return (
    <aside
      b="1 solid brand/10"
      bg="gray-lighter"
      flex="~ col shrink-0"
      p="x-2 y-6"
      position="sticky top-100px left-0"
      rounded="2xl"
      shadow="md"
      w="lg:300px full">
      <h2 mb="2" px="3" text="lg gray-darker">
        Keypoints
      </h2>

      <div flex="~ 1 col">
        {KEYPOINTS.map((section) => (
          <div key={section.href}>
            <Link
              b="none rounded-md"
              bg="transparent hover:brand/7"
              cursor="pointer"
              display="block"
              flex="~"
              font="500"
              href={`/guidelines/${section.href}#${'page-top'}`}
              p="y-1.5 x-3"
              text="left base gray-darker"
              w="full">
              {section.label}
            </Link>

            <div flex="~ col">
              {section.children.map((child) => (
                <Link
                  b="none rounded-md"
                  bg="transparent hover:brand/7"
                  cursor="pointer"
                  display="block"
                  flex="~"
                  font="300"
                  h="full"
                  href={`/guidelines/${section.href}#${child.id}`}
                  key={child.id}
                  line-height="19px"
                  p="y-1.5 x-6"
                  text="14px gray-dark hover:gray-darker"
                  w="full">
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Keypoints
