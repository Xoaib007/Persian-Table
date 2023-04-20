import React from 'react';
import img1 from '../../assets/About.png';
import img2 from '../../assets/About2.png';

const AboutBanner = () => {
    return (
        <div className='flex justify-center aboutbanner'>
            <div className='flex flex-col title-box'>
                <div className='title'>
                    <p className='xll'>Our Story</p>
                    <p className='mb-40'>We’re an absolute leader in the Saudi cuisine-themed restaurants. </p>
                </div>

                <div className='flex justify-center'>
                    <img className='mb-80' src={img1} alt='' />
                    <img src={img2} alt='' />
                </div>
            </div>

            <div className='paragraph'>
                <p className='text-white text-2xl'>One of the best resturants in Saudi Turkey.</p>
                <p>Your one direction to high-quality Saudi feasts, since 1998 we served in Saudi Arabia.
                    <br/><br/>
                    Locals who are proud of the country and want to introduce it to visitors from around the world.
                    We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry.
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem. Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus lorem.</p>
            </div>
        </div>
    );
};

export default AboutBanner;