/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='tr'>
      <Head>
        <link rel="stylesheet" href="/fontawesome5/css/all.min.css" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}