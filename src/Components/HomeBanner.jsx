import React from 'react';
import bannerImage from '../assets/HomeBanner.png'

const HomeBanner = () => {
    return (
        <div className='mt-8 flex items-center'>
            <div className='text-white flex flex-col items-start'>
                <p className='header'>Taste the authentic </p>
                <p className='header'>Turkish cuisine</p>
                <p>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                <button className='w-40 h-16 border-[#CC9D2F] border-8 text-[#CC9D2F] text-2xl'>Our Menu</button>
            </div>

            <div>
                <img src={bannerImage} alt=''/>
            </div>
            
        </div>
    );
};

export default HomeBanner;