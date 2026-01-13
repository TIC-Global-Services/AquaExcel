"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgimage from "@/assets/carrer/lifeatbgaquaexcel.jpg";
import icon1 from '@/assets/carrer/icons/icon1.svg'
import icon2 from '@/assets/carrer/icons/icon2.svg'
import icon3 from '@/assets/carrer/icons/icon3.svg'
import sliderimg1 from '@/assets/carrer/slider1.jpg'
import sliderimg2 from '@/assets/carrer/slider1.jpg'
import sliderimg3 from '@/assets/carrer/slider1.jpg'

import Card from "../reuseable/why-us/slidercard";
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const LifeAt = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slides = [
    {
      title: "A culture Built on safety",
      description: "We begin every day with safety checks and team alignment to ensure a secure, organized workspace.",
      icon: icon1.src,
      image: sliderimg1.src
    },
    {
      title: "Working With Purpose",
      description: "Our production teams operate advanced machinery with precision to maintain consistent product quality.",
      icon: icon2.src,
      image: sliderimg2.src
    },
    {
      title: "Learning & Growth",
      description: "Employees receive hands-on training and upskilling opportunities to grow in their roles.",
      icon: icon3.src,
      image: sliderimg3.src
    },
  ]

  useEffect(() => {
     const ctx = gsap.context(() => {
       const isMobile = window.innerWidth < 768;
       const tl = gsap.timeline({
         scrollTrigger: {
           trigger: sectionRef.current,
           start: 'top top',
           end: `+=${slides.length * (isMobile ? 50 : 100)}%`,
           pin: !isMobile,
           scrub: true,
         },
       });
       slides.forEach((_, index) => {
         if (index === 0) {
           // First card is visible by default
           tl.set(`.card-${index}`, { xPercent: 0, opacity: 1 });
         } else {
           // Fade out the previous card while the new card slides in
           tl.to(
             `.card-${index - 1}`,
             { opacity: 0, duration: 1 },
           );
           tl.fromTo(
             `.card-${index}`,
             { xPercent: 100, opacity: 0 },
             { xPercent: 0, opacity: 1, duration: 1 ,ease:"none"},
             "<" // Start at the same time as the previous animation
           );
         }
       });
     }, sectionRef);
 
     return () => ctx.revert();
   }, [slides]);
 
 
   
   return (
     <div ref={sectionRef} className="relative">
       <div className="relative w-full min-h-screen overflow-hidden">
         <Image
           src={bgimage}
           alt="Download App Background"
           fill
           priority={false}
           loading="lazy"
           // sizes="100vw"
           className="object-cover"
         />
         <div className="absolute inset-0 bg-black/30" />
       </div>
       <div className="absolute bottom-10 xl:bottom-24 w-full">
         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 xl:gap-34">
           <div className="mt-80 translate-x-[14%]">
             <h2 className="lg:text-[2.75rem] md:text-[1.25rem] text-[1.25rem] text-white font-medium">
               Life at Aqua Excel
             </h2>
             <p className="lg:text-xl text-sm font-medium text-white max-w-md">
               We believe exceptional products are created by <br />exceptional people and these are the values that inspire us every single day.
             </p>
           </div>
           <div className="relative xl:w-full h-[38.889dvh] lg:h-[77.778dvh] overflow-hidden translate-y-5">
             {slides.map((res, index) => (
               <div key={index} className={`card-${index} absolute top-0 left-0`} style={{ zIndex: index + 1 }}>
                 <Card title={res.title} description={res.description} image={res.image} icon={res.icon} />
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   );
};

export default LifeAt;
