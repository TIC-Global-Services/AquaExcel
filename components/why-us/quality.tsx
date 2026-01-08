"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgimage from "@/assets/why-us/qualitymeasurebg.png";
import icon1 from '@/assets/why-us/icons/icons1.png'
import icon2 from '@/assets/why-us/icons/icons2.png'
import sliderimg1 from '@/assets/why-us/slides/slideimg1.png'
import sliderimg2 from '@/assets/why-us/slides/slideimg2.jpg'
import sliderimg3 from '@/assets/why-us/slides/slideimg3.jpg'
import sliderimg4 from '@/assets/why-us/slides/slideimg4.jpg'
import Card from "../reuseable/why-us/slidercard";

gsap.registerPlugin(ScrollTrigger);

const Quality = () => {
     const sectionRef = useRef<HTMLDivElement>(null);
    const slides=[
        {
            title:"Hydrostatic Pressure Test",
            description:"Ensures long-term durability even under intense water pressure, protecting your installations from leaks, cracks, and sudden bursts.",
            icon:icon1.src,
            image:sliderimg1.src
        },
        {
            title:"Reversion test",
            description:"Checks heat resistance and dimensional stability when exposed to temperature variations.",
            icon:icon2.src,
            image:sliderimg2.src
        },
        {
            title:"impact Test",
            description:"Ensures pipes and fittings withstand accidental hits and rough handling during installation.",
            icon:icon1.src,
            image:sliderimg3.src
        },
        {
            title:"opacity test",
            description:"Ensures light blocking to prevent algae growth inside pipes over time.",
            icon:icon1.src,
            image:sliderimg4.src
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
                    tl.fromTo(
                        `.card-${index}`,
                        { xPercent: 100, opacity: 0 },
                        { xPercent: 0, opacity: 1, duration: 1 }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [slides]);
  return (
    <div ref={sectionRef} className="relative py-5">
      <div
        className="w-full h-[76.25vh] lg:h-[54.313rem] relative"
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute bottom-24 left-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center  gap-34">
          <div className="px-10 mt-80">
            <h2 className="lg:text-[2.75rem] md:text-[1.25rem] text-[1.25rem] text-white font-medium">
              Quality you can measure.<br/> performance you can trust
            </h2>
            <p className="lg:text-xl text-sm font-medium text-white ">
              Every pipe and fitting is tested across critical<br/> parameters to
              ensure long-term safety and reliability
            </p>
          </div>
          <div className="relative w-[630px] h-[700px] overflow-hidden">
                {slides.map((res,index)=> (
                    <div key={index} className={`card-${index} absolute top-0 left-0`} style={{ zIndex: index + 1 }}>
                        <Card title={res.title} description={res.description} image={res.image} icon={res.icon}/>
                    </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
