"use client";
import { useEffect, useRef, useState } from 'react';
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
  const [containerHeight, setContainerHeight] = useState(400);
  const [cardWidth, setCardWidth] = useState('100%');
  const [cardMaxHeight, setCardMaxHeight] = useState('auto');

useEffect(() => {
  const ctx = gsap.context(() => {
    const isMobile = window.innerWidth < 768;
    const isSmallHeightDesktop = window.innerWidth >= 768 && window.innerHeight < 768;
    const offset = isSmallHeightDesktop ? 2 : 5;
    const scrollMultiplier = isMobile ? 30 : isSmallHeightDesktop ? 75 : 100; // Reduced mobile to 30 for faster scroll
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${cards.length * scrollMultiplier}%`,
        pin: true,
        scrub: isMobile ? 0.2 : 1, // Lower scrub value = faster, snappier animations
        anticipatePin: 1,
      },
    });

    cards.forEach((_, index) => {
      if (index === 0) {
        tl.set(`.card-${index}`, { opacity: 1, yPercent: 0 });
        return;
      }
      
      tl.fromTo(
        `.card-${index}`,
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: index * offset, duration: 0.5 } // Shorter duration
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, [cards]);

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < 768) {
        setContainerHeight(300);
        setCardWidth('100%');
        setCardMaxHeight('300px');
      } else if (width < 1280) {
        setContainerHeight(400);
        setCardWidth('100%');
        setCardMaxHeight('400px');
      } else if (width < 1536) {
        setContainerHeight(500);
        setCardWidth('521px');
        setCardMaxHeight('521px');
      } else {
        setContainerHeight(600);
        setCardWidth('521px');
        setCardMaxHeight('521px');
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
    <section ref={sectionRef} className="scroll-section min-h-screen  py-16 bg-background relative">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-x-[10%] w-full items-start  xl:px-0">
          {/* Left Column: Static Text */}
          <div className="left-content">
            <h2 className="xl:text-[2.75rem] text-[1.25rem] font-medium font-hoves-pro">
              {heading}
            </h2>
            <p className="text-[0.875rem] leading-[100%] max-w-sm md:max-w-lg xl:text-[1.25rem] font-regular font-inter-tight pt-2">
              {paragraph}
            </p>
          </div>

          {/* Right Column: Cards Container */}
          <div className="right-content relative mb-10">
            <div className="cards-container relative w-full" style={{ height: `${containerHeight}px` }}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`card card-${index} absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden bg-white shadow-lg`}
                  style={{ zIndex: index + 1, width: cardWidth, maxHeight: cardMaxHeight }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    //  priority={index === 0}
                    className="object-cover"
                  />
                  <div className='absolute h-full w-full bg-black/40'></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-inter-tight font-medium text-lg lg:text-xl">
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


