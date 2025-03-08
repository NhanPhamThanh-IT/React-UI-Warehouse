/**
 * Introductory data for the homepage.
 * Contains metadata for the homepage banner, title, subtitle, description, and images.
 *
 * @constant {Object} INTRO_DATAS
 * @property {string} banner - The URL of the homepage banner image.
 * @property {string} title - The main title displayed on the homepage.
 * @property {string} subtitle - A welcoming subtitle for the homepage.
 * @property {string} description - A short description about the website's purpose.
 * @property {string} image - The URL of the main homepage image.
 * @property {string} image_alt - Alternative text for the main image.
 */
export const INTRO_DATAS = {
    banner: '/homepage-banner.jpg',
    title: 'Get Started Now 🚀',
    subtitle: 'Welcome to the React Template Gallery!',
    description: 'Explore a vast collection of professional templates designed to help you build stunning websites quickly and efficiently. 🚀 Easily preview, copy source code, and customize to fit your needs. ✨ Save time, enhance quality – all with just a few clicks! 🔥',
    image: '/homepage-image.jpg',
    image_alt: 'Homepage Image'
};

import { PenTool, Smartphone, Wrench, Rocket } from "lucide-react";

/**
 * Features section data for the homepage.
 * Defines the title, subtitle, and key features displayed in the features section.
 *
 * @constant {Object} FEATURES_DATAS
 * @property {string[]} title - An array containing the main title split into multiple lines.
 * @property {string} subtitle - A brief subtitle introducing the features section.
 * @property {Array<Object>} features - A list of features available in the React Template Gallery.
 * @property {React.Component} features[].icon - The Lucide React icon component representing the feature.
 * @property {string} features[].title - The title of the feature.
 * @property {string} features[].description - A brief description of the feature.
 */
export const FEATURES_DATAS = {
    title: ["Delightful Experience", "For You and Your Users"],
    subtitle: "Why build with React Template Gallery?",
    features: [
        {
            icon: PenTool,
            title: 'Professional Design',
            description: 'Beautifully crafted templates designed by professionals to help you build stunning websites.'
        },
        {
            icon: Smartphone,
            title: 'Responsive Layout',
            description: 'Fully responsive and mobile-friendly designs that look great on any device.'
        },
        {
            icon: Wrench,
            title: 'Easy to Customize',
            description: 'Easily customize and personalize the templates to fit your needs and preferences.'
        },
        {
            icon: Rocket,
            title: 'Optimized Performance',
            description: 'Optimized for performance and speed to ensure a seamless user experience.'
        }
    ]
};
