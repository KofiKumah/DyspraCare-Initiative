import type { Metadata } from "next";
import { QuestionnaireForm } from "@/components/screening/questionnaire-form";

export const metadata: Metadata = { title: "Caregiver questionnaire" };

export default function QuestionnairePage() {
  return <QuestionnaireForm />;
}