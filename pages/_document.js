import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/icon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/icon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
          <meta name="theme-color" content="#d5e1df" />
          <meta
            property="og:site_name"
            content="Gabinet Psychologiczny - mgr Emilia Cwojdzińska"
          />
          <meta property="og:image" content="/icons/icon-512x512.png" />
          <script
            src="https://kit.fontawesome.com/ecdb2bd2bc.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
