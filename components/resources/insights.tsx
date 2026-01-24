"use client"
import React from 'react'
import Image from 'next/image'
import insight1 from '@/assets/resource/inspire-1.png'
import insight2 from '@/assets/resource/inspire-2.png'
import insight3 from '@/assets/resource/inspire-3.png'
import ContainerLayout from '@/layouts/ContainerLayout'
import SimpleParallax from 'simple-parallax-js'
import { MoveRight } from 'lucide-react'

const insights = () => {

    const insightsData = [
        {
            title: "Why Brass Threading  matters",
            subtitle: "Read the Article",
            image: insight1
        },
        {
            title: "Water-saving aerators explained",
            subtitle: "Read the Article",
            image: insight2
        },
        {
            title: "Fixing common bathroom leaks",
            subtitle: "Read the Article",
            image: insight3
        }
    ]
    return (
        <ContainerLayout>
            <div>
            <div className='flex flex-col items-center'>
                <h1 className='font-medium text-xl md:text-[44px] tracking-tighter font-hoves-pro'>Insights That Inspire</h1>
                <p className='font-regular text-sm text-center md:text-xl leading-[120%] font-inter-tight py-2'>
                    Stay updated on the latest in piping materials, systems, techniques,<br/> and industry standards.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
                {insightsData.map((item, index) => {
                    const isTall = index === 2;
                    // Mobile: Base height 300px. Desktop: Tall item spans 2 rows and is full height. Others 350px.
                    const gridClass = isTall
                        ? 'md:row-span-2 md:col-start-2 md:row-start-1 h-[300px] md:h-full'
                        : 'md:row-span-1 h-[300px] md:h-[300px]';

                    return (
                        <div key={index} className={`relative w-full overflow-hidden rounded-[20px] shadow-lg ${gridClass}`}>
                            <SimpleParallax>
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </SimpleParallax>
                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                <h2 className="text-white text-xl md:text-[28px] leading-[24px] md:leading-[30px] tracking-tighter  font-hoves-pro font-medium mb-1 uppercase text-left">{item.title}</h2>
                                <div className="flex items-center gap-2 text-white/90 cursor-pointer hover:text-white transition-colors">
                                    <span className="md:text-xl text-base font-inter-tight font-medium">Read the Article</span>
                                    <MoveRight />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </ContainerLayout>
    )
}

export default insights