"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

const Quality = () => {
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
          // First card is visible by default
          tl.set(`.card-${index}`, { xPercent: 0, opacity: 1 });
        } else {
          // Fade out the previous card while the new card slides in
          tl.to(`.card-${index - 1}`, { opacity: 0, duration: 1 });
          tl.fromTo(
            `.card-${index}`,
            { xPercent: 130, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 1, ease: "none" },
            "<" // Start at the same time as the previous animation
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

      <div className="container mx-auto px-6 md:px-12 lg:px-[8%] relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2 items-center lg:items-end justify-center gap-8 lg:gap-20 pb-10 lg:pb-[10%] transition-all duration-500">

        {/* Left Side - Text Content */}
        <div className="flex flex-col text-left w-full mt-20 lg:mb-20">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl font-medium leading-tight tracking-tight mb-4">
            Quality you can measure.
            <br />
            performance you can trust
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl font-light opacity-90 max-w-xl">
            Every Pipe And Fitting Is Tested Across Critical Parameters To
            Ensure Long-Term Safety And Reliability
          </p>
        </div>

        {/* Right Side - Slider Cards */}
        <div className="w-full max-w-[700px] aspect-auto h-[75vh] sm:h-[80vh] lg:h-[70vh] max-h-[700px] relative mx-auto lg:mx-0">
          {slides.map((res, index) => (
            <div
              key={index}
              className={`card-${index} absolute inset-0 w-full h-full opacity-0`}
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

export default Quality;
