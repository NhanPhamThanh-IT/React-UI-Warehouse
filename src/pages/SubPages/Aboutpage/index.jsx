/**
 * @module AboutPage
 * @description Renders the About page with introductory and "Join Us" sections.
 */

/**
 * External module dependencies.
 */
import React from 'react';
import { Box } from '@mui/material';

/**
 * Internal components dependencies.
 */
import { HeadingSection } from '../../../components/headings/section-heading/index';
import { StackImageSlider } from '../../../components/images/stack-slider/index';

/**
 * Internal constants and styles dependencies.
 */
import { IntroDatas } from './constants';
import { JoinUsData } from './constants';
import { styles } from './styles';

/**
 * About page component.
 * Displays the introduction and "Join Us" sections using predefined content and styles.
 *
 * @component
 * @returns {JSX.Element} The rendered About page component.
 */
export const Aboutpage = () => {
    return (
        <>
            {/* Introductory Section */}
            <Box sx={styles.introContainer}>
                <HeadingSection data={IntroDatas} />
                <StackImageSlider data={IntroDatas} />
            </Box>

            {/* Join Us Section */}
            <Box sx={styles.joinUsContainer}>
                <HeadingSection data={JoinUsData} sx={styles.joinUsLeftColumn} />
                <Box sx={styles.joinUsRightColumn}>
                    <Box
                        component="img"
                        src={JoinUsData.image}
                        alt={'Join us image'}
                        sx={styles.joinUsImage}
                    />
                </Box>
            </Box>
        </>
    );
};
