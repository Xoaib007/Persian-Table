import React from 'react';
import dish1 from '../assets/menu/Image (1).png';
import dish2 from '../assets/menu/Image (2).png';
import dish3 from '../assets/menu/Image (3).png';
import dish4 from '../assets/menu/Image (4).png';
import dish5 from '../assets/menu/Image (5).png';
import dish6 from '../assets/menu/Image (6).png';
import dish7 from '../assets/menu/Image (7).png';
import dish8 from '../assets/menu/Image (8).png';
import dish9 from '../assets/menu/Image (9).png';
import Menu from '../Components/MenuPage/Menu';

const MenuPage = () => {
    return (
        <div className='min-h-screen bg-[#5B0017] pt-36 px-40 bannerleft'>
            <div className='flex text-white text-left justify-between'>
                <p className='xl w-1/3'>Discover <br/>Our Menu</p>
                <p className=' w-1/4'>There is a wide selection of choices served by top Saudi chefs, prepared using best quality local ingredients.</p>
            </div>

            <div className='text-white mt-24 mb-40'>
                <p className='text-2xl text-left mb-14'>Chef's Special</p>
                <div className='grid grid-cols-3 gap-10'>
                    <div>
                        <img className='w-full' src={dish1} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6' >Bukhari</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish2} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Saudi Makboos</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish3} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Zubiam</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish4} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Kabsa</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish5} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Madfoon</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish6} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Math Lootha</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish7} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Margoug</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish8} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Sayadya</p>
                    </div>
                    
                    <div>
                        <img className='w-full' src={dish9} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-6'>Saleeg</p>
                    </div>
                </div>
            </div>

            <Menu/>
        </div>
    );
};

export default MenuPage;