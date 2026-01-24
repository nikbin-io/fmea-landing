import Link from 'next/link'
import { FOOTER_NAV_LINKS, SOCIAL_LINKS } from '~/constants/navigation'
import { Container, Logo } from '~/components'

const Footer = () => {
  return (
    <footer b="0 t-1 solid gray-light" bg="white" mx="auto" w="full" z="1">
      <Container>
        <div gap="sm:12 8">
          <div
            flex="~ lg:row col items-center justify-between"
            gap="20px"
            py="10">
            <div color="gray" flex="~">
              <Logo />
            </div>

            <div
              flex="~ sm:row col sm:order-0 order-1 items-center justify-center"
              gap="sm:25px 15px">
              {FOOTER_NAV_LINKS.map((link, index) => (
                <Link
                  font="400"
                  href={link.href}
                  key={index}
                  scale="hover:102"
                  text="gray-dark hover:black sm:base sm nowrap "
                  transition="colors duration-200"
                  word="spacing-1px">
                  {link.name}
                </Link>
              ))}
            </div>

            <div flex="~  items-center">
              {SOCIAL_LINKS.map((item: any) => {
                return (
                  <Link
                    b="rounded-lg"
                    bg="transparent hover:brand/7"
                    className="[&>svg]:h-16px"
                    color="gray-dark hover:brand"
                    flex="~ items-center justify-center"
                    href={item.url}
                    key={item.title}
                    p="2"
                    target="_blank"
                    title={item.title}
                    transition="colors 200">
                    {item.icon}
                  </Link>
                )
              })}
            </div>
          </div>

          <div
            b="0 t-1 solid gray-lighter"
            flex="~ sm:row col items-center justify-between"
            gap="10px"
            py="6"
            text="sm gray-dark ">
            <p>© 2025 Maudlin Works LLC. All rights reserved.</p>
            <p>Developed by nikbin.io.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
