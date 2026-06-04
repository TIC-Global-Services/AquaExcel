"use client";
import { useRef, useEffect, useState } from "react";
import Arrowright from "@/public/Arrow6.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Model from "./Model";
import { MoveDown, MoveLeft, MoveUp } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TapAnimation = () => {
  const containerRef = useRef(null);
  const plasticRef = useRef(null);
  const brass1Ref = useRef(null);
  const contentRef = useRef(null);
  const brass2Ref = useRef(null);
  const scrollRef = useRef(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMobileDevice) return;

    let rafId: number;
    let isReversing = false;
    let lastTimestamp = 0;

    const reverse = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;

      video.currentTime = Math.max(0, video.currentTime - elapsed);

      if (video.currentTime <= 0) {
        video.currentTime = 0;
        isReversing = false;
        video.play().catch(() => {});
        return;
      }

      rafId = requestAnimationFrame(reverse);
    };

    const onEnded = () => {
      setTimeout(() => {
        if (!video) return;
        isReversing = true;
        lastTimestamp = 0;
        rafId = requestAnimationFrame(reverse);
      }, 2000);
    };

    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('ended', onEnded);
      cancelAnimationFrame(rafId);
      isReversing = false;
    };
  }, [isMobileDevice]);

  useEffect(() => {
    if (isMobileDevice) return;
    const container = containerRef.current;
    const plasticElement = plasticRef.current;
    const brass1Element = brass1Ref.current;
    const contentElement = contentRef.current;
    const brass2Element = brass2Ref.current;
    const scrollRefElement = scrollRef.current;
    const endValue = "+=500%";

    if (
      !container ||
      !plasticElement ||
      !brass1Element ||
      !brass2Element ||
      !scrollRefElement
    )
      return;

    // Set initial state - hide all text elements completely
    gsap.set([plasticElement, brass1Element, brass2Element, scrollRefElement], {
      opacity: 0,
      x: 0, // Start from natural position
      visibility: "hidden", // Ensure they're completely hidden initially
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 10%",
        end: endValue,
        scrub: 1, // Smooth scrubbing
        pin: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Animation sequence - Starting from 10%
    tl.to(scrollRefElement, {
      opacity: 1,
      visibility: "visible",
    })
      // Phase 1: Show Plastic Tap (15% - 30% of scroll)
      .to(
        plasticElement,
        {
          opacity: 1,
          visibility: "visible",
          x: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.15
      )

      // Phase 2: Show Brass 1 (40% - 55% of scroll)
      .to(
        brass1Element,
        {
          opacity: 1,
          visibility: "visible",
          x: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.80
      )

      // Phase 3: Show Brass 2 (65% - 75% of scroll) - Tap is horizontal
      .to(
        brass2Element,
        {
          opacity: 1,
          visibility: "visible",
          x: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.80
      )


      .to(
        contentElement, {
        opacity: 1,
        visibility: "visible",
        x: 0,
        duration: 0.15,
        ease: "power2.out",
      }, 1.2)


      // Phase 4: Hide Brass 2 (80% - 85% of scroll)
      .to(
        brass2Element,
        {
          visibility: "hidden",
          duration: 0.05,
          ease: "power2.in",
        },
        1
      )

      // Phase 5: Hide Brass 1 (85% - 90% of scroll)
      .to(
        brass1Element,
        {
          visibility: "hidden",
          duration: 0.05,
          ease: "power2.in",
        },
        1
      )
      .to(
        contentElement,
        {
          visibility: "hidden",
          duration: 0.05,
          ease: "power2.in",
        },
        1.6
      )


      // Phase 6: Hide Plastic Tap (90% - 95% of scroll)
      .to(
        plasticElement,
        {
          opacity: 0,
          duration: 0.015,
          ease: "power2.in",
        },
        0.3
      )

      .to(scrollRefElement, {
        visibility: "hidden",
        opacity: 0,
      }, 0.9)

      .to(plasticElement, {
        visibility: "hidden",
      })

      .to(brass1Element, {
        visibility: "hidden",
      })
      .to(brass2Element, {
        visibility: "hidden",
      })
      .to(contentElement, {
        visibility: "hidden",
      })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobileDevice]);

  return (
    <div ref={containerRef} className="relative bg-white">
      {/* Mobile video */}
      <div className="block md:hidden w-full min-h-[80vh] flex items-center justify-center">
        <video
          ref={videoRef}
          src="/videos/tapSequence-mobile.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full"
        />
      </div>

      {/* Desktop section */}
      <div className="hidden md:block relative min-h-[300vh]">
        {/* Plastic Tap - Left Middle (Start) */}
        <div
          ref={plasticRef}
          className="fixed md:right-[10%] right-[24%] top-[18%] md:top-[20%] transform -translate-y-1/2 w-1/2 h-1/2 flex flex-row items-end text-right justify-end px-2 md:px-20 z-10 md:gap-2"
          style={{ visibility: "hidden" }}
        >
          <div className="flex items-center md:gap-2 md:mt-20">
            <MoveLeft strokeWidth={1.2} className="md:w-20 h-25 w-15 hidden md:block" />
            <h1 className="md:text-[40px] text-[20px] md:leading-[42px] font-medium md:hidden">
              Plastic Tap
              <span className="flex items-center justify-center">
                <MoveDown strokeWidth={1.2} className="md:hidden h-25 w-15" ></MoveDown>
              </span>
            </h1>
            
            <h1 className="md:text-[40px] text-[20px] leading-[42px] font-medium hidden md:block">
              Plastic Tap
            </h1>
          </div>

        </div>

        {/* Brass 1 - Bottom Right */}
        <div
          ref={brass1Ref}
          className="fixed md:right-[4%] right-[3%] md:right-12 bottom-[12%] md:bottom-0 w-1/2 h-1/2 flex flex-row items-center justify-start px-0 md:px-20 z-10 pb-20 md:gap-2 py-20"
          style={{ visibility: "hidden" }}
        >

          <div className="flex flex-col md:gap-2 md:mt-10 mt-15">
            <MoveUp strokeWidth={1.2} className="md:w-25 h-25 w-15" />
            <h1 className="md:text-[40px] text-[20px] leading-[42px]  font-medium">
              Brass
            </h1>
          </div>
        </div>

        {/* Brass 2 (Horizontal position) - Top Right */}
        <div
          ref={brass2Ref}
          className="fixed md:right-[18%] right-[55%] md:top-[5%] top-[35%] w-1/2 h-1/2 flex md:flex-row flex-row-reverse items-start justify-start px-0 md:px-20 z-10 md:pt-20 pt-4 md:gap-2 gap-1"
          style={{ visibility: "hidden" }}
        >

          <div className="flex flex-col md:gap-1 gap-1 md:mt-10 mt-2">
            <h1 className="md:text-[40px] text-[18px] text-right leading-[20px] md:leading-[42px] font-medium">
              Brass
            </h1>
            <Image
              src={Arrowright}
              alt="Right Arrow"
              className="md:w-25 md:h-50 w-12 flex-shrink-0"
            />
          </div>
        </div>

        {/* Tap Animation - Always visible in center */}
        <div className="flex items-center justify-center z-0">
          <Model jsonPath="/tap.json" scrollSpeed={1.9} id="tap-animation" />
        </div>
        <div ref={contentRef} style={{ visibility: "hidden" }} className="fixed bottom-[14%] sm:bottom-6 md:bottom-20 left-0 right-0 flex justify-center items-center z-50 px-4">
          <h1 className="text-[20px] md:text-[40px] font-inter-tight font-medium">{"\u201C"}Brass + Brass{"\u201D"} but with a plastic tap</h1>
        </div>
        {/* Keep Scrolling Indicator */}
        <div
          ref={scrollRef}
          style={{ visibility: "hidden" }}
          className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center items-center z-50 px-4"
        >
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 md:py-3">
            <div className="flex items-center justify-center">
              <div className="dot-animation bg-black" />
            </div>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black whitespace-nowrap leading-none">
              Keep scrolling
            </span>
          </div>

          <style jsx>{`
            .dot-animation {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              animation: pulseCircle 1.5s infinite ease-in-out;
              flex-shrink: 0;
            }

            @media (min-width: 640px) {
              .dot-animation {
                width: 8px;
                height: 8px;
              }
            }

            @media (min-width: 768px) {
              .dot-animation {
                width: 10px;
                height: 10px;
              }
            }

            @media (min-width: 1024px) {
              .dot-animation {
                width: 12px;
                height: 12px;
              }
            }

            @keyframes pulseCircle {
              0% {
                opacity: 0.3;
                transform: scale(0.8) translateX(0);
              }
              50% {
                opacity: 1;
                transform: scale(1.2) translateX(2px);
              }
              100% {
                opacity: 0.3;
                transform: scale(0.8) translateX(0);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default TapAnimation;