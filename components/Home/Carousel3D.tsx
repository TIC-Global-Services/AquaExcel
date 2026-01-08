"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: number;
  title: string;
  image: string;
}

const Carousel3D = () => {
  const cards: Card[] = [
    { id: 1, title: "Pipes & Fittings", image: "/card1.jpg" },
    { id: 2, title: "Pipes & Fittings", image: "/card2.jpg" },
    { id: 3, title: "Bath Fittings & Accessories", image: "/card3.jpg" },
    { id: 4, title: "Taps & Fittings", image: "/card4.jpg" },
    { id: 5, title: "Accessories", image: "/card5.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto rotation
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging, cards.length]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + cards.length) % cards.length);
    const position = normalizedDiff > cards.length / 2 
      ? normalizedDiff - cards.length 
      : normalizedDiff;

    const isCenter = position === 0;
    const scale = isCenter ? 1 : 0.75;
    const rotateY = position * 25;
    const translateX = position * 280;
    const translateZ = isCenter ? 0 : -200;
    const opacity = Math.abs(position) > 2 ? 0 : 1;

    return {
      scale,
      rotateY,
      x: translateX,
      z: translateZ,
      opacity,
      zIndex: isCenter ? 10 : 5 - Math.abs(position),
    };
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="pt-[120px] pb-[120px] bg-background overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-foreground font-hoves-pro font-medium text-5xl mb-4">
          Product Universe
        </h2>
        <p className="text-foreground font-hoves-pro font-light text-base max-w-2xl mx-auto">
          Offering Forward-Thinking Products Paired With Complete, Reliable Solutions For Every Need.
        </p>
      </div>

      <div 
        className="relative h-[500px] flex items-center justify-center"
        style={{ perspective: "2000px" }}
      >
        {cards.map((card, index) => {
          const style = getCardStyle(index);
          
          return (
            <motion.div
              key={card.id}
              className="absolute cursor-pointer"
              animate={style}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
              }}
              onClick={() => handleCardClick(index)}
              onHoverStart={() => setIsDragging(true)}
              onHoverEnd={() => setIsDragging(false)}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, info) => {
                setIsDragging(false);
                if (info.offset.x > 100) {
                  setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
                } else if (info.offset.x < -100) {
                  setCurrentIndex((prev) => (prev + 1) % cards.length);
                }
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px] rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white font-hoves-pro font-medium text-2xl leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-foreground w-8" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel3D;
