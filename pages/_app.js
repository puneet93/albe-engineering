import Head from 'next/head'

import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Albe Engineering</title>

        <link rel="manifest" href="manifest.json" />
        <link
          href="favicon.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="favicon.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="favicon.png" />
        <meta name="theme-color" content="#093254" />

        
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
