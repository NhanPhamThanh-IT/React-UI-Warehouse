import { Info, CheckCircle, Code } from "@mui/icons-material";

/**
 * Menu items configuration for the documentation sidebar.
 * Each menu item belongs to a group and contains a list of navigation links.
 */
export const menuItems = [
    {
        group: "Getting Started", // Group title for the menu section
        items: [
            {
                text: "Introduction", // Display text for the menu item
                icon: <Info />, // Icon component associated with the item
                path: "docs/getting-started" // Navigation path for the item
            },
            {
                text: "Requirement",
                icon: <CheckCircle />,
                path: "/requirements"
            },
            {
                text: "Examples",
                icon: <Code />,
                path: "/examples-showcase"
            },
        ],
    },
];
