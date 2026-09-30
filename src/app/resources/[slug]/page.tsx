import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Sparkles, MessageCircleHeart, CheckCircle } from "lucide-react";
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

  const iconMap = {
    book: BookOpen,
    sparkles: Sparkles,
    messages: MessageCircleHeart,
  };

  const IconComponent = iconMap[resource.icon];

  return (
    <main className="resource-detail-page">
      <div className="page-shell">
        <Link href="/resources" className="resource-back-link">
          <ArrowLeft aria-hidden="true" className="size-4" />
          <span>Back to resources</span>
        </Link>

        <div className="resource-detail-header">
          <div className="resource-detail-icon-badge">
            <IconComponent aria-hidden="true" className="size-8" />
          </div>
          
          <p className="eyebrow">{resource.category}</p>
          <h1>{resource.title}</h1>

          <div className="resource-detail-meta">
            <span className="meta-item">
              <CheckCircle aria-hidden="true" className="size-4" />
              {resource.readTime}
            </span>
            <span className="meta-item">Educational resource</span>
          </div>

          <p className="resource-detail-intro">{resource.description}</p>
        </div>

        <div className="resource-detail-body">
          {resource.content.map((section, sectionIndex) => (
            <section key={section.heading} className={`resource-detail-section section-${sectionIndex + 1}`}>
              <div className="section-header">
                <div className="section-number">{sectionIndex + 1}</div>
                <h2>{section.heading}</h2>
              </div>

              <div className="section-content">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.heading}-${paragraphIndex}`} className="section-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="resource-detail-footer">
          <div className="footer-content">
            <h3>Ready to take the next step?</h3>
            <p>Explore our preliminary screening tool to help you better understand your child's coordination development.</p>
            <Link href="/screening" className="resource-footer-link">
              <span>Begin screening</span>
              <ArrowLeft aria-hidden="true" className="size-4" style={{ transform: "rotate(180deg)" }} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
