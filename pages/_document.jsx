/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='tr'>
      <Head>
        <link rel="stylesheet" href="/fontawesome5/css/all.min.css" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y389N6FTVC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y389N6FTVC');
        `}
        </Script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}