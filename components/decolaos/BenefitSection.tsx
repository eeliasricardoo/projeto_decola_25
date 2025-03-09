"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAward, 
  faChartLine, 
  faMoneyBill, 
  faRobot 
} from "@fortawesome/pro-solid-svg-icons";

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

// Ícones específicos para cada benefício no contexto
const BENEFIT_ICONS = [
  faAward,           // Melhoria na Qualidade
  faChartLine,       // Redução de Churn
  faMoneyBill,       // Aumento do Ticket Médio
  faRobot            // Uso estratégico de IA
];

export function BenefitSection({ title, introduction, benefits, className = "" }: BenefitSectionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
        
        <p className="text-gray-700 text-base mb-8">
          {introduction}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="h-12 w-12 bg-red-50 rounded-xl flex-shrink-0 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={BENEFIT_ICONS[index % BENEFIT_ICONS.length]} className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 