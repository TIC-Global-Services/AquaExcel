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
  const slides = [
    {
      title: "Hydrostatic Pressure Test",
      description:
        "Ensures long-term durability even under intense water pressure, protecting your installations from leaks, cracks, and sudden bursts.",
      icon: icon1.src,
      image: sliderimg1.src,
    },
    {
      title: "Reversion test",
      description:
        "Checks heat resistance and dimensional stability when exposed to temperature variations.",
      icon: icon2.src,
      image: sliderimg2.src,
    },
    {
      title: "impact Test",
      description:
        "Ensures pipes and fittings withstand accidental hits and rough handling during installation.",
      icon: icon3.src,
      image: sliderimg3.src,
    },
    {
      title: "opacity test",
      description:
        "Ensures light blocking to prevent algae growth inside pipes over time.",
      icon: icon4.src,
      image: sliderimg4.src,
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(550);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '20% 20%',
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
            { xPercent: 130, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 1, ease: "none" },
            "<" // Start at the same time as the previous animation
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [slides]);


  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setContainerHeight(550);
      } else if (width < 1024) {
        setContainerHeight(600);
      } else if (width < 1280) {
        setContainerHeight(650);
      } else {
        setContainerHeight(700);
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src={bgimage}
          alt="Quality Measure Background"
          fill
          priority={false}
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex items-center justify-center w-full  py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12 lg:gap-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 ">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-4  text-center md:text-left z-10">
            <h2 className="text-xl  md:text-xl lg:text-3xl xl:text-4xl text-white font-medium leading-tight tracking-tight">
              Quality you can measure.
              <br className="hidden md:block" /> performance you can trust
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light text-white/90 max-w-xl mx-auto md:mx-0">
              Every Pipe And Fitting Is Tested Across Critical Parameters To
              Ensure Long-Term Safety And Reliability
            </p>
          </div>
           <div className="relative w-full max-w-[630px] mx-auto" style={{ height: `${containerHeight}px` }}>
              {slides.map((res, index) => (
                <div key={index} className={`card-${index} absolute inset-0 w-full h-full`} style={{ zIndex: index + 1 }}>
                  <Card title={res.title} description={res.description} image={res.image} icon={res.icon} />
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Qualitycp;
