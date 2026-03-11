import React from 'react'
import Image from 'next/image'
import { describe } from 'node:test'
import ContainerLayout from '@/layouts/ContainerLayout'

const Sustainableinnovation = () => {

    const icon1 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/Sustainable/icon1.png";
    const icon2 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/Sustainable/icon2.png";
    const icon3 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/Sustainable/icon3.png";

    const list = [
        {
            description: "Ongoing R&D that pushes function, efficiency, and durability to new standards.",
            icon: icon1
        },
        {
            description: "Strict compliance with industry standards from concept and design to final delivery.",
            icon: icon2
        },
        {
            description: "Long-life product design that reduces waste, supported by water-saving components.",
            icon: icon3
        },
    ]
    return (
        <ContainerLayout maxWidth='w-full'>
            <div className='xl:py-10 mb-10 py-10 mt-5 md:mt-0 flex  items-center gap-20'>
                <div className=''>
                    <h1 className='text-xl md:text-[2rem] font-medium tracking-tight font-hoves-pro  md:text-left'>Sustainable Innovation & Research</h1>
                    <p className='md:text-base  text-sm font-regular font-inter-tight md:text-left'>
                        We continually elevate our processes and products to create solutions that are smarter, stronger, and more environmentally responsible.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full'>
                        {list.map((item, index) => (
                            <div key={index} className='flex flex-col items-start p-6 rounded-2xl bg-[#F9F9F9] border border-gray-100'>
                                <img src={item.icon} alt="" className='w-12 h-12 mb-4' />
                                <span className='lg:text-base md:text-base text-sm font-inter-tight font-regular text-[#646464]'>{item.description}</span>
                            </div>
                        ))}
                    </div>
            </div>
        </ContainerLayout>
    )
}

export default Sustainableinnovation