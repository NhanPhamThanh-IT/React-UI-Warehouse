import React from "react";
import { Box } from "@mui/material";

import { VerticalNavbar } from "../../../components/navbar/vertical-navbar/index";

import { styles } from "./styles";

import { menuItems } from "./constants";

export const Docspage = () => {
    return (
        <Box sx={styles.container}>
            <VerticalNavbar menuItems={menuItems} />
        </Box>
    );
};
