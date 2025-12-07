import type { AppProps } from 'next/app'
import { Layout, SeoHead } from '~/components'
import '../styles/globals.scss'
import { Plus_Jakarta_Sans } from 'next/font/google'
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext']
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={jakarta.className}>
      <SeoHead />
      <Component {...pageProps} />
    </Layout>
  )
}
