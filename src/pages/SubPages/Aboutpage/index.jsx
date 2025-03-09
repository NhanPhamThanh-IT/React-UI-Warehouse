import React from 'react';
import { Box } from '@mui/material';

import { HeadingSection } from '../../../components/headings/section-heading/index';

import { IntroDatas } from '../../../constants/aboutpage-datas';

import { styles } from './styles';

export const Aboutpage = () => {
    return (
        <Box sx={styles.container}>
            <HeadingSection data={IntroDatas} />
        </Box>
    );
};
