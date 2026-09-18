"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { revealTransition, revealViewport } from "@/lib/motion";

type RevealElement = "div" | "section" | "article" | "footer";

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  as?: RevealElement;
  "aria-labelledby"?: string;
};

const motionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  footer: motion.footer
} as const;

export default function Reveal({
  children,
  className,
  id,
  delay = 0,
  as = "div",
  "aria-labelledby": ariaLabelledby
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} id={id} aria-labelledby={ariaLabelledby}>
        {children}
      </Tag>
    );
  }

  const MotionComponent = motionElements[as];

  return (
    <MotionComponent
      className={className}
      id={id}
      aria-labelledby={ariaLabelledby}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </MotionComponent>
  );
}
