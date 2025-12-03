"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

interface Card {
  id: number;
  title: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, title: "Seamless Water Delivery", image: "/stackcard1.png" },
  { id: 2, title: "Premium Quality Fittings", image: "/stackcard2.png" },
  { id: 3, title: "Innovative Design", image: "/stackcard3.png" },
  { id: 4, title: "Durable Materials", image: "/stackcard4.png" },
  { id: 5, title: "Expert Craftsmanship", image: "/stackcard5.png" }
];

const StackedCardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % cards.length;
      visible.push({ ...cards[index], stackPosition: i });
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="pt-[60px] pb-[120px] px-6 xl:px-[80px] lg:px-[40px] bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground font-hoves-pro font-medium text-[44px] mb-4 leading-tight">
              Aqua Excel in Motion
            </h2>
            <p className="text-foreground font-hoves-pro font-light text-[24px] mb-8 leading-relaxed max-w-3xl">
              Discover immersive glimpses of the style, performance, and craftsmanship behind our products, beautifully captured through every reel.
            </p>
            <Button variant="primary">Watch More</Button>
          </motion.div>

          {/* Right Stacked Cards */}
          <div className="relative h-[550px] flex items-center justify-start lg:justify-center">
            <div className="relative w-[700px] h-[520px]">
              <AnimatePresence mode="popLayout">
                {visibleCards.map((card, index) => {
                  const stackPosition = card.stackPosition;
                  const isActive = stackPosition === 0;
                  
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ 
                        scale: 1 - stackPosition * 0.08,
                        x: stackPosition * 70,
                        y: stackPosition * 12,
                        opacity: 0,
                        rotateY: 0,
                        rotateZ: 0,
                      }}
                      animate={{
                        scale: 1 - stackPosition * 0.08,
                        x: stackPosition * 70,
                        y: stackPosition * 12,
                        opacity: 1,
                        rotateY: 0,
                        rotateZ: 0,
                        zIndex: 10 - stackPosition,
                      }}
                      exit={{
                        scale: 0.9,
                        x: -150,
                        opacity: 0,
                        rotateY: -25,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                      className="absolute top-0 left-0"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1500px",
                      }}
                    >
                      <div className="relative w-[350px] h-[450px] rounded-[32px] overflow-hidden bg-white">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-center text-foreground font-hoves-pro font-medium text-[24px] mt-6"
                        >
                          {card.title}
                        </motion.p>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCardsSection;
