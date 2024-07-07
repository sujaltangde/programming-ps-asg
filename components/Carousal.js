"use client";

import { useEffect, useState } from 'react';
import useThemeStore from '../store/themeStore';





const carousalData = [
    {
        title: "Lessons and insights",
        titleHighlight: "from 8 years",
        desc: "Where to grow your business as a photographer: site or social media?",
        img: "/static/Illustration1.svg"
    },
    {
        title: "The Ultimate Guide",
        titleHighlight: "to Marketing",
        desc: "Discover the most effective marketing strategies to boost your business growth.",
        img: "/static/Illustration2.svg"
    },
    {
        title: "Top 10 Tips",
        titleHighlight: "for Freelancers",
        desc: "Essential tips to succeed as a freelancer in the competitive market.",
        img: "/static/Illustration3.svg"
    },
];

const Carousal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


const { theme, toggleTheme } = useThemeStore();

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };


    
    return (
        <>
            <div className={` mb-10 md:py-8 ${theme === "light" && "bg-gray-100"}`}>
                <div className="flex flex-col md:flex-row md:px-44 px-8 md:h-[60vh] h-[70vh]">
                    <div className="md:w-2/3 md:pt-14 md:pb-0 pb-5">
                        <p className="md:text-5xl text-2xl font-semibold">{carousalData[currentSlide].title}</p>
                        <p className="md:text-5xl text-2xl font-semibold text-green-600">{carousalData[currentSlide].titleHighlight}</p>
                        <p className="py-4 text-sm">{carousalData[currentSlide].desc}</p>
                        <button className="text-white text-sm rounded-sm bg-green-600 px-8 py-2">
                            Register
                        </button>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <img src={carousalData[currentSlide].img} alt={`Slide ${currentSlide}`} className='md:w-96 w-44' />
                    </div>
                </div>
                <div className="flex justify-center mt-8 space-x-2 pb-4">
                    {carousalData.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-green-600' : 'bg-gray-300'}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousal;
