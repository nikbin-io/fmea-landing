import { HTMLAttributes, PropsWithChildren } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean
}

const Container = ({
  children,
  ...rest
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className="container max-w-1400px"
      m="x-auto"
      p="sm:x-20px x-10px"
      position="relative"
      z="1"
      {...rest}>
      {children}
    </div>
  )
}

export default Container
