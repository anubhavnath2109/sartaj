import React from "react";

export default function AdminGalleryLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-8 w-64 bg-border rounded-sm"></div>
        <div className="h-8 w-32 bg-border rounded-sm"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="aspect-square bg-border/20 border border-border"></div>
        ))}
      </div>
    </div>
  );
}
