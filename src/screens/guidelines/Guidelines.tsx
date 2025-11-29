import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { Container } from '~/components'
import CoreConcepts from './components/CoreConcepts'
import Introduction from './components/Introduction'
import Keypoints, { tocData } from './components/Keypoints'

const Guideline = () => {
  const router = useRouter()
  const { id } = router.query
  const activeId = (Array.isArray(id) ? id[0] : id) || 'introduction'

  const activeComponent = useMemo(() => {
    const coreConceptsSection = tocData.find((s) => s.id === 'core-concepts')
    const isCoreConcepts =
      activeId === 'core-concepts' ||
      coreConceptsSection?.children?.some((child) => child.id === activeId)

    if (isCoreConcepts) return 'CoreConcepts'
    return 'Introduction'
  }, [activeId])

  useEffect(() => {
    if (activeId) {
      setTimeout(() => {
        const element = document.getElementById(activeId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [activeId, activeComponent])

  return (
    <div pt="20">
      <Container>
        <div
          flex="~ md:row col md:items-stretch items-center"
          gap="20px"
          h="full"
          position="relative"
          w="full">
          <div>
            <Keypoints />
          </div>

          <div bg="gray-light" rounded="xl">
            <div
              color="gray-dark"
              flex="~ col"
              max-h="[85vh] lg:[70vh]"
              mx="auto"
              overflow="y-auto lg:y-auto"
              p="y-10 sm:x-10 x-4"
              shadow="xl">
              <h1 id="guideline-title" text="4xl center font-bold">
                Guideline
              </h1>
              <div>
                {activeComponent === 'Introduction' && <Introduction />}
                {activeComponent === 'CoreConcepts' && <CoreConcepts />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Guideline
