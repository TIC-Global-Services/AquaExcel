"use client";
import React, { useEffect, useState } from "react";
import Card from "../reuseable/why-us/slidercards";
import Image from 'next/image'

const LifeAt = () => {

  const bgimage = "https://ik.imagekit.io/pgtxr2fmn/Career/LifeAt/lifeatbgaquaexcel.jpg";
  const icon1 = "https://ik.imagekit.io/pgtxr2fmn/Career/LifeAt/icon1.svg";
  const icon2 = "https://ik.imagekit.io/pgtxr2fmn/Career/LifeAt/icon2.svg";
  const icon3 = "https://ik.imagekit.io/pgtxr2fmn/Career/LifeAt/icon3.svg";
  const sliderimg1 = "https://ik.imagekit.io/pgtxr2fmn/Career/LifeAt/culture_Built.png";
  const sliderimg2 = "https://ik.imagekit.io/pgtxr2fmn/Career/LifeAt/work_pressure.png";
  const sliderimg3 = "https://ik.imagekit.io/pgtxr2fmn/Career/LifeAt/learning_growth.png";

  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "A culture Built on safety",
      description: "We begin every day with safety checks and team alignment to ensure a secure, organized workspace.",
      icon: icon1,
      image: sliderimg1
    },
    {
      title: "Working With Purpose",
      description: "Our production teams operate advanced machinery with precision to maintain consistent product quality.",
      icon: icon2,
      image: sliderimg2
    },
    {
      title: "Learning & Growth",
      description: "Employees receive hands-on training and upskilling opportunities to grow in their roles.",
      icon: icon3,
      image: sliderimg3
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative w-full h-[700px] md:h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src={bgimage}
          alt="Quality Measure Background"
          fill
          priority
          sizes="100vw"
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
        <div className="w-full max-w-[630px] rounded-2xl aspect-auto h-[50vh] sm:h-[65vh] lg:h-[75vh] max-h-[800px] relative mx-auto lg:mx-0 overflow-hidden">
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

export default LifeAt;
