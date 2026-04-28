import React from "react";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  overline,
  title,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {overline && (
        <span className="label-accent text-gold block mb-3">{overline}</span>
      )}
      <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-text">
        {title}
      </h2>
      <div className="gold-divider mt-6 mx-auto max-w-[80px]" />
    </div>
  );
}
