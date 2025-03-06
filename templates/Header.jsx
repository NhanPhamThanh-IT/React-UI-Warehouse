import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Header</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
