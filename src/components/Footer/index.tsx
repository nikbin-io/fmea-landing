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
                  href={link.href}
                  key={index}
                  text=" gray-500 hover:blue-900 .9rem nowrap"
                  transition="colors"
                  word-spacing="2px">
                  {link.name}
                </Link>
              ))}
            </div>

            <div flex="~  items-center">
              {SOCIAL_LINKS.map((item: any) => {
                return (
                  <Link
                    b="rounded-lg"
                    bg="transparent hover:blue-100/15  "
                    className="[&>svg]:h-16px"
                    color="gray-600 hover:blue-500"
                    flex="~ items-center justify-center"
                    href={item.url}
                    key={item.title}
                    p="2"
                    rel="noreferrer"
                    target="_blank"
                    title={item.title}
                    transition="colors 300">
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
            text="sm gray-600 ">
            <p>© 2024 Maudlin Works LLC. All rights reserved.</p>
            <p>Developed by Nikbin.io.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
