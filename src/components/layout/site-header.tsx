"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/milestones", label: "Milestones" },
  { href: "/screening", label: "Screening" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#9d5666] bg-[#650019]">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="page-shell flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="brand-mark" aria-label="DyspraCare home" onClick={() => setMenuOpen(false)}>
          <span className="brand-symbol" aria-hidden="true"><span /></span>
          <span>Dyspra<span className="brand-name-accent">Care</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActiveLink(link.href) ? "page" : undefined} className={cn("nav-link", isActiveLink(link.href) && "nav-link-active")}>
              {link.label}
            </Link>
          ))}
          <Link href="/resources" aria-current={isActiveLink("/resources") ? "page" : undefined} className={cn("nav-link", isActiveLink("/resources") && "nav-link-active")}>
            Resources
          </Link>
          {links.slice(3).map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActiveLink(link.href) ? "page" : undefined} className={cn("nav-link", isActiveLink(link.href) && "nav-link-active")}>
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/screening">Begin screening <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-[#102b4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-[#9d5666] bg-[#520014] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href} aria-current={isActiveLink(link.href) ? "page" : undefined} onNavigate={() => setMenuOpen(false)} className={cn("mobile-nav-link", isActiveLink(link.href) && "mobile-nav-link-active")}>
                {link.label}
              </Link>
            ))}
            <Link href="/resources" aria-current={isActiveLink("/resources") ? "page" : undefined} onNavigate={() => setMenuOpen(false)} className={cn("mobile-nav-link", isActiveLink("/resources") && "mobile-nav-link-active")}>
              Resources
            </Link>
            {links.slice(3).map((link) => (
              <Link key={link.href} href={link.href} aria-current={isActiveLink(link.href) ? "page" : undefined} onNavigate={() => setMenuOpen(false)} className={cn("mobile-nav-link", isActiveLink(link.href) && "mobile-nav-link-active")}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-1 w-full">
              <Link href="/screening" onClick={() => setMenuOpen(false)}>Begin screening <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}