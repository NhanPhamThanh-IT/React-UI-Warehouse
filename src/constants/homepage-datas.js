/**
 * Homepage data configuration.
 * Contains metadata for the homepage banner, title, description, and images.
 * 
 * @constant {Object} HOMEPAGE_DATAS
 * @property {string} banner - The URL of the homepage banner image.
 * @property {string} title - The title text displayed on the homepage.
 * @property {string} description - A short description about the website.
 * @property {string} image - The URL of the homepage main image.
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

export const FEATURES_DATAS = {
    title: ["delightful experience", "for you and your users"],
    subtitle: "Why build with React Template Gallery?",
    features: [
        {
            icon: '/feature-icon-1.svg',
            title: 'Professional Design',
            description: 'Beautifully crafted templates designed by professionals to help you build stunning websites.'
        },
        {
            icon: '/feature-icon-2.svg',
            title: 'Responsive Layout',
            description: 'Fully responsive and mobile-friendly designs that look great on any device.'
        },
        {
            icon: '/feature-icon-3.svg',
            title: 'Easy to Customize',
            description: 'Easily customize and personalize the templates to fit your needs and preferences.'
        },
        {
            icon: '/feature-icon-4.svg',
            title: 'Optimized Performance',
            description: 'Optimized for performance and speed to ensure a seamless user experience.'
        }
    ]
};
