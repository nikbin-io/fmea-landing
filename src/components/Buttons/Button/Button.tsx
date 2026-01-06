import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: ReactNode
}

const Button = ({ children, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button
      b="1 solid rounded-lg brand hover:black"
      bg="transparent hover:white disabled:transparent"
      color="brand hover:black"
      cursor="pointer disabled:not-allowed"
      flex="~ items-center justify-center"
      font="500"
      gap="10px"
      h="44px"
      scale="active:99 hover:101 disabled:100"
      shadow="hover:sm"
      text="base"
      transition="duration-200"
      type={type}
      {...rest}>
      {children}
    </button>
  )
}

export default Button
