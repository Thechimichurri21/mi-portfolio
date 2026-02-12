"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const spotlightStyle = useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      {/* Overlay de spotlight que sigue al mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: spotlightStyle,
        }}
      />
      {/* Borde sutil revelado por el spotlight */}
      <div className="absolute inset-0 rounded-3xl border border-white/[0.05] transition-colors duration-300 group-hover:border-white/[0.08]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
