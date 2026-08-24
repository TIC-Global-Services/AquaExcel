"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import image1 from '@/assets/carrer/grid1.png'
import image2 from '@/assets/carrer/grid2.png'
import image3 from '@/assets/carrer/grid3.jpg'
import image4 from '@/assets/carrer/grid4.png'

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

                // Check if this offset is causing it to fly off page
                // el.style.transform = `translateY(${offset}px) scale(1.1)`; // slight scale to fill bleed
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
            title: "Transparent, On-Time Work",
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
        <>
            <div className='pt-17 pb-10 xl:py-30 md:px-[5%]'>
                <div className='flex flex-col justify-center gap-2 text-center'>
                    <h1 className='text-xl md:text-3xl lg:text-[2.75rem] leading-[120%] font-medium tracking-tighter'>Why work with us</h1>
                    <p className='md:text-xl text-sm font-light leading-[120%]'>We believe great products come from great people.<br className='xl:hidden block' /> Here's what <br className='hidden xl:block' /> drives us every day.</p>
                </div>
                {/* Mobile: Automatically moving cards (infinite marquee without scroll) */}
                <div className='md:hidden overflow-hidden w-full relative py-5'>
                    <div
                        className='flex gap-5 w-max animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]'
                        style={{ animationDuration: '10s' }}
                    >
                        {[...content, ...content, ...content].map((val, index) => (
                            <div
                                key={index}
                                className="relative flex-shrink-0 w-[260px] h-[260px] rounded-[20px] overflow-hidden"
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-[20px]">
                                    <div className='absolute inset-0 bg-black/40 z-10 rounded-[20px]'></div>
                                    <Image
                                        fill
                                        src={val.image}
                                        alt={val.title}
                                        sizes="(max-width: 768px) 80vw, 260px"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-6 left-5 right-5 z-10 pointer-events-none">
                                    <p className="text-white font-hoves-pro font-medium text-base">
                                        {val.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: Bento Grid Layout */}
                <div className='hidden md:grid md:grid-cols-9 gap-5 relative py-5 px-0'>
                    {content.map((val, index) => (
                        <div
                            key={index}
                            className={`relative flex-shrink-0 md:w-auto h-[280px] lg:h-[340px] xl:h-[380px] rounded-[20px] overflow-hidden ${
                                index == 0 ? 'md:col-span-3' : index == 1 ? 'md:col-span-6' : index == 2 ? 'md:col-span-6' : index == 3 ? 'md:col-span-3' : ''
                            }`}
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-[20px]">
                                <div className='absolute inset-0 bg-black/40 z-10 rounded-[20px]'></div>
                                <Image
                                    fill
                                    src={val.image}
                                    alt={val.title}
                                    sizes="(max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-cover scale-100 md:scale-105 parallax-media"
                                />
                            </div>
                            <div className="absolute bottom-7 left-5 right-5 z-10 pointer-events-none">
                                <p className="text-white font-hoves-pro font-medium text-lg lg:text-xl">
                                    {val.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default workwithus