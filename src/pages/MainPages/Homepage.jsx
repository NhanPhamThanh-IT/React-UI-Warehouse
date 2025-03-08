import React from 'react';

import { IntroSection } from '../../sections/intro-section/index';
import { FeaturesSection } from '../../sections/features-section/index';

import { INTRO_DATAS, FEATURES_DATAS } from '../../constants/homepage-datas';

export const Homepage = () => {
    return (
        <>
            <IntroSection data={INTRO_DATAS} />
            <FeaturesSection data={FEATURES_DATAS} />
        </>
    );
};