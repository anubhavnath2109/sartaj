"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ─── Public ─────────────────────────────────────────────

export async function getGalleryItems() {
  return db.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// ─── Protected (Admin) ──────────────────────────────────

export async function createGalleryItem(data: {
  title: string;
  category: string;
  imageUrl: string;
  publicId: string;
  assetType?: string;
  featured?: boolean;
}) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  await db.galleryItem.create({
    data: {
      title: data.title,
      category: data.category,
      imageUrl: data.imageUrl,
      publicId: data.publicId,
      assetType: data.assetType || "image",
      featured: data.featured || false,
    },
  });

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  revalidatePath("/admin/dashboard");
}

export async function deleteGalleryItem(id: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Get the item first to retrieve the Cloudinary public ID
  const item = await db.galleryItem.findUnique({ where: { id } });
  if (!item) throw new Error("Gallery item not found");

  // Delete from Cloudinary
  try {
    await cloudinary.uploader.destroy(item.publicId);
  } catch (error) {
    console.error("Failed to delete from Cloudinary:", error);
    // Continue with DB deletion even if Cloudinary fails
  }

  // Delete from database
  await db.galleryItem.delete({ where: { id } });

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  revalidatePath("/admin/dashboard");
}
