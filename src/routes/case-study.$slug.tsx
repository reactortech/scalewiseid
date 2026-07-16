import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { dict, caseSlugs, type CaseSlug } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

export const Route = createFileRoute("/case-study/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Case Study — ${params.slug} | Scalewise.id` },
      { name: "description", content: "Studi kasus growth & programmatic ads Scalewise.id — angka nyata, strategi berbasis data." },
      { property: "og:title", content: `Case Study — ${params.slug} | Scalewise.id` },
    ],
  }),
  loader: ({ params }) => {
    if (!caseSlugs.includes(params.slug as CaseSlug)) throw notFound();
    return { slug: params.slug as CaseSlug };
  },
  component: CaseStudyPage,
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

function CaseStudyPage() {
  const { slug } = Route.useLoaderData();
  const { lang } = useLang();
  const navigate = useNavigate();
  const d = dict[lang];
  const item = d.cases.items.find((c) => c.slug === slug)!;
  const cd = d.caseDetail;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-body-muted transition-colors hover:text-gold"
          >
            ← {cd.back}
          </Link>
          <div className="mt-2 flex justify-center gap-2">
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">{item.platform}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-body-muted">{item.industry}</span>
          </div>
          <h1
            className="mx-auto mt-6 max-w-4xl font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            {item.title}
          </h1>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {item.metrics.map((m) => (
              <div key={m.k} className="rounded-xl border border-gold/30 bg-navy/40 p-4">
                <p className="text-[10px] uppercase tracking-wider text-body-muted">{m.k}</p>
                <p className="mt-1 font-extrabold text-gold" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}>{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Konteks Brand */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{cd.context}</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-body-muted md:text-lg">{item.context}</p>
          </Reveal>
        </div>
      </section>

      {/* Kondisi Awal */}
      <section className="bg-navy/15 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{cd.before}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-4 md:grid-cols-2">
            {[0, 1].map((i) => (
              <div key={i} className="grid aspect-video place-items-center rounded-2xl border border-white/10 bg-navy/40 p-6 text-center text-sm text-body-muted">
                {cd.beforePlaceholder}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Diagnosa & Strategi */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{cd.strategy}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <ol className="grid gap-4">
              {item.strategy.map((s, i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-navy/40 p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-sm font-bold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-relaxed text-body-muted md:text-lg">{s}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Eksekusi */}
      <section className="bg-navy/15 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{cd.execution}</SectionEyebrow>
            <p className="mt-6 text-sm text-body-muted">{cd.timelinePlaceholder}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <div className="relative border-l-2 border-gold/40 pl-6">
              {item.execution.map((e, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <span className="absolute -left-[33px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-gold bg-ink">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <p className="leading-relaxed text-body-muted md:text-lg">{e}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hasil */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionEyebrow>{cd.results}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-6 md:grid-cols-3">
            {item.metrics.map((m) => (
              <div key={m.k} className="rounded-2xl border border-gold/40 bg-navy/40 p-8 text-center">
                <p className="text-xs uppercase tracking-wider text-body-muted">{m.k}</p>
                <p className="mt-3 font-extrabold text-gold" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{m.v}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid aspect-video place-items-center rounded-2xl border border-white/10 bg-navy/40 p-6 text-center text-sm text-body-muted">
            {cd.afterPlaceholder}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-bold tracking-tight text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.15 }}>
              {cd.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-body-muted">{cd.ctaSub}</p>
            <button
              onClick={() => navigate({ to: "/audit" })}
              className="mt-8 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(245,185,12,0.55)]"
            >
              {cd.ctaBtn}
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}