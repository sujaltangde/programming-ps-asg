"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useThemeStore from '../store/themeStore';
import CountUp from 'react-countup';

const Stats = () => {
    const { theme } = useThemeStore();
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.1, // Adjust this value as needed
    });

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div id="stats" ref={ref} className={`flex md:flex-row flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} md:py-10 py-8 md:px-44 px-8`}>
            <div className='md:w-1/2'>
                <div className='text-2xl font-semibold'>
                    <p>Helping a local</p>
                    <p className='text-green-600'>business reinvent itself</p>
                </div>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className='md:w-1/2 md:mt-0 mt-5'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex items-center gap-2'>
                        <img src="/static/members.png" alt="members.png" className='w-8' />
                        <div>
                            {inView && (
                                <CountUp start={0} end={2245341} duration={5} separator="," formattingFn={formatNumber} />
                            )}
                            <p className='text-xs'>Members</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/static/clubs.png" alt="clubs.png" className='w-8' />
                        <div>
                            {inView && (
                                <CountUp start={0} end={46328} duration={5} separator="," formattingFn={formatNumber} />
                            )}
                            <p className='text-xs'>Clubs</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/static/bookings.png" alt="bookings.png" className='w-8' />
                        <div>
                            {inView && (
                                <CountUp start={0} end={828867} duration={5} separator="," formattingFn={formatNumber} />
                            )}
                            <p className='text-xs'>Event Bookings</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/static/payments.png" alt="payments.png" className='w-8' />
                        <div>
                            {inView && (
                                <CountUp start={0} end={1926436} duration={5} separator="," formattingFn={formatNumber} />
                            )}
                            <p className='text-xs'>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
