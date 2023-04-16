import React from 'react';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import HomeBanner2 from '../Components/HomeBanner/HomeBanner2';
import HomeBanner3 from '../Components/HomeBanner/HomeBanner3';
import HomeBanner4 from '../Components/HomeBanner/HomeBanner4';

const HomePage = () => {
    return (
        <div className='bg-[#5B0017] min-h-screen'>
            <HomeBanner/>
            <HomeBanner2/>
            <HomeBanner3/>
            <HomeBanner4/>
        </div>
    );
};

export default HomePage;