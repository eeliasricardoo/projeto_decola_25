"use client";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 text-center mb-8">
      <h1 className="text-[96px] font-bold leading-tight">{title}</h1>
      <h2 className="text-[96px] font-regular leading-tight mb-8">{subtitle}</h2>
      <p className="text-[24px] text-[#5E5E5E] font-normal max-w-4xl mx-auto">
        {description}
      </p>
    </div>
  );
} 