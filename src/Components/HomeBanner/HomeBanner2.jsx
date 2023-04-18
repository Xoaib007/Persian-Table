import React from 'react';
import HomeBanner from '../../assets/HomeBanner2.png';
import Vanue1 from '../../assets/vanue1.png';
import Vanue2 from '../../assets/vanue2.png';
import Vanue3 from '../../assets/vanue3.png';

const HomeBanner2 = () => {
    return (
        <div className='flex text-white mt-20 mx-auto justify-center'>
            <img src={HomeBanner} alt=''/>

            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl'>A distinctive dining destination inspired by the culture.</p>
                <p>Experience Al Balad old town of Jeddah vibes.</p>

                <button>Our Vanue</button>
                <div className='flex'>
                    <img src={Vanue1} alt=''/>
                    <img src={Vanue2} alt=''/>
                    <img src={Vanue3} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner2;