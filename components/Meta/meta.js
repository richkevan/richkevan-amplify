import Head from "next/head"

const PageMeta = () => {


    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:type" content="website"/>
            <meta property='og:title' content='Rich Kevan Full Stack Developer' />
            <meta property="og:description" content="Rich Kevan's Portfolio" />
            <meta property='og:image' content='https://f002.backblazeb2.com/file/portfolio-assets/My+Post+(5).png' key='ogimage' />
            <meta property='og:url' content='https://richkevan.com' />
        </Head>
    )
}

export default PageMeta