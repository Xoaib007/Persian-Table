import React from 'react';
import bannerImage from '../../assets/HomeBanner.png'
import bannerImageElement from '../../assets/BannerElement.png'

const HomeBanner = () => {
    return (
        <div className='flex items-center justify-center banner'>
            <div className='text-white flex flex-col items-start'>
                <p className='header'>Taste the authentic </p>
                <p className='header'>Turkish cuisine</p>
                <p>Among the best Saudi chefs in the world,<br/>serving you something beyond flavor. </p>
                <button className='w-40 h-16 border-[#CC9D2F] border-8 text-[#CC9D2F] text-2xl'>Our Menu</button>
            </div>

            <div className='flex items-start'>
                <img src={bannerImage} alt='' />
                <img className='element' src={bannerImageElement} alt='' />
            </div>
        </div>
    );
};

export default HomeBanner;