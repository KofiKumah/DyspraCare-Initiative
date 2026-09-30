import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { resources } from "@/lib/data/resources";

type ResourceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return { title: "Resource not found" };
  }

  return {
    title: resource.title,
  };
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="section-pad resource-detail-page">
      <div className="page-shell">
        <Link href="/resources" className="text-link resource-back-link">
          <ArrowLeft aria-hidden="true" className="size-4" />
          <span>Back to resources</span>
        </Link>

        <p className="eyebrow">{resource.category}</p>
        <h1>{resource.title}</h1>

        <div className="resource-detail-meta">
          <span>{resource.readTime}</span>
          <span>Educational resource</span>
        </div>

        <div className="resource-detail-body">
          {resource.content.map((section) => (
            <section key={section.heading} className="resource-detail-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <Link href="/screening" className="text-link">
          <span>Explore the preliminary screening</span>
          <ArrowLeft aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </main>
  );
}
