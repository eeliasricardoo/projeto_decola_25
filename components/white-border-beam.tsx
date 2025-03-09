"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";
import { motion, Transition } from "framer-motion";

interface WhiteBorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  className?: string;
  reverse?: boolean;
  initialOffset?: number;
}

export const WhiteBorderBeam = memo(function WhiteBorderBeam({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  reverse = false,
  initialOffset = 0,
}: WhiteBorderBeamProps) {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-white via-white to-transparent",
          className,
        )}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5)",
          opacity: 0.7
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
        }}
      />
    </div>
  );
}); 