import Heading from "./Header_components/header"


const Layout = ({ children }) => {
    return (
        <>
            <Heading />
            {children}
        </>
    )
}

export default Layout