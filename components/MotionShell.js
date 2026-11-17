"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function MotionEffects() {
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || reducedMotion) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      return;
    }

    const updateScroll = () => ScrollTrigger.update();
    const raf = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", updateScroll);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScroll);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [lenis, reducedMotion]);

  return null;
}

export default function MotionShell({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          autoRaf: false,
          duration: 1.05,
          smoothWheel: true,
          syncTouch: false,
        }}
      >
        <MotionEffects />
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
