import React from 'react';
import Header from '../Components/Header/Header';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import HomeBanner2 from '../Components/HomeBanner/HomeBanner2';
import HomeBanner3 from '../Components/HomeBanner/HomeBanner3';

const HomePage = () => {
    return (
        <div className='bg-[#5B0017] min-h-screen'>
            <Header/>
            <HomeBanner/>
            <HomeBanner2/>
            <HomeBanner3/>
        </div>
    );
};

export default HomePage;