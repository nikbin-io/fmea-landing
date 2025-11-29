import { useRouter } from 'next/router'

export type TocNode = { id: string; label: string; children?: TocNode[] }

export const tocData: TocNode[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    children: [
      { id: 'purpose', label: 'Purpose' },
      { id: 'scope', label: 'Scope' },
      { id: 'models', label: 'Models' }
    ]
  },

  {
    id: 'core-concepts',
    label: 'Core Concepts',
    children: [
      { id: 'data-model', label: 'Data Model' },
      { id: 'risk-scoring', label: 'Risk Scoring' }
    ]
  }
]

const Keypoints = () => {
  const router = useRouter()

  const handleNavigation = (id: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, id }
      },
      undefined,
      { shallow: true }
    )
  }

  const renderToc = () => (
    <ul list="none">
      {tocData.map((section) => (
        <li key={section.id}>
          <button
            b="none rounded-md"
            bg="transparent hover:gray-lighter"
            cursor="pointer"
            font="500"
            p="y-1 x-3"
            text="left base gray-darker"
            w="full"
            onClick={() => handleNavigation(section.id)}>
            {section.label}
          </button>
          {section.children && section.children.length > 0 && (
            <div m="l-3">
              <ul list="none">
                {section.children.map((child) => (
                  <li key={child.id} m="y-1">
                    <button
                      b="none rounded-md"
                      bg="transparent hover:gray-lighter"
                      cursor="pointer"
                      font="300"
                      p="y-1 x-3"
                      text="left base gray-dark hover:gray-darker"
                      w="full"
                      onClick={() => handleNavigation(child.id)}>
                      {child.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <aside
      bg="gray-light"
      flex="~ col shrink-0"
      p="x-2 y-6"
      position="sticky top-100px right-0"
      rounded="2xl"
      transition="all duration-200"
      w="250px">
      <h2 mb="2" px="2" text="lg gray-darker">
        Keypoints
      </h2>
      <div flex="~ 1 col">{renderToc()}</div>
    </aside>
  )
}

export default Keypoints
