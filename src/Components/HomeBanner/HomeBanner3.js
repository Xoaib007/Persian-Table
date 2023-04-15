import React from 'react';
import reviewer from '../../assets/review.png';
import review from '../../assets/review1.png';
import element from '../../assets/BannerElement2.png';
import line from '../../assets/Line.png'

const HomeBanner3 = () => {
    return (
        <div className='flex mx-20 mt-20 pb-60'>
            <div className='bg-[#CC9D2F]'>
                <img className='' src={element} alt='' />

                <div className='w-[363px] mr-16 ml-20'>
                    <div>
                        <p>“</p>
                        <p>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                    </div>

                    <div className='flex justify-between mt-36 mb-2'>
                        <div className='text-left'>
                            <p>Khalid Al Dawsry</p>
                            <p>Jeddah, Saudi</p>
                        </div>

                        <img src={reviewer} alt='' />
                    </div>

                    <img src={line} alt=''/>
                </div>
            </div>

            <img src={review} alt=''/>
        </div>
    );
};

export default HomeBanner3;