// Description: HeadingSection component.
// Renders a structured heading section with a subtitle, a multi-part title, and an optional description.

/**
 * Import external libraries.
 */
import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * Import custom styles for the HeadingSection component.
 */
import { styles } from './styles';

/**
 * HeadingSection component renders a structured heading section with a subtitle, 
 * a multi-part title, and an optional description.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data object containing content for the section.
 * @param {string} [props.data.subtitle] - Optional subtitle text.
 * @param {string[]} props.data.titleArray - Array containing title parts; expects at least two elements.
 * @param {string} [props.data.description] - Optional description text.
 * @returns {JSX.Element} A styled heading section.
 */
export const HeadingSection = ({ data }) => {
    const { subtitle, titleArray, description } = data;

    return (
        <Box>
            {/* Render subtitle if available */}
            {subtitle && (
                <Typography variant="subtitle2" sx={styles.subtitleContainer} gutterBottom>
                    {subtitle}
                </Typography>
            )}

            {/* Render title if titleArray is not empty */}
            {titleArray.length !== 0 && (
                <Typography variant="h4" gutterBottom sx={styles.titleContainer}>
                    {/* First part of the title (normal style) */}
                    <Typography component="span" variant="inherit" sx={styles.titleNormalContent}>
                        {titleArray?.[0]}
                    </Typography>
                    <br />
                    {/* Second part of the title (prominent style) */}
                    <Typography component="span" variant="inherit" sx={styles.titleProminentContent}>
                        {titleArray?.[1]}
                    </Typography>
                </Typography>
            )}

            {/* Render description if available */}
            {description && (
                <Typography variant="body1" sx={styles.descriptionContainer}>
                    {description}
                </Typography>
            )}
        </Box>
    );
};
