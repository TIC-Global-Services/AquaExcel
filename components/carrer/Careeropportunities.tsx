import React from 'react'
import Image from 'next/image'
import logo from '@/assets/carrer/logowithoutname.png'
const Careeropportunities = () => {
  const jobList = [
    {
      title: "Production Supervisor ",
      description: "We are looking for a dedicated Production Supervisor to ensure smooth manufacturing operations on the shop floor. You will coordinate teams, monitor production quality, and maintain daily output targets while ensuring safety and consistency.",
      location: "Chennai",
    },
    {
      title: "Production Supervisor ",
      description: "We are looking for a dedicated Production Supervisor to ensure smooth manufacturing operations on the shop floor. You will coordinate teams, monitor production quality, and maintain daily output targets while ensuring safety and consistency.",
      location: "Chennai",
    },
    {
      title: "Production Supervisor ",
      description: "We are looking for a dedicated Production Supervisor to ensure smooth manufacturing operations on the shop floor. You will coordinate teams, monitor production quality, and maintain daily output targets while ensuring safety and consistency.",
      location: "Chennai",
    },
  ]
  return (
    <div className='py-10 xl:py-30 px-[5%] overflow-hidden'>
      <div className='flex flex-col justify-start text-left'>
        <h1 className='text-xl xl:text-[2.75rem] font-medium tracking-[-4%]'>Discover Career Opportunities</h1>
        <p className='xl:text-xl text-sm font-[300] tracking-[-1%]'>Choose the role that matches your skills and<br className='xl:hidden block' /> drives your growth.</p>
      </div>
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-auto min-h-[400px] md:h-[50vh] lg:h-[71.111vh] overflow-visible mt-6 md:mt-8 lg:mt-10">
        <Image
          src={logo}
          alt="Logo Background"
          fill
          priority={false}
          loading="lazy"
          className="object-cover object-center opacity-30 md:opacity-40 lg:opacity-50 z-0"
        />
        <div className="absolute inset-0 flex flex-col items-stretch md:items-end justify-center px-[5%] py-6 md:py-8 lg:py-0 gap-3 md:gap-4 z-10">
          {jobList.map((res, index) => (
            <div key={index} className='bg-[#FAF9F5] py-3 px-6 rounded-[20px] max-w-md shadow-sm border-[1px]'>
              <p className="text-black text-sm font-medium">{res.location}</p>
              <h2 className="text-black text-2xl font-semibold tracking-[-4%]">{res.title}</h2>
              <p className="text-black text-base font-light mb-2">{res.description}</p>
              <button className="text-white bg-[#E31E24] font-medium text-sm px-5 py-2 rounded-xl">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careeropportunities