import type { Metadata } from "next";
import { ResultsView } from "@/components/screening/results-view";

export const metadata: Metadata = { title: "Screening summary" };

export default function ResultsPage() {
  return <ResultsView />;
}