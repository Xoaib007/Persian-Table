import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img src={logo} alt='' />
                <div className='flex flex-col items-start'>
                    <p className='text-white font-bold text-2xl'>Persian Table</p>
                    <p className='text-white font-bold text-2xl'>طاولة فارسية</p>
                </div>
            </div>
        </div>
    );
};

export default Header;