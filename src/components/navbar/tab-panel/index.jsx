import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

/**
 * TabPanel component displays content for the corresponding tab based on the current index value.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The content displayed inside the TabPanel. This content is rendered using `dangerouslySetInnerHTML`, so ensure the data is sanitized before passing it.
 * @param {number} props.value - The currently selected tab value. This determines which tab is being displayed.
 * @param {number} props.index - The index of the current tab. If `value` matches `index`, the TabPanel is displayed.
 * @returns {JSX.Element} The rendered TabPanel component or null if the tab is not selected.
 *
 * @example
 * <TabPanel value={currentTab} index={0}>
 *   <p>Tab 1 content</p>
 * </TabPanel>
 */
export const TabPanel = ({ children, value, index }) => {
    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box sx={styles.contentContainer}>
                    <Typography component="div" dangerouslySetInnerHTML={{ __html: children }} />
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    /**
     * The content of the tab, which can contain any React node.
     */
    children: PropTypes.node,

    /**
     * The index of the current tab.
     * This value is compared with `value` to determine whether to display the content.
     */
    index: PropTypes.number.isRequired,

    /**
     * The currently selected tab value. If `value` matches `index`, the TabPanel will be displayed.
     */
    value: PropTypes.number.isRequired,
};
