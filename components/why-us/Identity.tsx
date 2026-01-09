import React from 'react'
import Image from 'next/image'
import identityimg from '@/assets/why-us/identityimg.jpg'
const Identity = () => {
  return (
    <div className='mt-10 lg:py-10 py-5'>
      <div className='flex xl:flex-row flex-col px-5 xl:px-20 gap-5 xl:gap-16  xl:items-center'>
       <div className=''>
         <Image src={identityimg} alt="Identity" className='rounded-[20px] object-cover w-full h-62.5 lg:h-95 xl:w-130.5 xl:h-91 md:h-91' />
       </div>
        <div className='flex flex-col items-start justify-start gap-3 xl:px-10'>
           <h1 className='text-[1.5rem] lg:text-[2.75rem] font-medium'>The Aqua Excel Identity</h1>
           <p className='text-sm lg:text-xl font-normal leading-tight xl:mt-6 xl:mr-6 xl:max-w-xl pr-8 xl:pr-0 text-left'>
            Headquartered near Coimbatore, operating with state-of-the art machinery across 5 acres, powered by 75+ skilled people. We manufacture brass-threaded polymer taps, bath accessories, and CPVC/UPVC pipes & fittings for diverse market segments.
            </p> 
            <button className='mt-2 px-5 lg:px-10 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-300 text-[10px] lg:text-xs'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default Identity