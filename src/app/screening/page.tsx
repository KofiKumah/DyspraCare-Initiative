import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assessmentConfig, screeningSteps } from "@/lib/data/screening";

export const metadata: Metadata = { title: "Screening overview" };

export default function ScreeningPage() {
  return (
    <section className="section-pad screening-overview-page">
      <div className="page-shell screening-overview-shell">
        <div className="screening-overview-copy">
          <p className="eyebrow">A gentle first look</p>
          <h1>Build a clearer picture of what you are noticing.</h1>
          <p>
            DyspraCare brings together a short questionnaire and a few optional movement-based activities to help families and
            educators organize observations without labeling a child.
          </p>
          <div className="screening-overview-actions">
            <Button asChild>
              <Link href="/screening/questionnaire">
                Continue to questions <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <Link href="/milestones" className="text-link">
              See age-based milestones <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <p className="screening-disclaimer">
            <ShieldCheck aria-hidden="true" className="size-4" />
            {assessmentConfig.disclaimer}
          </p>
        </div>

        <div className="screening-overview-steps">
          {screeningSteps.map((step) => (
            <article key={step.number} className="screening-step-card">
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="screening-badges">
          <div>
            <BookOpen aria-hidden="true" className="size-5" />
            <span>Educational and reflective.</span>
          </div>
          <div>
            <Sparkles aria-hidden="true" className="size-5" />
            <span>Optional activities, not pressure.</span>
          </div>
        </div>
      </div>
    </section>
  );
}