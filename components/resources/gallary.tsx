"use client"
import React from 'react';
import Image from 'next/image';
import SimpleParallax from 'simple-parallax-js';
import ContainerLayout from '@/layouts/ContainerLayout';

const gallary = () => {

  const gallaryimg1 = "https://ik.imagekit.io/pgtxr2fmn/Resources/Gallery/gallaryimg-1.jpg";
  const gallaryimg2 = "https://ik.imagekit.io/pgtxr2fmn/Resources/Gallery/gallaryimg-2.jpg";
  const gallaryimg3 = "https://ik.imagekit.io/pgtxr2fmn/Resources/Gallery/gallaryimg-3.jpg";
  const gallaryimg4 = "https://ik.imagekit.io/pgtxr2fmn/Resources/Gallery/gallaryimg-4.jpg";
  const gallaryimg5 = "https://ik.imagekit.io/pgtxr2fmn/Resources/Gallery/gallaryimg-5.jpg";
  const gallaryimg6 = "https://ik.imagekit.io/pgtxr2fmn/Resources/Gallery/gallaryimg-6.jpg";

  const GALLERY_ITEMS = [
    {
      id: 1,
      title: 'FACTORY',
      description: 'Where precision shapes every product.',
      image: gallaryimg1,
      className: 'col-span-1 md:col-span-2 lg:col-span-6 h-[250px] md:h-[400px]', // Full width row
    },
    {
      id: 2,
      title: 'R&D',
      description: 'Innovation that drives every breakthrough.',
      image: gallaryimg2,
      className: 'col-span-1 md:col-span-1 lg:col-span-3 h-[250px] md:h-[350px]', // Half width
    },
    {
      id: 3,
      title: 'QA',
      description: 'Engineered, inspected, perfected.',
      image: gallaryimg3,
      className: 'col-span-1 md:col-span-1 lg:col-span-3 h-[250px] md:h-[350px]', // Half width
    },
    {
      id: 4,
      title: 'OUR TEAM',
      description: 'Every line drawn with purpose.',
      image: gallaryimg4,
      className: 'col-span-1 md:col-span-1 lg:col-span-2 h-[250px] md:h-[350px]', // Third width
    },
    {
      id: 5,
      title: 'DESIGN CENTER',
      description: 'Engineering excellence, magnified.',
      image: gallaryimg5, // Placeholder reuse
      className: 'col-span-1 md:col-span-1 lg:col-span-2 h-[250px] md:h-[350px]', // Third width
    },
    {
      id: 6,
      title: 'ON-SITE INSTALLS',
      description: 'Installation you can trust, every time.',
      image: gallaryimg6, // Placeholder reuse
      className: 'col-span-1 md:col-span-2 lg:col-span-2 h-[250px] md:h-[350px]', // Third width
    },
  ];
  return (
    <>
      <div className='md:py-0 py-7'>
        <h1 className='font-medium text-xl md:text-[44px] tracking-tighter font-hoves-pro text-center'>Aqua Excel Gallery</h1>
        <div className="w-full max-w-[1440px] mx-auto py-10">

          {/* Mobile: Scrollable Carousel */}
          <div className="md:hidden flex overflow-x-auto snap-start snap-mandatory gap-4 px-4 pb-0 scrollbar-hide">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[60vw] h-[300px] rounded-[20px] overflow-hidden snap-start"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                {/* Content */}
                <div className="absolute bottom-6 left-0 right-0 z-20 text-white text-center px-4">
                  <h3 className="font-hoves-pro font-medium text-[28px] leading-[120%] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter-tight font-normal text-[16px] leading-[120%] opacity-90 mx-auto max-w-[90%]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 px-[40px]">
            {GALLERY_ITEMS.map((item) => (

              <div
                key={item.id}
                className={`relative group rounded-[20px] overflow-hidden cursor-pointer ${item.className}`}
              >
                <SimpleParallax>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </SimpleParallax>
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t bg-gradient-full from-black/90 via-black/50 to-transparent z-10" />

                {/* Content */}
                <div className="absolute bottom-8 left-0 right-0 z-20 text-white text-center px-6">
                  <h3 className="font-hoves-pro font-medium text-[34px] leading-[100%] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter-tight font-normal text-[2.2vh] leading-[100%] text-white/90 mx-auto max-w-[80%]">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default gallary
