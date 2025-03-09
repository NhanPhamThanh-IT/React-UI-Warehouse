/**
 * @module Styles
 * @description Defines the styles used in the component.
 */

/**
 * Object containing styles used in the component.
 * @constant
 * @type {Object}
 */
export const styles = {
    /**
     * Style for the slider (the container holding slides).
     * @property {Object} slider - Style object for the slider.
     * @property {string} slider.width - Width of the slider (90% of the parent element).
     * @property {string} slider.margin - Centers the slider by setting the margin to "auto".
     * @property {number} slider.mt - Top margin with a value of 4.
     * @property {number} slider.borderRadius - Border radius (rounded corners) with a value of 2.
     * @property {string} slider.overflow - Handles content overflow by hiding extra content ("hidden").
     */
    slider: {
        width: "90%",
        margin: "auto",
        mt: 4,
        borderRadius: 2,
        overflow: "hidden"
    },

    /**
     * Style for each individual slide within the slider.
     * @property {Object} slide - Style object for each slide.
     * @property {string} slide.width - Width of the slide (90% of the parent element).
     * @property {string} slide.height - Height of the slide (automatically adjusts to content).
     * @property {number} slide.px - Horizontal padding (inner spacing) with a value of 2.
     * @property {number} slide.py - Vertical padding (inner spacing) with a value of 3.
     */
    slide: {
        width: "90%",
        height: "auto",
        px: 2,
        py: 3,
    },
};
