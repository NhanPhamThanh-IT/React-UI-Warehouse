/**
 * @module SliderSettings
 * @description Configuration settings for the slider component.
 */

/**
 * Object containing the slider settings.
 * @constant
 * @type {Object}
 */
export const settings = {
    /**
     * Determines whether navigation dots are displayed below the slider.
     * @property {boolean} dots - If true, dots are shown; otherwise, they are hidden.
     */
    dots: true,

    /**
     * Enables infinite looping of slides.
     * @property {boolean} infinite - If true, the slider loops infinitely; otherwise, it stops at the last slide.
     */
    infinite: true,

    /**
     * Speed of the slide transition in milliseconds.
     * @property {number} speed - Transition speed in milliseconds (500ms in this case).
     */
    speed: 500,

    /**
     * Number of slides visible at the same time.
     * @property {number} slidesToShow - Number of slides to display at once.
     */
    slidesToShow: 3,

    /**
     * Number of slides to scroll per action.
     * @property {number} slidesToScroll - Number of slides moved per scroll action.
     */
    slidesToScroll: 1,

    /**
     * Enables automatic sliding.
     * @property {boolean} autoplay - If true, slides transition automatically.
     */
    autoplay: true,

    /**
     * Time interval for automatic slide transitions, in milliseconds.
     * @property {number} autoplaySpeed - Interval between automatic transitions (2000ms = 2 seconds).
     */
    autoplaySpeed: 2000,
};
