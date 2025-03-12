/**
 * @fileoverview This module defines styled Material-UI components for a responsive sidebar drawer.
 * It includes a customizable drawer, styled buttons, and layout containers.
 */

import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

/**
 * The width of the sidebar drawer in pixels.
 * @constant {number}
 */
const drawerWidth = 240;

/**
 * Styled MUI Drawer component with dynamic width and responsive behavior.
 * @type {import("@mui/material").StyledComponent}
 * @param {Object} props - The component properties.
 * @param {boolean} props.open - Determines if the drawer is open.
 * @param {boolean} props.isMobile - Specifies if the layout is on a mobile device.
 */
const StyledDrawer = styled(Drawer)(({ theme, open, isMobile }) => ({
    width: isMobile ? (open ? drawerWidth : 0) : open ? drawerWidth : 72,
    flexShrink: 0,
    transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
    background: "white",
    boxShadow: open ? "2px 0 5px rgba(0, 0, 0, 0.1)" : "none",
    "& .MuiDrawer-paper": {
        width: isMobile ? (open ? drawerWidth : 0) : open ? drawerWidth : 72,
        transition: "width 0.3s ease-in-out",
        overflowX: "hidden",
        background: "white",
        marginTop: theme.spacing(8),
    },
}));

/**
 * Styled MUI IconButton with custom padding and hover effect.
 * @type {import("@mui/material").StyledComponent}
 */
const IconButtonStyled = styled(IconButton)({
    display: "flex",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    ":hover": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
});

/**
 * Generates styles for a flex container based on drawer open state.
 * @param {boolean} open - Whether the drawer is open.
 * @returns {Object} The computed styles.
 */
const collapseContainer = (open) => ({
    display: "flex",
    justifyContent: open ? "flex-end" : "center",
    width: "100%",
});

/**
 * Styled Box container for collapsible elements.
 * @type {import("@mui/material").StyledComponent}
 */
const CollapseBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

/**
 * Styled Box component for sections within the drawer.
 * @type {import("@mui/material").StyledComponent}
 * @param {Object} props - The component properties.
 * @param {boolean} props.open - Indicates if the section is open.
 */
const SectionBox = styled(Box)(({ open }) => ({
    padding: 5,
}));

/**
 * Styled Typography component for section titles inside the drawer.
 * @type {import("@mui/material").StyledComponent}
 */
const SectionTitle = styled(Typography)({
    paddingLeft: 10,
    fontWeight: "bold",
    color: "#1976d2",
});

/**
 * Styled ListItemButton with hover effect and rounded corners.
 * @type {import("@mui/material").StyledComponent}
 * @param {Object} props - The component properties.
 * @param {boolean} props.open - Determines if the button is expanded.
 */
const ListItemStyled = styled(ListItemButton)(({ open }) => ({
    display: "flex",
    alignItems: "center",
    padding: "12px 18px",
    borderRadius: 8,
    transition: "background 0.2s",
    ":hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
}));

/**
 * Styled ListItemIcon component with dynamic spacing based on drawer state.
 * @type {import("@mui/material").StyledComponent}
 * @param {Object} props - The component properties.
 * @param {boolean} props.open - Indicates if the icon is expanded.
 */
const ListItemIconStyled = styled(ListItemIcon)(({ open }) => ({
    minWidth: "unset",
    marginRight: open ? 12 : 0,
    color: "#555",
    display: "flex",
    justifyContent: "center",
}));

/**
 * Exported styles object containing all styled components and constants.
 */
export const styles = {
    drawerWidth,
    StyledDrawer,
    IconButtonStyled,
    collapseContainer,
    CollapseBox,
    SectionBox,
    SectionTitle,
    ListItemStyled,
    ListItemIconStyled,
};