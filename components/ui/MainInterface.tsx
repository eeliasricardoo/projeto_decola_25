"use client";

import { memo, ReactNode } from "react";
import { FadeIn } from "@/components/ui/animations";

interface MainInterfaceProps {
  children: ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
}

export const MainInterface = memo(function MainInterface({
  children,
  columns = 2,
  className = ""
}: MainInterfaceProps) {
  return (
    <div className={`p-8 border-b border-gray-100 ${className}`}>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
        {children}
      </div>
    </div>
  );
});

interface MainInterfaceSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const MainInterfaceSection = memo(function MainInterfaceSection({
  children,
  delay = 0,
  className = ""
}: MainInterfaceSectionProps) {
  return (
    <FadeIn delay={delay} duration={800} className={className}>
      <div className="flex flex-col space-y-4">
        {children}
      </div>
    </FadeIn>
  );
});

interface MainInterfaceCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
  iconContainerClassName?: string;
}

export const MainInterfaceCard = memo(function MainInterfaceCard({
  children,
  title,
  subtitle,
  icon,
  className = "",
  iconContainerClassName = "bg-gray-200"
}: MainInterfaceCardProps) {
  return (
    <div className={`bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {(title || icon) && (
        <div className="flex items-center mb-6">
          {icon && (
            <div className={`h-12 w-12 ${iconContainerClassName} text-gray-700 rounded-xl flex items-center justify-center mr-4 font-bold text-xs`}>
              {icon}
            </div>
          )}
          {(title || subtitle) && (
            <div>
              {title && <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>}
              {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
            </div>
          )}
        </div>
      )}
      
      {children}
    </div>
  );
}); 