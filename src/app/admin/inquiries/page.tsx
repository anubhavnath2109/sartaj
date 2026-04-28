import React from "react";
import { getInquiries } from "@/lib/actions/inquiry";
import InquiriesClient from "./InquiriesClient";

export default async function AdminInquiriesPage() {
  const inquiries = await getInquiries();
  return <InquiriesClient initialInquiries={inquiries} />;
}
