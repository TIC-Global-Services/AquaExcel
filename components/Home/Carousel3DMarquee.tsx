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
  { url: "/bt-swan-neck.jpg", title: "Swan Neck" },
  { url: "/bt-two-way.jpg", title: "Two-Way Angle Valve" },
  { url: "/bt-sink-tap.jpg", title: "Sink Tap" },
  { url: "/bt-bib-tap.jpg", title: "Bib Tap Short Body" },
  { url: "/bt-angle.jpg", title: "Angle Valve" },
  { url: "/bt-swan-neck.jpg", title: "Swan Neck" },
  { url: "/bt-two-way.jpg", title: "Two-Way Angle Valve" },
  { url: "/bt-sink-tap.jpg", title: "Sink Tap" },
  { url: "/bt-bib-tap.jpg", title: "Bib Tap Short Body" },
  { url: "/bt-angle.jpg", title: "Angle Valve" },
  { url: "/bt-swan-neck.jpg", title: "Swan Neck" },
  { url: "/bt-two-way.jpg", title: "Two-Way Angle Valve" },
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

  // Navigation drag state
  const navDragStartX = useRef<number>(0);
  const isNavDragging = useRef<boolean>(false);
  const lastNavUpdate = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

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
      else setCylinderWidth(2900);
    };

    updateDeviceSettings();

    const handleResize = () => {
      updateDeviceSettings();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.1;
  const radius: number = cylinderWidth / (1.7 * Math.PI);
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

    const dragThreshold = isMobile ? 90 : 120;

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

  // Navigation function
  const navigateToIndex = (index: number): void => {
    if (index === currentIndex) return;

    const currentAngle = rotation.get();
    const targetAngle = currentAngle - angleStep * (index - currentIndex);

    controls
      .start({
        rotateY: targetAngle,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      })
      .then(() => {
        rotation.set(targetAngle);
        setCurrentIndex(index);
      });
  };

  // Navigation drag handlers with throttling to prevent bugs
  const handleNavDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    navDragStartX.current = clientX;
    isNavDragging.current = true;
    lastNavUpdate.current = Date.now();
    setIsAutoScrolling(false);
    controls.stop();
  };

  const handleNavDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isNavDragging.current) return;

    const now = Date.now();
    // Throttle updates to every 50ms to prevent rapid firing
    if (now - lastNavUpdate.current < 50) return;

    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const totalDrag = clientX - navDragStartX.current;

    // Calculate how many items to scroll (increased sensitivity)
    const pixelsPerItem = 30; // Adjust this value: lower = more sensitive
    const itemsToScroll = Math.round(totalDrag / pixelsPerItem);

    if (itemsToScroll !== 0) {
      // Calculate new index and wrap around
      const newIndex = (currentIndex - itemsToScroll + faceCount * 100) % faceCount;

      if (newIndex !== currentIndex) {
        navigateToIndex(newIndex);
        // Reset the start position to current position for continuous drag
        navDragStartX.current = clientX;
        lastNavUpdate.current = now;
      }
    }
  };

  const handleNavDragEnd = () => {
    isNavDragging.current = false;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    if (autoplay) {
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 1000);
    }
  };

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Navigation dot click handler
  const handleDotClick = (index: number): void => {
    if (index === currentIndex || isDragging) return;

    setIsAutoScrolling(false);
    controls.stop();

    navigateToIndex(index);

    setTimeout(() => {
      if (autoplay) {
        setIsAutoScrolling(true);
      }
    }, 1000);
  };
  return (
    <div className="overflow-x-hidden">
      <motion.div
        className="relative min-h-[700px] h-auto md:min-h-[850px] md:h-[65dvh] lg:h-[80dvh] xl:h-[85dvh] w-full overflow-hidden flex flex-col justify-center md:block py-6 sm:py-10 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center py-10 md:py-6 px-6">
          <h2 className="text-foreground mb-1 md:mb-1 lg:mb-0 font-hoves-pro font-medium tracking-[-4%] text-xl md:text-[44px]">
            Product Universe
          </h2>
          <p className="text-foreground font-inter-tight leading-[120%] font-light text-sm md:text-[20px] md:tracking-tight w-full  md:max-w-2xl mx-auto">
            Offering Forward-Thinking Products Paired With <br className="block md:hidden" /> Complete, Reliable <br className="hidden md:block" />
            Solutions For Every Need.
          </p>
        </div>

        <div className="flex grow md:h-full items-center justify-center [perspective:2500px] [transform-style:preserve-3d] translate-y-0 md:translate-y-[-5%]">
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
            className="flex min-h-[200px] cursor-grab active:cursor-grabbing items-center justify-center [transform-style:preserve-3d]"
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
                <div className="relative w-[344px] bg-black/96   aspect-[280/455] rounded-[32px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="pointer-events-none object-contain w-full h-full select-none"
                    // style={{ objectPosition: "70% center" }}
                    draggable={false}
                  />

                  <div className="absolute bottom-0 left-0 right-0 pl-5 pt-3.5 pb-5 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Perfect 3D Curved Navigation with Smooth Drag */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="relative w-[500px] h-24 flex items-center justify-center">
            {/* 3D Perspective Container */}
            <div
              className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
              onMouseDown={handleNavDragStart}
              onMouseMove={(e) => {
                if (e.buttons === 1) handleNavDrag(e);
              }}
              onMouseUp={handleNavDragEnd}
              onMouseLeave={handleNavDragEnd}
              onTouchStart={handleNavDragStart}
              onTouchMove={handleNavDrag}
              onTouchEnd={handleNavDragEnd}
            >
              {/* Curved Track Background */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: "rotateX(35deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="w-80 h-1 rounded-full"
                  style={{
                    transform: "translateZ(-40px)",
                  }}
                />
              </div>

              {/* Navigation Dots Container */}

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel3DMarquee;
