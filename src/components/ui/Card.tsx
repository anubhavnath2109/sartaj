"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  brackets?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  brackets = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { borderColor: "rgba(201, 146, 42, 0.5)" } : undefined}
      className={`bg-surface border border-border p-6 transition-all duration-300 ${
        hoverEffect ? "hover:border-l-gold hover:border-l-2" : ""
      } ${brackets ? "bracket-corners" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
