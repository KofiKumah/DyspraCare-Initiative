"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assessmentQuestions } from "@/lib/data/assessment-questions";
import { ScreeningProgress } from "@/components/screening/screening-progress";

const storageKey = "dyspra-care-questionnaire";

function readStoredResponses(): Record<string, number> {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) {
      return {};
    }

    const parsed = JSON.parse(saved) as Record<string, unknown>;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed).flatMap(([key, value]) => {
        const numericValue = Number(value);
        if (!Number.isFinite(numericValue) || numericValue < 0 || numericValue > 3) {
          return [];
        }

        return [[key, numericValue]];
      }),
    );
  } catch {
    return {};
  }
}

export function QuestionnaireForm() {
  const router = useRouter();
  const [responses, setResponses] = useState<Record<string, number>>(readStoredResponses);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(responses));
    }
  }, [responses]);

  const answeredCount = useMemo(
    () => assessmentQuestions.filter((question) => responses[question.id] !== undefined).length,
    [responses],
  );

  const isComplete = answeredCount === assessmentQuestions.length;

  const updateResponse = (questionId: string, value: number) => {
    setResponses((current) => ({ ...current, [questionId]: value }));
    setValidationMessage("");
  };

  const clearResponses = () => {
    setResponses({});
    setValidationMessage("");
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(storageKey);
    }
  };

  const handleSubmit = () => {
    if (!isComplete) {
      setValidationMessage("Please answer every question before continuing to the activities.");
      return;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(responses));
    }

    router.push("/screening/tests");
  };

  return (
    <section className="questionnaire-shell">
      <div className="page-shell questionnaire-layout">
        <ScreeningProgress currentStep={1} />
        <div className="questionnaire-header">
          <p className="eyebrow">Parent/caregiver reflection</p>
          <h1>Tell us what you notice.</h1>
          <p>
            This is a quick educational snapshot designed to help organize observations about everyday routines,
            play, and movement. Choose the response that feels closest; you can change an answer at any time.
          </p>
          <div className="questionnaire-progress">
            <span id="questionnaire-progress-label">{answeredCount} of {assessmentQuestions.length} answered</span>
            <div
              className="progress-track"
              role="progressbar"
              aria-labelledby="questionnaire-progress-label"
              aria-valuemin={0}
              aria-valuemax={assessmentQuestions.length}
              aria-valuenow={answeredCount}
            >
              <span style={{ width: `${(answeredCount / assessmentQuestions.length) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="question-card-grid">
          {assessmentQuestions.map((question, index) => (
            <article key={question.id} className="question-card">
              <div className="question-card-top">
                <span>Q{index + 1}</span>
                <span className="question-category">{question.category.replace("-", " ")}</span>
              </div>
              <h2>{question.prompt}</h2>
              <div className="option-list" role="radiogroup" aria-label={question.prompt}>
                {question.responseOptions.map((option) => (
                  <label key={option.label} className={`option-pill ${responses[question.id] === option.value ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name={question.id}
                      value={option.value}
                      checked={responses[question.id] === option.value}
                      onChange={() => updateResponse(question.id, option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="questionnaire-footer">
          <p className="questionnaire-notice">
            <ShieldCheck aria-hidden="true" className="size-4" />
            Educational only. Not a diagnosis or replacement for a professional assessment.
          </p>
          {validationMessage ? <p className="form-error" role="alert">{validationMessage}</p> : null}
          <div className="questionnaire-actions">
            <Button onClick={handleSubmit} className="justify-center">
              Continue to activities <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button variant="secondary" onClick={clearResponses} type="button">
              Clear answers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
