import { Info, Play, List, GraduationCap } from "lucide-react";

/**
 * Button configuration object.
 * @typedef {Object} ButtonConfig
 * @property {string} label - The text displayed on the button.
 * @property {string} color - The background color of the button.
 * @property {string} borderColor - The border color of the button.
 * @property {string} textColor - The text color of the button.
 * @property {JSX.Element} icon - The icon displayed inside the button.
 */

/**
 * Data structure for AestheticHub Docs.
 * @type {Object}
 * @property {string} title - The main title of the documentation.
 * @property {string} description - A brief description of the documentation.
 * @property {ButtonConfig[]} buttons - A list of buttons with labels, colors, and icons.
 */
export const data = {
    title: "Welcome to AestheticHub Docs",
    description:
        "Explore our beautifully designed UI templates and enhance your projects effortlessly.",
    buttons: [
        { label: "What is AestheticHub?", color: "#ffffff", borderColor: "#4caf50", textColor: "#2e7d32", icon: <Info color="#4caf50" /> },
        { label: "Get started", color: "#ffffff", borderColor: "#f44336", textColor: "#d32f2f", icon: <Play color="#f44336" /> },
        { label: "View requirements", color: "#ffffff", borderColor: "#2196f3", textColor: "#1565c0", icon: <List color="#2196f3" /> },
        { label: "Learn More", color: "#ffffff", borderColor: "#ff9800", textColor: "#e65100", icon: <GraduationCap color="#ff9800" /> },
    ],
};
