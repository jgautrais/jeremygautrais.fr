import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
          <link href='/static/favicons/site.webmanifest' rel='manifest' />
          <link
            href='/static/favicons/apple-touch-icon.png'
            rel='apple-touch-icon'
            sizes='180x180'
          />
          <link
            href='/static/favicons/favicon-32x32.png'
            rel='icon'
            sizes='32x32'
            type='image/png'
          />
          <link
            href='/static/favicons/favicon-16x16.png'
            rel='icon'
            sizes='16x16'
            type='image/png'
          />
          <meta content='#ffffff' name='theme-color' />
          <meta content='#ffffff' name='msapplication-TileColor' />
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
