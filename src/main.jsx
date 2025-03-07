/**
 * @file Entry point of the application.
 * This file initializes and renders the React application.
 */

// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the main App component
import App from "./App";

/**
 * Renders the App component inside the root element using React's StrictMode.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
