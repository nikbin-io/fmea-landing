import dynamic from 'next/dynamic'

import { usePathname } from 'next/navigation'
import { Header, Footer } from '~/components'
const Aurora = dynamic(() => import('~/components/Aurora'), { ssr: false })

export default function LayoutContent({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isGeneratorPage = pathname === '/generator'

  if (isGeneratorPage) {
    return <div>{children}</div>
  }

  return (
    <div flex="~ 1 col" h="full">
      <Header />

      <div bg="black" flex="~ 1 col" overflow="hidden">
        <div flex="~ 1 col" p="t-[var(--header-height)]">
          {children}
        </div>
      </div>

      <Footer />

      <div className="absolute bottom-0 top-0 inset-0 opacity-30">
        <Aurora amplitude={1.0} blend={0.5} speed={0.5} />
      </div>
    </div>
  )
}
