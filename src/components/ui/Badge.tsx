import React from "react";
import type { InquiryStatus } from "@/lib/data";

interface BadgeProps {
  status: InquiryStatus;
}

const badgeStyles: Record<InquiryStatus, string> = {
  NEW: "bg-gold/20 text-gold border border-gold/40",
  READ: "bg-muted/20 text-muted border border-muted/40",
  CONTACTED: "bg-status-green/20 text-emerald-400 border border-status-green/60",
};

export default function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${badgeStyles[status]}`}
    >
      {status}
    </span>
  );
}
