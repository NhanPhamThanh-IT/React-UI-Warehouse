// Desc: Footer styles for the app

// Defining and exporting the footer styles
export const footerStyles = {
    footerContainer: {
        background: 'linear-gradient(135deg, #1e1e1e, #252525)',
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        py: 2,
        px: 3
    },
    logo: { height: 40 },
    menuLink: {
        mx: 1.5,
        textDecoration: 'none',
        transition: 'color 0.3s',
        '&:hover': { color: '#f4b400' }
    },
    divider: { backgroundColor: 'rgba(255, 255, 255, 0.2)', my: 2 },
    iconButton: {
        mx: 0.5,
        backgroundColor: 'white',
        transition: 'transform 0.3s',
    }
};