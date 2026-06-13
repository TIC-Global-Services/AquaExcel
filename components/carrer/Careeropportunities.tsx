import React from 'react'
import Image from 'next/image'
import logo from '@/assets/carrer/logowithoutname.png'
import ContainerLayout from '@/layouts/ContainerLayout'
import Link from 'next/link'
const Careeropportunities = () => {

  const logo = "https://ik.imagekit.io/pgtxr2fmn/Career/CareerOppurtunities/logowithoutname.png";

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
    {
      title: "Production Supervisor ",
      description: "We are looking for a dedicated Production Supervisor to ensure smooth manufacturing operations on the shop floor. You will coordinate teams, monitor production quality, and maintain daily output targets while ensuring safety and consistency.",
      location: "Chennai",
    },
  ]
  return (
    <div className='py-10 xl:py-20  overflow-hidden'>
      <ContainerLayout>
        <div className='flex flex-col justify-start text-left'>
          <h1 className='text-xl md:text-2xl xl:text-[2.75rem] font-medium md:tracking-tight tracking-tighter'>Discover Career Opportunities</h1>
          <p className='md:text-xl text-sm font-[300]  leading-[120%]'>Choose the role that matches your skills and<br className='block' /> drives your growth.</p>
        </div>
      </ContainerLayout>
      <div className="relative w-screen -translate-x-3 md:left-1/2 md:-translate-x-1/2 h-auto min-h-[400px] md:min-h-[80vh] lg:min-h-[75.111vh] overflow-visible mt-6 md:mt-8 lg:mt-10">
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
          className="object-contain md:hidden block -rotate-90 opacity-30 z-0 scale-[1.8] translate-x-[18%] translate-y-[2%]"
        />
        <div className="z-20 relative flex items-center  justify-center min-h-[400px] md:min-h-[80vh] lg:min-h-[75.111vh]">
            <div className='bg-[#FAF9F5] flex flex-col items-center justify-center py-3 gap-5 py-[3%] px-6 rounded-[20px] max-w-3xl shadow-sm border-[1px]'>
              <h2 className="text-black text-2xl font-semibold tracking-[-4%]">We’re hiring</h2>
              {/* <input className='w-full rounded-xl border-[1px] py-[2%] px-5' placeholder='Enter your email'></input> */}
               <p className='text-center'>Apply through our quick application form and select the role <br/> that best matches your skills and experience.</p>
              <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSe2H_LoDBTZaska9nO8oZ_q7AAMgHVbeUJaFDV_d4rmcsh4MQ/viewform?usp=publish-editor"} target="_blank"><button className="text-white bg-[#E31E24] font-medium text-sm px-5 py-2 rounded-xl">Apply now</button></Link>
             
            </div>
        </div>
      </div>
    </div>
  )
}

export default Careeropportunities