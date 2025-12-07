import { Container, Navbar } from '~/components'

const Header = () => {
  return (
    <header position="fixed left-0 right-0 top-4" z="10">
      <Container>
        <div b="1 solid brand/10" bg="gray-lighter" rounded="2xl">
          <Navbar />
        </div>
      </Container>
    </header>
  )
}

export default Header
