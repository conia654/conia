"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import React, { createContext, useContext, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export type LenisRef = React.RefObject<Lenis | null>;

const LenisContext = createContext<LenisRef | null>(null);

export function useLenisRef(): LenisRef | null {
  return useContext(LenisContext);
}

/**
 * Wrap the app with this so scroll-to CTAs can use Lenis for smooth scroll (single click).
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  return (
    <LenisContext.Provider value={lenisRef}>
      <SmoothScroll lenisRef={lenisRef} />
      {children}
    </LenisContext.Provider>
  );
}

/**
 * Enables smooth ease-in-out scrolling site-wide via Lenis,
 * and keeps GSAP ScrollTrigger in sync for scroll-driven animations.
 */
function SmoothScroll({ lenisRef }: { lenisRef: LenisRef }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, [lenisRef]);

  return null;
}
