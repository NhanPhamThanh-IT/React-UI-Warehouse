/**
 * @module Styles
 * @description Defines styles for the slider component.
 */

/**
 * Object containing styles used in the component.
 * @constant
 * @type {Object}
 */
export const styles = {
    /**
     * Styles for the slider container.
     */
    slider: {
        width: "90%",        // Sets the width relative to the parent
        mt: 4,               // Adds top margin spacing
        mb: 2,               // Adds bottom margin spacing
        overflow: "hidden",  // Prevents content overflow
    },

    /**
     * Styles for individual slides.
     */
    slide: {
        objectFit: "cover",   // Ensures the image covers its container properly
        width: "90%",        // Ensures consistent sizing relative to the parent
        height: "auto",      // Adjusts height automatically based on content
        display: "block",    // Ensures proper block-level rendering
        px: 2.5,            // Horizontal padding for spacing
    },
};
