"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { whyTrustPoints } from "@/lib/data";

export default function WhyTrustUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-surface-alt" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Large stat */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="label-accent text-gold text-xs block mb-4">
              Client Retention Rate
            </span>
            <div className="font-[family-name:var(--font-headline)] text-[120px] md:text-[160px] lg:text-[200px] leading-none text-gold/90 bracket-corners inline-block px-6 py-4">
              98%
            </div>
            <p className="text-muted text-sm mt-6 max-w-sm mx-auto lg:mx-0">
              Our clients stay because we deliver uncompromising protection — every time, without exception.
            </p>
          </motion.div>

          {/* Right: Bullet points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl tracking-wide text-text mb-10">
              WHY TRUST SARTAJ
            </h3>

            <ul className="space-y-6">
              {whyTrustPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="text-gold text-xl leading-none mt-0.5 font-bold">
                    —
                  </span>
                  <span className="text-text/80 text-sm md:text-base leading-relaxed">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="gold-divider mt-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
