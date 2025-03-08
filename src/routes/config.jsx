// Code: Router configuration

// Importing necessary modules
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";

// Importing custom components
import Layout from "../components/layout/index";

// Importing pages
import { Homepage } from "../pages/MainPages/Homepage";
import { Docspage } from "../pages/MainPages/Docspage";
import NotFoundPage from "../pages/ErrorPages/404";

// Defining routes
const AppRoutes = () => {
    return useRoutes([
        { path: "/", element: <Navigate replace to="/home" /> },
        {
            element: <Layout />,
            children: [{ path: "/home", element: <Homepage /> }],
        },
        {
            element: <Layout hasFooter={false} />,
            children: [{ path: "/docs", element: <Docspage /> }],
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
