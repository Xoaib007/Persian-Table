import React from 'react';
import { Link } from 'react-router-dom';
import element from '../../assets/BannerElement.svg';
import bg from '../../assets/banner4bg.png';

const HomeBanner4 = () => {
    return (
        <div class="container">
            <img src={bg} alt="Snow" />
            <div class="centered">
                <img className='mx-auto mt-20' src={element} alt='' />
                <p className='xl'>A unique menu that reflects the<br /> true essence of the Saudi cuisine</p>
                <Link to='/' className='button2'>Our Menu</Link>
            </div>
        </div>
    );
};

export default HomeBanner4;