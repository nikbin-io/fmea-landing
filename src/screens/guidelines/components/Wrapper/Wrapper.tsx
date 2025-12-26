import { ReactNode } from 'react'
import { Container, SeoHead } from '~/components'
import Keypoints from '../Keypoints'

type Props = {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <>
      <SeoHead description="" title="User Guide & Best Practices" />
      <div py="20">
        <Container>
          <div
            flex="~ lg:row col lg:items-stretch items-center"
            gap="20px"
            h="full"
            position="relative"
            w="full">
            <div w="lg:auto full">
              <Keypoints />
            </div>

            <div
              b="1 solid brand/10"
              bg="gray-lighter"
              color="gray-dark"
              flex="~ col"
              mx="auto"
              p="y-10 sm:x-10 x-4"
              rounded="xl"
              shadow="md">
              <div className="[&_p]:text-base [&_ul]:ml-6 [&_li]:text-base [&_h4]:mb-2 [&_h4]:mt-4 [&_ul]:mb-4 [&_p]:mb-4 [&_h3]:mt-6 [&_h3]:text-xl [&_h4]:font-semibold [&_h3]:font-semibold [&_h3]:mb-2">
                {children}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Wrapper
