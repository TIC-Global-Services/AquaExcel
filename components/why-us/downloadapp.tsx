import React from 'react'
import bgimage from '@/assets/why-us/downloadappbg.jpg'
import qrcode from '@/assets/why-us/qr code.jpg'
import Image from 'next/image'

const DownloadApp = () => {
  return (
    <div className='relative py-5'>
      <div
        className="w-full h-[76.25vh] lg:h-[64.556vh] relative"
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute top-30 left-10">
        <h2 className=" text-[1.25rem] lg:text-[2.75rem] font-semibold text-white pl-4 pt-4">Plumbers / Dealers</h2>
        <p className="mt-2 text-white pl-4 text-sm lg:text-[1.25rem] mb-4">
          One scan gives you instant access to installation videos,<br/> product guides,
          catalogs, and support.
        </p>
         <div className='absolute left-10 border-2 rounded-2xl border-white h-[180px] max-w-[180px] flex justify-center p-4'>
          <Image src={qrcode} width={148} height={152} alt='qrcode'/>
        </div>
      </div>
      
    </div>
  )
}

export default DownloadApp
