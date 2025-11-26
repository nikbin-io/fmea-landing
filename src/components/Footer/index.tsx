import { SOCIAL_LINKS } from '~/constants/social-media'
import Link from 'next/link'
import { FOOTER_NAV_LINKS } from '~/constants/footer'
import { Container, Logo } from '~/components'

const Footer = () => {
  return (
    <footer b="0 t-1 solid gray-200" bg="white" mx="auto" w="full">
      <Container>
        <div gap="sm:12 8">
          <div
            flex="~ lg:row col items-center justify-between"
            gap="20px"
            py="10">
            <div color="gray-500" flex="~">
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
                  text="gray-700 hover:blue sm:base sm nowrap"
                  transition="colors duration-200"
                  word-spacing="1px">
                  {link.name}
                </Link>
              ))}
            </div>

            <div flex="~  items-center">
              {SOCIAL_LINKS.map((item: any) => {
                return (
                  <Link
                    b="rounded-lg"
                    bg="transparent hover:blue/10"
                    className="[&>svg]:h-16px"
                    color="gray-700 hover:blue-light"
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
            b="0 t-1 solid gray-100"
            flex="~ sm:row col items-center justify-between"
            gap="10px"
            py="6"
            text="sm gray-700 ">
            <p>© 2024 Maudlin Works LLC. All rights reserved.</p>
            <p>Developed by Nikbin.io.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
