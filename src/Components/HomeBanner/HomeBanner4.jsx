import React from 'react';
import element from '../../assets/BannerElement.png'

const HomeBanner4 = () => {
    return (
        <div className='bg'>
            <img src={element} alt=''/>
            <p>A unique menu that reflects the true essence of the Saudi cuisine</p>
            <button>Our Menu</button>
        </div>
    );
};

export default HomeBanner4;