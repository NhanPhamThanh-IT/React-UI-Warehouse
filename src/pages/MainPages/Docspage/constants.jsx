import { Info, Settings, Extension, Category } from "@mui/icons-material";

export const menuItems = [
    {
        group: "Getting Started",
        items: [
            { text: "Installation", icon: <Info />, path: "/installation" },
            { text: "Usage", icon: <Settings />, path: "/usage" },
            { text: "Examples", icon: <Extension />, path: "/examples" },
        ],
    },
    {
        group: "Components",
        items: [
            { text: "Button", icon: <Category />, path: "/button" },
            { text: "Card", icon: <Category />, path: "/card" },
            { text: "Modal", icon: <Category />, path: "/modal" },
        ]
    }
];