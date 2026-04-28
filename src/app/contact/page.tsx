import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Contact | Sartaj Security",
  description: "Request elite security services. Contact Sartaj Security for a confidential threat assessment.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div>
              <SectionHeading
                overline="Command Center"
                title="ESTABLISH CONTACT"
              />
              <p className="text-muted mt-6 text-lg">
                For immediate operations or long-term security planning, our command center is available 24/7.
              </p>

              <div className="mt-12 space-y-10">
                <div>
                  <h3 className="label-accent text-gold mb-2">Direct Line</h3>
                  <p className="text-2xl font-[family-name:var(--font-headline)] tracking-wider">
                    +91 (011) 4567-8901
                  </p>
                </div>
                <div>
                  <h3 className="label-accent text-gold mb-2">Email Dispatch</h3>
                  <p className="text-2xl font-[family-name:var(--font-headline)] tracking-wider uppercase">
                    ops@sartajsecurity.com
                  </p>
                </div>
                <div>
                  <h3 className="label-accent text-gold mb-2">Headquarters</h3>
                  <p className="text-muted leading-relaxed">
                    Sartaj Tower, Floor 14<br />
                    Outer Ring Road, Nehru Place<br />
                    New Delhi, 110019
                  </p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-surface p-8 md:p-12 border border-border bracket-corners">
              <h2 className="font-[family-name:var(--font-headline)] text-3xl tracking-wide mb-8">
                SERVICE INQUIRY
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
