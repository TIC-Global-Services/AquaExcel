import React from 'react'
import Image from 'next/image'
import tapimage from '@/assets/contact/tap_image.png'

const ContactDetails = () => {
  return (
    <section className="px-6 lg:px-[80px] py-10 lg:py-20 bg-background">
      <div className="max-w-8xl mx-auto">
        <div className="bg-[#FAF9F5] rounded-[20px] lg:rounded-[40px] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center py-20">

            {/* Left - Corporate Office */}
            <div className="text-left">
              <h3 className="font-hoves-pro font-medium text-xl lg:text-2xl text-foreground mb-4">
                Corporate Office
              </h3>
              <div className="font-hoves-pro text-sm lg:text-base text-foreground/80 leading-relaxed">
                <p className="font-medium mb-1 text-2xl">Aqua Excel</p>
                <p className='text-2xl'>S.F.NO.274/4, Anna Private</p>
                <p className='text-2xl'>Industrial Estate, Vilankurichi</p>
                <p className='text-2xl'>Road, Coimbatore - 641035</p>
              </div>
            </div>

            {/* Center - Tap Image */}
            <div className="flex justify-center order-first lg:order-none">
              <div className="relative w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]">
                <Image
                  src={tapimage}
                  alt="Aqua Excel Tap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right - Contact */}
            <div className="text-left lg:text-left">
              <h3 className="font-hoves-pro font-medium text-xl lg:text-2xl text-foreground mb-4">
                Contact
              </h3>
              <div className="font-hoves-pro text-sm lg:text-base leading-relaxed space-y-2">
                <p>
                  <span className="text-foreground/80 font-normal">Enquiry: </span>
                  <a href="tel:+918754010016" className="font-light">+91-87540 10016</a>
                </p>
                <p>
                  <span className="text-foreground/80 font-normal">Phone: </span>
                  <a href="tel:+914222986842" className="font-light">+91-422-2986842</a>
                </p>
                <p>
                  <span className="text-foreground/80 font-normal">Email: </span>
                  <a href="mailto:salescoordinator@aquaexcel.in" className="font-light">salescoordinator@aquaexcel.in</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
