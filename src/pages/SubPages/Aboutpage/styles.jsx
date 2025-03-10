/**
 * Styles configuration object.
 * @namespace styles
 */
export const styles = {
    /**
     * Container style.
     * @typedef {Object} ContentContainerStyle
     * @property {string} display - CSS display property.
     * @property {string} flexDirection - Flexbox direction property.
     * @property {string} justifyContent - Flexbox justify-content property.
     * @property {string} alignItems - Flexbox align-items property.
     * @property {string} textAlign - CSS text-align property.
     * @property {number} mt - Margin-top value (typically a spacing unit).
     * @property {string} backgroundImage - Background image style (CSS gradient or image URL).
     * @property {string} borderBottom - Border bottom property (color, style, width).
     */

    /**
     * Style for the main content container.
     * @type {ContentContainerStyle}
     */
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        mt: 4,
        backgroundImage: 'linear-gradient(#FFF 0%, hsl(210, 100%, 96%) 100%)',
        borderBottom: '1px solid hsl(215, 15%, 92%)',
    },

    /**
     * Style for the "Join Us" image.
     * @typedef {Object} JoinUsImageStyle
     * @property {number} my - Margin-y value (typically a spacing unit).
     * @property {string} width - Width of the image.
     * @property {string} maxWidth - Maximum width of the image.
     * @property {string} borderRadius - Border-radius for rounded corners.
     * @property {number} padding - Padding value (typically a spacing unit).
     * @property {string} border - Border style (color, style, width).
     */

    /**
     * Style for the "Join Us" image.
     * @type {JoinUsImageStyle}
     */
    joinUsImage: {
        my: 4,
        width: '90%',
        maxWidth: '90%',
        borderRadius: 4,
        padding: 5,
        border: '1px solid hsl(215, 15%, 92%)',
    },
};