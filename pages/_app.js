import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import { motion } from 'framer-motion'
Amplify.configure({
  ...config, ssr: true
})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property='og:title' content='Richkevan.com' />
      <meta name="description" content="Rich Kevan's Portfolio" />
      <meta property='og:image' content='../public/shareimg.png' />
      <meta property='og:url' content='https://richkevan.com' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
