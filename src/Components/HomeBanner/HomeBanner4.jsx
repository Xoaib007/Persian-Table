import React from 'react';
import { Link } from 'react-router-dom';
import element from '../../assets/BannerElement.svg'

const HomeBanner4 = () => {
    return (
        <div className='bg text-white'>
            <div className='pt-40'>
                <img className='mx-auto mt-20 w-80' src={element} alt='' />
                <p className='text-5xl'>A unique menu that reflects the<br/> true essence of the Saudi cuisine</p>
                <Link to='/' className='w-40 h-16 border-[#CC9D2F] border-8 text-[#CC9D2F] text-2xl mt-10'>Our Menu</Link>
            </div>
        </div>
    );
};

export default HomeBanner4;