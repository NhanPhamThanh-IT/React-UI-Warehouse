/**
 * Styles object containing various style definitions for UI components.
 * @constant {Object} styles
 */
export const styles = {
    /**
     * Style for the title container.
     * Defines the appearance of the main title section.
     * @property {Object} titleContainer
     * @property {string} titleContainer.fontWeight - Sets the font weight to bold.
     * @property {number} titleContainer.mb - Defines the margin-bottom value.
     */
    titleContainer: {
        fontWeight: 'bold',
        mb: 1,
    },

    /**
     * Style for normal title content.
     * Used for standard text without special effects.
     * @property {Object} titleNormalContent
     * @property {string} titleNormalContent.color - Sets the text color.
     */
    titleNormalContent: {
        color: 'hsl(210, 14%, 13%)',
    },

    /**
     * Style for prominent title content with a gradient text effect.
     * This style applies a gradient background clipped to the text.
     * @property {Object} titleProminentContent
     * @property {string} titleProminentContent.background - Defines a linear gradient background.
     * @property {string} titleProminentContent.WebkitBackgroundClip - Clips the background to the text.
     * @property {string} titleProminentContent.WebkitTextFillColor - Sets the text color to transparent for the gradient effect.
     */
    titleProminentContent: {
        background: "linear-gradient(90deg, hsl(210, 100%, 60%) 5%, hsl(210, 100%, 45%) 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },

    /**
     * Style for the subtitle container.
     * Defines the appearance of subtitles under the main title.
     * @property {Object} subtitleContainer
     * @property {string} subtitleContainer.color - Sets the text color.
     * @property {number} subtitleContainer.fontWeight - Defines the font weight.
     */
    subtitleContainer: {
        color: 'hsl(210, 100%, 45%)',
        fontWeight: 600,
    },

    /**
     * Style for the description container.
     * Used for descriptive text content with a limited width.
     * @property {Object} descriptionContainer
     * @property {string} descriptionContainer.color - Sets the text color.
     * @property {number} descriptionContainer.maxWidth - Defines the maximum width for text wrapping.
     */
    descriptionContainer: {
        color: 'hsl(215, 15%, 22%)',
        maxWidth: 500,
    },
};
