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
        <h1>Learn at your<br /><em>own pace.</em></h1>
        <p className="resources-page-lede">Clear, practical information for families and educators exploring coordination differences and DCD.</p>
        <div className="resource-grid resources-page-grid">
          {resources.map((resource, index) => {
            const Icon = icons[index];
            return <article key={resource.title} className={`resource-card resource-card-${index + 1}`}><div className="resource-card-top"><span>{resource.category}</span><span>0{index + 1}</span></div><span className="resource-icon"><Icon aria-hidden="true" /></span><h2>{resource.title}</h2><p>{resource.description}</p><span className="resource-read">{resource.readTime}<ArrowRight aria-hidden="true" className="size-4" /></span></article>;
          })}
        </div>
        <p className="resource-disclaimer">Educational information is not a substitute for individualized guidance from a qualified professional.</p>
        <Link href="/screening" className="text-link"><span>Explore the preliminary screening</span><ArrowRight aria-hidden="true" className="size-4" /></Link>
      </div>
    </section>
  );
}