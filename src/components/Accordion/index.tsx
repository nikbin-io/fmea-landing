import { PropsWithChildren } from 'react'
import { PlusIcon, MinusIcon } from '~/components/Icons'

interface AccordionProps {
  title: string
  id: string
}

const Accordion = ({
  children,
  title,
  id
}: PropsWithChildren<AccordionProps>) => {
  return (
    <div>
      <label className="peer group" htmlFor={id}>
        <input className="sr-only" id={id} name={id} type="checkbox" />

        <div
          cursor="pointer"
          flex="~ items-center justify-between"
          gap="15px"
          htmlFor={id}
          w="full">
          <div
            border-b="2 solid gray-300"
            color="gray-600"
            flex="~ justify-between items-start"
            gap="15px"
            py="sm:5 4"
            w="full">
            <p font="600" line-height="tight" text="sm:16px 15px ">
              {title}
            </p>

            <div flex="~ items-center justify-center" w="20px">
              <div
                className="group-has-checked:hidden flex"
                flex="items-center justify-center">
                <PlusIcon />
              </div>

              <div
                className="group-has-checked:flex hidden"
                flex="items-center justify-center">
                <MinusIcon />
              </div>
            </div>
          </div>
        </div>
      </label>

      <div
        grid="~ rows-[0fr] peer-has-[:checked]:rows-[1fr]"
        transition="all duration-300">
        <div overflow="hidden">
          <div color="gray-600" line-height="normal" py="5" text="sm:16px 14px">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
