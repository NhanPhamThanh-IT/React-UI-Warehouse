// Desc: Header navigation items

/**
 * Represents a navigation item in the header.
 * @typedef {Object} NavItem
 * @property {string} label - The display text for the navigation link.
 * @property {string} path - The URL path associated with the navigation item.
 */

/**
 * Array of navigation items used in the header.
 * Each object contains a label and a corresponding path.
 * @constant {NavItem[]}
 */
const navItems = [
    { label: "Get Start", path: "/home" },
    { label: "Templates", path: "/templates" },
    { label: "About", path: "/about-us" },
    { label: "Contact", path: "/contact-us" }
];

// Exporting the navItems array
export default navItems;
