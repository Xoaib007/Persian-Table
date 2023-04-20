import React from 'react';
import AboutBanner from '../Components/AboutBanner/AboutBanner';
import Milestones from '../Components/AboutBanner/Milestones';

const AboutPage = () => {
    return (
        <div className='min-h-screen bg-[#CC9D2F]'>
            <AboutBanner/>
            <Milestones/>
        </div>
    );
};

export default AboutPage;