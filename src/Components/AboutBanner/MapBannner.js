import React from 'react';
import Map from './Map';

const MapBannner = () => {
    return (
        <div className='bg-[#243054] flex p-28 mt-28 mapbanner2'>

            <div className='bg-[#5B0017] text-xl text-white text-left p-16'>
                <p className='text-[#CC9D2F] mb-3 mt-5'>Open Hours</p>
                <p>Sunday to Saturday<br/>09:00 AM to 11:00 PM</p>
                <p>Friday<br/>02:00 PM to 1:00 AM</p>
                <p className='text-[#CC9D2F] mb-3 mt-5'>Location</p>
                <p>Street - 127, Jeddah,Saudi Arabia54654</p>
                <p className='text-[#CC9D2F] mb-3 mt-5'>Contact us</p>
                <p>+123456789<br/>service@maizresturant.com</p>
            </div>

            <Map />
        </div>
    );
};

export default MapBannner;