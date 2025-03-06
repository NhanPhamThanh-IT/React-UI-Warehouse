import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import headerItems from "../../constants/headerItems";
import headerStyles from "../../styles/HeaderStyles"

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = useCallback((path) => {
        navigate(path);
        setIsOpen(false);
    }, [navigate]);

    return (
        <AppBar sx={headerStyles.appBar}>
            <Toolbar>
                <Typography variant="h6" sx={headerStyles.title}>
                    AestheticHub
                </Typography>

                {/* Desktop Navigation */}
                <Box sx={headerStyles.navButtons}>
                    {headerItems.map((item) => (
                        <Button key={item.path} color="inherit" onClick={() => handleNavigation(item.path)}>
                            {item.label}
                        </Button>
                    ))}
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton edge="end" sx={headerStyles.menuIcon} onClick={() => setIsOpen(true)}>
                    <Menu />
                </IconButton>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
                <Box sx={headerStyles.drawerBox}>
                    <List>
                        {headerItems.map((item) => (
                            <ListItem button key={item.path} onClick={() => handleNavigation(item.path)}>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
