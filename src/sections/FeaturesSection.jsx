import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import FeatureCard from '../components/cards/feature-card';

import { styles } from '../styles/sections/features-section-styles';

export const FeaturesSection = ({ data }) => {
    if (!data || !data.features) return null;

    const titleArray = Array.isArray(data.title) ? data.title : data.title.split(" ");

    return (
        <Box sx={styles.container}>
            {data.subtitle && (
                <Typography variant="subtitle1" sx={styles.subtitleContainer} gutterBottom>
                    {data.subtitle}
                </Typography>
            )}
            <Typography variant="h4" gutterBottom sx={styles.titleContainer}>
                A{' '}
                <Typography component="span" variant="inherit" sx={styles.titleProminentContent}>
                    {titleArray[0]}
                </Typography>
                <br />
                <Typography component="span" variant="inherit">
                    {titleArray[1]}
                </Typography>
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="stretch">
                {data?.features?.map((feature) => (
                    <Grid item xs={12} sm={6} lg={3} key={feature.id || feature.name}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <FeatureCard {...feature} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

FeaturesSection.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ]).isRequired,
        subtitle: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired
};
