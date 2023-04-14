import React from 'react';
import Header from '../Components/Header/Header';
import HomeBanner from '../Components/HomeBanner';

const HomePage = () => {
    return (
        <div className='bg-[#5B0017] min-h-screen'>
            <Header/>
            <HomeBanner/>
        </div>
    );
};

export default HomePage;