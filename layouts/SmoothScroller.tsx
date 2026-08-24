"use client";
import { ReactNode, useRef, useEffect, useLayoutEffect } from "react";
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

  // Single owner for hash scrolling — handles both initial load and back-nav.
  // Retries until the target element exists and its position stabilizes,
  // so variant heights (images/parallax) don't leave a gap.
  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
        setTimeout(() => {
          lenisRef.current?.resize();
          ScrollTrigger.refresh();
        }, 100);
      }
      return;
    }

    let rafId: number | null = null;
    let cancelled = false;

    const getTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

    const doScroll = (el: HTMLElement) => {
      const top = getTop(el);
      window.scrollTo(0, top);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(top, { immediate: true });
      }
    };

    // Wait for target to mount (Next.js RSC streaming can delay it by a frame)
    let tries = 0;
    const maxTries = 60;
    const waitForTarget = () => {
      if (cancelled) return;
      const target = document.querySelector(hash) as HTMLElement | null;
      if (!target) {
        tries++;
        if (tries < maxTries) {
          rafId = requestAnimationFrame(waitForTarget);
        } else {
          // Fallback: stay at top if target never appears
          window.scrollTo(0, 0);
          lenisRef.current?.scrollTo(0, { immediate: true } as any);
        }
        return;
      }

      // Target exists — pin scroll immediately before paint
      doScroll(target);
      lenisRef.current?.resize();
      ScrollTrigger.refresh();

      // Then keep pinned until layout stabilizes (images/parallax/font shift)
      let attempts = 0;
      let lastTop = getTop(target);
      let stable = 0;
      const maxAttempts = 40;
      const poll = () => {
        if (cancelled) return;
        const top = getTop(target);
        if (Math.abs(top - lastTop) < 1.5) stable++;
        else stable = 0;
        lastTop = top;
        if (stable >= 2 || attempts >= maxAttempts) {
          doScroll(target);
          lenisRef.current?.resize();
          ScrollTrigger.refresh();
          return;
        }
        doScroll(target);
        attempts++;
        rafId = requestAnimationFrame(poll);
      };
      rafId = requestAnimationFrame(poll);
    };

    rafId = requestAnimationFrame(waitForTarget);

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    requestAnimationFrame(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        syncTouch: false,
        autoRaf: false,
      });

      lenisRef.current = lenis;
      if (typeof window !== "undefined") {
        (window as any).lenis = lenis;
      }

      lenis.on("scroll", () => ScrollTrigger.update());

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (value !== undefined) {
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

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      ScrollTrigger.addEventListener("refresh", () => lenis.resize());
      ScrollTrigger.refresh();

      if (window.location.hash) {
        const target = document.querySelector(window.location.hash) as HTMLElement | null;
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, top);
          lenis.scrollTo(top, { immediate: true });
        }
      }
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
