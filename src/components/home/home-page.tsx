import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, Clock3, HandHeart,
  Heart, MessageCircleHeart, MoveUpRight, ShieldCheck, Sparkles, Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, resources } from "@/lib/data/resources";
import { milestoneGroups } from "@/lib/data/milestones";
import { screeningSteps } from "@/lib/data/screening";

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="page-shell hero-layout">
          <div className="hero-copy enter-up">
            <span className="eyebrow"><span className="eyebrow-dot" /> A thoughtful first step</span>
            <h1>Early awareness.<br />Better understanding.<br /><em>Earlier support.</em></h1>
            <p className="hero-lede">Gentle guidance for the moments when movement feels a little harder. Learn about coordination differences, notice patterns, and find a way forward together.</p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/screening">Explore a screening <ArrowRight aria-hidden="true" className="size-4" /></Link>
              </Button>
              <Link href="/resources" className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-white hover:text-[#dce6f2]">Learn about DCD <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
            </div>
            <div className="hero-note"><ShieldCheck aria-hidden="true" className="size-4" /><span>Informational, at your pace, and never a diagnosis.</span></div>
          </div>
          <div className="hero-visual enter-up enter-up-delay" aria-label="A caregiver spending time with a young child">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85"
              alt="A young child playing outside in warm afternoon light"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 52vw"
              className="hero-image"
            />
            <div className="hero-image-wash" aria-hidden="true" />
            <div className="hero-caption"><span className="caption-mark"><Heart aria-hidden="true" className="size-4" /></span><span><strong>Curiosity over comparison</strong><small>Progress looks different for everyone.</small></span></div>
            <div className="hero-image-index" aria-hidden="true">01 <span /> A place to begin</div>
          </div>
          <a href="#understanding" className="hero-scroll" aria-label="Scroll to learn about DCD"><ArrowDown aria-hidden="true" className="size-4" /> <span>Scroll to explore</span></a>
        </div>
      </section>

      <section id="understanding" className="section-pad">
        <div className="page-shell intro-grid">
          <div className="section-marker"><span>01</span><span>Understanding DCD</span></div>
          <div className="intro-content">
            <p className="eyebrow">A different kind of learning curve</p>
            <h2>When the idea is clear,<br /><em>but the movement isn’t.</em></h2>
            <div className="intro-columns">
              <p>Developmental coordination disorder (DCD), sometimes called dyspraxia, affects how a person learns and carries out coordinated movements. Everyday tasks like getting dressed, handwriting, or joining a game may take more time and effort.</p>
              <p>DCD is not about intelligence or willingness. Children grow in their own ways, and only a qualified professional can assess whether DCD is part of a child’s story.</p>
            </div>
            <Link href="/resources" className="text-link">A little more about DCD <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="intro-aside" aria-label="A reminder about development">
            <span className="aside-symbol"><Sprout aria-hidden="true" className="size-6" /></span>
            <p>Notice the effort.<br /><em>Honor the child.</em></p>
            <span className="aside-caption">There is no single timeline for growing.</span>
          </div>
        </div>
      </section>

      <section className="section-pad milestone-section">
        <div className="page-shell">
          <div className="section-heading-row">
            <div><p className="eyebrow">A guide, not a checklist</p><h2>Growing looks<br className="sm:hidden" /> <em>different at every age.</em></h2></div>
            <p className="section-intro">These everyday examples can help you reflect. They are not diagnostic milestones, and children develop at different paces.</p>
          </div>
          <div className="milestone-grid">
            {milestoneGroups.map((group, index) => (
              <article className="milestone-card" key={group.age}>
                <div className="milestone-card-top"><span className="milestone-age">{group.age}</span><span className="milestone-count">0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <p className="milestone-summary">{group.summary}</p>
                <div className="milestone-areas">
                  {group.areas.map((area) => (
                    <div className="milestone-area" key={area.label}>
                      <span>{area.label}</span>
                      <ul>{area.examples.map((example) => <li key={example}><Check aria-hidden="true" className="size-3.5" />{example}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="milestone-caveat"><Heart aria-hidden="true" className="size-4" /> Skills vary from child to child. A single difficulty does not indicate DCD.</p>
        </div>
      </section>

      <section className="section-pad works-section">
        <div className="page-shell">
          <div className="section-heading-row works-heading">
            <div><p className="eyebrow">A calm place to start</p><h2>How DyspraCare<br /><em>works with you.</em></h2></div>
            <p className="section-intro">No labels or pressure. Just a little structure to help you make sense of what you are noticing.</p>
          </div>
          <div className="steps-grid">
            {screeningSteps.map((step, index) => (
              <article className="step-card" key={step.number}>
                <div className="step-top"><span>{step.number}</span>{index === 0 ? <MessageCircleHeart aria-hidden="true" /> : index === 1 ? <HandHeart aria-hidden="true" /> : <MoveUpRight aria-hidden="true" />}</div>
                <h3>{step.title}</h3><p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="privacy-line"><ShieldCheck aria-hidden="true" className="size-5" /><p><strong>Your observations are yours to share.</strong> The screening is a reflection tool, not a score of your child.</p><span>Thoughtfully designed</span></div>
        </div>
      </section>

      <section className="screening-band">
        <div className="page-shell screening-layout">
          <div className="screening-emblem" aria-hidden="true"><div><Sparkles className="size-8" /><span>At your pace</span></div><span className="emblem-orbit emblem-orbit-one" /><span className="emblem-orbit emblem-orbit-two" /></div>
          <div className="screening-copy"><p className="eyebrow eyebrow-light">A first look, not a final answer</p><h2>Wondering if it’s<br /><em>worth a closer look?</em></h2><p>A short, guided experience can help you organize the patterns you have noticed and prepare for a conversation with a professional.</p><ul><li><Check aria-hidden="true" /> No right or wrong answers</li><li><Check aria-hidden="true" /> Pause or stop whenever you need</li><li><Check aria-hidden="true" /> Not a medical assessment</li></ul><Button variant="secondary" asChild><Link href="/screening">See how screening works <ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div>
          <div className="screening-side-note"><Clock3 aria-hidden="true" className="size-5" /><span>Take it one step<br />at a time.</span></div>
        </div>
      </section>

      <section className="section-pad resources-section">
        <div className="page-shell">
          <div className="section-heading-row">
            <div><p className="eyebrow">Knowledge, without the overwhelm</p><h2>Useful things to<br /><em>read and return to.</em></h2></div>
            <Link href="/resources" className="text-link resources-all">Explore all resources <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="resource-grid">
            {resources.map((resource, index) => (
              <Link href="/resources" className={`resource-card resource-card-${index + 1}`} key={resource.title}>
                <div className="resource-card-top"><span>{resource.category}</span><span aria-hidden="true">0{index + 1}</span></div>
                <span className="resource-icon">{index === 0 ? <BookOpen aria-hidden="true" /> : index === 1 ? <Sparkles aria-hidden="true" /> : <MessageCircleHeart aria-hidden="true" />}</span>
                <h3>{resource.title}</h3><p>{resource.description}</p>
                <span className="resource-read">{resource.readTime}<ArrowUpRight aria-hidden="true" className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="page-shell faq-layout">
          <div><p className="eyebrow">Good questions are welcome</p><h2>Before you<br /><em>get started.</em></h2><p className="faq-intro">A few things families and educators often ask.</p><Link href="/resources" className="text-link">Browse the resource library <ArrowRight aria-hidden="true" className="size-4" /></Link></div>
          <Accordion type="single" collapsible className="faq-list">
            {faqs.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="closing-section">
        <div className="page-shell closing-inner">
          <span className="closing-mark"><Heart aria-hidden="true" className="size-5" /></span>
          <p className="eyebrow">A little more understanding can go a long way</p>
          <h2>Start with what<br /><em>you already notice.</em></h2>
          <p>Explore the screening together, at a pace that feels right for your family.</p>
          <Button asChild><Link href="/screening">Take the first step <ArrowRight aria-hidden="true" className="size-4" /></Link></Button>
          <span className="closing-disclaimer">Educational and preliminary only. Not a diagnosis or substitute for professional assessment.</span>
        </div>
      </section>
    </>
  );
}