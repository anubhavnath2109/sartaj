"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export default function StatCard({
  value,
  label,
  trend,
  trendUp,
  className = "",
}: StatCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`bg-surface border border-border p-6 text-center ${className}`}
    >
      <div className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl text-gold mb-2">
        {value}
      </div>
      <div className="label-accent text-muted mb-2">{label}</div>
      {trend && (
        <div
          className={`label-accent text-[9px] ${
            trendUp === true
              ? "text-status-green"
              : trendUp === false
              ? "text-red-500"
              : "text-muted opacity-60"
          }`}
        >
          {trend}
        </div>
      )}
    </motion.div>
  );
}
