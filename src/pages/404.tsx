import Link from 'next/link'
import { Container } from '~/components'

const NotFoundPage = () => {
  return (
    <main
      flex="~ 1 col items-center justify-center"
      h="full"
      py="30"
      text="center "
      z="1">
      <Container>
        <div flex="~ col items-center" gap="5">
          <h1 font="bold" text="sm:2.5rem black/60">
            <span
              className="text-stroke-gray-light text-stroke-2px"
              text="sm:10rem 6rem black/15">
              404
            </span>
            <br /> Page not found
          </h1>

          <p line-height="normal" max-w="550px" text="sm:1.2rem gray-dark">
            The page you are looking for might have been moved, deleted, or
            never existed.
          </p>

          <Link
            b="1 solid rounded-lg blue-light hover:blue"
            bg="blue-light hover:blue"
            color="white"
            cursor="pointer"
            flex="~ items-center justify-center"
            font="400"
            h="44px"
            href="/"
            mt="sm:4 2"
            scale="active:98 hover:101"
            shadow="hover:sm"
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
