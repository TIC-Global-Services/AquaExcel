"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "@/assets/why-us/distributionpatnerimg1.jpg";
import image2 from "@/assets/why-us/distributionpatnerimg2.jpg";
import image3 from "@/assets/why-us/distributionpatnerimg3.jpg";
const Distribution = () => {
  const [isMobile, setIsMobile] = useState(false);
  const distributors = [
    {
      title: "Higher Margins. Stronger Business.",
      image: image1,
    },
    {
      title: "Reliable Supply. Zero Delays.",
      image: image2,
    },
    {
      title: "Marketing made to boost sales.",
      image: image3,
    },
  ];
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const scrollClasses = isMobile
  ? "overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
  : "overflow-visible";
  return (
    <div className="flex justify-start xl:justify-start px-[2%]">
    <div className="flex flex-col justify-start items-start py-10 px-[3%]">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-xl xl:text-[2.75rem]">For Distribution Partners</h1>
        <p className="xl:text-xl text-sm font-medium">
          We partner with distributors through dependable supply, strong product
          demand, and responsive service.
        </p>
      </div>
      <div className={`flex ${isMobile ? 'justify-start' : 'justify-center'} gap-5 py-10 w-full ${scrollClasses} `}>
  {distributors.map((card, index) => (
    <div
      key={index}
    className={`relative shrink-0 ${
        isMobile ? "snap-start" : ""
      } h-[241px] w-[247px] md:h-[444px] lg:h-[241px] lg:w-[247px] xl:w-[413px] xl:h-[444px] rounded-xl flex justify-start xl:justify-center scrollbar-hide  w-full  overflow-x-auto`}
    >
      {/* Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Center-bottom single-line text */}
      <div className="absolute bottom-5 xl:bottom-14 left-1/2 -translate-x-1/2 z-20 px-4">
        <p
          className="
            text-white
            font-hoves-pro
            font-medium
            text-sm xl:text-xl
            text-center
            whitespace-nowrap
          "
        >
          {card.title}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default Distribution;

