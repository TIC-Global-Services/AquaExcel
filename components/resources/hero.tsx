import React from 'react'
import Image from 'next/image'
import HeroBanner from '../reuseable/heroBanner'


const hero = () => {

  const banner = "https://ik.imagekit.io/pgtxr2fmn/Resources/Hero/resourceherobanner.png";

  return (
    <div>
      <HeroBanner
      height="h-screen"
      backgroundImage={banner}
      titleClassName="text-[22px] font-hoves-pro md:text-[40px] leading-[120%] xl:text-[60px] xl:leading-[64px] md:leading-[40px] tracking-tight font-medium mb-4 text-[#E0E0E0] w-full"
      title={
        <>
          Everything You Need <br/>
          to Build Better
        </>
      }
      maxWidth='md:max-w-6xl'
      subtitleClassName="mb-5"
      subtitle={
        <span className="text-[#E0E0E0] font-[400] font-inter-tight text-sm md:text-base xl:text-[20px] xl:leading-[120%]  text-left  mb-6">
          From engineering guides to industry insights  explore curated resources designed for <br className='hidden md:block'/> builders, contractors, architects, and infrastructure teams
        </span>
      }
      overlay={true}
      primaryButtonClassName='text-[12px] py-2 md:text-sm'
      secondaryButtonClassName="text-[12px] py-2 md:text-sm"
      buttonClassName='flex gap-4 '
      primaryButtonText="Explore Innovations"
      secondaryButtonText="Customer Enquiry"
    />
    </div>
  )
}

export default hero