"use client"
import React, { useEffect, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContainerLayout from '@/layouts/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'
import { MoveRight } from 'lucide-react'
import { blogs } from '@/app/data/blogData' // Import the blogs data

const insights = () => {
        useLayoutEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        let attempts = 0;
        let lastY = -1;
        let stableCount = 0;
        const maxAttempts = 60; // ~1s at 60fps, safe upper bound

        const tryScroll = () => {
            const element = document.querySelector(hash);
            if (!element) {
                attempts++;
                if (attempts < maxAttempts) requestAnimationFrame(tryScroll);
                return;
            }

            const rect = element.getBoundingClientRect();
            const targetY = window.scrollY + rect.top;

            // Check if the position has stabilized across two frames
            if (Math.abs(targetY - lastY) < 2) {
                stableCount++;
            } else {
                stableCount = 0;
            }
            lastY = targetY;

            if (stableCount >= 2 || attempts >= maxAttempts) {
                element.scrollIntoView({ behavior: 'auto', block: 'start' });
                return;
            }

            attempts++;
            requestAnimationFrame(tryScroll);
        };

        requestAnimationFrame(tryScroll);
    }, []);

    return (
        <ContainerLayout>
            <div id='blogs' className='scroll-mt-10 md:scroll-mt-16'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-medium text-xl md:text-[44px] tracking-tighter font-hoves-pro'>Insights That Inspire</h1>
                    <p className='font-regular text-sm  text-center w-full md:text-xl leading-[120%] font-inter-tight py-2'>
                        Stay updated on the latest in piping materials, systems, techniques,<br className='hidden md:block' /> and industry standards.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-8">
                    {blogs.map((item, index) => {
                        const isTall = index === 2;
                        // Mobile: Base height 300px. Desktop: Tall item spans 2 rows and is full height. Others 350px.
                        const gridClass = isTall
                            ? 'md:row-span-2 md:col-start-2 md:row-start-1 h-[300px] md:h-full'
                            : 'md:row-span-1 h-[300px] md:h-[300px]';

                        return (
                            <Link
                                key={index}
                                href={`/resources/blogs/${item.slug}`}
                                className={`relative w-full overflow-hidden rounded-[20px] shadow-lg ${gridClass} group block touch-manipulation`}
                                style={{ WebkitTapHighlightColor: 'transparent' }}
                                scroll={true}
                            >
                                <SimpleParallax>
                                    <Image src={item.image} alt={item.title} fill className="object-cover pointer-events-none" />
                                </SimpleParallax>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                                <div className="absolute inset-0 flex flex-col cursor-pointer justify-end p-6 z-0">
                                    <h2 className="text-white text-xl md:text-[28px] leading-[24px] md:leading-[30px] tracking-tighter  font-hoves-pro font-medium mb-1 uppercase text-left">{item.title}</h2>
                                    <div className="flex items-center gap-2 text-white/90 cursor-pointer group-hover:text-white transition-colors">
                                        <span className="md:text-xl text-base font-inter-tight font-medium">Read the Article</span>
                                        <MoveRight className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </ContainerLayout>
    )
}

export default insights