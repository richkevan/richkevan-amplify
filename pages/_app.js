import '@styles/globals.css'
import Layout from '../components/layout'
import PlausibleProvider from 'next-plausible';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faFileAlt, faEnvelope, faBlog, faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(faBriefcase, faFileAlt, faEnvelope, faBlog, faHome);

function MyApp({ Component, pageProps }) {

  
  return (
    <PlausibleProvider domain='richkevan.com'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </PlausibleProvider>
  )
}

export default MyApp
