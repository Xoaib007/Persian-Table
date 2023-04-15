import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
    const headerMenu = ['About', 'Menu', 'Venue', 'Events'];

    return (
        <div className='h-80 bg-[#CC9D2F]'>
            <div className='flex items-start bg-black w-fit px-6 py-2'>
                    <p className='text-white font-bold text-2xl mr-5'>Persian Table</p>
                    <p className='text-white font-bold text-2xl'>طاولة فارسية</p>
                </div>

            <div className='text-2xl text-white font-bold flex items-center'>
                {
                        headerMenu.map((menu,i)=>
                            <Link to={`/${menu}`} className='mx-5' key={i}>{menu}</Link>
                        )
                    }
            </div>
        </div>
    );
};

export default Footer;