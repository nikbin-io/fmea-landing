import { ReactNode } from 'react'
import { Container } from '~/components'
import Keypoints from '../Keypoints'

type Props = {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
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
            bg="gray-light"
            color="gray-dark"
            flex="~ col"
            mx="auto"
            p="y-10 sm:x-10 x-4"
            rounded="xl"
            shadow="xl">
            <div>{children}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Wrapper
