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

export const VerticalNavbar = ({ menuItems }) => {
    const [open, setOpen] = useState(true);
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <styles.StyledDrawer
            variant={isMobile ? "temporary" : "permanent"}
            open={open}
            onClose={() => setOpen(false)}
            isMobile={isMobile}
        >
            <List>
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
                {menuItems.map((section, index) => (
                    <styles.SectionBox key={index} open={open}>
                        {open && <styles.SectionTitle variant="caption">{section.group}</styles.SectionTitle>}
                        <List>
                            {section.items.map((item, idx) => (
                                <motion.div key={idx} whileHover={{ scale: 1.05 }}>
                                    <ListItem disablePadding>
                                        <Tooltip title={!open ? item.text : ""} placement="right">
                                            <styles.ListItemStyled open={open}>
                                                <styles.ListItemIconStyled open={open}>{item.icon}</styles.ListItemIconStyled>
                                                {open && <ListItemText primary={item.text} />}
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
