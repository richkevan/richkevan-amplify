import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import LogRocket from 'logrocket';
import '@styles/globals.css'
import Layout from '../components/layout'
import PlausibleProvider from 'next-plausible';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faFileAlt, faEnvelope, faBlog, faHome } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(faBriefcase, faFileAlt, faEnvelope, faBlog, faHome);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    Fathom.load(process.env.REACT_APP_FATHOM_ID,{
      includedDomains: ['richkevan.com', 'www.richkevan.com'],
    })
    LogRocket.init('alcsya/richkevancom')

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [])

  
  return (
    // <PlausibleProvider domain='richkevan.com'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </PlausibleProvider>
  )
}

export default MyApp
