"use client";

import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const OrbScene = dynamic(() => import("./OrbScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function OrbCanvas() {
  const [enabled, setEnabled] = useState(false);
  const stage = useRef(null);

  useEffect(() => {
    const viewport = window.matchMedia("(min-width: 768px)");
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );
    const update = () =>
      setEnabled(viewport.matches && motionPreference.matches);

    update();
    viewport.addEventListener("change", update);
    motionPreference.addEventListener("change", update);
    return () => {
      viewport.removeEventListener("change", update);
      motionPreference.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = stage.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap.to(element, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: element.closest("[data-parallax-section]") || element,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div ref={stage} className="orb-stage" aria-hidden="true" data-scroll-parallax>
      {enabled ? <OrbScene /> : null}
    </div>
  );
}
