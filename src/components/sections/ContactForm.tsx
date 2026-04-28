"use client";

import React, { useState, useTransition } from "react";
import { Input, TextArea, Select } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { createInquiry } from "@/lib/actions/inquiry";
import { toast } from "sonner";

const eventTypes = [
  { value: "event-security", label: "Event Security" },
  { value: "corporate-guarding", label: "Corporate Guarding" },
  { value: "vip-protection", label: "VIP Protection" },
  { value: "venue-control", label: "Venue Control" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear field error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: [] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    startTransition(async () => {
      const result = await createInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      });

      if (result.success) {
        toast.success("INQUIRY DISPATCHED", {
          description:
            "Our operations team has been notified. Expect contact within 2 hours.",
          style: {
            borderLeft: "3px solid #C9922A",
          },
        });
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else if (typeof result.error === "object" && result.error !== null) {
        setErrors(result.error as Record<string, string[]>);
        toast.error("VALIDATION FAILED", {
          description: "Please review the highlighted fields.",
        });
      } else {
        toast.error("TRANSMISSION ERROR", {
          description:
            typeof result.error === "string"
              ? result.error
              : "An unexpected error occurred.",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Input
            label="Full Name"
            id="contact-name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name[0]}</p>
          )}
        </div>
        <div>
          <Input
            label="Email Address"
            id="contact-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input
          label="Phone (Optional)"
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
        />
        <div>
          <Select
            label="Service Required"
            id="contact-event-type"
            name="service"
            options={eventTypes}
            required
            value={form.service}
            onChange={handleChange}
          />
          {errors.service && (
            <p className="text-red-400 text-xs mt-1">{errors.service[0]}</p>
          )}
        </div>
      </div>

      <div>
        <TextArea
          label="Message"
          id="contact-message"
          name="message"
          placeholder="Describe your security requirements..."
          required
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message[0]}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        size="lg"
        disabled={isPending}
      >
        {isPending ? "TRANSMITTING..." : "SEND INQUIRY"}
      </Button>
    </form>
  );
}
