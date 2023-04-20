import React from 'react';
import AboutBanner from '../Components/AboutBanner/AboutBanner';
import Milestones from '../Components/AboutBanner/Milestones';
import Map from '../Components/AboutBanner/Map';

const AboutPage = () => {
    return (
        <div className='min-h-screen bg-[#CC9D2F]'>
            <AboutBanner/>
            <Milestones/>
            <Map/>
        </div>
    );
};

export default AboutPage;