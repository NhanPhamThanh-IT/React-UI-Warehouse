import React from 'react';
import { Box } from '@mui/material';
import banner from '/homepage-banner.jpg';

import BackgroundImage from '../../components/images/display-as-background';

const Homepage = () => {
    return (
        <BackgroundImage url={banner}>
            <Box sx={{ backgroundColor: 'transparent' }}>
                <h1>Welcome to our website</h1>
            </Box>
        </BackgroundImage>
    );
};

export default Homepage;
