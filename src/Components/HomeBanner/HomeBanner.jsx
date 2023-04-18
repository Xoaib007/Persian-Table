import React from 'react';
import bannerImage from '../../assets/HomeBanner.png'
import bannerImageElement from '../../assets/BannerElement.png'

const HomeBanner = () => {
    return (
        <div className='flex items-center justify-center banner'>
            <div className='text-white flex flex-col items-start text-justify overlay'>
                <p className='header'>Taste the authentic <br /> Turkish cuisine</p>
                <p className=' text-2xl'>Among the best Saudi chefs in the world,<br />serving you something beyond flavor. </p>
                <button className='button'>Our Menu</button>
            </div>

            <div className='flex items-start bannerimage'>
                <img src={bannerImage} alt='' />
                <img className='element' src={bannerImageElement} alt='' />
            </div>
        </div>
    );
};

export default HomeBanner;