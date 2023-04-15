import React from 'react';
import element from '../../assets/BannerElement.svg'

const HomeBanner4 = () => {
    return (
        <div className='bg text-white'>
            <div className='pt-40'>
                <img className='mx-auto mt-20 w-80' src={element} alt='' />
                <p className='text-5xl'>A unique menu that reflects the<br/> true essence of the Saudi cuisine</p>
                <button>Our Menu</button>
            </div>
        </div>
    );
};

export default HomeBanner4;