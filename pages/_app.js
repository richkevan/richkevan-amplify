import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import thumbnail from '../public/shareimg.png'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name='title' content='Richkevan.com' />
      <meta name="description" content="Rich Kevan's Portfolio" />
      <meta property='og:image' content={thumbnail} />
      <meta name='url' content='https://richkevan.com' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
