import React from 'react';
import element from '../../assets/BannerElement.svg';
import bg from '../../assets/banner4bg.png';
import element1 from '../../assets/Element1.svg';

const HomeBanner4 = () => {
    return (
        <div class="container">
            <img src={bg} alt="" />
            <div class="centered">
                <img className='mx-auto mt-20' src={element} alt='' />
                <p className='xl'>A unique menu that reflects the<br /> true essence of the Saudi cuisine</p>
                <button className='button3'>Our Menu</button>
            </div>
            <img className='change-my-color' src={element1} alt=''/>
        </div>
    );
};

export default HomeBanner4;