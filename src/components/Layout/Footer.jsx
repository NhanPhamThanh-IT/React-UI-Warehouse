// Desc: Footer component for the app

// Importing necessary dependencies
import React from 'react';
import { IconButton, Typography, Box, Divider, Link } from '@mui/material';

// Importing necessary icons and constants
import { PRODUCT_NAME, PRODUCT_LOGO, MENU_LINKS, SOCIAL_ICONS, ICONS_COLOR } from '../../constants/footer-items';

// Importing footer styles
import { footerStyles } from '../../styles/footer-styles';

// Defining and exporting the Footer component
export default function Footer() {
    return (
        <Box component="footer" sx={footerStyles.footerContainer}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box component="img" src={PRODUCT_LOGO} alt={`${PRODUCT_NAME} Logo`} sx={footerStyles.logo} />
                <Box component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
                    {MENU_LINKS.map((text) => (
                        <Link key={text} href="#" color="inherit" sx={footerStyles.menuLink}>
                            {text}
                        </Link>
                    ))}
                </Box>
            </Box>

            <Divider sx={footerStyles.divider} />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    © {new Date().getFullYear()} Copyright:{' '}
                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
                        {PRODUCT_NAME}
                    </Link>
                </Typography>
                <Box>
                    {SOCIAL_ICONS.map((Icon, index) => (
                        <IconButton
                            key={index}
                            aria-label={`Social icon ${index}`}
                            color="inherit"
                            size="small"
                            href="#!"
                            sx={{ ...footerStyles.iconButton, color: ICONS_COLOR[index], border: `2px solid ${ICONS_COLOR[index]}` }}
                        >
                            <Icon />
                        </IconButton>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
