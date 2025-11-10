import type { AppProps } from 'next/app'
import { LayoutContent } from '~/components'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutContent>
      <Component {...pageProps} />
    </LayoutContent>
  )
}
