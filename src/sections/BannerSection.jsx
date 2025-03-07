import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

import { HOMEPAGE_DATAS } from '../constants/homepage-datas';

import BackgroundImage from '../components/images/display-as-background';

export const BannerSection = () => {
    return (
        <BackgroundImage url={HOMEPAGE_DATAS.banner}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    {/* Cột chứa tiêu đề và mô tả */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h2" fontWeight="bold" color="white">
                            {HOMEPAGE_DATAS.title}
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ mt: 2 }}>
                            {HOMEPAGE_DATAS.description}
                        </Typography>
                    </Grid>

                    {/* Cột chứa hình ảnh */}
                    <Grid item xs={12} sm={6} display="flex" justifyContent="center">
                        <Box
                            component="img"
                            src={HOMEPAGE_DATAS.image}
                            alt={HOMEPAGE_DATAS.image_alt}
                            sx={{
                                width: '100%',
                                objectFit: 'contain', // Hiển thị ảnh đầy đủ
                                borderRadius: 2,
                                boxShadow: 3, // Thêm shadow nhẹ
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </BackgroundImage>
    );
};
