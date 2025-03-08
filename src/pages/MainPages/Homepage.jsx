import React from 'react';

import { IntroSection } from '../../sections/IntroSection';
import { FeaturesSection } from '../../sections/FeaturesSection';

import { INTRO_DATAS, FEATURES_DATAS } from '../../constants/homepage-datas';

const Homepage = () => {
    return (
        <>
            <IntroSection data={INTRO_DATAS} />
            <FeaturesSection data={FEATURES_DATAS} />
        </>
    );
};

export default Homepage;