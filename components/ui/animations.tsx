"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Componente de animação de digitação
interface TypewriterEffectProps {
  phrases: string[];
  speed?: number;
  pauseTime?: number;
}

export const TypewriterEffect = ({ phrases, speed = 70, pauseTime = 2000 }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    // Efeito de digitação
    if (!isDeleting && displayText === currentPhrase) {
      // Pausa quando termina de digitar frase completa
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(speed / 2); // Deleta mais rápido
      }, pauseTime);
    } else if (isDeleting && displayText === "") {
      // Troca para próxima frase
      setIsDeleting(false);
      setTypingSpeed(speed);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    } else {
      // Processo de digitação ou deleção
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, phrases, speed, pauseTime, typingSpeed]);
  
  return <span className="inline-block min-h-[24px]">{displayText}<span className="animate-pulse">|</span></span>;
};

// Componente de animação de entrada
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, duration = 500, className = "" }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`transition-all ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

// Componente de gráfico animado simulado
interface AnimatedChartProps {
  type: 'line' | 'bar' | 'pie';
  color?: string;
  progress?: number;
}

export const AnimatedChart = ({ 
  type, 
  color,
  progress: initialProgress
}: AnimatedChartProps) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    // Simula carregamento
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1000 + Math.random() * 1000);
    
    // Anima o valor crescendo
    const valueTimer = setInterval(() => {
      setValue(prev => {
        const newValue = prev + 2;
        const maxValue = initialProgress || 100;
        return newValue <= maxValue ? newValue : maxValue;
      });
    }, 20);
    
    return () => {
      clearTimeout(loadTimer);
      clearInterval(valueTimer);
    };
  }, [initialProgress]);
  
  const colors = {
    line: { bg: color ? `bg-${color}-50` : 'bg-blue-50', fill: color ? `bg-${color}-200` : 'bg-blue-200', text: color ? `text-${color}-600` : 'text-blue-600' },
    bar: { bg: color ? `bg-${color}-50` : 'bg-purple-50', fill: color ? `bg-${color}-200` : 'bg-purple-200', text: color ? `text-${color}-600` : 'text-purple-600' },
    pie: { bg: color ? `bg-${color}-50` : 'bg-green-50', fill: color ? `bg-${color}-200` : 'bg-green-200', text: color ? `text-${color}-600` : 'text-green-600' }
  };
  
  const icons = {
    line: "faChartLine",
    bar: "faChartBar",
    pie: "faChartPie"
  };
  
  if (loading) {
    return (
      <div className={`${colors[type].bg} rounded-md p-3 animate-pulse w-full h-12`}></div>
    );
  }
  
  return (
    <div className={`${colors[type].bg} rounded-md p-3 flex items-center`}>
      <div className="flex-1">
        <div className="relative h-4 bg-white rounded overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full ${colors[type].fill} transition-all duration-1000 ease-out`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
      <div className={`${colors[type].text} ml-2`}>
        <div className="h-4 w-4"></div>
      </div>
    </div>
  );
};

// Componente de pulsação de notificação
export const NotificationPulse = ({ color = "red" }: { color?: string }) => {
  const bgColor = `bg-${color}-400`;
  const bgSolidColor = `bg-${color}-500`;
  
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className={`absolute inline-flex h-full w-full rounded-full ${bgColor} opacity-75 animate-ping`}></span>
      <span className={`relative inline-flex rounded-full h-2 w-2 ${bgSolidColor}`}></span>
    </span>
  );
};

// Componente Card com animação
interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedCard = ({ children, delay = 0, className = "" }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] ${className}`}
    >
      {children}
    </motion.div>
  );
}; 