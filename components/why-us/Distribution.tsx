"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "@/assets/why-us/distributionpatnerimg1.jpg";
import image2 from "@/assets/why-us/distributionpatnerimg2.jpg";
import image3 from "@/assets/why-us/distributionpatnerimg3.jpg";
import SimpleParallax from "simple-parallax-js";
import ContainerLayout from "@/layouts/ContainerLayout";
const Distribution = () => {

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

  return (
    <ContainerLayout>
      <div className="w-full py-10 overflow-hidden">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-xl xl:text-[2.75rem] font-medium tracking-tight">For Distribution Partners</h1>
        <p className="max-w-3xl text-sm xl:text-xl font-normal text-gray-700">
          We partner with distributors through dependable supply, strong product
          demand, and responsive service.
        </p>
      </div>

      <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:grid-cols-3 gap-5 md:gap-8 scrollbar-hide py-5">
        {distributors.map((card, index) => (
          <div
            key={index}
            className="relative shrink-0 w-[247px] h-[241px] md:w-auto md:h-[450px] lg:h-[400px] xl:h-[500px] snap-center rounded-2xl overflow-hidden shadow-md"
          >
            {/* Image */}
            <SimpleParallax>
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            </SimpleParallax>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 flex items-center justify-center">
              <p
                className="
                  text-white
                  font-medium
                  text-center
                  text-sm md:text-base xl:text-2xl
                  leading-tight
                  max-w-[90%]
                  whitespace-normal
                "
              >
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </ContainerLayout>
  );
};

export default Distribution;

