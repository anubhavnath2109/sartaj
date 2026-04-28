"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { trustStats } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Elite security team in tactical formation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/60 to-bg/90" />
        {/* Noise overlay */}
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overline */}
        <motion.span
          variants={itemVariants}
          className="label-accent text-gold text-xs md:text-sm inline-block mb-6"
        >
          Verified Protection Since 2010
        </motion.span>

        {/* Headline */}
        <motion.h1 variants={itemVariants}>
          <span className="font-[family-name:var(--font-headline)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight block text-text">
            ELITE SECURITY
          </span>
          <span className="font-[family-name:var(--font-headline)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight block text-gold mt-2">
            WITHOUT COMPROMISE
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-muted text-base md:text-lg mt-8 max-w-lg mx-auto"
        >
          Discrete protection for those who refuse to settle for anything less than absolute security.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Deploy Our Team
            </Button>
          </Link>
          <Link href="/gallery">
            <Button variant="outline" size="lg">
              View Operations
            </Button>
          </Link>
        </motion.div>

        {/* Trust Stats Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-0 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border"
        >
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 px-8 py-5 w-full sm:w-auto"
            >
              <span className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl text-gold">
                {stat.value}
              </span>
              <span className="label-accent text-muted text-[10px]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-10" />
    </section>
  );
}
