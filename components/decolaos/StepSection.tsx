"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSearch, 
  faClipboard, 
  faRocket 
} from "@fortawesome/pro-solid-svg-icons";

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

// Ícones específicos para cada etapa da jornada
const STEP_ICONS = [
  faSearch,      // Mapeamento Inicial (diagnóstico)
  faClipboard,   // Implementação Guiada (lista de ações)
  faRocket       // Crescimento e Otimização (crescimento)
];

export function StepSection({ title, introduction, steps, className = "" }: StepSectionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
        
        <p className="text-gray-700 text-base mb-8">
          {introduction}
        </p>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="h-12 w-12 bg-red-50 rounded-xl flex-shrink-0 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={STEP_ICONS[index % STEP_ICONS.length]} className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{step.title}</h3>
                <div className="text-gray-600 text-sm">
                  {step.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mt-1">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 