"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgimage from "@/assets/why-us/qualitymeasurebg.png";
import Image from "next/image";
import icon1 from "@/assets/why-us/icons/icons1(new).svg";
import icon2 from "@/assets/why-us/icons/icons2.png";
import icon3 from "@/assets/why-us/icons/icons3.svg";
import icon4 from "@/assets/why-us/icons/icons4.svg";
import sliderimg1 from "@/assets/why-us/slides/slideimg1.png";
import sliderimg2 from "@/assets/why-us/slides/slideimg2.jpg";
import sliderimg3 from "@/assets/why-us/slides/slideimg3.jpg";
import sliderimg4 from "@/assets/why-us/slides/slideimg4.jpg";
import Card from "../reuseable/why-us/slidercards";

gsap.registerPlugin(ScrollTrigger);

const Qualitycp = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slides = [
    {
      title: "Hydrostatic Pressure Test",
      description:
        "Ensures Long-Term Durability Even Under Intense Water Pressure, Protecting Your Installations From Leaks, Cracks, And Sudden Bursts.",
      icon: icon1.src,
      image: sliderimg1.src,
    },
    {
      title: "Reversion Test",
      description:
        "Checks Heat Resistance And Dimensional Stability When Exposed To Temperature Variations.",
      icon: icon2.src,
      image: sliderimg2.src,
    },
    {
      title: "Impact Test",
      description:
        "Ensures Pipes And Fittings Withstand Accidental Hits And Rough Handling During Installation.",
      icon: icon3.src,
      image: sliderimg3.src,
    },
    {
      title: "Opacity Test",
      description:
        "Ensures Light Blocking To Prevent Algae Growth Inside Pipes Over Time.",
      icon: icon4.src,
      image: sliderimg4.src,
    },
  ];

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

      <div className="container mx-auto px-6 md:px-12 lg:px-[8%] relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2 lg:items-end lg:pb-[10%] items-center justify-center gap-8 lg:gap-20 transition-all duration-500 pb-10 overflow-hidden">

        {/* Left Side - Text Content */}
        <div className="flex flex-col text-left w-full mt-20 lg:mb-20  lg:overflow-hidden">
          <h1 className="text-white text-[clamp(16px,2.5vw,44px)] font-medium  mb-2 leading-[48px] font-hoves-pro">
            Quality you can measure.
            <br />
            performance you can trust
          </h1>
          <p className="text-white text-[clamp(20px,1.4vw,44px)] font-medium opacity-90 max-w-xl font-inter-tight leading-[100%]">
            Every Pipe And Fitting Is Tested Across Critical Parameters To
            Ensure Long-Term Safety And Reliability
          </p>
        </div>

        {/* Right Side - Slider Cards */}
        <div className="w-full max-w-[630px] aspect-auto h-[65vh] sm:h-[75vh] lg:h-[70vh] max-h-[750px] relative mx-auto lg:mx-0 overflow-hidden">
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

export default Qualitycp;
