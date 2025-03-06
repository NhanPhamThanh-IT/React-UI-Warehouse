// Desc: Layout component for the application

// Import necessary React modules
import { Outlet } from "react-router-dom";

// Importing custom components
import Header from "./Header";
import Footer from "./Footer";

// Layout component
const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

// Export the layout component
export default Layout;