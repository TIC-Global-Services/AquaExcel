import React from 'react'
import Image from 'next/image'
import identityimg from '@/assets/why-us/identityimg.jpg'
const Identity = () => {
  return (
    <div className='mt-10 py-10'>
      <div className='flex lg:flex-row flex-col justify-center gap-16 items-center'>
        <Image src={identityimg} alt="Identity" className='rounded-[20px] w-83.75 h-51.25 lg:w-130.5 lg:h-91' />
        <div className='flex flex-col items-start justify-start lg:gap-3 px-10'>
           <h1 className='text-[1.5rem] lg:text-[2.75rem] font-medium'>The Aqua Excel Identity</h1>
           <p className='text-sm lg:text-xl font-normal leading-[100%] mt-6 mr-6 max-w-xl'>
            Headquartered near Coimbatore, operating with state-of-the art machinery across 5 acres, powered by 75+ skilled people. We manufacture brass-threaded polymer taps, bath accessories, and CPVC/UPVC pipes & fittings for diverse market segments.
            </p> 
            <button className='mt-2 px-10 py-2 bg-red-600 text-white rounded-[12px] hover:bg-red-700 transition duration-300'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default Identity