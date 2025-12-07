import { useState } from 'react'
import Link from 'next/link'
import { NAVIGATION_LINKS } from '~/constants/navigation'
import { Logo, LinkButton } from '~/components'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav w="full">
      <div flex="~ items-center justify-between" h="16" mx="4">
        <div flex="~ items-center justify-between" h="60px" w="full">
          <Logo />

          <div className="hidden md:flex" flex="1 items-center" ml="5">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                b="1 solid transparent rounded-lg"
                bg="hover:brand/7"
                flex="~ items-center justify-center"
                font="500"
                h="38px"
                href={link.href}
                key={link.name}
                p="x-15px y-5px"
                text="brand hover:black"
                tracking=".5px"
                transition="colors">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:flex hidden" gap="10px">
            <LinkButton
              hasEffect
              href="https://app.fmeatool.ai"
              label="Generator"
            />

            <LinkButton href="https://app.fmeatool.ai" label="Sign Up" />
          </div>

          <button
            b="none"
            bg="transparent"
            className="md:hidden"
            cursor="pointer"
            flex="~ col justify-center"
            gap="1.5"
            h="6"
            w="6"
            onClick={toggleMobileMenu}>
            <span
              bg="gray-dark"
              className={mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
              h="0.5"
              rounded="full"
              transition="all duration-200"
              w="full"></span>
            <span
              bg="gray-dark"
              className={mobileMenuOpen ? 'opacity-0' : ''}
              h="0.5"
              rounded="full"
              transition="all duration-200"
              w="full"></span>
            <span
              bg="gray-dark"
              className={mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
              h="0.5"
              rounded="full"
              transition="all duration-200"
              w="full"></span>
          </button>
        </div>
      </div>

      <div
        border="t-1 0 solid black/10"
        className={`md:hidden ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        overflow="hidden"
        px="4"
        transition="all 200">
        <div border="t black/10" flex="~ col" gap="2" p="y-4">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              font="400"
              h="38px"
              href={link.href}
              key={link.name}
              p="y-2"
              text="brand hover:black base"
              transition="colors 200"
              onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}

          <div border="t-1 0 solid black/10" flex="~ col" gap="4" p="t-4">
            <LinkButton
              hasEffect
              href="https://app.fmeatool.ai"
              label="Generator"
            />

            <LinkButton href="https://app.fmeatool.ai" label="Sign Up" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
