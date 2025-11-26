import { motion } from 'framer-motion'
import { JSX } from 'react'
import { useState, useRef } from 'react'
import { InfoIcon } from '~/components/Icons'
import { useClickAway } from 'react-use'

interface InputTooltipProps {
  content: JSX.Element
}

const InputTooltip = ({ content }: InputTooltipProps) => {
  const tooltipRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  const tooltipVariants = {
    open: { opacity: 1, display: 'block', y: -15 },
    closed: { opacity: 0, y: -10, transitionEnd: { display: 'none' } }
  }

  useClickAway(tooltipRef, () => {
    setOpen(false)
  })

  return (
    <div position="relative">
      <motion.div
        animate={open ? 'open' : 'closed'}
        b="1 solid gray-200 rounded-lg"
        bg="gray-200"
        color="gray-900"
        initial="closed"
        max-w="600px"
        min-w="200px"
        p="x-15px y-5px"
        position="absolute bottom-full right-[-12px]"
        text="xs"
        variants={tooltipVariants}
        w="auto"
        z="5">
        <div
          bottom="-5px"
          position="absolute right-15px"
          style={{ transform: 'rotate(45deg)' }}>
          <div
            b-b="1 solid gray-200 rounded-1px"
            b-r="1 solid gray-200 rounded-1px"
            bg="gray-200"
            h="10px"
            w="10px"
          />
        </div>

        {content}
      </motion.div>

      <button
        b="none"
        bg="transparent"
        color="gray-400 hover:gray-700"
        cursor="pointer"
        flex="~ items-center justify-center"
        h="18px"
        outline="none"
        ref={tooltipRef}
        scale="hover:101"
        transition="colors duration-200"
        type="button"
        w="18px"
        onClick={() => setOpen(!open)}>
        <InfoIcon />
      </button>
    </div>
  )
}

export default InputTooltip
