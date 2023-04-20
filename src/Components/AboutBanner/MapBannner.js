import React from 'react';
import Map from './Map';

const MapBannner = () => {
    return (
        <div className='bg-[#243054]'>
            <div>
                <p>Open Hours</p>
                <p>Sunday to Saturday<br/>09:00 AM to 11:00 PM</p>
                <p>Friday<br/>02:00 PM to 1:00 AM</p>
                <p>Location</p>
                <p>Street - 127, Jeddah,Saudi Arabia54654</p>
                <p>Contact us</p>
                <p>+123456789<br/>service@maizresturant.com</p>
            </div>
            <Map />
        </div>
    );
};

export default MapBannner;