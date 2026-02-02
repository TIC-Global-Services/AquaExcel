import React from 'react'
import Image from 'next/image'
import tapimage from '@/assets/contact/tap_image.png'
import ContainerLayout from '@/layouts/ContainerLayout'

const ContactDetails = () => {
  return (
    <ContainerLayout>
      <section className="py-10 lg:py-20 bg-background">
      <div className="">
        <div className="bg-[#FAF9F5] rounded-[20px] lg:rounded-[40px] md:p-8 lg:px-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-center justify-center py-10">

            {/* Left - Corporate Office */}
            <div className="text-left lg:text-left w-full">
              <h3 className="font-hoves-pro font-medium text-xl lg:text-[32px] text-foreground mb-5">
                Corporate Office
              </h3>
             
                <p className="font-medium mb-1 text-base text-[#646464] md:text-[24px] leading-[100%]">Aqua Excel</p>
                <p className='text-base md:text-[24px] text-[#646464] font-light leading-[100%] w-[90%]'>S.F.NO.274/4, Anna Private Industrial Estate, Vilankurichi Road, Coimbatore - 641035</p>
            </div>

            {/* Center - Tap Image */}
            <div className="lg:order-none flex justify-center items-center mb-5">
              <div className="relative   w-[162px] h-[187px] lg:w-[292px] lg:h-[338px]">
                <Image
                  src={tapimage}
                  alt="Aqua Excel Tap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right - Contact */}
            <div className="text-left lg:text-left w-full">
              <h3 className="font-hoves-pro font-medium text-xl lg:text-[32px] text-foreground mb-2">
                Contact
              </h3>
              <div className=" space-y-2">
                <p>
                  <span className="text-black font-normal text-[1.2vh] font-hoves-pro leading-[100%]">Enquiry: </span>
                  <a href="tel:+918754010016" className="font-light text-[#646464]  text-[1.2vh] leading-[100%] font-inter-tight">+91-87540 10016</a>
                </p>
                <p>
                  <span className="text-black font-normal text-[1.2vh] leading-[100%] font-hoves-pro">Phone: </span>
                  <a href="tel:+914222986842" className="font-light text-[#646464] text-[1.2vh] leading-[100%] font-inter-tight">+91-422-2986842</a>
                </p>
                <p>
                  <span className="text-black font-normal text-[1.2vh] leading-[100%] font-hoves-pro">Email: </span>
                  <a href="mailto:salescoordinator@aquaexcel.in" className="font-light text-[#646464] text-[1.2vh] leading-[100%] font-inter-tight">salescoordinator@aquaexcel.in</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </ContainerLayout>
  )
}

export default ContactDetails
