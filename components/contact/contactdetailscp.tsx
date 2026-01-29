import ContainerLayout from '@/layouts/ContainerLayout'
import React from 'react'
import tapimage from '@/assets/contact/tap_image.png'
import Image from 'next/image'
const contactdetailscp = () => {
    return (
        <ContainerLayout >
            <div className='py-8 md:py-10 lg:mt-10 px-4 md:px-0'>
                <div className='bg-[#FAF9F5] relative rounded-[20px] md:rounded-[30px] lg:rounded-[40px] grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start lg:items-center px-6 md:px-8 lg:px-10 py-8 md:py-10'>
                    <div className='flex flex-col gap-3 md:gap-0'>
                        <h3 className="font-hoves-pro font-medium text-xl lg:text-[2.135vw]  text-foreground mb-2 md:mb-0 lg:mb-2">
                            Corporate Office
                        </h3>
                        <h4 className='font-medium text-base lg:text-[1.601vw] -tracking-4 leading-[120%] text-[#646464]'>Aqua Excel</h4>
                        <p className='text-base lg:text-[1.601vw] text-[#646464] font-regular leading-[120%] max-w-full lg:max-w-xs'>S.F.No.274/4, Anna Private Industrial Estate, Vilankurichi Road, Coimbatore - 641035</p>
                    </div>
                    <div className='relative mx-auto w-[162px] h-[187px] md:w-[220px] md:h-[254px] lg:w-[292px] lg:h-[338px] my-4 md:my-6 lg:my-0'>
                        <Image src={tapimage} alt="Aqua Excel Tap" fill className="object-contain" />
                    </div>
                    <div className='flex flex-col gap-3 md:gap-4 max-w-full'>
                        <h2 className='font-hoves-pro font-medium text-xl lg:text-[2.135vw] text-foreground mb-2 md:mb-0 lg:mb-2'>
                            Contact
                        </h2>
                        <div className='flex flex-col gap-3 md:gap-1'>
                            <p className='flex flex-row gap-1 flex-wrap md:flex-nowrap md:items-baseline'>
                                <span className="text-black font-normal text-base lg:text-[1.601vw] leading-[120%] font-hoves-pro">Enquiry: </span>
                                <a href="tel:+918754010016" className="font-light text-[#646464] text-base lg:text-[1.601vw] leading-[120%] font-inter-tight whitespace-nowrap">+91-87540 10016</a>
                            </p>
                            <p className='flex flex-row gap-1 flex-wrap md:flex-nowrap md:items-baseline'>
                                <span className="text-black font-normal text-base lg:text-[1.601vw] leading-[120%] font-hoves-pro">Phone: </span>
                                <a href="tel:+914222986842" className="font-light text-[#646464] text-base lg:text-[1.601vw] leading-[120%] font-inter-tight whitespace-nowrap">+91-422-2986842</a>
                            </p>
                            <p className='flex flex-row gap-1 flex-wrap md:flex-nowrap md:items-baseline'>
                                <span className="text-black font-normal text-base lg:text-[1.601vw] leading-[120%] font-hoves-pro">Email: </span>
                                <a href="mailto:salescoordinator@aquaexcel.in" className="font-light text-[#646464] text-base lg:text-[1.601vw] leading-[120%] font-inter-tight whitespace-nowrap">salescoordinator@aquaexcel.in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerLayout>
    )
}

export default contactdetailscp