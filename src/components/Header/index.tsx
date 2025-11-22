import { Container, Navbar } from '~/components'

const Header = () => {
  return (
    <header fixed="~" left="0" right="0" top="5" z="10">
      <Container>
        <div
          b="1 solid blue/20 "
          backdrop="blur-50px"
          bg="white/25"
          rounded="2xl"
          transition="colors">
          <Navbar />
        </div>
      </Container>
    </header>
  )
}

export default Header
