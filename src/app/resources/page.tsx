import type { Metadata } from "next";
import { ArrowRight, BookOpen, MessageCircleHeart, Sparkles } from "lucide-react";
import Link from "next/link";
import { resources } from "@/lib/data/resources";

export const metadata: Metadata = { title: "Educational resources" };

export default function ResourcesPage() {
  const icons = [BookOpen, Sparkles, MessageCircleHeart];

  return (
    <section className="resources-page section-pad">
      <div className="page-shell">
        <p className="eyebrow">A library for curious minds</p>
        <h1>
          Learn at your
          <br />
          <em>own pace.</em>
        </h1>
        <p className="resources-page-lede">
          Clear, practical information for families and educators exploring coordination differences and DCD.
        </p>

        <div className="resource-grid resources-page-grid">
          {resources.map((resource, index) => {
            const Icon = icons[index];
            return (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="block"
                aria-label={`Open ${resource.title}`}
              >
                <article className={`resource-card resource-card-${index + 1}`}>
                  <div className="resource-card-top">
                    <span>{resource.category}</span>
                    <span>{resource.readTime}</span>
                  </div>

                  <div className="resource-card-body">
                    <div className="resource-card-icon">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>

                    <div>
                      <h2>{resource.title}</h2>
                      <p>{resource.description}</p>
                    </div>
                  </div>

                  <div className="resource-card-footer">
                    <span>Read article</span>
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <p className="resource-disclaimer">
          Educational information is not a substitute for individualized guidance from a qualified professional.
        </p>

        <Link href="/screening" className="text-link">
          <span>Explore the preliminary screening</span>
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
