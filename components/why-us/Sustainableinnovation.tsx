import React from 'react'
import icon1 from '@/assets/why-us/innovation/icon1.png'
import icon2 from '@/assets/why-us/innovation/icon2.png'
import icon3 from '@/assets/why-us/innovation/icon3.png'
import tap from '@/assets/why-us/builforreason.png'
import Image from 'next/image'
import { describe } from 'node:test'
import ContainerLayout from '@/layouts/ContainerLayout'

const Sustainableinnovation = () => {
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
            <div className='xl:py-20 mb-10 py-10 flex flex-col items-center gap-20'>
                <div className=''>
                    <h1 className='text-xl lg:text-[2.75rem] font-medium tracking-tight font-hoves-pro  md:text-center'>Sustainable Innovation & Research</h1>
                    <p className='lg:text-xl  text-sm font-regular font-inter-tight md:text-center'>
                        We continually elevate our processes and products to create solutions that <br  className='hidden md:block'/> are smarter, stronger, and more environmentally responsible.
                    </p>
                    <ul className='list-none mt-10 w-full space-y-5'>
                        {list.map((item, index) => (
                            <li key={index} className='flex items-center '>
                                <img src={item.icon.src} alt="" className='w-12 h-12 mr-3'/>
                                <span className='lg:text-xl text-sm font-inter-tight font-regular text-[#646464]'>{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ContainerLayout>
    )
}

export default Sustainableinnovation