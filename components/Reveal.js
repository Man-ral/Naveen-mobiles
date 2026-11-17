"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "" }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
