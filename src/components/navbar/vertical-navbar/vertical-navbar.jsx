import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Info, Settings, ContactMail } from "@mui/icons-material";

const menuItems = [
    { text: "Home", icon: <Home /> },
    { text: "About", icon: <Info /> },
    { text: "Settings", icon: <Settings /> },
    { text: "Contact", icon: <ContactMail /> },
];

export const VerticalNavbar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                position: "absolute",
                zIndex: 1,
                "& .MuiDrawer-paper": {
                    width: 240,
                    boxSizing: "border-box",
                    backgroundColor: "#1E1E2F",
                    color: "white",
                    position: "relative",
                    zIndex: 1,
                },
            }}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index} sx={{ "&:hover": { backgroundColor: "#33334D" } }}>
                        <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
