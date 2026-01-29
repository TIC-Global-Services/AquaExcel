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

import Card from "../reuseable/why-us/slidercards";
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
          start: "top top",
          end: `+=${slides.length * (isMobile ? 150 : 100)}%`,
          pin: true,
          scrub: isMobile ? 0.2 : 1,
        },
      });

      slides.forEach((_, index) => {
        if (index === 0) {
          tl.set(`.card-cp-${index}`, { xPercent: 0, opacity: 1 });
        } else {
          tl.to(`.card-cp-${index - 1}`, { opacity: 0, duration: 1 });
          tl.fromTo(
            `.card-cp-${index}`,
            { xPercent: 130, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 1, ease: "none" },
            "<"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [slides]);



  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src={bgimage}
          alt="Quality Measure Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-[5%] relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2 lg:items-end lg:pb-[10%] items-center justify-center gap-8 lg:gap-20 transition-all duration-500 pb-10 overflow-hidden">

        {/* Left Side - Text Content */}
        <div className="flex flex-col text-left w-full mt-20 lg:mb-20 lg:overflow-hidden">
          <h1 className="text-white text-xl leading-[120%] md:text-[clamp(16px,3vw,40px)] font-medium  mb-2 md:leading-[50px] tracking-tight font-hoves-pro">
            Life at Aqua Excel
          </h1>
          <p className="text-[#E0E0E0] text-sm md:text-[clamp(20px,1.4vw,44px)] font-regular opacity-90 max-w-md md:max-w-xl font-inter-tight leading-[120%]">
            We believe exceptional products are created by <br />exceptional people and these are the values that inspire us every single day.
          </p>
        </div>

        {/* Right Side - Slider Cards */}
        <div className="w-full max-w-[630px] aspect-auto h-[65vh] sm:h-[75vh] lg:h-[75vh] max-h-[800px] relative mx-auto lg:mx-0 overflow-hidden">
          {slides.map((res, index) => (
            <div
              key={index}
              className={`card-cp-${index} absolute inset-0 w-full h-full opacity-0`}
              style={{ zIndex: index + 1 }}
            >
              <Card
                title={res.title}
                description={res.description}
                image={res.image}
                icon={res.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeAt;
