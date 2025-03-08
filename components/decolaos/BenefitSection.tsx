"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitSectionProps {
  title: string;
  introduction: string;
  benefits: Benefit[];
  className?: string;
}

export function BenefitSection({ title, introduction, benefits, className = "" }: BenefitSectionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <h2 className="text-[64px] font-bold mb-8">{title}</h2>
      <p className="text-[24px] text-[#5E5E5E] font-normal mb-16">
        {introduction}
      </p>
      
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-8">
            <div className="mt-2 text-black">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div>
              <h3 className="text-[32px] font-bold mb-8">{benefit.title}</h3>
              <p className="text-[24px] text-[#5E5E5E] font-normal">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 