"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll native window to top immediately
    window.scrollTo(0, 0);

    // Scroll Lenis to top immediately if it's running
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback check in case Lenis finishes initializing slightly later
      const timer = setTimeout(() => {
        const lenisFallback = (window as any).lenis;
        if (lenisFallback) {
          lenisFallback.scrollTo(0, { immediate: true });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
