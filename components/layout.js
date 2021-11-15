import Head from "next/head"
import Navbar from "./Header_components/navbar"
import Footer from "./Footer_components/footer"


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout