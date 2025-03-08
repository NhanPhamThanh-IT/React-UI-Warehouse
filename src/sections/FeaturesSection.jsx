/**
 * Description: This file represents the FeaturesSection component.
 */

/**
 * Importing necessary components from Material-UI library.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';

/**
 * Importing the FeatureCard component.
 */
import FeatureCard from '../components/cards/feature-card';

/**
 * Importing styles from the FeaturesSection component stylesheet.
 */
import { styles } from '../styles/sections/features-section-styles';

/**
 * FeaturesSection Component
 * 
 * This component renders a section showcasing various features using feature cards.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data containing title, subtitle, and features.
 * @param {string|string[]} props.data.title - The main title of the section. Can be a string or an array of strings.
 * @param {string} [props.data.subtitle] - An optional subtitle for the section.
 * @param {Array<Object>} props.data.features - An array of feature objects to be displayed in the feature cards.
 * @returns {JSX.Element|null} The rendered FeaturesSection component, or null if data is missing.
 */
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
            <Grid container sx={styles.FeatureCardLayoutContainer} spacing={3}>
                {data?.features?.map((feature) => (
                    <Grid item xs={12} sm={6} md={3} key={feature.id || feature.name}>
                        <Box sx={styles.featureCardContainer}>
                            <FeatureCard {...feature} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

/**
 * PropTypes for the FeaturesSection component.
 */
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
