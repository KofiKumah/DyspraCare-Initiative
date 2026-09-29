import type { Metadata } from "next";
import { ActivitySuite } from "@/components/screening/activity-suite";

export const metadata: Metadata = { title: "Interactive motor activities" };

export default function TestsPage() {
  return <ActivitySuite />;
}