import React from 'react';
import element from '../../assets/BannerElement.svg';
import bg from '../../assets/banner4bg.png';

const HomeBanner4 = () => {
    return (
        <div class="container">
            <img src={bg} alt="Snow" />
            <div class="centered">
                <img className='mx-auto mt-20' src={element} alt='' />
                <p className='xl'>A unique menu that reflects the<br /> true essence of the Saudi cuisine</p>
                <button className='button3'>Our Menu</button>
            </div>
        </div>
    );
};

export default HomeBanner4;