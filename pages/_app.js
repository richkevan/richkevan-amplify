import '../styles/globals.css'
import Layout from '../components/layout'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure({
  ...config, ssr: true
})

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
