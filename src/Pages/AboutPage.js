import React from 'react';
import AboutBanner from '../Components/AboutBanner/AboutBanner';
import Milestones from '../Components/AboutBanner/Milestones';
import MapBannner from '../Components/AboutBanner/MapBannner';

const AboutPage = () => {
    return (
        <div className='min-h-screen bg-[#CC9D2F]'>
            <AboutBanner/>
            <Milestones/>
            <MapBannner/>
        </div>
    );
};

export default AboutPage;