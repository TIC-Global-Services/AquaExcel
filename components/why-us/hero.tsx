import React from 'react'
import banner from '@/assets/why-us/why-us-hero-image.svg'
import Button from '../reuseable/Button'
import Image from 'next/image'

const hero = () => {
  return (
      <section className="relative h-[860px] w-full bg-hero-bg overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
        <Image
          src={banner}
          alt=""
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>
    
          {/* Content */}
          <div className="relative h-[860px] flex items-end pb-8">
            <div className="px-6 xl:px-[80px] lg:px-[40px] w-full">
              <div className="max-w-5xl">
                <h1 className="text-hero-text font-hoves-pro font-medium text-[60px] leading-[64px] tracking-[-0.04em] mb-4">
                Strength in every detail,<br/>reliability in every moment of use.
                </h1>
                
                <p className="text-hero-text font-hoves-pro font-light text-[20px] text-base max-w-4xl mb-4">
                  Trusted By Thousands Of Plumbers, Built On Patent-Applied Technology, Every Aqua Excel <br></br>Product Is Made To Last, Leak-Free And Worry-Free.
                </p>
    
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Explore Innovations</Button>
                  <Button variant="secondary">Customer Enquiry</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default hero