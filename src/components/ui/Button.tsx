"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-[family-name:var(--font-body)] uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-gold text-bg hover:bg-gold-dark border border-gold hover:border-gold-dark",
    outline:
      "bg-transparent text-gold border border-gold hover:bg-gold/10",
    ghost:
      "bg-transparent text-text hover:text-gold border border-transparent hover:border-l-gold hover:border-l-2",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
