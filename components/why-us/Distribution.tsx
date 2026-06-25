"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import ContainerLayout from "@/layouts/ContainerLayout";
import { useRouter } from "next/navigation";
const Distribution = () => {

  const image1 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/Distribution/distributionpatnerimg1.jpg";
  const image2 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/Distribution/distributionpatnerimg2.jpg";
  const image3 = "https://ik.imagekit.io/pgtxr2fmn/WhyUs/Distribution/distributionpatnerimg3.jpg";
  const router = useRouter();

  const navigateAndScroll = (value: string) => {
    router.push(`/resources${value}`);
  };

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
    <div>
      <div className="hidden md:block">
        <ContainerLayout>
          <div className="w-full py-10 mt-5 overflow-hidden">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-xl md:text-3xl xl:text-[2.75rem] tracking-tighter font-medium font-hoves-pro">
                For Distribution Partners
              </h1>
              <p className="max-w-sm md:max-w-3xl text-sm md:text-xl font-regular text-black font-inter-tight leading-[120%]">
                We partner with distributors through dependable supply, strong product demand, responsive service, and financial support facilitated through our banking partners, helping drive sustainable business growth.
              </p>
            </div>

            <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:grid-cols-3 gap-5 md:gap-5 scrollbar-hide py-5">
              {distributors.map((card, index) => (
                <div
                  onClick={() => navigateAndScroll("#blogs")}
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
                  text-sm md:text-base xl:text-[22px]
                  leading-tight
                  w-full
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
      </div>
      <div className="md:hidden">
        <div className="w-full py-10 mb-10 mt-10 overflow-hidden">
          {/* <ContainerLayout> */}
          <div className="flex flex-col gap-2 mb-8 pl-[5%]">
            <h1 className="text-xl xl:text-[2.75rem] tracking-tighter font-medium font-hoves-pro">
              For Distribution Partners
            </h1>
            <p className="max-w-xs md:max-w-3xl text-sm md:text-xl font-regular text-black font-inter-tight leading-[120%]">
              We partner with distributors through dependable supply, strong product demand, responsive service, and financial support facilitated through our banking partners, helping drive sustainable business growth.
            </p>
          </div>
          {/* </ContainerLayout> */}

          <div className="md:hidden flex overflow-x-auto snap-start snap-mandatory gap-4 px-4 pb-0 scrollbar-hide">
            {distributors.map((card, index) => (
              <div
                onClick={() => navigateAndScroll("#blogs")}
                key={index}
                className="relative pl-[2%] flex-shrink-0 w-[247px] h-[241px] md:w-auto md:h-[450px] lg:h-[400px] xl:h-[500px] snap-start  rounded-2xl overflow-hidden shadow-md"
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
                  text-sm md:text-base xl:text-[22px]
                  leading-tight
                  w-full
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
      </div>
    </div>
  );
};

export default Distribution;
