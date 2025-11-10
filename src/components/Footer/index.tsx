import { SOCIAL_LINKS } from '~/constants/social-media'
import Link from 'next/link'
import { FOOTER_LINKS } from '~/constants/footer'
import { Container, Logo } from '~/components'

const Footer = () => {
  return (
    <footer b="0 t-1 solid gray-200" bg="white" mx="auto" p="y-12" w="full">
      <Container>
        <div gap="sm:12 8" grid="~ lg:cols-2">
          <div>
            <Logo />

            <div b="t-1 0 solid  gray-200" mt="6" pt="6">
              <div font="500" text="18px gray-400">
                Follow Us
              </div>

              <div flex="~ items-center" gap="10px" mt="2">
                {SOCIAL_LINKS.map((item: any) => {
                  return (
                    <Link
                      b="rounded-lg"
                      bg="transparent hover:gray-200  "
                      className="[&>svg]:h-16px"
                      color="gray-500 "
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
          </div>

          <div flex="~ justify-between" pl="xl:10">
            {FOOTER_LINKS.map((item, index) => (
              <div key={index}>
                <h4 font="semibold" m="b-4" text="gray-900  sm:lg">
                  {item.title}
                </h4>

                <div flex="~ col" gap="10px">
                  {item.links.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      text="gray-500 hover:black  dark-hover:white sm"
                      transition="colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
