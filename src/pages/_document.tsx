import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="#f3f4f6" name="theme-color" />
        <meta content="light" name="color-scheme" />
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
