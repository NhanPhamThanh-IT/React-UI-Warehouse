/**
 * Styles for the SearchBar component using Material-UI's `sx` prop.
 * Defines the appearance of the Paper and TextField components.
 */
export const searchBarStyles = {
    /**
     * Styles for the outer container (Paper component).
     * - `display: "flex"`: Ensures elements inside are aligned in a row.
     * - `alignItems: "center"`: Centers elements vertically.
     * - `borderRadius: "12px"`: Rounds the corners for a softer UI.
     * - `p: 1`: Adds padding inside the Paper.
     * - `bgcolor: "background.paper"`: Uses the theme background color.
     * - `boxShadow: 3`: Adds a shadow effect to the Paper.
     */
    paper: {
        display: "flex",
        alignItems: "center",
        borderRadius: "12px",
        p: 1,
        bgcolor: "background.paper",
        boxShadow: 3,
    },

    /**
     * Styles for the search input field (TextField component).
     * - `flex: 1`: Makes the input take up available space.
     * - `px: 1`: Adds horizontal padding.
     */
    textField: {
        flex: 1,
        px: 1,
        "& .MuiInputBase-root": {
            /**
             * Styles for the root of the input field.
             * - `borderRadius: 2.5`: Rounds the input field corners.
             * - `bgcolor: "#f5f5f5"`: Sets a light gray background.
             * - `padding: "8px"`: Adds internal padding for better spacing.
             */
            borderRadius: 2.5,
            bgcolor: "#f5f5f5",
            padding: "8px",
        },
    },
};
