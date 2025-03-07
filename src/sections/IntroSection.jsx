import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import BackgroundImage from '../components/images/display-as-background';
import { ActionButton } from '../components/buttons/action-button';
import { Rocket, Book } from 'lucide-react';

export const IntroSection = ({ data }) => {
    return (
        <BackgroundImage url={data.banner}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    py: 4,
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    {/* Text Content */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h2" fontWeight="bold" color="white">
                            {data.title}
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ mt: 2 }}>
                            {data.description}
                        </Typography>
                        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                            <ActionButton icon={<Rocket size={20} />}>
                                Get Started
                            </ActionButton>
                            <ActionButton icon={<Book size={20} />}>
                                Learn More
                            </ActionButton>
                        </Box>
                    </Grid>

                    {/* Image Section */}
                    <Grid item xs={12} sm={6} display="flex" justifyContent="center">
                        <Box
                            component="img"
                            src={data.image}
                            alt={data.image_alt || 'Intro Image'}
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                objectFit: 'contain',
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </BackgroundImage>
    );
};
