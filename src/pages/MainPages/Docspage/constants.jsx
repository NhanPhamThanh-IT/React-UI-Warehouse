import { Info, CheckCircle, Code } from "@mui/icons-material";

export const menuItems = [
    {
        group: "Getting Started",
        items: [
            {
                text: "Introduction",
                icon: <Info />,
                path: "/getting-started"
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
