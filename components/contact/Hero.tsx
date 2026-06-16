import React from 'react'
import Image from 'next/image'
import banner from '@/assets/contact/contact_page_hero.png'
import HeroBanner from '../reuseable/heroBanner'


const Hero = () => {
  return (
    <div>
      {/* Mobile Hero - Shorter subtitle */}
      <div className="md:hidden">
        <HeroBanner

          height='h-screen'
          backgroundImage={banner}
          titleClassName="text-hero-text font-hoves-pro font-medium xl:text-[60px] text-[22px]  leading-[26px]  md:text-[42px] lg:leading-[64px] tracking-[-4%] mb-4"
          title={<>Your Connection <br className='hidden md:block' />
            Starts Here</>}
          subtitleClassName="text-[#E0E0E0] font-inter-tight font-regular leading-[100%] xl:text-[20px] text-base md:max-w-5xl mb-4"
          subtitle={
            <>
              We're here to help and answer any questions you might have.
            </>
          }
          overlay={true}
          buttonClassName="hidden"
        />
      </div>
      {/* Desktop Hero - Longer subtitle */}
      <div className="hidden md:block">
        <HeroBanner

          height='h-screen'
          backgroundImage={banner}
          titleClassName="text-hero-text font-hoves-pro font-medium xl:text-[60px] text-[22px]  leading-[26px] md:text-[42px] lg:leading-[64px] tracking-[-3%] mb-4"
          title={<>Your Connection <br className='hidden lg:block' />
            Starts Here</>}
          subtitleClassName="text-hero-text font-inter-tight font-regular leading-[120%] xl:text-[20px] text-base md:max-w-5xl mb-4"
          subtitle={
            <>
              We're here to help and answer any questions you might have.Whether it's project<br /> inquiries, collaborations, or feedback, reach out to us and we'll get back to you promptly.
            </>
          }
          overlay={true}
          buttonClassName="hidden"
        />
      </div>
    </div>
  )
}

export default Hero