// Desc: Entry point of the application

// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the App component
import App from "./App";

// Rendering the App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);