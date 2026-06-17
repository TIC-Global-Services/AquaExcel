"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import sliderimg4 from "@/assets/why-us/slides/slideimg4.jpg";
import Card from "../reuseable/why-us/slidercards";

const Qualitycp = () => {

  const bgimage = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/qualitymeasurebg.png";
  const icon1 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/icons1(new).svg";
  const icon2 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/icons2.png";
  const icon3 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/icons3.svg";
  const icon4 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/icons4.svg";
  const sliderimg1 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/slideimg1.png";
  const sliderimg2 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/slideimg2.jpg";
  const sliderimg3 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/slideimg3.jpg";
  // const sliderimg4 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/QualityCP/slideimg4.jpg"; image kit bad response

  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "Hydrostatic Pressure Test",
      description:
        "Ensures Long-Term Durability Even Under Intense Water Pressure, Protecting Your Installations From Leaks, Cracks, And Sudden Bursts.",
      icon: icon1,
      image: sliderimg1,
    },
    {
      title: "Reversion Test",
      description:
        "Checks Heat Resistance And Dimensional Stability When Exposed To Temperature Variations.",
      icon: icon2,
      image: sliderimg2,
    },
    {
      title: "Impact Test",
      description:
        "Ensures Pipes And Fittings Withstand Accidental Hits And Rough Handling During Installation.",
      icon: icon3,
      image: sliderimg3,
    },
    {
      title: "Opacity Test",
      description:
        "Ensures Light Blocking To Prevent Algae Growth Inside Pipes Over Time.",
      icon: icon4,
      image: sliderimg4.src,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[700px] md:h-screen overflow-hidden flex items-center justify-center"
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

      <div className="container mx-auto px-6 md:px-12 lg:px-[5%] relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2 lg:items-end lg:py-25 items-center justify-center gap-8 lg:gap-20 transition-all duration-500 pb-10 overflow-hidden">

        {/* Left Side - Text Content */}
        <div className="flex flex-col text-left w-full mt-10 lg:mb-20   lg:overflow-hidden">
          <h1 className="text-white text-xl leading-[100%] md:text-[clamp(16px,3vw,40px)] font-medium  mb-2 lg:leading-[50px] tracking-tight font-hoves-pro">
            Quality you can measure.
            <br />
            performance you can trust
          </h1>
          <p className="text-[#E0E0E0] text-sm md:text-[clamp(20px,1.4vw,44px)] font-regular opacity-90 max-w-md md:max-w-xl font-inter-tight leading-[120%]">
            Every Pipe And Fitting Is Tested Across Critical <br /> Parameters To
            Ensure Long-Term Safety And Reliability
          </p>
        </div>

        {/* Right Side - Slider Cards */}
        <div className="w-full max-w-[630px] rounded-2xl aspect-auto h-[50vh] sm:h-[75vh] lg:h-[75vh] max-h-[800px] relative mx-auto lg:mx-0 overflow-hidden">
          {slides.map((res, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${index === activeIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[130%]"
                }`}
              style={{ zIndex: index === activeIndex ? 1 : 0 }}
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
