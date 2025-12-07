import { motion } from 'framer-motion'
import { HTMLAttributes } from 'react'

interface LinkButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  hasEffect?: boolean
  label: string
}

const LinkButton = ({ label, hasEffect = false, ...rest }: LinkButtonProps) => {
  return (
    <a
      {...rest}
      b="1 solid rounded-lg brand hover:black"
      bg={hasEffect ? 'brand hover:black' : 'transparent hover:white'}
      color={hasEffect ? 'white' : 'brand hover:black'}
      cursor="pointer"
      flex="~ items-center justify-center"
      font="500"
      h="38px"
      href="https://app.fmeatool.ai"
      min-w="120px"
      overflow="hidden"
      p="x-20px"
      position="relative"
      scale="active:98 hover:101"
      shadow="hover:sm"
      transition="duration-200">
      {hasEffect && (
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
      )}
      {label}
    </a>
  )
}

export default LinkButton
