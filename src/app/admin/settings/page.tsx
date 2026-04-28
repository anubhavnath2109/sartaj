import React from "react";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-2xl space-y-10">
      <h2 className="font-[family-name:var(--font-headline)] text-3xl tracking-wide">
        SYSTEM CONFIGURATION
      </h2>

      <section className="space-y-6">
        <h3 className="label-accent text-gold text-xs border-b border-border pb-2">OPERATOR PROFILE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Display Name" defaultValue="OPERATOR-01" />
          <Input label="Access Level" defaultValue="LEVEL-5 (OVERSIGHT)" disabled />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="label-accent text-gold text-xs border-b border-border pb-2">NOTIFICATION DISPATCH</h3>
        <div className="flex items-center justify-between p-4 bg-surface border border-border">
          <div>
            <p className="font-medium">Emergency SMS Alerts</p>
            <p className="text-xs text-muted">Dispatch immediate alerts for high-priority inquiries</p>
          </div>
          <div className="w-12 h-6 bg-gold relative">
             <div className="absolute right-1 top-1 w-4 h-4 bg-bg" />
          </div>
        </div>
      </section>

      <div className="pt-6">
        <Button variant="primary">SAVE CONFIGURATION</Button>
      </div>
    </div>
  );
}
