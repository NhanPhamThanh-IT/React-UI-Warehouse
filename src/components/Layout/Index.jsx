/**
 * Layout component for the application.
 * 
 * @component
 * @returns {JSX.Element} The Layout component
 */

// Importing necessary libraries and tools
import { Outlet } from "react-router-dom";

// Importing custom components
import Header from "./Header";
import Footer from "./Footer";

/**
 * Renders the main layout of the application, including the Header, dynamic content via Outlet, and Footer.
 * 
 * @returns {JSX.Element} Layout component
 */
const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

// Exporting the Layout component
export default Layout;
