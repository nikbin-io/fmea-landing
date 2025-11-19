import type { AppProps } from 'next/app'
import { Layout } from '~/components'
import '../styles/globals.scss'
import { Geist } from 'next/font/google'
const geist = Geist({
  subsets: ['latin']
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component className={geist.className} {...pageProps} />
    </Layout>
  )
}
