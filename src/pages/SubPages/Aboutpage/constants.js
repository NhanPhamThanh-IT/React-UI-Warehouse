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

export const PrivacyPolicyData = [
    {
        label: "Introduction",
        content: `<div align="justify">
                    <p>Welcome to <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong>! I appreciate your trust in me and am committed to protecting your privacy. 
                    Your privacy and security are my top priorities, and I strive to handle your personal data responsibly and transparently.</p>
                    <p>At <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong>, I provide high-quality, pre-built UI templates that are easily accessible for 
                    developers, designers, and businesses. My goal is to make frontend design effortless by offering ready-to-use templates 
                    that you can copy, modify, and integrate into your projects seamlessly. While this platform is designed to be open and 
                    user-friendly, I also take data privacy seriously.</p>
                    <p>This Privacy Policy explains how I collect, use, store, and safeguard your information when you visit 
                    <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong> and utilize my services. Whether you're browsing templates, exploring design inspirations, 
                    or interacting with the website, I want to ensure that you have a safe and seamless experience.</p>
                    <p>By using <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong>, you acknowledge that you have read and understood this Privacy Policy and agree 
                    to the collection and use of information as outlined below. If you do not agree with any part of this Privacy Policy, please 
                    discontinue the use of the website.</p>
                    <p>If you have any questions or concerns regarding my data practices, feel free to contact me at 
                    <a href="mailto:example@gmail.com" style="color: hsl(210, 100%, 45%);"><strong>example@gmail.com</strong></a>.</p>
                  </div>`
    },
    {
        label: "Information We Collect",
        content: `<p>We may collect the following types of information:</p>
                  <ul>
                    <li><strong>Personal Information</strong>: Name, email address, and any other details you provide when contacting us or subscribing to our services.</li>
                    <li><strong>Usage Data</strong>: Information about your interactions with our website, such as IP address, browser type, pages visited, and the time spent on our site.</li>
                    <li><strong>Cookies & Tracking Technologies</strong>: We use cookies and similar technologies to enhance user experience and analyze website traffic.</li>
                  </ul>`
    },
    {
        label: "How We Use Your Information",
        content: `<p>We use the collected information for purposes such as:</p>
                  <ul>
                    <li>Providing and improving our services.</li>
                    <li>Customizing user experience.</li>
                    <li>Communicating with you regarding updates, offers, or support.</li>
                    <li>Ensuring security and preventing fraud.</li>
                  </ul>`
    }
];
