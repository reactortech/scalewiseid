import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { dict } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free Growth Audit — Scalewise.id" },
      { name: "description", content: "Klaim Free Growth Audit dari Scalewise: kami bedah funnel, ads, dan peluang scaling brand kamu — tanpa komitmen." },
      { property: "og:title", content: "Free Growth Audit — Scalewise.id" },
      { property: "og:description", content: "Audit gratis 7 poin untuk brand FMCG & consumer di Indonesia." },
    ],
  }),
  component: AuditPage,
});

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AuditPage() {
  const { lang } = useLang();
  const d = dict[lang];
  const t = d.audit;
  const f = d.contact.f;
  const [sent, setSent] = useState(false);

  const scrollForm = () => document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h1
            className="mx-auto mt-6 max-w-3xl font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            {t.title1} <span className="text-gold">{t.title2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-muted md:text-lg">{t.sub}</p>
          <div className="mt-8">
            <button
              onClick={scrollForm}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(245,185,12,0.55)]"
            >
              {t.ctaScroll}
            </button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{t.whatEyebrow}</SectionEyebrow>
            <h2 className="mx-auto mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
              {t.whatTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.benefits.map((b, i) => (
              <div key={i} className="group h-full rounded-2xl border border-white/10 bg-navy/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/10 text-sm font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">{b.b}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-navy/15 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{t.howEyebrow}</SectionEyebrow>
            <h2 className="mx-auto mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
              {t.howTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid gap-6 md:grid-cols-3">
            {t.howSteps.map((s, i) => (
              <div key={i} className="h-full rounded-2xl border border-white/10 bg-navy/40 p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-gold/10 text-base font-bold text-gold">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">{s.b}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{t.forEyebrow}</SectionEyebrow>
            <h2 className="mx-auto mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
              {t.forTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-4">
            {t.forWhom.map((w, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-navy/40 p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-ink">✓</span>
                <p className="text-body-muted md:text-lg">{w}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section id="audit-form" className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{t.formEyebrow}</SectionEyebrow>
            <h2 className="mx-auto mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
              {t.formTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            {sent ? (
              <div className="rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center">
                <p className="text-lg font-semibold text-gold">{f.success}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid gap-4 rounded-2xl border border-white/10 bg-navy/40 p-6 md:p-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input required placeholder={f.name + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                  <input required type="email" placeholder={f.email + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                  <input required placeholder={f.wa + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                  <input required placeholder={f.brand + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                </div>
                <select defaultValue="" className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white focus:border-gold/60 focus:outline-none">
                  <option value="" disabled>{f.platform}</option>
                  {f.platformOpts.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <textarea rows={4} placeholder={f.challenge} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                <button type="submit" className="mt-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(245,185,12,0.55)]">
                  {f.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}