import { Accordion, Container } from '~/components'
import { FAQ } from '~/constants/faq'

const Faq = () => {
  return (
    <section m="b-30" p="y-10">
      <Container>
        <div flex="~ col items-center" gap="6" mb="sm:10 8" text="center">
          <h2 line-height="tight" text="center lg:3rem 2rem gray-dark ">
            Do you have any question?
          </h2>
        </div>

        <div flex="~ col" max-w="800px" mx="auto">
          {FAQ.map((item, idx) => (
            <Accordion
              id={`homepage-faq-${idx}`}
              key={idx}
              title={item.question}>
              <div overflow="hidden">{item.answer}</div>
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Faq
