"use client";

import { useEffect } from "react";

/** Scrolls window to top when the component mounts. Use at the top of a page so navigation lands at the hero. */
export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
