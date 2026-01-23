"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import download2 from '@/assets/resource/downloads-2.jpg';
import download3 from '@/assets/resource/downloads-3.jpg';
import download4 from '@/assets/resource/downloads-1.jpg';
import Button from '../reuseable/Button';
import ContainerLayout from '@/layouts/ContainerLayout';

const Downloads = () => {

  const content = [
    { id: 0, title: "PRODUCT CATALOG", image: download4 },
    { id: 1, title: "INSTALLATION GUIDELINES", image: download2 },
    { id: 2, title: "PRESSURE RATINGS", image: download3 },
    { id: 3, title: "PRODUCT CATALOG", image: download4 },
    { id: 4, title: "INSTALLATION GUIDELINES", image: download2 },
    { id: 5, title: "PRESSURE RATINGS", image: download3 },
    { id: 6, title: "PRODUCT CATALOG", image: download4 },
    { id: 7, title: "INSTALLATION GUIDELINES", image: download2 },
    { id: 8, title: "PRESSURE RATINGS", image: download3 },
    { id: 9, title: "PRODUCT CATALOG", image: download4 },
    { id: 10, title: "INSTALLATION GUIDELINES", image: download2 },
    { id: 11, title: "PRESSURE RATINGS", image: download3 },
    { id: 12, title: "PRODUCT CATALOG", image: download4 },
    { id: 13, title: "INSTALLATION GUIDELINES", image: download2 },
    { id: 14, title: "PRESSURE RATINGS", image: download3 },
  ];

  // State for responsive items per view
  // Defaulting to 3 creates a mismatch on mobile hard refresh but is better for desktop-first SEO
  // For smoother client-side alignment, we use `mounted` check or effect
  const [itemsPerView, setItemsPerView] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(content.length / itemsPerView);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) 
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Next Slide
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
    if (isRightSwipe) {
      // Prev Slide
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  // Reset or clamp slide if View changes (e.g. Resize)
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  // Prevent hydration mismatch by rendering null or stable skeleton until mounted
  // Or simpler: just accept flash if okay, but here let's ensure consistency
  // If not mounted, we can render the desktop view (ssr default) or nothing.
  // Rendering desktop view by default is standard.

  return (
    <ContainerLayout>
      <div className="md:py-20 py-5 w-full overflow-hidden">
        <div className='flex flex-col items-center mb-10'>
          <h1 className='font-medium text-[20px] md:text-[44px] tracking-[-4%] font-hoves-pro text-center mb-1'>
            Resources & Downloads
          </h1>
          <p className='font-normal text-base md:text-xl font-inter-tight text-center max-w-2xl text-muted-foreground'>
            Access product catalogs, installation manuals, safety datasheets, certifications, and engineering drawings.
          </p>
        </div>

        <div className="w-full max-w-[1440px] mx-auto">
          {/* Carousel Window */}
          <div
            className="overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Render "Slides" based on itemsPerView logic */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-[85%] md:min-w-full flex gap-4 md:gap-6 px-4 py-4">
                    {content.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((item) => (
                      <div
                        key={item.id}
                        className="relative w-full md:flex-1 h-[560px] rounded-[20px] overflow-hidden group shadow-sm"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          draggable={false}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center gap-6 z-10">
                          <h3 className="font-inter-tight font-medium text-[22px] leading-[100%] text-center text-white uppercase">
                            {item.title}
                          </h3>
                          <Button
                            variant="primary"
                            className="bg-[#E31E24] hover:bg-[#C41217] text-white border-none px-8 py-2.5 rounded-[12px] text-sm"
                          >
                            Download pdf
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Tabs / Pagination */}
          <div className="hidden md:flex justify-center flex-wrap gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'w-16 bg-black'
                  : 'w-8 bg-gray-300 hover:bg-gray-400'
                  } ${
                  // Hide excessive dots on mobile if too many?
                  // User didn't ask to hide, but 15 dots might be a lot.
                  // For now, keeping them as requested "tabs should move along"
                  ''
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Downloads;