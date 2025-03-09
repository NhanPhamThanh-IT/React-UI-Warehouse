import React from 'react';
import { Box, Typography } from '@mui/material';

import { styles } from './styles';

export const HeadingSection = ({ data }) => {
    const { subtitle, titleArray, description } = data;
    return (
        <Box>
            {subtitle && (
                <Typography variant="subtitle2" sx={styles.subtitleContainer} gutterBottom>
                    {subtitle}
                </Typography>
            )}
            {
                titleArray.length !== 0 && (
                    <Typography variant="h4" gutterBottom sx={styles.titleContainer}>
                        <Typography component="span" variant="inherit">
                            {titleArray?.[0]}
                        </Typography>
                        <br />
                        <Typography component="span" variant="inherit" sx={styles.titleProminentContent}>
                            {titleArray?.[1]}
                        </Typography>
                    </Typography>
                )
            }
            {description && (
                <Typography variant="body1" sx={styles.descriptionContainer}>
                    {description}
                </Typography>
            )}
        </Box>
    );
};
