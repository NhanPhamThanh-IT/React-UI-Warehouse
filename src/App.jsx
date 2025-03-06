// Desc: Main App component

// Importing React
import React from "react";

// Importing the ThemeProvider, CssBaseline, and theme from the Material-UI library
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";

// Importing the AppRoutes component
import AppRoutes from "./routes/config";

// Defining the App component
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;