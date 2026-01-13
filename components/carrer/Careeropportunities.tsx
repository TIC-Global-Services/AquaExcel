import React from 'react'
import Image from 'next/image'
import logo from '@/assets/carrer/logowithoutname.png'
import ContainerLayout from '@/layouts/ContainerLayout'
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
    <div className='py-10 xl:py-30  overflow-hidden'>
      <ContainerLayout>
        <div className='flex flex-col justify-start text-left'>
        <h1 className='text-xl xl:text-[2.75rem] font-medium tracking-[-4%]'>Discover Career Opportunities</h1>
        <p className='xl:text-xl text-sm font-[300] tracking-[-1%]'>Choose the role that matches your skills and<br className='xl:hidden block' /> drives your growth.</p>
      </div>
      </ContainerLayout>
      <div className="relative w-screen -translate-x-5 md:left-1/2 md:-translate-x-1/2 h-auto min-h-[400px] md:h-[80vh] lg:h-[71.111vh] overflow-visible mt-6 md:mt-8 lg:mt-10">
        <Image
          src={logo}
          alt="Logo Background"
          fill
          priority={false}
          loading="lazy"
          className="object-cover object-center md:block hidden opacity-30 md:opacity-40 lg:opacity-50 z-0"
        />
        <Image
          src={logo}
          alt="Logo Background"
          fill
          priority={false}
          loading="lazy"
          className="object-contain md:hidden block -rotate-90 opacity-30 z-0 scale-[1.8] translate-x-[18%] translate-y-[1%]"
        />
       <div className="z-10 relative flex items-center justify-center p-4 ">
          {jobList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl px-[1%] xl:px-[10%]">
              {jobList.map((res, index) => (
               <div key={index} className='bg-[#FAF9F5] py-3 px-6 rounded-[20px] max-w-xl shadow-sm border-[1px]'>
              <p className="text-black text-sm font-medium">{res.location}</p>
              <h2 className="text-black text-2xl font-semibold tracking-[-4%]">{res.title}</h2>
              <p className="text-black text-base font-light mb-2">{res.description}</p>
              <button className="text-white bg-[#E31E24] font-medium text-sm px-5 py-2 rounded-xl">Apply Now</button>
            </div>
              ))}
            </div>
          ) : (
             <div className='bg-[#FAF9F5] flex flex-col items-center justify-center py-3 gap-5 py-[3%] px-6 rounded-[20px] max-w-3xl shadow-sm border-[1px]'>
              <h2 className="text-black text-2xl font-semibold tracking-[-4%]">No job postings currently available</h2>
              <input className='w-full rounded-xl border-[1px] py-[2%] px-5' placeholder='Enter your email'></input>
              <button className="text-white bg-[#E31E24] font-medium text-sm px-5 py-2 rounded-xl">Notify me</button>
              <p className='text-center'>You’ll receive an email once new job postings have been posted,<br/> thank you!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Careeropportunities