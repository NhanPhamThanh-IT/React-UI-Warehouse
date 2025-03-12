import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme, open, isMobile }) => ({
    width: isMobile ? (open ? drawerWidth : 0) : open ? drawerWidth : 72,
    flexShrink: 0,
    transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
    backgroundColor: "#f4f4f8",
    boxShadow: open ? "2px 0 5px rgba(0, 0, 0, 0.1)" : "none",
    "& .MuiDrawer-paper": {
        width: isMobile ? (open ? drawerWidth : 0) : open ? drawerWidth : 72,
        transition: "width 0.3s ease-in-out",
        overflowX: "hidden",
        backgroundColor: "#f4f4f8",
        marginTop: theme.spacing(8),
    },
}));

const IconButtonStyled = styled(IconButton)({
    display: "flex",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    ":hover": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
});

const collapseContainer = (open) => ({
    display: "flex",
    justifyContent: open ? "flex-end" : "center",
    width: "100%",
});

const CollapseBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const SectionBox = styled(Box)(({ open }) => ({
    padding: 5,
}));

const SectionTitle = styled(Typography)({
    paddingLeft: 10,
    fontWeight: "bold",
    opacity: 0.6,
    color: "#666",
});

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

const ListItemIconStyled = styled(ListItemIcon)(({ open }) => ({
    minWidth: "unset",
    marginRight: open ? 12 : 0,
    color: "#555",
    display: "flex",
    justifyContent: "center",
}));

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