"use client";

interface TextSectionProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

export function TextSection({ title, paragraphs, className = "" }: TextSectionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <h2 className="text-[64px] font-bold mb-16">{title}</h2>
      <div className="space-y-8">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-[24px] text-[#5E5E5E] font-normal">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
} 