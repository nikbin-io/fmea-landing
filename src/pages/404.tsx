import Link from 'next/link'
import { Container } from '~/components'

const NotFoundPage = () => {
  return (
    <main
      flex="~ 1 col items-center justify-center"
      h="full"
      py="lg:30 30"
      text="center white"
      z="1">
      <Container>
        <div flex="~ col items-center" gap="5">
          <h1 font="bold" text="sm:2.5rem black/60">
            <span
              className="text-stroke-gray-200 text-stroke-2px"
              text="sm:10rem 6rem black/15">
              404
            </span>
            <br /> Page not found
          </h1>

          <p line-height="normal" max-w="550px" text="sm:1.2rem gray-600">
            The page you are looking for might have been moved, deleted, or
            never existed.
          </p>

          <Link
            b="1 solid rounded-10px transparent"
            bg="gray-700 hover:gray-800"
            cursor="pointer"
            flex="~ items-center justify-center"
            font="400"
            h="40px"
            href="/"
            mt="sm:4 2"
            scale="active:98"
            shadow="hover:md"
            text="1rem white"
            transition="all 200"
            w="sm:170px 160px">
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  )
}

export default NotFoundPage
