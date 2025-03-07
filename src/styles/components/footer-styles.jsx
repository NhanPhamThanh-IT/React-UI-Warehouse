/**
 * @fileoverview Footer styles for the app.
 * @module footerStyles
 */

/**
 * Styles for the footer components.
 * @constant {Object} footerStyles
 */
export const footerStyles = {
    /**
     * Footer container styles.
     * @property {Object} footerContainer
     * @property {string} footerContainer.background - Background gradient for the footer.
     * @property {string} footerContainer.color - Text color with transparency.
     * @property {string} footerContainer.textAlign - Text alignment.
     * @property {number} footerContainer.py - Vertical padding.
     * @property {number} footerContainer.px - Horizontal padding.
     */
    footerContainer: {
        background: 'linear-gradient(135deg, #1e1e1e, #252525)',
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        py: 2,
        px: 3
    },

    /**
     * Logo styles.
     * @property {Object} logo
     * @property {number} logo.height - Height of the logo.
     */
    logo: { height: 40 },

    /**
     * Styles for menu links.
     * @property {Object} menuLink
     * @property {number} menuLink.mx - Horizontal margin.
     * @property {string} menuLink.textDecoration - Text decoration for links.
     * @property {string} menuLink.transition - Transition effect for color change.
     * @property {Object} menuLink['&:hover'] - Hover effect styles.
     * @property {string} menuLink['&:hover'].color - Color change on hover.
     */
    menuLink: {
        mx: 1.5,
        textDecoration: 'none',
        transition: 'color 0.3s',
        '&:hover': { color: '#f4b400' }
    },

    /**
     * Divider styles.
     * @property {Object} divider
     * @property {string} divider.backgroundColor - Background color for the divider.
     * @property {number} divider.my - Vertical margin.
     */
    divider: { backgroundColor: 'rgba(255, 255, 255, 0.2)', my: 2 },

    /**
     * Styles for icon buttons.
     * @property {Object} iconButton
     * @property {number} iconButton.mx - Horizontal margin.
     * @property {string} iconButton.backgroundColor - Background color of the button.
     * @property {string} iconButton.transition - Transition effect for scaling.
     */
    iconButton: {
        mx: 0.5,
        backgroundColor: 'white',
        transition: 'transform 0.3s',
    }
};
