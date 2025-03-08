import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Icon, Typography } from '@mui/material'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Icon>{icon}</Icon>
                <Typography variant="h6">{title}</Typography>
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