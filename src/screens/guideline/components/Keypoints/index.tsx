import { useState } from 'react'

type TocNode = { id: string; label: string; children?: TocNode[] }
const Keypoints = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const tocData: TocNode[] = [
    {
      id: 'introduction',
      label: 'Introduction',
      children: [
        { id: 'purpose', label: 'Purpose' },
        { id: 'scope', label: 'Scope' }
      ]
    },
    {
      id: 'getting-started',
      label: 'Getting Started',
      children: [
        { id: 'prerequisites', label: 'Prerequisites' },
        { id: 'installation', label: 'Installation' },
        { id: 'first-run', label: 'First Run' }
      ]
    },
    {
      id: 'core-concepts',
      label: 'Core Concepts',
      children: [
        { id: 'data-model', label: 'Data Model' },
        { id: 'risk-scoring', label: 'Risk Scoring' }
      ]
    },
    {
      id: 'workflow',
      label: 'Workflow',
      children: [
        { id: 'create-a-project', label: 'Create a Project' },
        { id: 'define-functions', label: 'Define Functions' },
        { id: 'analyze-failure-modes', label: 'Analyze Failure Modes' }
      ]
    },
    {
      id: 'best-practices',
      label: 'Best Practices',
      children: [
        { id: 'naming-and-structure', label: 'Naming and Structure' },
        { id: 'reviews-and-audits', label: 'Reviews and Audits' }
      ]
    },
    {
      id: 'examples',
      label: 'Examples',
      children: [
        { id: 'simple-example', label: 'Simple Example' },
        { id: 'advanced-example', label: 'Advanced Example' }
      ]
    }
  ]

  const scrollToId = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const renderToc = () => (
    <ul list="none" m="0" p="0">
      {tocData.map((section) => (
        <li key={section.id} m="y-1">
          <button
            bg="transparent"
            border="0"
            cursor="pointer"
            p="y-1 x-1"
            text="left 16px gray-900 hover:gray-900"
            w="full"
            onClick={() => scrollToId(section.id)}>
            {section.label}
          </button>
          {section.children && section.children.length > 0 && (
            <div m="l-3">
              <ul list="none" m="0" p="0">
                {section.children.map((child) => (
                  <li key={child.id} m="y-1">
                    <button
                      bg="transparent"
                      border="0"
                      cursor="pointer"
                      p="y-1 x-1"
                      text="left 16px gray-700 hover:gray-900"
                      w="full"
                      onClick={() => scrollToId(child.id)}>
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
      bg="gray-200"
      flex="~ col shrink-0"
      p="x-4 y-8"
      position="sticky top-100px right-0"
      rounded="2xl"
      transition="all duration-200"
      w="350px">
      <h2 mb="6">Keypoints</h2>
      {!isCollapsed && <div flex="~ 1 col">{renderToc()}</div>}
    </aside>
  )
}

export default Keypoints
