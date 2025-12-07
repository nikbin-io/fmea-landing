import Link from 'next/link'
import logo from '~/assets/logo-with-text.png'
import Image from 'next/image'
const Logo = () => {
  return (
    <Link flex="~ items-center" h="40px" href="/">
      <Image alt="logo" h="full" src={logo} w="auto" />
    </Link>
  )
}

export default Logo
