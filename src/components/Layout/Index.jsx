/**
 * Layout component for the application.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {boolean} [props.hasHeader=true] - Whether to display the Header
 * @param {boolean} [props.hasFooter=true] - Whether to display the Footer
 * @returns {JSX.Element} The Layout component
 */

// Importing necessary libraries and tools
import { Outlet } from "react-router-dom";

// Importing necessary components from MUI library
import { Box } from "@mui/material";

// Importing custom components
import Header from "./header/index";
import Footer from "./footer/index";

// Importing styles
import { styles } from "./styles";

/**
 * Renders the main layout of the application, including the Header, dynamic content via Outlet, and Footer.
 */
const Layout = ({ hasHeader = true, hasFooter = true }) => (
    <Box sx={styles.container}>
        {hasHeader && <Header />}
        <Outlet />
        {hasFooter && <Footer />}
    </Box>
);

// Exporting the Layout component
export default Layout;
