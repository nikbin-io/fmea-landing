import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Layout, SeoHead } from '~/components'
import '../styles/globals.scss'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext']
})

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={jakarta.className}>
      <SeoHead />
      {GTM_ID && (
        <>
          <Script id="gtm-consent" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
        `}
          </Script>
          {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        </>
      )}
      <Component {...pageProps} />
    </Layout>
  )
}
