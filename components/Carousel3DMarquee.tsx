"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
} from "framer-motion";

const IMGS: { url: string; title: string }[] = [
  { url: "/card1.jpg", title: "Pipes & Fittings" },
  { url: "/card2.jpg", title: "Pipes & Fittings" },
  { url: "/card3.jpg", title: "Bath Fittings\n& Accessories" },
  { url: "/card4.jpg", title: "Taps & Fittings" },
  { url: "/card5.jpg", title: "Accessories" },
  { url: "/card1.jpg", title: "Pipes & Fittings" },
  { url: "/card2.jpg", title: "Pipes & Fittings" },
  { url: "/card3.jpg", title: "Bath Fittings\n& Accessories" },
  { url: "/card4.jpg", title: "Taps & Fittings" },
  { url: "/card5.jpg", title: "Accessories" },
  { url: "/card1.jpg", title: "Pipes & Fittings" },
  { url: "/card2.jpg", title: "Pipes & Fittings" },
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
}

const Carousel3DMarquee: React.FC<RollingGalleryProps> = ({
  autoplay = true,
  pauseOnHover = true,
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    setIsScreenSizeSm(window.innerWidth <= 640);
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 2200 : 3000;
  const faceCount: number = IMGS.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1;
  const radius: number = cylinderWidth / (2.2 * Math.PI);
  const dragFactor: number = 0.05;

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Convert numeric rotation to CSS rotate3d string for the cylinder
  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0, 1, 0, ${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    const anglePerCard = 360 / faceCount;
    const rotationDuration = 1; // seconds to rotate to next card
    const pauseDuration = 2; // seconds to pause at center
    const totalDuration = (rotationDuration + pauseDuration) * faceCount;
    
    // Create keyframes for each card position with pauses
    const keyframes: number[] = [];
    const times: number[] = [];
    
    for (let i = 0; i <= faceCount; i++) {
      const angle = startAngle - (anglePerCard * i);
      const timeProgress = i / faceCount;
      
      if (i < faceCount) {
        // Add rotation keyframe
        keyframes.push(angle);
        times.push(timeProgress * (rotationDuration / totalDuration) + (i * (rotationDuration + pauseDuration) / totalDuration));
        
        // Add pause keyframe (same angle)
        keyframes.push(angle);
        times.push((i + 1) * (rotationDuration + pauseDuration) / totalDuration);
      } else {
        // Final position
        keyframes.push(angle);
        times.push(1);
      }
    }
    
    controls.start({
      rotateY: keyframes,
      transition: {
        duration: totalDuration,
        ease: "linear",
        times: times,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <section className="pt-[120px] pb-[120px] bg-background overflow-hidden">
      {/* Heading and Description */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-foreground font-hoves-pro font-medium text-[44px] mb-4">
          Product Universe
        </h2>
        <p className="text-foreground font-hoves-pro font-light text-[20px] text-base max-w-2xl mx-auto">
          Offering Forward-Thinking Products Paired With Complete, Reliable
          Solutions For Every Need.
        </p>
      </div>

      {/* 3D Rolling Gallery */}
      <div className="relative h-[580px] w-full overflow-hidden">
        <div className="flex h-full items-center justify-center [perspective:1800px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={controls}
            onUpdate={handleUpdate}
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
          >
            {IMGS.map((item, i) => {
              const angle = (360 / faceCount) * i;
              
              return (
                <div
                  key={i}
                  className="group absolute flex h-fit items-center justify-center p-[1%]"
                  style={{
                    width: `${faceWidth}px`,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                >
                <div className="relative h-[380px] w-[260px] sm:h-[400px] sm:w-[270px] rounded-[28px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="pointer-events-none h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 pl-6 pt-3.5 pb-8 text-white z-50">
                    <h3 className="text-2xl font-hoves-pro font-medium leading-tight whitespace-pre-line">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />
                </div>
              </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Carousel3DMarquee;
