import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { milestoneGroups } from "@/lib/data/milestones";

export const metadata: Metadata = { title: "Developmental milestones" };

export default function MilestonesPage() {
  return (
    <section className="section-pad milestone-guide-page">
      <div className="page-shell">
        <div className="milestone-guide-header">
          <p className="eyebrow">Developmental guide</p>
          <h1>Movement patterns can look different at every age.</h1>
          <p>
            These examples represent broad everyday milestones and are not intended as a diagnostic checklist. Development
            varies, and a single challenge does not tell the whole story.
          </p>
        </div>

        <div className="milestone-guide-grid">
          {milestoneGroups.map((group) => (
            <article key={group.age} className="guide-card">
              <span className="guide-age">{group.age}</span>
              <h2>{group.title}</h2>
              <p>{group.summary}</p>
              <div className="guide-areas">
                {group.areas.map((area) => (
                  <div key={area.label} className="guide-area">
                    <h3>{area.label}</h3>
                    <ul>
                      {area.examples.map((example) => (
                        <li key={example}>
                          <Check aria-hidden="true" className="size-4" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="guide-actions">
          <Button asChild>
            <Link href="/screening">
              Explore screening <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
          <Link href="/resources" className="text-link">
            Read educational resources <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
