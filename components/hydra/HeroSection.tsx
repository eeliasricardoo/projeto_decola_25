"use client";

import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  highlight?: boolean;
}

export function HeroSection({ 
  title, 
  subtitle, 
  description, 
  highlight = true 
}: HeroSectionProps) {
  return (
    <div className="w-full py-16 px-8 text-center mb-16 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          {highlight ? (
            <>
              <span className="text-black">{title.split(" ")[0]} </span>
              <span className="text-[#F01624]">{title.split(" ").slice(1).join(" ")}</span>
            </>
          ) : (
            <span className="text-black">{title}</span>
          )}
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-8">
          {subtitle}
        </h2>
        
        <TextAnimate 
          as="p" 
          className="text-xl text-gray-600 max-w-4xl mx-auto"
          by="word"
          animation="slideUp"
          delay={0.4}
          duration={0.3}
          startOnView
        >
          {description}
        </TextAnimate>

        <div className="h-1 w-24 bg-[#F01624] mx-auto mt-8 rounded-full"></div>
      </motion.div>
    </div>
  );
} 