import React from 'react'
import banner from '@/assets/why-us/why-us-hero-image.svg'
import Button from '../reuseable/Button'
import Image from 'next/image'
import HeroBanner from '../reuseable/heroBanner'

const hero = () => {
  return (
    // <section className="relative h-screen w-full bg-hero-bg overflow-hidden">
    //     {/* Background Image */}
    //     <div className="absolute inset-0">
    //   <Image
    //     src={banner}
    //     alt="AquaExcel Product"
    //     fill
    //     className="object-cover scale-110"
    //     loading="lazy"
    //     quality={90}
    //   />
    // </div>

    //     {/* Content */}
    //     <div className="relative h-[860px] flex items-end pb-8">
    //       <div className="px-6 xl:px-[80px] lg:px-[40px] w-full">
    //         <div className="max-w-5xl">
    //           <h1 className="text-hero-text font-hoves-pro font-medium xl:text-[60px] text-[22px] leading-[64px] tracking-[-0.04em] mb-4">
    //           Strength in every detail,<br/>reliability in every moment of use.
    //           </h1>

    //           <p className="text-hero-text font-hoves-pro font-light xl:text-[20px] text-base max-w-4xl mb-4">
    //             Trusted By Thousands Of Plumbers, Built On Patent-Applied Technology, Every Aqua Excel <br></br>Product Is Made To Last, Leak-Free And Worry-Free.
    //           </p>

    //           <div className="flex flex-wrap gap-4">
    //             <Button variant="primary" className='xl:text-[12px] text-[10px]'>Explore Innovations</Button>
    //             <Button variant="secondary" className='xl:text-[12px] text-[10px]'>Customer Enquiry</Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    <div>
      <HeroBanner
        height='h-screen'
        backgroundImage={banner}
        titleClassName="text-[22px] font-hoves-pro md:text-[40px] xl:text-[60px] xl:leading-[64px] md:leading-[40px] tracking-tighter font-medium mb-4 text-[#E0E0E0] w-full"
        title={
          <>
            Strength in every detail,
            <br />
            reliability in every moment of use.
          </>
        }
        maxWidth='md:max-w-6xl'
        subtitleClassName="mb-5"
        subtitle={
          <span className="text-[#E0E0E0] font-[400] font-inter-tight text-sm md:text-base xl:text-[20px] xl:leading-[120%] text-base text-left  mb-6">
          Where innovation and sustainability come together with uncompromising quality<br/> ensuring every installation stands the test of time.
          </span>
        }
        primaryButtonClassName='text-[10px] md:text-sm'
        secondaryButtonClassName="text-[10px] md:text-sm"
        buttonClassName='flex gap-4 '
        primaryLink='/products'
        primaryButtonText="Explore Innovations"
        secondaryLink='/contact'
        secondaryButtonText="Customer Enquiry"
      />
    </div>

  )
}

export default hero