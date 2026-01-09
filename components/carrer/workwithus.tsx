import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/carrer/grid1.png'
import image2 from '@/assets/carrer/grid2.png'
import image3 from '@/assets/carrer/grid3.jpg'
import image4 from '@/assets/carrer/grid4.png'
const workwithus = () => {
    const content=[
        {
            
            title:"Expertise That Delivers",
            image:image1
        },
        {
            
            title:"transparent, On-Time Work",
            image:image2
        },
        {
            
            title:"Quality you can trust",
            image:image3
        },
        {
            
            title:"Made-to-Fit Solutions",
            image:image4
        },
    ]
  return (
    <div className='py-10 xl:py-30 px-[5%]'>
        <div className='flex flex-col justify-center text-center'>
            <h1 className='text-xl xl:text-[2.75rem] font-medium tracking-[-4%]'>Why work with us</h1>
            <p className='xl:text-xl text-sm font-light'>We believe great products come from great people.<br className='xl:hidden block'/> Here's what <br className='hidden xl:block'/> drives us every day.</p>
        </div>
        <div className='flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-5 gap-5 relative py-16 snap-x snap-mandatory md:snap-none scrollbar-hide'>
            {content.map((val,index)=>(
                <div key={index} className={`relative flex-shrink-0 w-[280px] h-[350px] md:w-auto md:h-auto snap-center ${index==0 ? 'md:col-span-2': index==1?'md:col-span-3':index==2?'md:col-span-3':index==3?'md:col-span-2':''}`}>
                    <div className='absolute h-full w-full bg-black/40 rounded-[20px]'></div>
                    <Image src={val.image} alt="grids" className='object-cover rounded-[20px] h-full w-full'/>
                    <div className="absolute bottom-4 left-4 right-4">
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