import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GalleryLoading() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 animate-pulse">
          <SectionHeading
            overline="Operational Excellence"
            title="SARTAJ IN THE FIELD"
          />
          <div className="h-4 w-96 bg-border/50 rounded-sm mt-4 mb-12"></div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 mb-16">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="h-6 w-16 bg-border rounded-sm"></div>
             ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
             {[1, 2, 3, 4, 5, 6].map((i) => (
               <div key={i} className={`bg-border/20 border border-border break-inside-avoid ${i % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}></div>
             ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
