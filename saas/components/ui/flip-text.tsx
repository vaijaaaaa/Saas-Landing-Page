"use client";

import { AnimatePresence, motion, Variants } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";

type FlipTextProps = {
  className: string;
  duration: number;
  delayMultiple: number;
  word: string;
};

const FlipText: React.FC<FlipTextProps> = ({ className, duration, delayMultiple, word }) => {
  return (
    <span className={className} style={{ transitionDuration: `${duration}s`, transitionDelay: `${delayMultiple}s` }}>
      {word}
    </span>
  );
};

export default FlipText;
