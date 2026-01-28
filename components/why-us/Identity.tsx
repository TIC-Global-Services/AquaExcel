"use client"
import React from 'react'
import Image from 'next/image'
import identityimg from '@/assets/why-us/identityimg.jpg'
import SimpleParallax from 'simple-parallax-js'
import { useRouter } from 'next/navigation';
import ContainerLayout from '@/layouts/ContainerLayout'
import Link from 'next/link'

const Identity = () => {
  const router = useRouter();

  const navigateAndScroll = (value: string) => {
    router.push(`/resources${value}`);
  };

  return (
    <ContainerLayout>
      <div className='mt-10 lg:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
          <div className=''>
            <div className='overflow-hidden rounded-[20px]'>
              <SimpleParallax>
                <Image src={identityimg} alt="Identity" className='object-cover w-full h-full ' />
              </SimpleParallax>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 xl:px-10 '>
            <h1 className='text-[1.5rem] xl:text-[2.75rem] tracking-tighter font-medium font-hoves-pro'>The Aqua Excel Identity</h1>
            <p className='text-sm lg:text-xl font-normal leading-[120%] xl:mt-0  xl:max-w-xl pr-8 xl:pr-0 text-left font-inter-tight'>
              Headquartered near Coimbatore, operating with state-of-the art machinery across 5 acres, powered by 75+ skilled people. We manufacture brass-threaded polymer taps, bath accessories, and CPVC/UPVC pipes & fittings for diverse market segments.
            </p>
            <button onClick={() => navigateAndScroll('#blogs')} className='mt-2 px-8 lg:px-10 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-300 text-[12px] lg:text-sm cursor-pointer'>Know More</button>
          </div>
        </div>
      </div>
    </ContainerLayout>
  )
}

export default Identity
