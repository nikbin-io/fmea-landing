import { useState, useEffect } from 'react'
import { Container, Navbar } from '~/components'

const Header = () => {
  const [navBg, setNavBg] = useState<boolean>(false)

  const changeNavBg = () => {
    window.scrollY >= 20 ? setNavBg(true) : setNavBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])

  return (
    <header fixed="~" left="0" right="0" top="5" z="10" onScroll={changeNavBg}>
      <Container>
        <div
          b={navBg ? '1 solid black/10 ' : '1 md:transparent black/10'}
          backdrop="blur-10px"
          bg={navBg ? 'white/60' : 'md:transparent white/60 '}
          rounded="2xl"
          transition="colors">
          <Navbar />
        </div>
      </Container>
    </header>
  )
}

export default Header
