import React from 'react'
import Image from 'next/image'
import banner from '@/assets/contact/contact_page_hero.png'
import HeroBanner from '../reuseable/heroBanner'

const Hero = () => {
  return (
    <div>
        <HeroBanner
        height='h-screen'
        backgroundImage={banner}
        titleClassName="text-hero-text font-hoves-pro font-medium xl:text-[60px] text-[22px]  leading-[26px] md:text-[42px] lg:leading-[64px] tracking-[-4%] mb-4"
        title={<>Your Connection <br className='hidden md:block'/>
Starts Here</>}
        subtitleClassName="text-hero-text font-inter-tight font-regular leading-[100%] xl:text-[20px] text-base max-w-4xl mb-4"
        subtitle={
          <>
          We’re here to help and answer any questions you might have. <span className='hidden md:block'>
            Whether it’s project
inquiries, collaborations, or feedback, reach out to us and we’ll get back to you promptly</span>
          </>
        }
        overlay={true}  
       buttonClassName="hidden"
      />
    </div>
  )
}

export default Hero