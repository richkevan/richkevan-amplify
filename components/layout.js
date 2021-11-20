import Head from "next/head"
import Heading from "./Header_components/header"
import Footer from "./Footer_components/footer"


const Layout = ({ children }) => {
    return (
        <>
            <Heading />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout