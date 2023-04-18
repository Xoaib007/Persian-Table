import React from 'react';
import bannerImage from '../../assets/HomeBanner.png'
import bannerImageElement from '../../assets/BannerElement.png'

const HomeBanner = () => {
    return (
        <div className='flex items-center justify-center banner'>
            <div className='text-white flex flex-col items-start text-justify'>
                <p className='header'>Taste the authentic <br/> Turkish cuisine</p>
                <p className=''>Among the best Saudi chefs in the world,<br/>serving you something beyond flavor. </p>
                <div className='w-80 border-4 border-indigo-500/100'>
                <button className='button'>Our Menu</button>
                </div>
            </div>

            <div className='flex items-start'>
                <img src={bannerImage} alt='' />
                <img className='element' src={bannerImageElement} alt='' />
            </div>
        </div>
    );
};

export default HomeBanner;