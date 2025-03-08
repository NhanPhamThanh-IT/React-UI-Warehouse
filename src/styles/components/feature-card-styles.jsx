/**
 * Styles object containing predefined styles for the FeatureCard component.
 * These styles are written in a format compatible with the MUI `sx` prop.
 *
 * @constant {Object} styles - Contains styling properties for different parts of the FeatureCard.
 */
export const styles = {
    /**
     * Styling for the outer container of the feature card.
     *
     * @property {number} flex - Defines the flex-grow factor to allow flexible resizing.
     * @property {string} display - Uses 'flex' to enable flexible box layout.
     * @property {string} flexDirection - Sets the direction of the flex container to 'column'.
     * @property {string} border - Defines a light gray border with an HSL color value.
     * @property {number} borderRadius - Rounds the corners of the card with a value of 3.
     */
    cardContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid hsl(215, 15%, 92%)',
        borderRadius: 3,
    },

    /**
     * Styling for the content section of the feature card.
     *
     * @property {string} p - Padding is set to 'auto' (though auto is not a valid padding value in MUI).
     * @property {number} pb - Padding-bottom set to 0.
     * @property {string} display - Uses 'flex' for flexible layout.
     * @property {string} flexDirection - Arranges children elements in a column.
     */
    cardContent: {
        p: 'auto', // 'auto' is not valid for padding in MUI, consider replacing with a numeric value
        pb: 0,
        display: 'flex',
        flexDirection: 'column',
    },

    /**
     * Styling for the icon container inside the feature card.
     *
     * @property {number} p - Padding of 1 unit.
     * @property {string} backgroundColor - Light blue background using HSL color.
     * @property {string} display - Uses 'flex' for alignment control.
     * @property {string} alignItems - Centers items along the cross-axis.
     * @property {number} borderRadius - Rounds corners of the icon container.
     * @property {string} border - Defines a solid border with a vibrant blue color.
     * @property {string} width - Sets the width to fit the content inside.
     */
    cardIconContainer: {
        p: 1,
        backgroundColor: 'hsl(210, 100%, 96%)',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 3,
        border: '2px solid hsl(210, 100%, 70%)',
        width: 'fit-content',
    },

    /**
     * Styling for the title text of the feature card.
     *
     * @property {number} mt - Sets the top margin to 2 units.
     * @property {number} fontWeight - Makes the text bold (600 weight).
     * @property {number} mb - Sets the bottom margin to 1 unit.
     */
    cardTitle: {
        mt: 2,
        fontWeight: 600,
        mb: 1,
    },

    /**
     * Styling for the description text of the feature card.
     *
     * @property {string} color - Sets the text color to a dark shade of gray using HSL.
     */
    cardDescription: {
        color: 'hsl(215, 15%, 10%)',
    },
};
