/**
 * A horizontal navigation bar component using Material UI's Tabs.
 * @module HorizonalNavbar
 * @requires React
 * @requires useState
 * @requires Tabs
 * @requires Tab
 * @requires Box
 * @requires TabPanel
 * @requires styles
 * @exports HorizonalNavbar
 * @example
 * import React from "react";
 * import { HorizonalNavbar } from "./components/navbar/horizonal-navbar";
 * 
 * const tabs = [
 *    { label: "Tab 1", content: <div>Tab 1 content</div> },
 *   { label: "Tab 2", content: <div>Tab 2 content</div> },
 *  { label: "Tab 3", content: <div>Tab 3 content</div> },
 * ];
 * 
 * export const App = () => {
 *   return <HorizonalNavbar data={tabs} />;
 * };
 */

/**
 * React hook for functional components.
 */
import React, { useState } from "react";

/**
 * Material-UI components.
 */
import { Tabs, Tab, Box } from "@mui/material";

/**
 * Custom components.
 */
import { TabPanel } from "../tab-panel";

/**
 * CSS styles.
 */
import { styles } from "./styles";

/**
 * A horizontal navigation bar component using Material UI's Tabs.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {Array} props.data - An array of tab objects containing labels and content.
 * @param {string} props.data[].label - The label text displayed on each tab.
 * @param {React.ReactNode} props.data[].content - The content displayed inside the corresponding tab panel.
 * 
 * @returns {JSX.Element} The rendered horizontal navigation bar.
 */
export const HorizonalNavbar = ({ data }) => {
    /**
     * State to track the currently selected tab index.
     * @type {[number, Function]}
     */
    const [value, setValue] = useState(0);

    /**
     * Handles tab selection changes.
     * @param {React.SyntheticEvent} event - The event object triggered by tab selection.
     * @param {number} newValue - The index of the newly selected tab.
     */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={styles.container}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={styles.tabs}
            >
                {data.map((tab, index) => (
                    <Tab key={index} label={tab.label} sx={styles.tab} />
                ))}
            </Tabs>
            {data.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </Box>
    );
};
