"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import * as React from "react";

// Estendendo o tipo para o componente LinkButton
export interface LinkButtonProps extends React.ComponentProps<"button">, 
  VariantProps<typeof buttonVariants> {
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