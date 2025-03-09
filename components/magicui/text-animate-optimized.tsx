"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { ElementType, memo, useMemo } from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateOptimizedProps extends MotionProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: ElementType;
  by?: AnimationType;
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const animationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
        },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.3 },
      },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: -20,
      },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      },
      exit: {
        y: -20,
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -20, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      },
      exit: {
        y: 20,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 20, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      },
      exit: {
        x: -20,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -20, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      },
      exit: {
        x: 20,
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.8, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          scale: { duration: 0.3 },
          opacity: { duration: 0.3 },
        },
      },
      exit: {
        scale: 0.8,
        opacity: 0,
        transition: {
          scale: { duration: 0.3 },
          opacity: { duration: 0.3 },
        },
      },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.2, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          scale: { duration: 0.3 },
          opacity: { duration: 0.3 },
        },
      },
      exit: {
        scale: 1.2,
        opacity: 0,
        transition: {
          scale: { duration: 0.3 },
          opacity: { duration: 0.3 },
        },
      },
    },
  },
};

// Função para dividir o texto pelo tipo
function splitText(text: string, type: AnimationType): string[] {
  switch (type) {
    case "text":
      return [text];
    case "word":
      return text.split(/\s+/);
    case "character":
      return text.split("");
    case "line":
      return text.split(/\n/);
    default:
      return [text];
  }
}

const AnimatedSegment = memo(function AnimatedSegment({ 
  segment, 
  segmentClassName, 
  variants 
}: { 
  segment: string; 
  segmentClassName?: string; 
  variants: Variants;
}) {
  return (
    <motion.span
      variants={variants}
      className={segmentClassName}
    >
      {segment}
      {/* Adiciona um espaço após cada segmento, exceto para caracteres */}
      {segment.length > 1 && " "}
    </motion.span>
  );
});

export const TextAnimateOptimized = memo(function TextAnimateOptimized({
  children,
  delay = 0,
  duration = 0.3,
  variants: customVariants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateOptimizedProps) {
  // Determinar quais variantes usar
  const { container: containerVariants, item: itemVariants } = useMemo(() => {
    return {
      container: {
        ...animationVariants[animation].container,
        show: {
          ...animationVariants[animation].container.show,
          transition: {
            ...animationVariants[animation].container.show.transition,
            delayChildren: delay,
            staggerChildren: staggerTimings[by],
          },
        },
      },
      item: customVariants || {
        ...animationVariants[animation].item,
        show: {
          ...animationVariants[animation].item.show,
          transition: {
            ...animationVariants[animation].item.show.transition,
            duration,
          },
        },
      },
    };
  }, [animation, by, customVariants, delay, duration]);

  // Dividir o texto em segmentos
  const segments = useMemo(() => splitText(children, by), [children, by]);

  // Configurações para o InView
  const viewProps = startOnView
    ? {
        initial: "hidden",
        whileInView: "show",
        viewport: { once },
        exit: "exit",
      }
    : {
        initial: "hidden",
        animate: "show",
        exit: "exit",
      };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        className={cn("inline-block", className)}
        {...viewProps}
        {...props}
      >
        {segments.map((segment, i) => (
          <AnimatedSegment
            key={`${segment}-${i}`}
            segment={segment}
            segmentClassName={segmentClassName}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}); 