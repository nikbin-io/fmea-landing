import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: ReactNode
}

const Button = ({ children, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button
      b="1 solid rounded-8px blue-100"
      bg="transparent hover:blue-100/10"
      color="blue-400 hover:blue-700"
      cursor="pointer"
      flex="~ items-center justify-center"
      font="500"
      gap="10px"
      h="40px"
      scale="active:98"
      shadow="hover:sm"
      text="1rem"
      transition="duration-200"
      type={type}
      {...rest}>
      {children}
    </button>
  )
}

export default Button
