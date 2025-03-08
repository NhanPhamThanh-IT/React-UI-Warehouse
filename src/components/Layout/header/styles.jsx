/**
 * @fileoverview Styles for the Header component.
 * @module headerStyles
 */

/**
 * Styles for the Header component.
 * @constant {Object} headerStyles
 */
const headerStyles = {
    /**
     * Styles for the AppBar.
     * @property {Object} appBar
     * @property {string} appBar.position - Positioning of the AppBar.
     * @property {number} appBar.boxShadow - Shadow level.
     * @property {string} appBar.color - Text color.
     * @property {string} appBar.backgroundColor - Background color.
     */
    appBar: {
        position: "static",
        boxShadow: 2,
        color: "white",
        backgroundColor: "black"
    },

    /**
     * Styles for the title text.
     * @property {Object} title
     * @property {number} title.flexGrow - Flex grow property for spacing.
     * @property {string} title.fontWeight - Font weight.
     * @property {string} title.color - Text color.
     */
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        color: "white"
    },

    /**
     * Styles for the navigation buttons container.
     * @property {Object} navButtons
     * @property {Object} navButtons.display - Display settings for different screen sizes.
     * @property {number} navButtons.gap - Space between buttons.
     */
    navButtons: {
        display: { xs: "none", md: "flex" },
        gap: 2,
    },

    /**
     * Styles for individual navigation buttons.
     * @property {Object} buttonLabel
     * @property {number} buttonLabel.fontWeight - Font weight of the button text.
     * @property {string} buttonLabel.textTransform - Text transformation style.
     * @property {string} buttonLabel.fontSize - Font size.
     * @property {Object} buttonLabel['&:hover'] - Hover styles.
     * @property {string} buttonLabel['&:hover'].backgroundColor - Background color on hover.
     * @property {string} buttonLabel['&:hover'].color - Text color on hover.
     * @property {string} buttonLabel.transition - Transition effect.
     */
    buttonLabel: {
        fontWeight: 600,
        textTransform: "none",
        fontSize: "1rem",
        "&:hover": {
            backgroundColor: "white",
            color: "black"
        },
        transition: "all 0.3s"
    },

    /**
     * Styles for the menu icon in mobile view.
     * @property {Object} menuIcon
     * @property {Object} menuIcon.display - Display settings for different screen sizes.
     * @property {string} menuIcon.color - Icon color.
     */
    menuIcon: {
        display: { xs: "block", md: "none" },
        color: "white"
    },

    /**
     * Styles for the navigation drawer.
     * @property {Object} drawerBox
     * @property {number} drawerBox.width - Width of the drawer.
     */
    drawerBox: {
        width: 250
    }
};

// Exporting the headerStyles object
export default headerStyles;
