"use client";

interface TextSectionProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

export function TextSection({ title, paragraphs, className = "" }: TextSectionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
        <p className="text-gray-700 text-base mb-6">
          {paragraphs[0]}
        </p>
        {paragraphs.slice(1).map((paragraph, index) => (
          <p key={index} className="text-gray-600 text-base mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
} 