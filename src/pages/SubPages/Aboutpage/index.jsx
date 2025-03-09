import React from 'react';
import { Box } from '@mui/material';

import { HeadingSection } from '../../../components/headings/section-heading/index';
import { StackImageSlider } from '../../../components/images/stack-slider/index';

import { IntroDatas } from './constants';

import { styles } from './styles';

export const Aboutpage = () => {
    return (
        <Box sx={styles.introContainer}>
            <HeadingSection data={IntroDatas} />
            <StackImageSlider data={IntroDatas} />
        </Box>
    );
};
