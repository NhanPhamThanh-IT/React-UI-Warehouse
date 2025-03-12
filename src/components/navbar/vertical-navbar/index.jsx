import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Box, Tooltip, Typography, Divider } from "@mui/material";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { motion } from "framer-motion";
import { styles } from "./styles";

export const VerticalNavbar = ({ menuItems }) => {
    const [open, setOpen] = useState(true);

    return (
        <Drawer variant="permanent" sx={styles.drawer(open)}>
            <List>
                <ListItem disablePadding sx={styles.listItem(open)}>
                    <IconButton onClick={() => setOpen(!open)} sx={styles.iconButton}>
                        {open ? <Box display="flex" alignItems="center">
                            <Typography>Collapse</Typography>
                            <ChevronLeft />
                        </Box>
                            : <Menu />}
                    </IconButton>
                </ListItem>
                <Divider sx={styles.divider} />
                {menuItems.map((section, index) => (
                    <Box key={index} sx={styles.sectionBox(open)}>
                        {open && <Typography variant="caption" sx={styles.sectionTitle}>{section.group}</Typography>}
                        <List>
                            {section.items.map((item, idx) => (
                                <motion.div key={idx} whileHover={{ scale: 1.05 }}>
                                    <ListItem disablePadding>
                                        <Tooltip title={!open ? item.text : ""} placement="right">
                                            <ListItemButton sx={styles.listItemButton(open)}>
                                                <ListItemIcon sx={styles.listItemIcon}>{item.icon}</ListItemIcon>
                                                {open && <ListItemText primary={item.text} />}
                                            </ListItemButton>
                                        </Tooltip>
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>
                    </Box>
                ))}
            </List>
        </Drawer>
    );
};
