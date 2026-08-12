"use client";
import { ReactNode, useRef, useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { usePathname } from "next/navigation";

interface LenisProviderProps {
  children: ReactNode;
}

const SmoothScroller = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      setTimeout(() => {
        lenisRef.current?.resize();
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* ---------------------------------------------------
       1. Allow browser native scroll restoration
    --------------------------------------------------- */
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto"; // <-- important
    }

    /* ---------------------------------------------------
       2. Initialize Lenis AFTER the browser restores scroll
    --------------------------------------------------- */
    requestAnimationFrame(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        syncTouch: false,
        autoRaf: false, // <-- changed (important!)
      });

      lenisRef.current = lenis;
      if (typeof window !== "undefined") {
        (window as any).lenis = lenis;
      }

      lenis.on("scroll", () => ScrollTrigger.update());

      /* ---------------------------------------------------
         3. Proper GSAP scrollerProxy that doesn't override
            browser's scroll on page load
      --------------------------------------------------- */
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (value !== undefined) {
            // allow browser's native scroll restore FIRST
            lenis.scrollTo(value, { immediate: true });
          }
          return window.scrollY;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      /* ---------------------------------------------------
         4. Manual RAF so Lenis doesn't fight scroll restore
      --------------------------------------------------- */
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      ScrollTrigger.addEventListener("refresh", () => lenis.resize());
      ScrollTrigger.refresh();
    });

    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).lenis;
      }
      lenisRef.current?.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroller;