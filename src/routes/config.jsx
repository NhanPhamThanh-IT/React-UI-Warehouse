// Code: Router configuration

// Importing necessary modules
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";

// Importing custom components
import Layout from "../components/layout/index";

// Importing pages
import { Homepage } from "../pages/MainPages/Homepage";
import { Docspage } from "../pages/MainPages/Docspage";
import { Templatespage } from "../pages/MainPages/Templatespage";

import { Aboutpage } from "../pages/SubPages/Aboutpage/index";
import { Contactpage } from "../pages/SubPages/Contactpage";

import NotFoundPage from "../pages/ErrorPages/404";

// Defining routes
const AppRoutes = () => {
    return useRoutes([
        { path: "/", element: <Navigate replace to="/home" /> },
        {
            element: <Layout />,
            children: [
                { path: "/home", element: <Homepage /> },
            ],
        },
        {
            element: <Layout hasFooter={false} />,
            children: [
                { path: "/templates", element: <Templatespage /> },
                { path: "/docs", element: <Docspage /> },
                { path: "/about", element: <Aboutpage /> },
                { path: "/contact", element: <Contactpage /> },
            ],
        },
        { path: "*", element: <NotFoundPage /> },
    ]);
};

// Exporting the App component
export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
