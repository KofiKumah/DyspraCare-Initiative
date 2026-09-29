import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type RoutePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  step?: string;
  nextHref?: string;
  nextLabel?: string;
  notice?: string;
};

export function RoutePlaceholder({ eyebrow, title, description, step, nextHref, nextLabel, notice }: RoutePlaceholderProps) {
  return (
    <section className="placeholder-section">
      <div className="page-shell placeholder-inner">
        <Link href="/" className="text-link placeholder-back"><ArrowLeft aria-hidden="true" className="size-4" /> Back to home</Link>
        <div className="placeholder-content">
          {step && <span className="placeholder-step">{step}</span>}
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="placeholder-description">{description}</p>
          {notice && <p className="placeholder-notice"><ShieldCheck aria-hidden="true" className="size-5 shrink-0" />{notice}</p>}
          <div className="placeholder-actions">
            {nextHref && nextLabel ? <Button asChild><Link href={nextHref}>{nextLabel}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button> : <Button variant="secondary" asChild><Link href="/resources">Explore resources<ArrowRight aria-hidden="true" className="size-4" /></Link></Button>}
            <Link href="/screening" className="text-link">Screening overview <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
        <div className="placeholder-footer"><span>DyspraCare</span><span>Curious, not certain. Supportive, never diagnostic.</span></div>
      </div>
    </section>
  );
}