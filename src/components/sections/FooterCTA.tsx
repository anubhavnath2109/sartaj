"use client";

import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function FooterCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="gold-divider mb-12 mx-auto max-w-[60px]" />
        <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl lg:text-7xl tracking-tight text-text mb-4">
          READY TO SECURE
        </h2>
        <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl lg:text-7xl tracking-tight text-gold mb-8">
          YOUR NEXT OPERATION?
        </h2>
        <p className="text-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
          Get in touch to discuss your security requirements. Our team responds within 2 hours.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Request Deployment
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
