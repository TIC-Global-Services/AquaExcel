import ContainerLayout from '@/layouts/ContainerLayout'
import React from 'react'
import tapimage from '@/assets/contact/tap_image.png'
import Image from 'next/image'
const contactdetailscp = () => {
    return (
        <ContainerLayout >
           <div className='py-10 lg:mt-10'>
             <div className='bg-[#FAF9F5] rounded-[20px] grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-center justify-start  lg:rounded-[40px] px-10 py-10'>
                <div className='flex flex-col gap-2'>
                    <h3 className="font-hoves-pro font-medium text-xl lg:text-[32px] text-foreground mb-5">
                        Corporate Office
                    </h3>
                    <h4 className='font-medium text-base text-[#646464] md:text-[24px] -tracking-4 leading-[120%]'>Aqua Excel</h4>
                    <p className='text-base md:text-[24px] text-[#646464] font-regular max-w-xs leading-[120%]'>S.F.No.274/4, Anna Private Industrial Estate, Vilankurichi Road, Coimbatore - 641035</p>
                </div>
                <div className='relative mb-16 w-[162px] h-[187px] lg:w-[292px] lg:h-[338px]'>
                    <Image src={tapimage} alt="Aqua Excel Tap" fill className="object-cover" />
                </div>
                <div className='flex flex-col gap-2 max-w-full'>
                    <h2 className='font-hoves-pro font-medium text-xl lg:text-[32px] text-foreground mb-4'>
                        Contact
                    </h2>
                    <div className='flex flex-col gap-2'>
                        <p>
                            <span className="text-black font-normal text-base md:text-[24px] font-hoves-pro leading-[120%]">Enquiry: </span>
                            <a href="tel:+918754010016" className="font-light text-[#646464]  text-base md:text-[24px] leading-[120%] font-inter-tight">+91-87540 10016</a>
                        </p>
                        <p>
                            <span className="text-black font-normal text-base md:text-[24px] leading-[120%] font-hoves-pro">Phone: </span>
                            <a href="tel:+914222986842" className="font-light text-[#646464] text-base md:text-[24px] leading-[120%] font-inter-tight">+91-422-2986842</a>
                        </p>
                        <p>
                            <span className="text-black font-normal text-base md:text-[24px] leading-[120%] font-hoves-pro">Email:<span className="pl-1"><a href="mailto:salescoordinator@aquaexcel.in" className="font-light text-[#646464] text-base md:text-[24px] leading-[120%] font-inter-tight">salescoordinator@aquaexcel.in</a></span> </span>

                        </p>
                    </div>
                </div>
            </div>
           </div>
        </ContainerLayout>
    )
}

export default contactdetailscp