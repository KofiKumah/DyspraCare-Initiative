import { assessmentQuestions } from "@/lib/data/assessment-questions";
import { areaLabels, homeActivityLibrary, type FocusArea } from "@/lib/data/scoring-config";

export type AnswerMap = Partial<Record<string, number>>;

export type ActivityScores = {
  trace: number;
  tap: number;
  rhythm: number;
};

export type ScreeningAnalysis = {
  totalScore: number;
  questionnaireScore: number;
  activityAverage: number;
  areaScores: Record<FocusArea, number>;
  rankedAreas: Array<[FocusArea, number]>;
  summary: string;
  guidance: string;
  homeActivities: Array<{ title: string; description: string; area: FocusArea }>;
};

const defaultAreaScores = (): Record<FocusArea, number> => ({
  "fine-motor": 0,
  "gross-motor": 0,
  "self-care": 0,
  planning: 0,
  attention: 0,
  rhythm: 0,
});

export function buildScreeningAnalysis(
  answers: AnswerMap = {},
  activityScores: Partial<ActivityScores> = {},
): ScreeningAnalysis {
  const areaScores = defaultAreaScores();

  assessmentQuestions.forEach((question) => {
    const rawValue = Number(answers[question.id] ?? 0);
    const value = Number.isFinite(rawValue) ? Math.max(0, Math.min(3, rawValue)) : 0;
    areaScores[question.category] += value;
  });

  const questionnaireScore = Object.values(areaScores).reduce((total, value) => total + value, 0);

  const activityValues = [
    Number.isFinite(activityScores.trace) ? Math.max(0, Math.min(100, Number(activityScores.trace))) : 0,
    Number.isFinite(activityScores.tap) ? Math.max(0, Math.min(100, Number(activityScores.tap))) : 0,
    Number.isFinite(activityScores.rhythm) ? Math.max(0, Math.min(100, Number(activityScores.rhythm))) : 0,
  ];
  const activityAverage =
    activityValues.length > 0 ? Math.round(activityValues.reduce((total, value) => total + value, 0) / activityValues.length) : 0;

  const rankedAreas = Object.entries(areaScores)
    .map(([area, value]) => [area as FocusArea, value] as [FocusArea, number])
    .sort((a, b) => b[1] - a[1]);

  const topAreas = rankedAreas
    .filter(([, value]) => value > 0)
    .slice(0, 2)
    .map(([area]) => area);

  const homeActivities = Array.from(
    new Set(topAreas.flatMap((area) => homeActivityLibrary[area].slice(0, 2).map((item) => JSON.stringify(item)))),
  )
    .slice(0, 4)
    .map((item) => JSON.parse(item) as { title: string; description: string; area: FocusArea });

  const questionnaireWeight = 70;
  const activityWeight = 30;
  const normalizedQuestionnaire = (questionnaireScore / 30) * questionnaireWeight;
  const normalizedActivityScore = (activityAverage / 100) * activityWeight;
  const totalScore = Math.min(100, Math.round(normalizedQuestionnaire + normalizedActivityScore));

  let summary = "The current snapshot suggests a range of everyday effort that is worth observing and supporting rather than labeling.";
  let guidance = "A gentle, strengths-based conversation with a qualified professional can help you decide what next steps may be helpful.";

  if (totalScore >= 70) {
    summary = "Several patterns in daily routines and movement tasks suggest a need for closer observation and extra support.";
    guidance = "Focus on the areas that rise to the top and look for practical environmental supports at home and school.";
  } else if (totalScore >= 40) {
    summary = "There are some patterns worth noticing, especially in the areas that appeared most often across the questions and activities.";
    guidance = "Try the personalized home activity ideas below and consider a later check-in with a qualified professional if concerns continue.";
  } else if (totalScore >= 20) {
    summary = "The snapshot shows a few moments of effort that may be part of a broader developmental picture, but not enough to make a conclusion.";
    guidance = "Keep noticing the pattern over time and use the information as a conversation starter rather than a verdict.";
  }

  return {
    totalScore,
    questionnaireScore,
    activityAverage,
    areaScores,
    rankedAreas,
    summary,
    guidance,
    homeActivities: homeActivities.length > 0 ? homeActivities : [{ title: "Playful routines", description: "Build one short movement or self-care routine into each day and keep it consistent, calm, and encouraging.", area: "attention" }],
  };
}

export function getAreaLabel(area: FocusArea): string {
  return areaLabels[area];
}
