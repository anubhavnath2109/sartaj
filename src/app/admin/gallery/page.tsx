import React from "react";
import { getGalleryItems } from "@/lib/actions/gallery";
import AdminGalleryClient from "./AdminGalleryClient";

export default async function AdminGalleryPage() {
  const items = await getGalleryItems();
  
  // Serialize Prisma Date object if necessary or just map the needed fields
  const serializedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      category: item.category,
      imageUrl: item.imageUrl,
      publicId: item.publicId
  }));

  return <AdminGalleryClient items={serializedItems} />;
}
