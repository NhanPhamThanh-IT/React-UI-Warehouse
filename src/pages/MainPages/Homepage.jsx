import React from 'react';

import { IntroSection } from '../../sections/IntroSection';

import { HOMEPAGE_DATAS } from '../../constants/homepage-datas';

const Homepage = () => {
    return (
        <>
            <IntroSection data={HOMEPAGE_DATAS} />
        </>
    );
};

export default Homepage;