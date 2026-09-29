"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildScreeningAnalysis, type ActivityScores, type AnswerMap } from "@/lib/scoring";
import { ScreeningProgress } from "@/components/screening/screening-progress";

const questionnaireKey = "dyspra-care-questionnaire";
const activityKey = "dyspra-care-activities";

function readStoredAnalysis() {
  if (typeof window === "undefined") {
    return buildScreeningAnalysis({}, {});
  }

  try {
    const rawAnswers = window.localStorage.getItem(questionnaireKey);
    const rawActivities = window.localStorage.getItem(activityKey);
    const answers = rawAnswers ? (JSON.parse(rawAnswers) as AnswerMap) : {};
    const activities = rawActivities ? (JSON.parse(rawActivities) as Partial<ActivityScores>) : {};
    return buildScreeningAnalysis(answers, activities);
  } catch {
    return buildScreeningAnalysis({}, {});
  }
}

export function ResultsView() {
  const analysis = useMemo(() => readStoredAnalysis(), []);
  const hasSavedData = typeof window !== "undefined" && (Boolean(window.localStorage.getItem(questionnaireKey)) || Boolean(window.localStorage.getItem(activityKey)));

  const topAreas = analysis.rankedAreas
    .filter(([area]) => analysis.areaScores[area] > 0)
    .slice(0, 3)
    .map(([area, score]) => ({ area, score }));

  const handlePrintPdf = () => {
    const previousTitle = document.title;
    document.title = "DyspraCare preliminary screening summary";
    window.print();
    document.title = previousTitle;
  };

  if (!hasSavedData) {
    return (
      <section className="results-shell">
        <div className="page-shell results-page-shell">
          <ScreeningProgress currentStep={3} />
          <div className="result-panel">
            <span className="panel-label">No saved screening found</span>
            <h1>There is no screening data saved yet.</h1>
            <p>Start a questionnaire and activity check to generate an educational summary.</p>
            <div className="result-actions">
              <Button asChild>
                <Link href="/screening">
                  Start screening <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Link href="/" className="text-link">
                Back to home <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="results-shell">
      <div className="page-shell results-page-shell" data-report-title="DyspraCare preliminary screening summary">
        <ScreeningProgress currentStep={3} />
        <div className="results-header">
          <p className="eyebrow">Screening snapshot</p>
          <h1>A gentle review of what you noticed.</h1>
          <p>
            This summary is designed to help you reflect and prepare for a supportive conversation. It is not a diagnosis,
            and it does not determine whether a child has a medical condition.
          </p>
        </div>

        <div className="results-grid">
          <article className="result-panel highlight-panel">
            <span className="panel-label">Reflection snapshot, not a clinical score</span>
            <h2>{analysis.totalScore}/100</h2>
            <p>{analysis.summary}</p>
            <p className="panel-subtle">{analysis.guidance}</p>
          </article>

          <article className="result-panel">
            <span className="panel-label">Indicators observed</span>
            <ul className="area-list">
              {topAreas.length > 0 ? (
                topAreas.map(({ area, score }) => (
                  <li key={area}>
                    <span>{area.replace("-", " ")}</span>
                    <strong>{score}</strong>
                  </li>
                ))
              ) : (
                <li>
                  <span>General coordination</span>
                  <strong>Low</strong>
                </li>
              )}
            </ul>
          </article>
        </div>

        <div className="results-grid secondary-grid">
          <article className="result-panel">
            <span className="panel-label">Personalized home activities</span>
            <ul className="activity-suggestions">
              {analysis.homeActivities.map((activity) => (
                <li key={activity.title}>
                  <strong>{activity.title}</strong>
                  <span>{activity.description}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="result-panel">
            <span className="panel-label">Quick next steps</span>
            <ul className="next-steps">
              <li>Reflect on whether the patterns appear in more than one setting.</li>
              <li>Look for a consistent explanation, not just one hard day or task.</li>
              <li>If concerns continue, consider discussing them with a pediatrician or another qualified professional, such as an occupational therapist. This summary can help start that conversation.</li>
            </ul>
          </article>
        </div>

        <div className="result-actions">
          <Button onClick={handlePrintPdf} type="button">
            <Download aria-hidden="true" className="size-4" />
            Export summary as PDF
          </Button>
          <Link href="/screening" className="text-link">
            Review the screening overview <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link href="/resources" className="text-link">
            Browse family resources <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="result-note">
          <ShieldCheck aria-hidden="true" className="size-5" />
          <p>Educational and preliminary only. It should not be used to diagnose DCD or determine a child’s medical status.</p>
        </div>
      </div>
    </section>
  );
}
