import dynamic from 'next/dynamic'

import { Header, Footer } from '~/components'
const Aurora = dynamic(() => import('~/components/Aurora'), { ssr: false })

const Layout = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      bg="gray-lighter"
      className={className}
      flex="~ col justify-between"
      min-h="screen"
      position="relative">
      <Header />

      <div flex="~ 1 col" p="t-10" position="relative">
        {children}
      </div>
      <div
        className="absolute right-0 bottom-0 left-0 top-0 opacity-15"
        h="full"
        overflow="hidden"
        style={{ pointerEvents: 'none' }}
        w="full">
        <Aurora speed={0.5} />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
