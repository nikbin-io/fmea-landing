import { Container } from '~/components'
import Image, { StaticImageData } from 'next/image'
import pfmeaImg from '~/assets/pfmea.png'
import dfmeaImg from '~/assets/dfmea.png'

interface ContentItem {
  id: string
  title: string
  description: string
  img: StaticImageData
}

const CONTENT: ContentItem[] = [
  {
    id: '01',
    title: 'Design Failure Mode and Effects Analysis',
    description:
      'Build technically grounded design risk analyses directly from engineering documentation with minimal user effort. The app structures complex systems, connects functions to real failure mechanisms, and surfaces meaningful risks early, significantly reducing manual FMEA preparation while maintaining engineering rigor.',
    img: dfmeaImg
  },
  {
    id: '02',
    title: 'Process Failure Mode and Effects Analysis',
    description:
      'Convert manufacturing process documentation into a complete, logically connected risk picture with minimal user effort. By following the actual process flow and linking operations to realistic causes and impacts, the app helps teams strengthen process robustness, reduce variation, and complete FMEA work more efficiently through a simple, focused user experience.',
    img: pfmeaImg
  }
]

const VideoSection = () => {
  return (
    <section p="xs:t-40 t-15 xs:b-15">
      <Container>
        {CONTENT.map((feature, index) => (
          <div
            grid="~ lg:cols-2"
            key={feature.id}
            m={index === 0 ? 'xs:b-0 b-10' : ''}>
            <div
              flex="~ col justify-center"
              gap="lg:30px 20px"
              order={index % 2 === 0 ? 0 : 'lg:1'}
              p={index % 2 === 0 ? 'lg:r-50px' : 'lg:l-50px'}>
              <h3
                line-height="normal"
                text="lg:left gray-dark center xl:2rem sm:1.5rem 1.3rem">
                {feature.title}
              </h3>

              <p
                line-height="normal"
                max-w="650px"
                mx="lg:0 auto"
                text="lg:left center sm:base sm gray-dark">
                {feature.description}
              </p>
            </div>

            <div flex="~ items-center justify-center" max-w="650px" mx="auto">
              <Image
                alt={feature.title}
                h="auto"
                height={540}
                object="contain"
                op={index === 0 ? '40' : '100'}
                src={feature.img}
                w="full"
                width={540}
              />
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default VideoSection
