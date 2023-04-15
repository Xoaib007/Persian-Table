import React from 'react';
import reviewer from '../../assets/review.png';
import review from '../../assets/review1.png';
import element from '../../assets/BannerElement2.png'

const HomeBanner3 = () => {
    return (
        <div className='flex mx-40'>
            <div className='bg-[#CC9D2F]'>
                <img src={element} alt='' />

                <div>
                    <div>
                        <p>“</p>
                        <p>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                    </div>

                    <div>
                        <div>
                            <p>Khalid Al Dawsry</p>
                            <p>Jeddah, Saudi</p>
                        </div>

                        <img src={reviewer} alt='' />
                    </div>
                </div>
            </div>

            <img src={review} alt=''/>
        </div>
    );
};

export default HomeBanner3;