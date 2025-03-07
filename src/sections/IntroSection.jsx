// Desc: IntroSection component displays an introductory section with a background image, title, subtitle, description, and action buttons.

// Import necessary modules
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@mui/material';
import { Rocket, Book } from 'lucide-react';

// Import custom components
import BackgroundImage from '../components/images/display-as-background';
import { ActionButton } from '../components/buttons/action-button';

// Import custom styles
import styles from '../styles/sections/intro-section-styles';

/**
 * IntroSection component displays an introductory section with a background image,
 * title, subtitle, description, and action buttons.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data for rendering the intro section.
 * @param {string} props.data.banner - URL of the background image.
 * @param {string} props.data.subtitle - Subtitle text.
 * @param {string} props.data.title - Title text.
 * @param {string} props.data.description - Description text.
 * @param {string} props.data.image - URL of the intro section image.
 * @param {string} [props.data.image_alt] - Alternative text for the image.
 * @returns {JSX.Element} The rendered intro section.
 */
export const IntroSection = ({ data }) => {
    return (
        <BackgroundImage url={data.banner}>
            <Box sx={styles.container}>
                <Grid container spacing={4} alignItems={'stretch'}>
                    {/* Text content */}
                    <Grid item xs={12} md={5} sx={{ margin: 0 }}>
                        <Typography variant="subtitle1" sx={styles.subtitleContainer}>
                            {data.subtitle}
                        </Typography>
                        <Typography variant="h3" sx={styles.titleContainer}>
                            {data.title}
                        </Typography>
                        <Typography variant="body1" sx={styles.description}>
                            {data.description}
                        </Typography>
                        <Box sx={styles.buttonContainer}>
                            <ActionButton icon={<Rocket size={20} />}>
                                Get Started
                            </ActionButton>
                            <ActionButton icon={<Book size={20} />}>
                                Learn More
                            </ActionButton>
                        </Box>
                    </Grid>

                    {/* Image */}
                    <Grid item xs={12} md={7} display="flex" sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <Box
                            component="img"
                            src={data.image}
                            alt={data.image_alt || 'Intro Image'}
                            sx={styles.image}
                        />
                    </Grid>
                </Grid>
            </Box>
        </BackgroundImage>
    );
};

/**
 * PropTypes for the IntroSection component.
 * Defines the expected data types for the component props.
 */
IntroSection.propTypes = {
    data: PropTypes.shape({
        banner: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        image_alt: PropTypes.string,
    }).isRequired,
};
