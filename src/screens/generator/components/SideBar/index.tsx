import { useState } from 'react'
import { ChevronLeft, ChevronRight } from '~/components/Icons'
import Link from 'next/link'
import Form from '../Form'
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside
      bg="gray-100"
      border="r gray-200"
      flex="~ col"
      h="screen"
      position="relative"
      transition="all duration-300"
      w={isCollapsed ? '50px' : '300px'}
      z="10">
      <div border="0 b-1 solid gray-200">
        {!isCollapsed && (
          <div p="4">
            <Link
              className="[&>svg]:h-33px"
              flex="~ items-center"
              href="/"
              space="x-2">
              <svg
                height="32"
                viewBox="0 0 24 24"
                width="32"
                xmlns="http://www.w3.org/2000/svg">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2">
                  <path
                    d="M19 13.5v5.152a.6.6 0 0 1-.302.52l-6.4 3.658a.6.6 0 0 1-.596 0l-6.4-3.657A.6.6 0 0 1 5 18.652V13m7 9.5V17m11-9L11 1m2 14L1 8m0 0c3-5 7-2 10-7"
                    stroke="brand"
                  />
                  <path d="M13 15c3-5 7-2 10-7" stroke="blue-500" />
                </g>
              </svg>
              <p color="brand" font="500" m="t-2px" text="24px">
                F<span color="blue-500">M</span>E<span color="blue-500">A</span>
              </p>
            </Link>
          </div>
        )}
        <button
          b="1 solid gray-200 rounded-md"
          bg="gray-100"
          className="[&>svg]:w-24px"
          color="gray-400 hover:gray-600"
          cursor="pointer"
          flex="~ items-center justify-center"
          h="30px"
          outline="none"
          position="absolute right-[-15px] top-16px"
          shadow="hover:xl"
          transition="colors"
          w="30px"
          onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      {!isCollapsed && (
        <div
          className="hover:custom-scrollbar"
          flex="~ 1 col"
          h="screen"
          overflow="y-auto x-clip"
          p="x-4 y-8">
          <Form />
        </div>
      )}
      {/* Toggle Button */}
    </aside>
  )
}

export default Sidebar
