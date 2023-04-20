import React from 'react';
import logo from '../../assets/logo2.png';
import book from '../../assets/bookNowBuuton.png'
import { Link } from 'react-router-dom';

const Header2 = () => {

    const headerMenu = ['About', 'Menu', 'Venue', 'Events'];

    return (
        <div className='h-36 flex  justify-between px-10 bg-[#CC9D2F]'>
            <Link to='/' className='flex items-center'>
                <img className='w-20 h-20 mr-2' src={logo} alt='' />
                <div className='flex flex-col items-start text-black'>
                    <p className='font-bold text-3xl'>Persian Table</p>
                    <p className='font-bold text-3xl'>طاولة فارسية</p>
                </div>
            </Link>

            <div className='text-2xl text-[#5B0017] font-bold flex items-center'>
                {
                        headerMenu.map((menu,i)=>
                            <Link to={`/${menu}`} className='mx-5' key={i}>{menu}</Link>
                        )
                    }
            </div>

            <div className='flex items-center'>
                <button className='w-40 h-16 bg-[#5B0017] text-2xl text-[#CC9D2F]'>Book Now</button>
                <img src={book} alt=''/>
            </div>
        </div>
    );
};

export default Header2;