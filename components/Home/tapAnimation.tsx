"use client";
import React, { useRef, useEffect, useState } from "react";
import { LeftArrow, RigthArrow } from "@/assets/Arrows";
import Arrowright from "@/public/Arrow6.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Model from "./Model";
import { CornerDownLeft, MoveLeft, MoveUp } from "lucide-react";

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const plasticElement = plasticRef.current;
    const brass1Element = brass1Ref.current;
    const contentElement = contentRef.current;
    const brass2Element = brass2Ref.current;
    const scrollRefElement = scrollRef.current;
    const isMobile = window.innerWidth <= 768;
    const endValue = isMobile ? "+=350%" : "+=500%";

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

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-white">
      {/* Plastic Tap - Left Middle (Start) */}
      <div
        ref={plasticRef}
        className="fixed md:right-[10%] right-[2%] top-[20%] transform -translate-y-1/2 w-1/2 h-1/2 flex flex-row items-end text-right justify-end px-2 md:px-20 z-10 md:gap-2"
        style={{ visibility: "hidden" }}
      >
        <div className="flex items-center md:gap-2 mt-20">
          <MoveLeft strokeWidth={1.2} className="md:w-20 h-25 w-15" />
          <h1 className="md:text-[40px] text-[20px] leading-[42px] font-medium">
            Plastic Tap
          </h1>
        </div>

      </div>

      {/* Brass 1 - Bottom Right */}
      <div
        ref={brass1Ref}
        className="fixed md:right-[4%] right-12 bottom-0 w-1/2 h-1/2 flex flex-row items-center justify-start px-0 md:px-20 z-10 pb-20 md:gap-2 py-20"
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
        className="fixed md:right-[18%] right-[10%] md:top-[5%] top-30 w-1/2 h-1/2 flex md:flex-row flex-row-reverse items-start justify-start px-0 md:px-20 z-10 md:pt-20 pt-4 md:gap-2 gap-1"
        style={{ visibility: "hidden" }}
      >

        <div className="flex flex-col md:gap-1 gap-1 md:mt-10 mt-2">
          <h1 className="md:text-[40px] text-[18px] text-right leading-[20px] md:leading-[42px] font-medium">
            Brass
          </h1>
          <Image
            src={Arrowright}
            alt="Right Arrow"
            className="md:w-25 h-50 w-12 flex-shrink-0"
          />
        </div>
      </div>

      {/* Tap Animation - Always visible in center */}
      <div className="flex items-center justify-center z-0">
        <Model jsonPath={isMobileDevice ? "/tap-mobile.json" : "/tap.json"} scrollSpeed={1.9} id="tap-animation" />
      </div>
      <div ref={contentRef} style={{ visibility: "hidden" }} className="fixed bottom-4 sm:bottom-6 md:bottom-20 left-0 right-0 flex justify-center items-center z-50 px-4">
        <h1 className="text-[20px] md:text-[40px] font-inter-tight font-medium">“Brass + Brass” but with a plastic tap</h1>
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
  );
};

export default TapAnimation;