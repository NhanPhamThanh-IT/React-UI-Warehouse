import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { TabPanel } from "../tab-panel";
import { styles } from "./styles";

export const HorizonalNavbar = ({ data }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={styles.container}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                {data.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
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
