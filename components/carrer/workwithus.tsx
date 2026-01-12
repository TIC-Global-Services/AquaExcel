"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import image1 from '@/assets/carrer/grid1.png'
import image2 from '@/assets/carrer/grid2.png'
import image3 from '@/assets/carrer/grid3.jpg'
import image4 from '@/assets/carrer/grid4.png'
import SimpleParallax from 'simple-parallax-js'
const workwithus = () => {
useEffect(() => {
    // Parallax effect — smooth, performant, respects rounded corners
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight / 2; // center-based trigger

      document.querySelectorAll<HTMLElement>(".parallax-media").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2 + window.scrollY;

        // Distance from viewport center
        const distance = scrolled - cardCenter;
        const offset = distance * 0.12; // adjust speed here (0.12 = smooth & subtle)

        el.style.transform = `translateY(${offset}px) scale(1.1)`; // slight scale to fill bleed
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const content = [
        {

            title: "Expertise That Delivers",
            image: image1
        },
        {

            title: "transparent, On-Time Work",
            image: image2
        },
        {

            title: "Quality you can trust",
            image: image3
        },
        {

            title: "Made-to-Fit Solutions",
            image: image4
        },
    ]
    return (
        <div className='py-10 xl:py-30 px-[5%]'>
            <div className='flex flex-col justify-center text-center'>
                <h1 className='text-xl xl:text-[2.75rem] font-medium tracking-[-4%]'>Why work with us</h1>
                <p className='xl:text-xl text-sm font-light'>We believe great products come from great people.<br className='xl:hidden block' /> Here's what <br className='hidden xl:block' /> drives us every day.</p>
            </div>
            <div className='flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-9 gap-5 relative py-16 snap-x snap-mandatory md:snap-none scrollbar-hide'>
                {content.map((val, index) => (
                    <div key={index} className={`relative flex-shrink-0 w-[280px] md:w-auto  snap-center ${index == 0 ? 'md:col-span-3' : index == 1 ? 'md:col-span-6' : index == 2 ? 'md:col-span-6' : index == 3 ? 'md:col-span-3' : ''}`}>
                        <div className="w-full h-full overflow-hidden rounded-[20px]">
                        <div className='absolute inset-0 bg-black/40 z-10 rounded-[20px]'></div>
                            <Image
                                src={val.image}
                                alt="grids"
                                className={`w-full h-full object-cover parallax-media ${index == 0 ? "" : ""}`}
                            />
                        </div>
                        <div className="absolute bottom-7 left-5 right-5 z-10">
                            <p className="text-white font-hoves-pro font-medium text-lg lg:text-xl">
                                {val.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default workwithus