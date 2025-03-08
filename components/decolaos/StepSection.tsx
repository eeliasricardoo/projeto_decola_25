"use client";

interface Step {
  title: string;
  description: string[];
}

interface StepSectionProps {
  title: string;
  introduction: string;
  steps: Step[];
  className?: string;
}

export function StepSection({ title, introduction, steps, className = "" }: StepSectionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <h2 className="text-[64px] font-bold mb-8">{title}</h2>
      <p className="text-[24px] text-[#5E5E5E] font-normal mb-16">
        {introduction}
      </p>
      
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={index} className="space-y-8">
            <h3 className="text-[32px] font-bold">{step.title}</h3>
            <div className="space-y-8">
              {step.description.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-[24px] text-[#5E5E5E] font-normal">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 