import React from 'react'
import icon1 from  '@/assets/why-us/innovation/icon1.png'
import icon2 from  '@/assets/why-us/innovation/icon2.png'
import icon3 from  '@/assets/why-us/innovation/icon3.png'
import tap from '@/assets/why-us/builforreason.png'
import Image from 'next/image'
import { describe } from 'node:test'
import ContainerLayout from '@/layouts/ContainerLayout'

const Sustainableinnovation = () => {
    const list=[
        {
            description:"Ongoing R&D that pushes function, efficiency, and durability to new standards.",
            icon:icon1
        },
        {
            description:"Strict compliance with industry standards from concept and design to final delivery.",
            icon:icon2
        },
        {
            description:"Long-life product design that reduces waste, supported by water-saving components.",
            icon:icon3
        },
    ]
  return (
    <ContainerLayout>
        <div className='xl:py-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-20'>
       <div>
        <h1 className='text-xl lg:text-[2.75rem] font-medium '>Sustainable Innovation & Research</h1>
       <p className='lg:text-xl  text-sm font-medium'>
            We continually elevate our processes and products to create solutions that <br/> are smarter, stronger, and more environmentally responsible.
       </p>
       <ul className='list-none mt-4'>
           {list.map((item, index) => (
               <li key={index} className='flex items-center mb-2 space-y-5'>
                   <img src={item.icon.src} alt="" className='w-12 h-12 mr-3' />
                   <span className='lg:text-xl text-xs'>{item.description}</span>
               </li>
           ))}
       </ul>
       </div>
       <div className='md:-translate-y-2 -translate-y-10'>
         <div className='relative flex items-center justify-center'>
           <Image src={tap.src} alt="Tap" width={330} height={330} className='relative z-10 w-full h-[260px] md:w-[330px] md:h-[330px] object-cover rounded-2xl' />
         </div>
       </div>
   </div>
    </ContainerLayout>
  )
}

export default Sustainableinnovation