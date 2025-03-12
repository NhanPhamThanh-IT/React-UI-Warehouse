/**
 * VerticalNavbar Component
 * 
 * A responsive vertical navigation bar that supports expandable and collapsible states.
 * It displays menu items grouped into sections and provides tooltips when collapsed.
 * 
 * @module VerticalNavbar
 */

import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Tooltip,
    Divider,
    useMediaQuery
} from "@mui/material";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { motion } from "framer-motion";
import { styles } from "./styles";

/**
 * VerticalNavbar Component
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.menuItems - Array of menu sections, each containing a group title and a list of items.
 * @param {string} props.menuItems[].group - The name of the menu section.
 * @param {Array} props.menuItems[].items - The menu items within the section.
 * @param {string} props.menuItems[].items[].text - The text label of the menu item.
 * @param {JSX.Element} props.menuItems[].items[].icon - The icon associated with the menu item.
 * 
 * @returns {JSX.Element} The rendered VerticalNavbar component.
 */
export const VerticalNavbar = ({ menuItems }) => {
    /**
     * State to manage the open/close status of the navbar.
     * @type {[boolean, function]}
     */
    const [open, setOpen] = useState(true);

    /**
     * Determines if the screen width is mobile-sized.
     * @type {boolean}
     */
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <styles.StyledDrawer
            variant={isMobile ? "temporary" : "permanent"}
            open={open}
            onClose={() => setOpen(false)}
            isMobile={isMobile}
        >
            <List>
                {/* Collapse/Expand Button */}
                <ListItem disablePadding sx={styles.collapseContainer(open)}>
                    <styles.IconButtonStyled onClick={() => setOpen(!open)}>
                        {open ? (
                            <styles.CollapseBox>
                                <ChevronLeft />
                            </styles.CollapseBox>
                        ) : (
                            <Menu />
                        )}
                    </styles.IconButtonStyled>
                </ListItem>
                <Divider sx={{ margin: "10px 0" }} />

                {/* Render Menu Sections */}
                {menuItems.map((section, index) => (
                    <styles.SectionBox key={index} open={open}>
                        {open && <styles.SectionTitle variant="title2">{section.group}</styles.SectionTitle>}
                        <List>
                            {section.items.map((item, idx) => (
                                <motion.div key={idx} whileHover={{ scale: 1.05 }}>
                                    <ListItem disablePadding>
                                        <Tooltip title={!open ? item.text : ""} placement="right">
                                            <styles.ListItemStyled open={open}>
                                                <styles.ListItemIconStyled open={open}>{item.icon}</styles.ListItemIconStyled>
                                                {open && <ListItemText primary={item.text} primaryTypographyProps={{ variant: "body2" }} />
                                                }
                                            </styles.ListItemStyled>
                                        </Tooltip>
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>
                    </styles.SectionBox>
                ))}
            </List>
        </styles.StyledDrawer>
    );
};