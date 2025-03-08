/**
 * Styles configuration for various UI components.
 */
const styles = {
    /**
     * Container style.
     * @property {string} display - Sets the display type to flex.
     * @property {string} justifyContent - Centers content horizontally.
     * @property {string} alignItems - Centers content vertically.
     * @property {number} px - Horizontal padding.
     * @property {number} py - Vertical padding.
     */
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 4,
    },

    /**
     * Subtitle container style.
     * @property {string} color - Text color.
     * @property {object} textAlign - Responsive text alignment.
     * @property {string} backgroundColor - Background with transparency.
     * @property {number} borderRadius - Rounded corners.
     * @property {number} px - Horizontal padding.
     * @property {number} py - Vertical padding.
     * @property {string} width - Auto-sized width based on content.
     * @property {number} mb - Bottom margin.
     */
    subtitleContainer: {
        color: 'white',
        textAlign: { xs: 'center', md: 'left' },
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 3,
        px: 2,
        py: 1,
        width: 'fit-content',
        mb: 2
    },

    /**
     * Title container style.
     * @property {string} color - Text color.
     * @property {object} textAlign - Responsive text alignment.
     * @property {string} fontWeight - Font weight.
     * @property {number} mb - Bottom margin.
     */
    titleContainer: {
        color: 'white',
        textAlign: { xs: 'center', md: 'left' },
        fontWeight: 'bold',
        mb: 2,
    },

    /**
     * Description text style.
     * @property {number} mt - Top margin.
     * @property {string} textAlign - Justified text alignment.
     * @property {string} color - Text color.
     */
    description: {
        mt: 2,
        textAlign: 'justify',
        color: 'white',
    },

    /**
     * Button container style.
     * @property {number} mt - Top margin.
     * @property {string} display - Sets display to flex.
     * @property {number} gap - Space between buttons.
     * @property {object} justifyContent - Responsive alignment of buttons.
     */
    buttonContainer: {
        mt: 3,
        display: 'flex',
        gap: 2,
        justifyContent: { xs: 'center', md: 'flex-start' },
    },

    /**
     * Image style.
     * @property {object} width - Responsive width.
     * @property {number} height - Fixed height.
     * @property {string} objectFit - Ensures the image covers its container.
     * @property {number} borderRadius - Rounded corners.
     */
    image: {
        width: { xs: '80%', md: '90%' },
        height: 450,
        objectFit: 'cover',
        borderRadius: 3,
    },
};

// Export styles
export default styles;
