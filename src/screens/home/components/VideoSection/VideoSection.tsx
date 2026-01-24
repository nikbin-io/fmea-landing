import { Container } from '~/components'

export interface VIDEO_CONTENT_TYPE {
  id: string
  title: string
  description: string
  video: string
}

export const VIDEO_CONTENT: VIDEO_CONTENT_TYPE[] = [
  {
    id: '01',
    title: 'Process Failure Mode and Effects Analysis',
    description:
      'Manufacturing and Process Engineers envision a process is free of errors. Unfortunately, errors and especially errors propagated when people are present can be quite catastrophic. Process Failure Mode and Effects Analysis (PFMEA) looks at each process step to identify risks and possible errors from many different sources.',
    video: '/videos/demo.mp4'
  },
  {
    id: '02',
    title: 'Process Failure Mode and Effects Analysis',

    description:
      'Manufacturing and Process Engineers envision a process is free of errors. Unfortunately, errors and especially errors propagated when people are present can be quite catastrophic. Process Failure Mode and Effects Analysis (PFMEA) looks at each process step to identify risks and possible errors from many different sources.',
    video: '/videos/demo.mp4'
  }
]

const VideoSection = () => {
  return (
    <section p="y-40">
      <Container>
        {VIDEO_CONTENT.map((feature, index) => (
          <div
            gap="xl:50px 30px"
            grid="~ lg:cols-2"
            key={feature.id}
            mb="lg:100px 50px">
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

            <div
              b="3 solid brand/70 rounded-xl"
              max-w="650px"
              mx="auto"
              overflow="hidden"
              position="relative">
              <video
                autoPlay
                h="full"
                loop
                muted
                overflow="hidden"
                playsInline
                style={{ objectFit: 'cover' }}
                w="full">
                <source src={feature.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default VideoSection
