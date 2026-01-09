import React from 'react'
import bgimage from '@/assets/why-us/downloadappbg.jpg'
import qrcode from '@/assets/why-us/qr code.jpg'
import Image from 'next/image'

const DownloadApp = () => {
  return (
    <div className='relative py-10'>
    <div className="relative w-full h-[76vh] lg:h-[64vh] overflow-hidden">
        <Image
          src={bgimage}
          alt="Download App Background"
          fill
          priority={false}
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      
      <div className="absolute top-20 left-2 xl:top-30 xl:left-16">
        
        <h2 className=" text-[1.25rem] lg:text-[2.75rem] font-semibold text-white pl-4 pt-4">Plumbers / Dealers</h2>
        <p className="mt-2 text-white pl-4 text-sm lg:text-[1.25rem] mb-4">
          One scan gives you instant access to installation videos,<br/> product guides,
          catalogs, and support.
        </p>
         <div className='absolute left-3 xl:left-10 border-2 rounded-2xl border-white h-[180px] max-w-[180px] flex justify-center p-4'>
          <Image src={qrcode} width={148} height={152} alt='qrcode'/>
        </div>
      </div>
      
    </div>
  )
}

export default DownloadApp
