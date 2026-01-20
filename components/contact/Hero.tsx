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
        titleClassName="text-hero-text font-hoves-pro font-medium xl:text-[60px] text-[22px] md:text-[42px] lg:leading-[64px] tracking-[-0.04em] mb-4"
        title={<>Your Connection<br/>
Starts Here</>}
        subtitleClassName="text-hero-text font-hoves-pro font-light xl:text-[20px] text-base max-w-4xl mb-4"
        subtitle={
          <>
          We’re here to help and answer any questions you might have. Whether it’s project
inquiries, collaborations, or feedback, reach out to us and we’ll get back to you promptly.
          </>
        }
        overlay={true}  
       buttonClassName="hidden"
      />
    </div>
  )
}

export default Hero