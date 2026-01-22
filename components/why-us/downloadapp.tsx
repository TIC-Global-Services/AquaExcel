"use client"
import React, { useEffect } from 'react'
import bgimage from '@/assets/why-us/downloadappbg.jpg'
import qrcode from '@/assets/why-us/qr code.jpg'
import Image from 'next/image'
import ContainerLayout from '@/layouts/ContainerLayout'

const DownloadApp = () => {
  useEffect(() => {
    // Parallax effect — smooth, performant, respects rounded corners
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight / 2; // center-based trigger

      document.querySelectorAll<HTMLElement>(".parallax-media").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2 + window.scrollY;

        // Distance from viewport center
        const distance = scrolled - cardCenter;
        const offset = distance * 0.12; // adjust speed here (0.12 = smooth & subtle)

        el.style.transform = `translateY(${offset}px) scale(1.1)`; // slight scale to fill bleed
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative py-10% min-h-[405px] md:min-h-[580px] md:max-h-[580px] w-full overflow-hidden">
      <Image
        src={bgimage}
        alt="Download App Background"
        fill
        priority={false}
        loading="lazy"
        sizes="100vw"
        className="object-cover parallax-media"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex md:items-center items-start justify-start md:justify-center">
        <ContainerLayout>
          <div className="flex flex-col md:flex-row md:items-center items-start justify-start md:justify-center gap-10 md:gap-15 w-full">
            <div className="text-left md:text-left text-white max-w-2xl block md:hidden">
              <h2 className="text-[1.5rem] lg:text-[2.75rem] font-semibold"> 
                Plumbers / Dealers
              </h2>
              <p className="mt-2 text-sm lg:text-[1.25rem]">
                One scan gives you instant access to installation videos,
                <br className="hidden lg:block" /> product guides, catalogs, and
                support.
              </p>
            </div>
            <div className='flex flex-col'>
              <div className="border-2 rounded-2xl border-white py-2 px-3 bg-white/10 backdrop-blur-sm">
              <p className='text-white font-medium text-xl tracking-[-4%] text-center uppercase mb-1  hidden md:block'>About App</p>
              <Image src={qrcode} width={148} height={152} alt="qrcode" className='w-24 md:w-full' />
            </div>
            <p className='text-white font-medium text-sm md:text-xl mt-1 text-center'>Scan to know more</p>
            </div>
            <div className="text-center md:text-left text-white max-w-2xl hidden md:block">
              <h2 className="text-[1.5rem] lg:text-[2.75rem] font-medium font-hoves-pro"> 
                Plumbers / Dealers
              </h2>
              <p className="text-sm lg:text-[1.25rem] font-medium font-inter-tight">
                One scan gives you instant access to installation videos,
                <br className="hidden lg:block" /> product guides, catalogs, and
                support.
              </p>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  )
}

export default DownloadApp
