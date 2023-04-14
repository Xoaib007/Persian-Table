import React from 'react';
import logo from '../../assets/logo.png';
import book from '../../assets/bookNowBuuton.png'
import { Link } from 'react-router-dom';

const Header = () => {

    const headerMenu = ['About', 'Menu', 'Venue', 'Events'];

    return (
        <div className='h-36 flex  justify-between px-10'>
            <div className='flex items-center'>
                <img className='w-20 h-20 mr-2' src={logo} alt='' />
                <div className='flex flex-col items-start'>
                    <p className='text-white font-bold text-3xl'>Persian Table</p>
                    <p className='text-white font-bold text-3xl'>طاولة فارسية</p>
                </div>
            </div>

            <div className='text-2xl text-white font-bold flex items-center'>
                {
                        headerMenu.map(menu=>
                            <Link className='mx-5'>{menu}</Link>
                        )
                    }
            </div>

            <div className='flex items-center'>
                <button className='w-40 h-16 bg-[#CC9D2F] text-2xl text-[#5B0017]'>Book Now</button>
                <img src={book} alt=''/>
            </div>
        </div>
    );
};

export default Header;