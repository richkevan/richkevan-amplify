import '../styles/globals.css'
import Layout from '../components/layout'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faFileAlt, faEnvelope, faBlog, faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(faBriefcase, faFileAlt, faEnvelope, faBlog, faHome);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
