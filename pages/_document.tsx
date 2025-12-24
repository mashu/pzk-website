import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0e14" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        {/* Tło z falami radiowymi */}
        <div className="radio-waves-bg" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
