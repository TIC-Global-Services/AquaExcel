import React from 'react'
import Image from 'next/image'
import banner from '@/assets/resource/resourceherobanner.png'
import HeroBanner from '../reuseable/heroBanner'


const hero = () => {
  return (
    <div>
      <HeroBanner
      height="h-screen"
      backgroundImage={banner}
      titleClassName="text-[22px] font-hoves-pro md:text-[40px] xl:text-[60px] xl:leading-[64px] md:leading-[40px] tracking-[-4%] font-medium mb-4 text-[#E0E0E0] w-full"
      title={
        <>
          Everything You Need <br/>
          to Build Better
        </>
      }
      maxWidth='md:max-w-6xl'
      subtitleClassName="mb-5"
      subtitle={
        <span className="text-white font-[400] font-inter-tight text-sm md:text-base xl:text-[20px] xl:leading-[120%] text-base text-left  mb-6">
          From engineering guides to industry insights  explore curated resources designed for <br/> builders, contractors, architects, and infrastructure teams
        </span>
      }
      overlay={true}
      primaryButtonClassName='text-[10px] md:text-sm'
      secondaryButtonClassName="text-[10px] md:text-sm"
      buttonClassName='flex gap-4 '
      primaryButtonText="Explore Innovations"
      secondaryButtonText="Customer Enquiry"
    />
    </div>
  )
}

export default hero