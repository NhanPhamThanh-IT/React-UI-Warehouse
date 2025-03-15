/**
 * Importing necessary components from React, Material-UI library.
 */

import React from "react";
import { Box } from "@mui/material";

/**
 * Importing custom components.
 */
import { VerticalNavbar } from "../../../components/navbar/vertical-navbar/index";
import { MainContent } from "./main-content/index";

/**
 * Importing styles from the current file.
 */
import { styles } from "./styles";

/**
 * Importing constants from the current file.
 * `menuItems` is an array of objects, each representing a menu item in the sidebar.
 */
import { menuItems } from "./constants";

/**
 * `Docspage` Component
 * 
 * This component serves as the main layout for the documentation page.
 * It consists of a vertical navigation bar (sidebar) and the main content area.
 * 
 * @component
 * @returns {JSX.Element} The rendered documentation page layout.
 */
export const Docspage = () => {
    return (
        <Box sx={styles.container}>
            {/* Sidebar Navigation */}
            <VerticalNavbar menuItems={menuItems} />

            {/* Main Content */}
            <MainContent />
        </Box>
    );
};
