import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryGrid from "@/components/sections/GalleryGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { getGalleryItems } from "@/lib/actions/gallery";

export const metadata = {
  title: "Gallery | Sartaj Security",
  description: "Operational highlights and field operations of Sartaj Security personnel.",
};

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const items = await getGalleryItems();

  // Map the Prisma types to what GalleryGrid expects
  const serializedItems = items.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    imageUrl: item.imageUrl,
    assetType: item.assetType,
    featured: item.featured,
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            overline="Operational Excellence"
            title="SARTAJ IN THE FIELD"
          />
          <p className="text-muted max-w-2xl mt-4 mb-12">
            A visual record of our elite protection teams across various sectors including event security, corporate guarding, and high-profile VIP escorts.
          </p>
          <GalleryGrid items={serializedItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
