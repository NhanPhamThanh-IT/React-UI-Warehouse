/**
 * Header component for the application.
 * 
 * @component
 * @returns {JSX.Element} The Header component
 */

// Import dependencies
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Import necessary MUI components
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";

// Import custom constants
import headerItems from "./constants";

// Import custom styles
import headerStyles from "./styles";

/**
 * Renders the header of the application, including navigation buttons and a mobile drawer.
 * 
 * @returns {JSX.Element} Header component
 */
const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Handles navigation when a menu item is clicked.
     * 
     * @param {string} path - The path to navigate to
     */
    const handleNavigation = useCallback((path) => {
        navigate(path);
        setIsOpen(false);
    }, [navigate]);

    return (
        <AppBar sx={headerStyles.appBar}>
            <Toolbar>
                <Button onClick={() => navigate("/")} sx={headerStyles.titleContainer}>
                    <Typography variant="h6" sx={headerStyles.title}>
                        AestheticHub
                    </Typography>
                </Button>

                {/* Desktop Navigation */}
                <Box sx={headerStyles.navButtons}>
                    {headerItems.map((item) => (
                        <Button key={item.path} color="inherit" onClick={() => handleNavigation(item.path)} sx={headerStyles.buttonLabel}>
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

// Export the Header component
export default Header;