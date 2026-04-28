import React from "react";

export default function AdminInquiriesLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-64 bg-border rounded-sm my-2"></div>

      <div className="bg-surface border border-border">
         <div className="border-b border-border bg-zinc-900/50 p-4">
            <div className="h-4 w-full bg-border rounded-sm"></div>
         </div>
         <div className="divide-y divide-border">
             {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="p-6 flex items-center justify-between">
                     <div className="space-y-2">
                        <div className="h-4 w-32 bg-border rounded-sm"></div>
                        <div className="h-3 w-48 bg-border/50 rounded-sm"></div>
                     </div>
                     <div className="h-4 w-24 bg-border rounded-sm"></div>
                     <div className="h-6 w-20 bg-border rounded-sm"></div>
                     <div className="h-4 w-4 bg-border rounded-sm"></div>
                 </div>
             ))}
         </div>
      </div>
    </div>
  );
}
