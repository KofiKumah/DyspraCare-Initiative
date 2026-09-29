import Link from "next/link";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-[#9d5666] bg-[#520014] text-white">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <Link href="/" className="brand-mark mb-4 inline-flex">
            <span className="brand-symbol" aria-hidden="true"><span /></span>
            <span>dyspra<span className="brand-name-accent">care</span></span>
          </Link>
          <p className="max-w-md text-sm leading-6 text-white">A kinder starting point for understanding coordination differences and finding your next conversation.</p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white">
            <Link className="hover:text-[#dce6f2]" href="/">Home</Link>
            <Link className="hover:text-[#dce6f2]" href="/milestones">Milestones</Link>
            <Link className="hover:text-[#dce6f2]" href="/screening">Screening</Link>
            <Link className="hover:text-[#dce6f2]" href="/resources">Resources</Link>
            <Link className="hover:text-[#dce6f2]" href="/faq">FAQ</Link>
          </nav>
          <div className="flex max-w-md gap-3 rounded-2xl border border-[#526b8b] bg-[#102b4e] p-4 text-xs leading-5 text-white">
            <HeartHandshake aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white" />
            <p>DyspraCare offers education and preliminary screening only. It does not diagnose DCD or replace professional assessment.</p>
          </div>
        </div>
        <p className="text-xs text-white md:col-span-2">© {new Date().getFullYear()} DyspraCare Initiative <span className="mx-2">·</span> <Link href="/resources" className="underline decoration-[#dce6f2] underline-offset-4 hover:text-[#dce6f2]">Explore resources <ArrowUpRight aria-hidden="true" className="inline size-3" /></Link></p>
      </div>
    </footer>
  );
}