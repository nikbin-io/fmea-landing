import { motion } from 'framer-motion'
import { JSX } from 'react'

interface InputTooltipProps {
  open: boolean
  content: JSX.Element
}

const InputTooltip = ({ open, content }: InputTooltipProps) => {
  const tooltipVariants = {
    open: { opacity: 1, display: 'block', y: -15 },
    closed: { opacity: 0, y: -10, transitionEnd: { display: 'none' } }
  }

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      b="1 solid gray-500 rounded-8px"
      bg="gray-700"
      color="white"
      initial="closed"
      line-height="19px"
      max-w="600px"
      min-w="200px"
      p="x-15px y-5px"
      position="absolute bottom-full right-[-12px]"
      text="12px"
      variants={tooltipVariants}
      w="auto"
      z="5">
      <div
        bottom="-5px"
        position="absolute right-15px"
        style={{ transform: 'rotate(45deg)' }}>
        <div
          b-b="1 solid gray-700 rounded-1px"
          b-r="1 solid gray-700 rounded-1px"
          bg="gray-700"
          h="10px"
          w="10px"
        />
      </div>

      {content}
    </motion.div>
  )
}

export default InputTooltip
