import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name='title' content='Richkevan.com' />
      <meta name="description" content="Rich Kevan's Portfolio" />
      <meta name='thumbnail' content='../public/shareimg.png' />
      <meta name='url' content='https://richkevan.com' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
