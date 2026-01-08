"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Card {
  image: string;
  title: string;
}

interface ScrollOverlappingCardsProps {
  heading: string;
  paragraph: string;
  cards: Card[];
}

const ScrollOverlappingCards: React.FC<ScrollOverlappingCardsProps> = ({
  heading,
  paragraph,
  cards,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${cards.length * (isMobile ? 50 : 100)}%`, // Shorter scroll distance on mobile
          pin: !isMobile, // Disable pinning on mobile to prevent overlapping
          scrub: true, // Smooth scrubbing tied to scroll progress
        },
      });
      cards.forEach((_, index) => {
        tl.fromTo(
          `.card-${index}`,
          { opacity: 0, yPercent: 100 }, // Invisible and below
          { opacity: 1, yPercent: index * 5, duration: 1 } // Fade in and slide up to offset position
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, [cards]);

  return (
    <section ref={sectionRef} className="scroll-section min-h-screen py-16 px-6 xl:px-20 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Static Text */}
          <div className="left-content">
            <h2 className="lg:text-[2.75rem] text-[1.25rem] font-medium">
              {heading}
            </h2>
            <p className="text-[0.875rem] lg:text-[1.25rem] font-normal">
              {paragraph}
            </p>
          </div>

          {/* Right Column: Cards Container */}
          <div className="right-content relative">
            <div className="cards-container relative w-full h-[500px] lg:h-[600px]">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`card card-${index} absolute top-0 left-0 w-[521px] h-[521px] rounded-3xl overflow-hidden bg-white shadow-lg`}
                  style={{ zIndex: index + 1 }} 
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className='absolute h-full w-full bg-black/40'></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-hoves-pro font-medium text-lg lg:text-xl">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollOverlappingCards;
