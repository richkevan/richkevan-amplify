import Head from "next/head"
import thumbnail from '../../public/shareimg.png'

const PageMeta = () => {


    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property='og:title' content='Richkevan.com' />
            <meta property="og:description" content="Rich Kevan's Portfolio" />
            <meta property='og:image' content={thumbnail.src} key='ogimage' />
            <meta property='og:url' content='https://richkevan.com' />
        </Head>
    )
}

export default PageMeta