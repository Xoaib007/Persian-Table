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

const MenuPage = () => {
    return (
        <div className='min-h-screen bg-[#5B0017]'>
            <div className='flex text-white'>
                <p className='xl'>Discover Our Menu</p>
                <p>There is a wide selection of choices served by top Saudi chefs, prepared using best quality local ingredients.</p>
            </div>

            <div className='text-white'>
                <p>Chef's Special</p>
                <div>
                    <div>
                        <img src={dish1} alt='dish1'/>
                        <p className='text-left bg-[#243054] p-8'>Bukhari</p>
                    </div>
                    
                    <div>
                        <img src={dish2} alt='dish1'/>
                        <p>Saudi Makboos</p>
                    </div>
                    
                    <div>
                        <img src={dish3} alt='dish1'/>
                        <p>Zubiam</p>
                    </div>
                    
                    <div>
                        <img src={dish4} alt='dish1'/>
                        <p>Kabsa</p>
                    </div>
                    
                    <div>
                        <img src={dish5} alt='dish1'/>
                        <p>Madfoon</p>
                    </div>
                    
                    <div>
                        <img src={dish6} alt='dish1'/>
                        <p>Math Lootha</p>
                    </div>
                    
                    <div>
                        <img src={dish7} alt='dish1'/>
                        <p>Margoug</p>
                    </div>
                    
                    <div>
                        <img src={dish8} alt='dish1'/>
                        <p>Sayadya</p>
                    </div>
                    
                    <div>
                        <img src={dish9} alt='dish1'/>
                        <p>Saleeg</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;