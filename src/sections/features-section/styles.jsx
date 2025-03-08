/**
 * Styles configuration for various components in the UI.
 */
export const styles = {
    /**
     * Container style for the main layout.
     * @property {string} backgroundColor - Background color in HSL format.
     * @property {object} py - Padding on the Y-axis with responsive values.
     * @property {object} px - Padding on the X-axis with responsive values.
     */
    container: {
        backgroundColor: 'hsl(210, 100%, 98%)',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
    },

    /**
     * Title container style.
     * @property {string} fontWeight - Font weight set to bold.
     * @property {number} mb - Margin bottom value.
     */
    titleContainer: {
        fontWeight: 'bold',
        mb: 3.5,
    },

    /**
     * Prominent title content style with gradient text effect.
     * @property {string} background - Linear gradient background for the text.
     * @property {string} WebkitBackgroundClip - Clips background to the text.
     * @property {string} WebkitTextFillColor - Sets text color to transparent.
     */
    titleProminentContent: {
        background: "linear-gradient(90deg, hsl(210, 100%, 60%) 5%, hsl(210, 100%, 45%) 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },

    /**
     * Subtitle container style.
     * @property {string} color - Text color.
     * @property {string} width - Fit content width.
     * @property {number} fontWeight - Font weight value.
     */
    subtitleContainer: {
        color: 'hsl(210, 100%, 45%)',
        width: 'fit-content',
        fontWeight: 600,
    },

    /**
     * Feature card layout container style.
     * @property {string} justifyContent - Alignment of items along the main axis.
     * @property {string} alignItems - Alignment of items along the cross axis.
     */
    FeatureCardLayoutContainer: {
        justifyContent: "center",
        alignItems: "stretch"
    },

    /**
     * Feature card container style.
     * @property {string} display - Display type set to flex.
     * @property {string} flexDirection - Direction of flex items set to column.
     * @property {string} height - Full height of the container.
     */
    featureCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
};
