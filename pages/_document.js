import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&family=Raleway:wght@500&display=swap" rel="stylesheet" />
        </Head>
        <body className="font-titleFont">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument