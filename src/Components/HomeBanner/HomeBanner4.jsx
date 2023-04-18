import React from 'react';
import { Link } from 'react-router-dom';
import element from '../../assets/BannerElement.svg'

const HomeBanner4 = () => {
    return (
        <div className='bg text-white flex justify-center'>
            <div className='pt-40'>
                <img className='mx-auto mt-20' src={element} alt='' />
                <p className='text-5xl'>A unique menu that reflects the<br/> true essence of the Saudi cuisine</p>
                <Link to='/' className='button2'>Our Menu</Link>
            </div>
        </div>
    );
};

export default HomeBanner4;