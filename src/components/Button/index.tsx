import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: ReactNode
}

const Button = ({ children, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button
      b="1 solid rounded-8px blue hover:blue-dark"
      bg="transparent hover:blue/4"
      color="blue hover:blue-dark"
      cursor="pointer"
      flex="~ items-center justify-center"
      font="500"
      gap="10px"
      h="40px"
      scale="active:98"
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
