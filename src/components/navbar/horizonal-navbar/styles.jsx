/**
 * Defines the CSS styles used in a component.
 * @constant {Object} styles - An object containing style properties for various elements in the component.
 */
export const styles = {
    /**
     * Styles for the container element (main wrapper).
     * @property {string} width - Sets the width to 100% to occupy the full horizontal space.
     * @property {string} typography - Uses the default Material UI typography style "body1".
     * @property {string} justifySelf - Centers the element horizontally in a grid or flexbox layout.
     * @property {string} alignSelf - Centers the element vertically in a grid or flexbox layout.
     */
    container: {
        width: "100%",
        typography: "body1",
        justifySelf: "center",
        alignSelf: "center",
    },

    /**
     * Styles for the tabs element (tab group).
     * @property {string} justifySelf - Centers the element horizontally in a grid or flexbox layout.
     * @property {string} alignSelf - Centers the element vertically in a grid or flexbox layout.
     * @property {string} textTransform - Keeps the original text casing (no uppercase transformation).
     */
    tabs: {
        justifySelf: "center",
        alignSelf: "center",
        textTransform: "none",
    },

    /**
     * Styles for individual tab elements.
     * @property {string} textTransform - Keeps the original text casing (no uppercase transformation).
     * @property {string} fontWeight - Sets the font weight to bold for emphasis.
     * @property {string} fontSize - Sets the font size to 1.1rem for better readability.
     */
    tab: {
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "1.1rem",
    }
};
