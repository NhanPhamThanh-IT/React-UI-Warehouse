/**
 * @file Main App component.
 * This component serves as the root of the application and applies global styling and theming.
 */

// Importing React
import React from "react";

// Importing the ThemeProvider, CssBaseline, and theme from the Material-UI library
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";

// Importing the AppRoutes component
import AppRoutes from "./routes/config";

/**
 * The root component of the application.
 * It wraps the entire app with the Material-UI ThemeProvider and applies global styles.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};

/**
 * Exporting the App component as the default export.
 */
export default App;
