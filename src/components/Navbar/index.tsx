import { useState } from 'react'
import Link from 'next/link'
import { NAVIGATION_LINKS } from '~/constants/navigation'
import { Logo } from '~/components'
import { motion } from 'framer-motion'

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
          <div className="hidden md:flex" flex="1 items-center" ml="10">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                b="1 solid transparent rounded-10px"
                bg="hover:blue/10"
                font="500"
                href={link.href}
                key={link.name}
                p="x-15px y-8px"
                text="gray-700 hover:blue"
                tracking=".5px"
                transition="colors">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:flex hidden" gap="10px">
            <Link
              b="rounded-10px 1 solid blue hover:blue-800"
              bg="blue hover:blue-800"
              color="white"
              cursor="pointer"
              flex="~ items-center justify-center"
              h="38px"
              href="#"
              overflow="hidden"
              p=" y-5px"
              position="relative"
              scale="active:97"
              shadow="hover:sm"
              transition="duration-200"
              w="120px">
              <motion.div
                animate={{ x: '100%' }}
                className="absolute inset-0"
                initial={{ x: '-100%' }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: 'linear'
                }}
              />
              Generator
            </Link>

            <Link
              b="1 solid rounded-10px blue-300 hover:blue-800"
              bg="transparent hover:blue-100/15"
              className="md:flex hidden"
              color="blue-400 hover:blue-800"
              flex="items-center justify-center"
              font="500"
              h="38px"
              href="/signup"
              p="x-10px y-5px"
              scale="active:98"
              shadow="hover:sm"
              transition="duration-200"
              w="120px">
              Sign Up
            </Link>
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
              bg="gray-500"
              className={mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
              h="0.5"
              rounded="full"
              transition="all duration-300"
              w="full"></span>
            <span
              bg="gray-500"
              className={mobileMenuOpen ? 'opacity-0' : ''}
              h="0.5"
              rounded="full"
              transition="all duration-300"
              w="full"></span>
            <span
              bg="gray-500"
              className={mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
              h="0.5"
              rounded="full"
              transition="all duration-300"
              w="full"></span>
          </button>
        </div>
      </div>

      <div
        border="t-1 0 solid black/10"
        className={`md:hidden ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        mx="4"
        overflow="hidden"
        transition="all 300">
        <div border="t black/10" flex="~ col" gap="2" p="y-4">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              b="1 solid transparent rounded-10px"
              href={link.href}
              key={link.name}
              min-h="10"
              p="y-2"
              text="gray-700 hover:blue"
              transition="colors"
              onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}

          <div border="t-1 0 solid black/10" flex="~ col" gap="3" p="t-4">
            <Link
              b="rounded-10px 1 solid blue hover:blue-800"
              bg="blue hover:blue-800"
              color="white"
              cursor="pointer"
              flex="~ items-center justify-center"
              h="38px"
              href="#"
              overflow="hidden"
              p="y-5px"
              position="relative"
              scale="active:97"
              shadow="hover:sm"
              transition="duration-200"
              w="full">
              <motion.div
                animate={{ x: '100%' }}
                className="absolute inset-0"
                initial={{ x: '-100%' }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: 'linear'
                }}
              />
              Generator
            </Link>

            <Link
              b="1 solid rounded-10px blue-300 hover:blue-800"
              bg="transparent hover:blue-100/15"
              color="blue-400 hover:blue-800"
              flex="~ items-center justify-center"
              font="500"
              h="38px"
              href="/signup"
              p="y-5px"
              scale="active:98"
              shadow="hover:sm"
              transition="duration-200"
              w="full">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
