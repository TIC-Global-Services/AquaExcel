import ContainerLayout from '@/layouts/ContainerLayout'
import React from 'react'
import SimpleParallax from 'simple-parallax-js'
import Image from 'next/image'

const appsection = () => {
    return (
        <div>  <ContainerLayout>
            <section className=" bg-background mt-[7%]">
                <div className="relative w-full py-[40%] lg:py-[20%] overflow-hidden rounded-[20px]">
                    {/* Background Image */}

                    <div className="absolute inset-0">
                        <SimpleParallax>
                            <Image
                                src="/bottomsecimg.png"
                                alt="Aqua Excel App"
                                fill
                                className="object-cover scale-100"
                                objectPosition="30% 0%"
                                priority={false}
                            />
                        </SimpleParallax>
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="absolute bottom-8 left-[5%] right-[5%] md:left-10 md:right-10 xl:bottom-15 xl:left-10 xl:right-5 z-10">
                        <h2 className="text-white font-hoves-pro font-medium text-xl xl:text-[44px] tracking-tighter leading-tight mb-1">
                            Precision in every product
                        </h2>
                        <p className="text-white max-w-[45rem] font-hoves-pro font-light text-sm xl:text-[20px] mb-4 mt-1 leading-[120%]">
                            From taps to valves to fittings, every Aqua Excel component is designed with engineering accuracy and built to last. Explore a complete range crafted for performance, reliability, and seamless installation.
                        </p>
                        <div>
                            <button className="bg-[#E31E24] text-white xl:px-10 px-5 text-[10px] xl:text-sm py-2 md:py-3 font-inter-tight rounded-[12px]">
                                Download App
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </ContainerLayout>
    </div>
    )
}

export default appsection