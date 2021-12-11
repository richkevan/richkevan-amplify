import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import thumbnail from '../public/shareimg.png'

function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
