import Head from "next/head"
import Heading from "./Header_components/header"


const Layout = ({ children }) => {
    return (
        <>
            <Heading />
            <main>{children}</main>
        </>
    )
}

export default Layout