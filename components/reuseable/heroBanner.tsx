"use client"
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";

interface HeroBannerProps {
  // Background
  backgroundImage?: string | StaticImageData;
  backgroundVideo?: string;
  backgroundAlt?: string;
  backgroundClassName?: string;
  backgroundQuality?: number;
  backgroundPriority?: boolean;
  buttonClassName?: string;

  // Content
  title?: string | React.ReactNode;
  titleClassName?: string;
  subtitle?: string | React.ReactNode;
  subtitleClassName?: string;

  // Buttons
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonVariant?: "primary" | "secondary";
  secondaryButtonVariant?: "primary" | "secondary";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonClassName?: string;
  secondaryButtonClassName?: string;
  primaryLink?: string;
  secondaryLink?: string;

  // Layout
  height?: string;
  paddingX?: string;
  maxWidth?: string;
  contentAlignment?: "left" | "center" | "right";

  // Customization
  customContent?: React.ReactNode;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  // Background
  backgroundImage,
  backgroundVideo,
  backgroundAlt,
  backgroundClassName,
  backgroundQuality,
  backgroundPriority,

  // Content
  title,
  titleClassName,
  subtitle,
  subtitleClassName,

  // Buttons
  primaryButtonText,
  secondaryButtonText,
  primaryButtonVariant = "primary",
  secondaryButtonVariant = "secondary",
  buttonClassName = "flex flex-wrap gap-4",
  onPrimaryClick,
  onSecondaryClick,
  primaryLink,
  secondaryLink,
  primaryButtonClassName,
  secondaryButtonClassName,

  // Layout
  height = "h-[860px]",
  paddingX = "",
  maxWidth = "max-w-5xl",
  contentAlignment = "left",

  // Customization
  customContent,
  overlay = false,
  overlayColor = "black",
  overlayOpacity = 0.6,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const muteVideo = () => {
    if (videoRef.current && !videoRef.current.muted) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    // Prevent section click from double-firing when hitting the button
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const contentAlignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  useEffect(() => {
    // Parallax effect — smooth, performant, respects rounded corners
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight / 2; // center-based trigger

      document.querySelectorAll<HTMLElement>(".parallax-media").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2 + window.scrollY;

        // Distance from viewport center
        const distance = scrolled - cardCenter;
        const offset = distance * 0.12; // adjust speed here (0.12 = smooth & subtle)

        el.style.transform = `translateY(${offset}px) scale(1.1)`; // slight scale to fill bleed
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-mute when hero scrolls out of view
  useEffect(() => {
    if (!backgroundVideo) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          muteVideo();
        }
      },
      { threshold: 0.1 } // mute once 90%+ of hero is off-screen
    );

    observer.observe(section);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundVideo]);
  const pathname = usePathname();

  return (
    <section
      ref={sectionRef}
      className={`relative ${height} w-full bg-hero-bg overflow-hidden cursor-pointer`}
      onClick={() => backgroundVideo && toggleMute()}
    >
      {/* Background Image / Video */}

      <div className="absolute parallax-media inset-0 w-full h-full">

        {backgroundVideo ? (
          <video
            ref={videoRef}
            src={backgroundVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className={backgroundClassName || "object-cover w-full h-full scale-100"}
          />
        ) : (
          <Image
            src={backgroundImage || "/hero-banner.jpg"}
            alt={backgroundAlt || "Hero background image"}
            fill
            className={backgroundClassName || "object-cover scale-100"}
            priority={backgroundPriority || true}
            quality={backgroundQuality || 90}
            style={{ objectPosition: "47% 0%" }}
          />
        )}

        {/* Optional Overlay */}
        {overlay && (
          <div
            className="absolute inset-0 bg-black/40"
          />
        )}
      </div>

      {/* Mute/Unmute Toggle Button */}
      {backgroundVideo && (
        <button
          onClick={(e) => toggleMute(e)}
          className="absolute bottom-8 right-8 z-30 flex items-center justify-center w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-full transition-all border border-white/20 focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      )}

      {/* Content */}
      <ContainerLayout>
        <div className={`relative ${height} flex items-end pb-28`}>
          <div className={`${paddingX} w-full`}>
            <div className={`${maxWidth} ${contentAlignmentClasses[contentAlignment]}`}>
              {/* Custom Content or Default Content */}
              {customContent ? (
                customContent
              ) : (
                <>
                  <h1 className={titleClassName}>
                    {title}
                  </h1>

                  <p className={subtitleClassName}>
                    {subtitle}
                  </p>

                  <div className={buttonClassName}>
                    <Link href={primaryLink || '/products'}>
                      <Button
                        className={primaryButtonClassName}
                        variant={primaryButtonVariant}
                        onClick={onPrimaryClick}
                      >
                        {primaryButtonText}
                      </Button>
                    </Link>
                    <Link href={secondaryLink || '/contact#form'}>
                      <Button
                        className={secondaryButtonClassName}
                        variant={secondaryButtonVariant}
                        onClick={onSecondaryClick}
                      >
                        {secondaryButtonText}
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HeroBanner;