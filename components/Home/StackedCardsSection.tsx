"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../reuseable/Button";
import Link from "next/link";
import ContainerLayout from "@/layouts/ContainerLayout";

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
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const checkSmallDesktop = () => setIsSmallDesktop(window.innerWidth <= 1350 && window.innerWidth >= 768);
    checkSmallDesktop();
    window.addEventListener('resize', checkSmallDesktop);
    return () => window.removeEventListener('resize', checkSmallDesktop);
  }, []);

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
   <ContainerLayout>
     <section className="lg:pt-[2%]  bg-background">
      <div className="relative">
        <div className="grid grid-cols-1 w-auto lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground font-hoves-pro font-medium text-2xl lg:text-[44px] mb-4 tracking-tighter leading-tight">
              Aqua Excel in Motion
            </h2>
            <p className="text-foreground font-inter-tight font-[400] text-base lg:text-[24px] mb-6 leading-[120%] max-w-[300px] md:max-w-3xl">
              Discover immersive glimpses of the style, performance, and craftsmanship behind our products, beautifully captured through every reel.
            </p>
           <Link href="/products"><Button variant="primary" className="hidden lg:block ">Watch More</Button></Link>
          </motion.div>

          {/* Right Stacked Cards */}
          <div className="relative h-[350px] lg:h-[550px] flex items-center justify-center">
            <div className="relative w-full max-w-[700px] h-[300px] lg:h-[520px]">
              <AnimatePresence mode="popLayout">
                {visibleCards.map((card, index) => {
                  const stackPosition = card.stackPosition;
                  const isActive = stackPosition === 0;
                  
                  return (
                    <motion.div
                      key={card.id}
                      initial={{
                        scale: 1 - stackPosition * 0.08,
                        x: stackPosition * (isMobile ? 30 : 70),
                        y: stackPosition * (isMobile ? 6 : 12),
                        opacity: 0,
                        rotateY: 0,
                        rotateZ: 0,
                      }}
                      animate={{
                        scale: 1 - stackPosition * 0.08,
                        x: stackPosition * (isMobile ? 35 : isSmallDesktop ? 60 : 90),
                        y: stackPosition * (isMobile ? 6 : 12),
                        opacity: 1,
                        rotateY: 0,
                        rotateZ: 0,
                        zIndex: 10 - stackPosition,
                      }}
                      exit={{
                        scale: 0.9,
                        x: isMobile ? -100 : -150,
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
                      <div className="relative w-[220px] h-[230px] lg:w-[350px] lg:h-[450px] rounded-[32px] overflow-hidden bg-white">
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
                          className="text-center text-foreground font-inter-tight font-regular text-lg lg:text-[24px] mt-3"
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
   </ContainerLayout>
  );
};

export default StackedCardsSection;
