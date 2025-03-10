/**
 * @module IntroData
 * @description Contains introductory and support data for the website or component.
 */

/**
 * Object containing the introductory content.
 * @typedef {Object} IntroContent
 * @property {string} subtitle - Subtitle for the introduction section.
 * @property {string[]} titleArray - Array of title segments to be displayed.
 * @property {string} description - Description of the introduction.
 * @property {string[]} images - Array of image file paths for display.
 */

/**
 * Introductory data object.
 * @constant {IntroContent}
 */
export const IntroDatas = {
    subtitle: 'About us',
    titleArray: ["I'm on a mission to make", 'building better UIs effortless'],
    description: "Together, we are enabling developers & designers to bring stunning UIs to life with unrivalled speed and ease.",
    images: Array(4).fill("owner.jpg"),
};

/**
 * Object containing data for the "Join Us" section.
 * @typedef {Object} JoinUsContent
 * @property {string} subtitle - Subtitle for the join us section.
 * @property {string[]} titleArray - Array of title segments for the join us section.
 * @property {string} description - Description encouraging users to join.
 * @property {string} image - Image file path for the join us section.
 */

/**
 * "Join Us" data object.
 * @constant {JoinUsContent}
 */
export const JoinUsData = {
    subtitle: 'Join us',
    titleArray: ['Build the next generation', 'of tools for UI development'],
    description: "We are always looking for talented people to join our team. If you are passionate about building great products, we would love to hear from you.",
    image: 'join-us.png',
};