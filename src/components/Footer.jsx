import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'grey.200', p: 2, mt: 4 }}>
            <Typography variant="body2" color="textSecondary" align="center">
                Footer
            </Typography>
        </Box>
    );
};

export default Footer;
