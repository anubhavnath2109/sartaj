"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  assetType: string;
  featured: boolean;
}

const categories = [
  { value: "all", label: "All" },
  { value: "event", label: "Event Security" },
  { value: "corporate", label: "Corporate" },
  { value: "vip", label: "VIP" },
  { value: "venue", label: "Venue" },
];

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`label-accent text-xs py-2 px-1 border-b-2 transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? "text-gold border-gold"
                  : "text-muted border-transparent hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="label-accent text-muted text-sm">
              NO OPERATIONAL RECORDS FOUND
            </p>
            <p className="text-muted text-xs mt-2">
              Gallery assets will appear here once uploaded by the operations
              team.
            </p>
          </div>
        )}

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden group break-inside-avoid ${
                  item.featured
                    ? "md:col-span-2 aspect-[16/10]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    item.featured
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />

                {/* Video play overlay */}
                {item.assetType === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 border-2 border-gold flex items-center justify-center bg-bg/40 transition-all duration-300 group-hover:bg-gold/20">
                      <svg
                        className="w-6 h-6 text-gold ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="p-6 w-full group-hover:translate-y-0 translate-y-4 transition-transform duration-500"
                  >
                    <span className="label-accent text-gold text-[10px] block mb-2">
                      {
                        categories.find((c) => c.value === item.category)
                          ?.label
                      }
                    </span>
                    <h3 className="font-[family-name:var(--font-headline)] text-xl tracking-wide text-text">
                      {item.title.toUpperCase()}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
