import React from 'react';
import HomeBanner from '../../assets/HomeBanner2.png';
import Vanue1 from '../../assets/vanue1.png';
import Vanue2 from '../../assets/vanue2.png';
import Vanue3 from '../../assets/vanue3.png';

const HomeBanner2 = () => {
    return (
        <div className='flex text-white mx-auto justify-center homebanner2 gap-x-2'>
            <img className='w-[400px] h-[620px]' src={HomeBanner} alt=''/>

            <div className='flex flex-col justify-center'>
                <p className='xl text-justify'>A distinctive dining destination <br/> inspired by the culture.</p>
                <p className=' text-justify'>Experience Al Balad old town of Jeddah vibes.</p>

                <button className='button2'>Our Vanue</button>
                <div className='flex justify-between vanue-cont'>
                    <img className='' src={Vanue1} alt=''/>
                    <img src={Vanue2} alt=''/>
                    <img src={Vanue3} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner2;