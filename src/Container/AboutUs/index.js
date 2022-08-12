import React from 'react';
import AboutBanner from './AboutBanner';
import AboutHeading from './AboutHeading';
import AboutManager from './AboutManager';
import Got from './Got';
import Identify from './Identify';
import Meet from './Meet';
import Separate from './Separate';
import Status from './Status';
import { AboutUsWrapper } from './styled'
function AboutUs(){
    return (
        <AboutUsWrapper>
            <AboutHeading />
            <AboutBanner />
            <AboutManager />
            <Status />
            <Separate />
            <Meet />
            <Got />
            <Separate />
            <Identify />
        </AboutUsWrapper>
    )
}

export default AboutUs;
