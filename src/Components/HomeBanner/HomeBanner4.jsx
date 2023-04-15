import React from 'react';
import element from '../../assets/BannerElement.png'

const HomeBanner4 = () => {
    return (
        <div className='bg text-white'>
            <div>
                <img className='w-24' src={element} alt='' />
                <p className='text-5xl'>A unique menu that reflects the true essence of the Saudi cuisine</p>
                <button>Our Menu</button>
            </div>
        </div>
    );
};

export default HomeBanner4;