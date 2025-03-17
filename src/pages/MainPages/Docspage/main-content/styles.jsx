/**
 * Style definitions for the AestheticHub UI components.
 * @type {Object}
 */
export const styles = {
    /**
     * Styles for the main container.
     * @type {Object}
     * @property {string} display - The display type (flex).
     * @property {string} flexDirection - The flex direction (column).
     * @property {string} alignItems - Alignment of items (center).
     * @property {string} justifyContent - Justification of content (center).
     * @property {string} minHeight - Minimum height of the container.
     * @property {string} textAlign - Text alignment (center).
     * @property {number} p - Padding.
     */
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)",
        textAlign: "center",
        p: 2,
    },

    /**
     * Styles for the title text.
     * @type {Object}
     * @property {string} fontWeight - Font weight (bold).
     */
    title: {
        fontWeight: "bold",
    },

    /**
     * Styles for the buttons container.
     * @type {Object}
     * @property {number} px - Horizontal padding.
     */
    buttonsContainer: {
        px: 16,
    },

    /**
     * Generates styles for a button.
     * @param {Object} button - Button properties.
     * @param {string} button.color - Background color of the button.
     * @param {string} button.borderColor - Border color of the button.
     * @param {string} button.textColor - Text color of the button on hover.
     * @returns {Object} Styles object for the button.
     */
    button: (button) => ({
        backgroundColor: button.color,
        color: "rgb(82,82,82)",
        borderRadius: 2.5,
        px: 3,
        py: 1.5,
        border: "2px solid rgb(229,229,229)",
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        '& .MuiButton-startIcon': {
            marginRight: "8px",
        },
        '&:hover': {
            borderColor: button.borderColor,
            color: button.textColor,
        },
    }),
};
