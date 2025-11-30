import Link from 'next/link'

type TocNode = {
  href: string
  label: string
  children: {
    id: string
    label: string
  }[]
}

export const KEYPOINTS: TocNode[] = [
  {
    href: 'introduction',
    label: 'Introduction',
    children: [
      { id: 'purpose', label: 'Purpose' },
      { id: 'scope', label: 'Scope' },
      { id: 'models', label: 'Models' }
    ]
  },

  {
    href: 'core-concepts',
    label: 'Core Concepts',
    children: [
      { id: 'data-model', label: 'Data Model' },
      { id: 'risk-scoring', label: 'Risk Scoring' }
    ]
  }
]

const Keypoints = () => {
  return (
    <aside
      bg="gray-light"
      flex="~ col shrink-0"
      p="x-2 y-6"
      position="sticky top-100px left-0"
      rounded="2xl"
      w="lg:250px full">
      <h2 mb="2" px="2" text="lg gray-darker">
        Keypoints
      </h2>

      <div flex="~ 1 col">
        <ul list="none">
          {KEYPOINTS.map((section) => (
            <li key={section.href}>
              <Link
                b="none rounded-md"
                bg="transparent hover:gray-lighter"
                cursor="pointer"
                display="block"
                font="500"
                href={`/guidelines/${section.href}#${'page-top'}`}
                p="y-1 x-3"
                text="left base gray-darker"
                w="full">
                {section.label}
              </Link>

              <div m="l-3">
                <ul list="none">
                  {section.children.map((child) => (
                    <li key={child.id} m="y-1">
                      <Link
                        b="none rounded-md"
                        bg="transparent hover:gray-lighter"
                        cursor="pointer"
                        display="block"
                        font="300"
                        href={`/guidelines/${section.href}#${child.id}`}
                        p="y-1 x-3"
                        text="left base gray-dark hover:gray-darker"
                        w="full">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Keypoints
