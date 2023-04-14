import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {

    const headerMenu = ['About', 'Menu', 'Venue', 'Events'];

    return (
        <div className='h-36 flex  items-center'>
            <div className='flex items-center'>
                <img className='w-20 h-20 mr-2' src={logo} alt='' />
                <div className='flex flex-col items-start'>
                    <p className='text-white font-bold text-3xl'>Persian Table</p>
                    <p className='text-white font-bold text-3xl'>طاولة فارسية</p>
                </div>
            </div>

            <div className='ml-20 text-2xl text-white font-bold'>
                <ul className='flex'>
                    {
                        headerMenu.map(menu=>
                            <li className='mx-5'>{menu}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;