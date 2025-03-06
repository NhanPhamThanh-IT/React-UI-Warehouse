// Code: Router configuration

// Importing necessary modules
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";

// Importing custom components
import Layout from "../components/Layout/Index";

// Importing pages
import Homepage from "../pages/MainPages/Homepage";
import NotFoundPage from "../pages/ErrorPages/404";

// Defining routes
const AppRoutes = () => {
    const routes = useRoutes([
        { path: "/", element: <Navigate replace to="/home" /> },
        {
            element: <Layout />,
            children: [{ path: "/home", element: <Homepage /> }],
        },
        { path: "*", element: <NotFoundPage /> },
    ]);

    return routes;
};

// Exporting the App component
export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
