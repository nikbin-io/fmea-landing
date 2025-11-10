import Container from '~/components/Container'

const VideoSection = () => {
  return (
    <section bg="gray-100">
      <div h="full" py="50px" w="full">
        <Container>
          <div
            flex="~ wrap justify-center"
            m="lg:b-60px xl:b-70px md:b-50px b-30px"
            px="md:36 sm:24"
            text="center"
            w="full">
            <h2
              font="bold"
              line-height="tight"
              p="max-sm:x-[1%]"
              text="xl:3.5rem lg:3rem md:2.5rem 2rem  wrap gray-900 dark:white"
              tracking="[-0.5px]">
              Track the progress towards objectives with key results
            </h2>

            <p
              color="gray-500"
              mt="xl:2rem md:1.5rem .75rem"
              text="xl:1.5rem md:1.25rem 1rem">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>

          <div
            aspect-ratio="816/480"
            flex="~ col"
            max-w="1000px"
            mx="auto"
            overflow="hidden"
            rounded="xl"
            text="center"
            w="full">
            <video
              autoPlay
              h="full"
              loop
              muted
              overflow="hidden"
              playsInline
              rounded="lg"
              w="full">
              <source src="/videos/demo.mp4" type="video/mp4" />
            </video>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default VideoSection
