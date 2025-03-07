/**
 * Display an image as a background with a blur effect.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.url - The URL of the image to be displayed as a background
 * @param {React.ReactNode} props.children - The content to be displayed on top of the background image
 * @returns {JSX.Element} The DisplayAsBackground component
 */

// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// Create the DisplayAsBackground component
const DisplayAsBackground = ({ url, children }) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                p: 3,
                '&::before': {
                    content: '" "',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 0,
                }
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                {children}
            </Box>
        </Box>
    );
};


// Prop types for the DisplayAsBackground component
DisplayAsBackground.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

// Export the DisplayAsBackground component
export default DisplayAsBackground;
