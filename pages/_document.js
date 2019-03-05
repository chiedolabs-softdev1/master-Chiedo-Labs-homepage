import Document, { Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
import '../base/scss/base.scss';

const { publicRuntimeConfig } = getConfig();
const { MAPS_API_KEY } = publicRuntimeConfig;

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
          <script
            async
            defer
            src={`https://maps.google.com/maps/api/js?key=${MAPS_API_KEY}&libraries=places`}
            type="text/javascript"
          />
          <style>
            {'#__next { display: flex; flex-direction: column; min-height: 100%; }'}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
