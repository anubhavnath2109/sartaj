// ─── Static Content (not DB-driven) ─────────────────────

export const services = [
  {
    id: "event-security",
    title: "Event Security",
    description:
      "Comprehensive crowd management and threat assessment for high-profile events, concerts, and private gatherings.",
    icon: "shield-event",
    category: "event",
  },
  {
    id: "corporate-guarding",
    title: "Corporate Guarding",
    description:
      "24/7 on-site security personnel for corporate offices, industrial facilities, and commercial properties.",
    icon: "building",
    category: "corporate",
  },
  {
    id: "vip-protection",
    title: "VIP Protection",
    description:
      "Close protection officers trained in executive security, threat mitigation, and secure transportation protocols.",
    icon: "user-shield",
    category: "vip",
  },
  {
    id: "venue-control",
    title: "Venue Control",
    description:
      "Access management, perimeter security, and surveillance operations for venues of all sizes.",
    icon: "lock",
    category: "venue",
  },
];

export type InquiryStatus = "NEW" | "READ" | "CONTACTED";

export const trustStats = [
  { value: "500+", label: "Events Secured" },
  { value: "12", label: "Years Active" },
  { value: "24/7", label: "Response" },
];

export const whyTrustPoints = [
  "Vetted operators with military and law enforcement backgrounds",
  "Real-time communication and incident reporting systems",
  "Bespoke security plans tailored to each client's threat profile",
  "Discreet service — your security should never be the headline",
];
