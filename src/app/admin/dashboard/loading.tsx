import React from "react";

export default function AdminDashboardLoading() {
  return (
    <div className="space-y-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-surface border border-border p-6 h-32 flex flex-col justify-between">
            <div className="h-3 w-24 bg-border rounded-sm"></div>
            <div className="h-8 w-16 bg-border rounded-sm"></div>
            <div className="h-2 w-32 bg-border/50 rounded-sm"></div>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border h-64">
         <div className="p-6 border-b border-border">
             <div className="h-6 w-48 bg-border rounded-sm"></div>
         </div>
         <div className="p-6 space-y-4">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="h-4 w-full bg-border/50 rounded-sm"></div>
             ))}
         </div>
      </div>
    </div>
  );
}
