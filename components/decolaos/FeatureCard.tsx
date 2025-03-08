"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col justify-end" style={{ 
      width: "359px", 
      height: "360px",
      borderRadius: "17px",
      border: "1px solid #CDCDCD",
      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 69%)"
    }}>
      <div className="flex flex-col justify-end items-start gap-[16px] p-8" style={{ width: "299px", height: "302px" }}>
        <FontAwesomeIcon icon={icon} style={{ color: "#B0B0B0", fontSize: "48px" }} />
        <div className="flex flex-col gap-2">
          <h3 style={{ 
            color: "#0D0D0D",
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "normal"
          }}>
            {title}
          </h3>
          <p style={{ 
            color: "#838383",
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "normal"
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 