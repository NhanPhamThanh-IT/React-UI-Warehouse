/**
 * Styles configuration object.
 * @namespace styles
 */
export const styles = {
    /**
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

    /** Main introduction container */
    introContainer: {
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
     * @typedef {Object} JoinUsContainerStyle
     * @property {string | Object} flexDirection - Flexbox direction property (responsive).
     * @property {string} justifyContent - Flexbox justify-content property.
     * @property {number} gap - Gap between elements.
     * @property {string} width - Width of the container.
     * @property {string} px - Horizontal padding value.
     * @property {string} display - CSS display property.
     * @property {string} alignItems - Flexbox align-items property.
     * @property {string} textAlign - CSS text-align property.
     * @property {string} backgroundImage - Background image style.
     * @property {string} borderBottom - Border bottom property.
     */

    /** "Join Us" section container */
    joinUsContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        px: '2rem',
        gap: 2,
        backgroundImage: 'linear-gradient(#FFF 0%, hsl(210, 100%, 96%) 100%)',
        borderBottom: '1px solid hsl(215, 15%, 92%)',
    },

    /**
     * @typedef {Object} JoinUsLeftColumnStyle
     * @property {number} flex - Flex grow value.
     * @property {string | Object} textAlign - Text alignment (responsive).
     */

    /** Left text column in "Join Us" */
    joinUsLeftColumn: {
        flex: 1,
        textAlign: { xs: 'center', md: 'left' },
    },

    /**
     * @typedef {Object} JoinUsRightColumnStyle
     * @property {number} flex - Flex grow value.
     * @property {string} maxWidth - Maximum width of the image.
     */

    /** Right image column in "Join Us" */
    joinUsRightColumn: {
        flex: 1,
        maxWidth: '100%',
    },

    /**
     * @typedef {Object} JoinUsImageStyle
     * @property {number} flex - Flex grow value.
     * @property {string} maxWidth - Maximum width of the image.
     * @property {number} my - Margin-y value (vertical spacing).
     * @property {string} borderRadius - Border-radius for rounded corners.
     * @property {number} px - Padding-x value.
     * @property {string} border - Border style.
     */

    /** Image inside "Join Us" */
    joinUsImage: {
        flex: 1,
        maxWidth: '100%',
        my: 4,
        borderRadius: 4,
        px: 5,
        border: '2px solid hsl(215, 15%, 92%)',
    },

    /**
     * @typedef {Object} PrivacyPolicyContainerStyle
     * @property {string} display - CSS display property.
     * @property {string} flexDirection - Flexbox direction property.
     * @property {string} justifyContent - Flexbox justify-content property.
     * @property {string} alignItems - Flexbox align-items property.
     * @property {string} textAlign - CSS text-align property.
     * @property {number} mt - Margin-top value (typically a spacing unit).
     * @property {string} backgroundImage - Background image style (CSS gradient or image URL).
     * @property {string} borderBottom - Border bottom property (color, style, width).
     */

    /** Privacy policy container */
    privacyPolicyContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        mt: 4,
        backgroundImage: 'linear-gradient(#FFF 0%, hsl(210, 100%, 96%) 100%)',
        borderBottom: '1px solid hsl(215, 15%, 92%)',
    }
};
