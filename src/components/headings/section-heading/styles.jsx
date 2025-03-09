export const styles = {
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
        fontWeight: 600,
    },
};