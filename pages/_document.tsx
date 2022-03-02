import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ColorModeScript, theme } from '@chakra-ui/react'
export default class MyDocument extends Document {
  NEXT_PUBLIC_GOOGLE_AD_ID = process.env.NEXT_PUBLIC_GOOGLE_AD_ID ?? ''
  NEXT_PUBLIC_GOOGLE_VERIFICATION_ID =
    process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_ID ?? ''
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta
            name="google-site-verification"
            content={this.NEXT_PUBLIC_GOOGLE_VERIFICATION_ID}
          />
          <script
            data-ad-client={this.NEXT_PUBLIC_GOOGLE_AD_ID}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#ed8936"
          />
          <meta name="msapplication-TileColor" content="#da532c"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body>
          <script
            type="text/javascript"
            src="https://b.st-hatena.com/js/bookmark_button.js"
            charSet="utf-8"
            async
          ></script>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
