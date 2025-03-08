/**
 * @fileoverview A component that displays a feature card with an icon, title, and description.
 * @module feature-card
 * @requires React
 * @requires PropTypes
 * @requires Box
 * @requires Card
 * @requires CardContent
 * @requires Typography
 * @exports FeatureCard
*/

/**
 * Importing necessary dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Typography } from '@mui/material';

/**
 * Importing styles from the FeatureCard component stylesheet.
 */
import { styles } from '../../styles/components/feature-card-styles';

/**
 * A component that displays a feature card with an icon, title, and description.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {React.ElementType} props.icon - The icon component to be displayed.
 * @param {string} props.title - The title of the feature card.
 * @param {string} props.description - The description of the feature card.
 * @returns {JSX.Element} The rendered FeatureCard component.
 */
const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <Card sx={styles.cardContainer}>
            <CardContent sx={styles.cardContent}>
                <Box sx={styles.cardIconContainer}>
                    <Icon size={17} color="hsl(210, 100%, 45%)" />
                </Box>
                <Typography variant="title1" sx={styles.cardTitle}>{title}</Typography>
                <Typography variant="body2" sx={styles.cardDescription}>{description}</Typography>
            </CardContent>
        </Card>
    );
};

/**
 * The properties for the FeatureCard component.
 * @type {Object}
 */
FeatureCard.propTypes = {
    /** The icon component to be displayed. */
    icon: PropTypes.elementType.isRequired,
    /** The title of the feature card. */
    title: PropTypes.string.isRequired,
    /** The description of the feature card. */
    description: PropTypes.string.isRequired,
};

/**
 * The default properties for the FeatureCard component.
 * @type {Object}
 */
export default FeatureCard;
