import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/Facebook.png';
import instagram from '../../assets/Instagram.png';
import tweeter from '../../assets/Tweeter.png';
import linkedin from '../../assets/LinkedIn.png';

const Footer = () => {
    const headerMenu = ['About', 'Menu', 'Venue', 'Events', 'Contacts Us'];

    return (
        <div className='h-80 bg-[#CC9D2F] pt-14'>
            <div className='flex items-start bg-black w-fit px-6 py-2 mx-auto'>
                <p className='text-white font-bold text-2xl mr-5'>Persian Table</p>
                <p className='text-white font-bold text-2xl'>طاولة فارسية</p>
            </div>

            <div className='text-2xl text-white flex items-center justify-center mt-5'>
                {
                    headerMenu.map((menu, i) =>
                        <Link to={`/${menu}`} className='mx-7' key={i}>{menu}</Link>
                    )
                }
            </div>

            <div className='h-16 pt-20 px-10 border-t-2 border-black flex justify-between'>
                <p>© 2021 | All rights reserved.</p>

                <div className='flex'>
                    <img className='w-4 h-4 mx-4' src={facebook} alt=''/>
                    <img className='w-4 h-4 mx-4' src={instagram} alt=''/>
                    <img className='w-4 h-4 mx-4' src={tweeter} alt=''/>
                    <img className='w-4 h-4 mx-4' src={linkedin} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Footer;