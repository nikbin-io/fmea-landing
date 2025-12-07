import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <link href="/180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/manifest.json" rel="manifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
