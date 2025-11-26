import { Container, Navbar } from '~/components'

const Header = () => {
  return (
    <header position="fixed left-0 right-0 top-4" z="10">
      <Container>
        <div
          b="1 solid blue/10"
          backdrop="blur-50px"
          bg="white/30"
          rounded="2xl">
          <Navbar />
        </div>
      </Container>
    </header>
  )
}

export default Header
