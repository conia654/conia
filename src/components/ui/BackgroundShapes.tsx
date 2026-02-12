"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function BackgroundShapes() {
  const leftRef = useRef<SVGGElement | null>(null);
  const rightRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const triggers: ScrollTrigger[] = [];

    if (leftRef.current) {
      const tween = gsap.to(leftRef.current, {
        yPercent: -10,
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    }

    if (rightRef.current) {
      const tween = gsap.to(rightRef.current, {
        yPercent: -24,
        xPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg
        viewBox="0 0 1196.7 1080"
        className="absolute h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left blob — scaled from left edge */}
        <g
          ref={leftRef}
          fill="var(--primary)"
          fillOpacity="0.09"
          transform="translate(0, 740) scale(0.7) translate(0, -540)"
        >
          <path d="M0,250.3s162.1,101.6,365.4-9,664.1-311.7,786.1,97.1-72.3,587.3-585,494.7S0,1040.9,0,1040.9V250.3Z" />
        </g>
        {/* Right blob — scaled from right edge */}
        <g
          ref={rightRef}
          fill="var(--primary)"
          fillOpacity="0.09"
          transform="translate(1196.7, 640) scale(0.7) translate(-1196.7, -540)"
        >
          <path d="M-2778.3,250.3s162.1,101.6,365.4-9c203.3-110.7,664.1-311.7,786.1,97.1s-72.3,587.3-585,494.7c-512.8-92.6-566.4,207.8-566.4,207.8V250.3Z" />
          <path d="M1196.7,234.5s-79.1,110.7-436,31.6S76.3,196.5,74,499s234.9,564.5,561.3,462.9,337.7-234.9,561.3-135.5V234.5Z" />
        </g>
      </svg>
    </div>
  );
}
