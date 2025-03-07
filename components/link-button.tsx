"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";

// Estendendo o tipo ButtonProps para incluir variant explicitamente
export interface LinkButtonProps extends ButtonProps {
  href: string;
  children: ReactNode;
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  const handleClick = () => {
    window.open(href, "_blank");
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
} 