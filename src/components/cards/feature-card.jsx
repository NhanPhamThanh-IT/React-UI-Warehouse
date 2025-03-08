import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material'

import { styles } from '../../styles/components/feature-card-styles';

const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <Card sx={styles.cardContainer}>
            <CardContent sx={styles.cardContent}>
                <Icon fontSize="large" />
                <Typography variant="title1" sx={styles.cardTitle}>{title}</Typography>
                <Typography>{description}</Typography>
            </CardContent>
        </Card>
    );
};

FeatureCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeatureCard;