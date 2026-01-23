"use client";
import React, { useEffect, useState, useRef } from "react";
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
  images?: {
    url: string;
    title: string;
    description?: string;
  }[];
  autoScrollInterval?: number;
  dragSensitivity?: number;
}

const Carousel3DMarquee: React.FC<RollingGalleryProps> = ({
  autoplay = true,
  pauseOnHover = false,
  images = [],
  autoScrollInterval = 1500,
  dragSensitivity = 0.005,
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [cylinderWidth, setCylinderWidth] = useState<number>(2400);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);


  // Device detection and responsive setup
  useEffect(() => {
    const updateDeviceSettings = () => {
      const width = window.innerWidth;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      setIsMobile(width <= 768 || isTouchDevice);

      // Update cylinder width based on screen size
      if (width <= 640) setCylinderWidth(2500);
      else if (width <= 768) setCylinderWidth(2600);
      else if (width <= 1024) setCylinderWidth(2200);
      else if (width <= 1280) setCylinderWidth(2500);
      else setCylinderWidth(3800);
    };

    updateDeviceSettings();

    const handleResize = () => {
      updateDeviceSettings();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 0.7;
  const radius: number = cylinderWidth / (2.5 * Math.PI);
  const angleStep: number = 360 / faceCount;

  // Drag tracking state
  const [dragDistance, setDragDistance] = useState<number>(0);

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  useEffect(() => {
    rotation.set(0);
  }, [rotation]);

  // Autoscroll functionality
  useEffect(() => {
    if (!isAutoScrolling || isDragging) return;

    const interval = setInterval(() => {
      const currentAngle = rotation.get();
      const targetAngle = currentAngle - angleStep;

      controls
        .start({
          rotateY: targetAngle,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        })
        .then(() => {
          rotation.set(targetAngle);
          setCurrentIndex((prev) => (prev + 1) % faceCount);
        });
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [
    currentIndex,
    isAutoScrolling,
    isDragging,
    controls,
    rotation,
    faceCount,
    angleStep,
    autoScrollInterval,
  ]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setDragDistance(0);
    controls.stop();
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const newDragDistance = dragDistance + info.delta.x;
    setDragDistance(newDragDistance);

    const dragThreshold = isMobile ? 80 : 100;

    if (Math.abs(newDragDistance) >= dragThreshold) {
      const currentAngle = rotation.get();
      const direction = newDragDistance > 0 ? 1 : -1;
      const targetAngle = currentAngle + direction * angleStep;

      controls
        .start({
          rotateY: targetAngle,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        })
        .then(() => {
          rotation.set(targetAngle);
          const newIndex =
            direction > 0
              ? (currentIndex - 1 + faceCount) % faceCount
              : (currentIndex + 1) % faceCount;
          setCurrentIndex(newIndex);
        });

      setDragDistance(0);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    setIsDragging(false);
    setDragDistance(0);

    if (autoplay) {
      const resumeDelay = isMobile ? 2500 : 2000;
      setTimeout(() => setIsAutoScrolling(true), resumeDelay);
    }
  };

  const handleMouseEnter = (): void => {
    if (pauseOnHover && !isMobile) {
      setIsAutoScrolling(false);
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (pauseOnHover && !isDragging && !isMobile) {
      setIsAutoScrolling(true);
    }
  };


  return (
    <div className="overflow-x-hidden">
      <motion.div
        className="relative md:h-[900px] h-[800px] w-full overflow-hidden py-20 md:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center  px-6 space-y-0">
          <h2 className="text-foreground font-hoves-pro font-medium tracking-[-4%] text-xl lg:text-[44px]">
            Product Universe
          </h2>
          <p className="text-foreground font-inter-tight leading-[100%] font-light text-sm lg:text-[20px] tracking-[-1%] max-w-2xl mx-auto">
            Offering Forward-Thinking Products Paired With Complete, Reliable
            Solutions For Every Need.
          </p>
        </div>

        <div className="flex h-full items-center justify-center [perspective:1900px] [transform-style:preserve-3d] px-6 md:px-0 -translate-y-30">
          <motion.div
            drag="x"
            dragElastic={0}
            dragMomentum={false}
            dragConstraints={false}
            dragPropagation={false}
            dragTransition={{
              power: 0,
              timeConstant: 0,
              bounceStiffness: 0,
              bounceDamping: 0,
            }}
            dragDirectionLock={false}
            dragSnapToOrigin={false}
            whileDrag={{
              cursor: "grabbing",
              scale: isMobile ? 1 : 0.98,
            }}
            onDragStart={handleDragStart}
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
              touchAction: "pan-x",
            }}
            className="flex min-h-[300px] cursor-grab active:cursor-grabbing items-center justify-center transform-3d"
          >
            {galleryImages.map((item, i) => (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${(360 / faceCount) * i
                    }deg) translateZ(${radius}px)`,
                }}
              >
                <div className="relative h-[270px] w-[220px] sm:w-[280px] sm:h-[300px] md:w-[320px] lg:w-[350px] xl:w-[344px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">

                  <img
                    src={item.url}
                    alt={item.title}
                    className="pointer-events-none object-cover w-full h-full select-none"
                    draggable={false}
                  />

                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-20 backdrop-blur-xs z-40" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default Carousel3DMarquee;
