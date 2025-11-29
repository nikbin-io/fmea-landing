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
      min-h="screen">
      <Header />

      <div flex="~ 1 col" p="t-10" position="relative">
        {children}

        <div
          className="absolute right-0 bottom-0 left-0 top-0 opacity-30"
          style={{ pointerEvents: 'none' }}>
          <Aurora amplitude={1.0} blend={0.5} speed={0.5} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
