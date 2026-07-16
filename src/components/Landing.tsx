import { motion, useInView, useReducedMotion, animate as fmAnimate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { dict, clients, type Lang } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

const IDS = { services: "services", cases: "cases", how: "how", team: "team", contact: "contact" };

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

function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ to, suffix = "", prefix = "", full }: { to: number; suffix?: string; prefix?: string; full?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setVal(to); return; }
    const controls = fmAnimate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);
  if (full && val >= to) return <span ref={ref}>{full}</span>;
  return <span ref={ref}>{prefix}{Math.round(val)}{suffix}</span>;
}

function GoldWord({ children }: { children: ReactNode }) {
  return <span className="text-gold">{children}</span>;
}

function Hero({ lang, onAudit, onCases }: { lang: Lang; onAudit: () => void; onCases: () => void }) {
  const t = dict[lang].hero;
  const reduce = useReducedMotion();
  const words1 = t.line1.split(" ");
  const words2 = t.line2.split(" ");
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      {/* Gold radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(27,37,89,0.55),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold-tint md:text-sm"
        >
          {t.badge}
        </motion.div>

        <h1 className="mt-6 font-extrabold leading-[1.05] tracking-tight text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          <span className="block">
            {words1.map((w, i) => (
              <motion.span
                key={i}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </span>
          <span className="block text-gold">
            {words2.map((w, i) => (
              <motion.span
                key={i}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (words1.length + i) * 0.08, duration: 0.5, ease: "easeOut" }}
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body-muted md:text-lg"
        >
          {t.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={onAudit}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(245,185,12,0.55)]"
          >
            {t.cta1}
          </button>
          <button
            onClick={onCases}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-gold/60 hover:text-gold"
          >
            {t.cta2}
          </button>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-body-muted/70">{t.trusted}</p>
          <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-12 group-hover:[animation-play-state:paused]">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="shrink-0 text-lg font-semibold text-white/40 transition-colors hover:text-white">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function StatsBar({ lang }: { lang: Lang }) {
  const stats = dict[lang].stats;
  return (
    <section className="border-y border-white/5 bg-navy/20 py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {stats.map((s, i) => (
            <StaggerItem key={i} className="text-center">
              <div className="font-extrabold text-gold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                <CountUp to={s.v} prefix={"pre" in s ? (s as any).pre : ""} suffix={s.suf ?? ""} full={"full" in s ? (s as any).full : undefined} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-body-muted md:text-sm">{s.l}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Problem({ lang }: { lang: Lang }) {
  const t = dict[lang].problem;
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            {t.headline1} <GoldWord>{t.headline2}</GoldWord>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {[{ t: t.c1t, b: t.c1b, dim: true }, { t: t.c2t, b: t.c2b, dim: false }].map((c, i) => (
            <StaggerItem key={i}>
              <div className={`group h-full rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                c.dim ? "border-white/10 bg-white/[0.02]" : "border-gold/30 bg-navy/40"
              } hover:border-gold/60`}>
                <h3 className={`text-xl font-bold ${c.dim ? "text-body-muted" : "text-white"}`}>{c.t}</h3>
                <p className="mt-3 leading-relaxed text-body-muted">{c.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-lg font-semibold text-gold md:text-xl">{t.close}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Cases({ lang }: { lang: Lang }) {
  const t = dict[lang].cases;
  const navigate = useNavigate();
  return (
    <section id={IDS.cases} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2
            className="mx-auto mt-6 max-w-4xl font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            {t.headlineFull}
          </h2>
          <p
            className="mx-auto max-w-[640px] leading-relaxed"
            style={{ marginTop: 20, color: "#B9BDCB", fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            {t.subtitle}
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {t.items.map((c, i) => (
            <StaggerItem key={i}>
              <article className="group h-full rounded-2xl border border-white/10 bg-navy/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-navy-hover/60">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">{c.platform}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-body-muted">{c.industry}</span>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <p className="text-[10px] uppercase tracking-wider text-body-muted">{m.k}</p>
                      <p className="mt-1 font-extrabold text-gold" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}>{m.v}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 leading-relaxed text-body-muted">{c.body}</p>
                <button
                  onClick={() => navigate({ to: "/case-study/$slug", params: { slug: c.slug } })}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  {t.detailCta} <span aria-hidden>→</span>
                </button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function How({ lang }: { lang: Lang }) {
  const t = dict[lang].how;
  return (
    <section id={IDS.how} className="bg-navy/15 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            {t.headline1} <GoldWord>{t.headline2}</GoldWord>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-5">
          {t.steps.map((s, i) => (
            <StaggerItem key={i}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-navy/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-sm font-bold text-gold shadow-[0_0_20px_rgba(245,185,12,0.15)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">{s.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Services({ lang }: { lang: Lang }) {
  const t = dict[lang].services;
  return (
    <section id={IDS.services} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            {t.headline1} <GoldWord>{t.headline2}</GoldWord>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.items.map((s, i) => (
            <StaggerItem key={i}>
              <div className={`group relative h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                s.soon ? "border-white/10 bg-white/[0.02] opacity-70" : "border-white/10 bg-navy/40 hover:border-gold/50 hover:bg-navy-hover/60"
              }`}>
                {s.badge && (
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    s.soon ? "border border-white/15 text-body-muted" : "bg-gold text-ink"
                  }`}>{s.badge}</span>
                )}
                <h3 className="mt-4 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">{s.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Team({ lang }: { lang: Lang }) {
  const t = dict[lang].team;
  return (
    <section id={IDS.team} className="bg-navy/15 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-6 font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            {t.headline1} <GoldWord>{t.headline2}</GoldWord>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.members.map((m, i) => (
            <StaggerItem key={i}>
              <div className="group h-full rounded-2xl border border-white/10 bg-navy/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-gold/30 bg-navy shadow-[inset_0_0_30px_rgba(245,185,12,0.08)]">
                  <span className="text-2xl font-extrabold text-gold">SW</span>
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{m.r}</h3>
                <p className="mt-1 text-sm text-body-muted">{m.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Contact({ lang, onAudit }: { lang: Lang; onAudit: () => void }) {
  const t = dict[lang].contact;
  const [sent, setSent] = useState(false);
  return (
    <section id={IDS.contact} className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {t.headline1}
            <br />
            <GoldWord>{t.headline2}</GoldWord>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-muted">{t.sub}</p>
          <div className="mt-6">
            <button
              onClick={onAudit}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(245,185,12,0.55)]"
            >
              {dict[lang].nav.cta}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          {sent ? (
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center">
              <p className="text-lg font-semibold text-gold">{t.f.success}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-4 rounded-2xl border border-white/10 bg-navy/40 p-6 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input required placeholder={t.f.name + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                <input required type="email" placeholder={t.f.email + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                <input required placeholder={t.f.wa + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
                <input required placeholder={t.f.brand + "*"} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
              </div>
              <select defaultValue="" className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white focus:border-gold/60 focus:outline-none">
                <option value="" disabled>{t.f.platform}</option>
                {t.f.platformOpts.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <textarea rows={4} placeholder={t.f.challenge} className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-body-muted/70 focus:border-gold/60 focus:outline-none" />
              <button type="submit" className="mt-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(245,185,12,0.55)]">
                {t.f.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default function Landing() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Scroll to hash on load / hash change (used when arriving from other routes)
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => clearTimeout(t);
  }, [hash]);

  const goAudit = () => navigate({ to: "/audit" });
  const scrollCases = () =>
    document.getElementById(IDS.cases)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Hero lang={lang} onAudit={goAudit} onCases={scrollCases} />
      <StatsBar lang={lang} />
      <Problem lang={lang} />
      <Cases lang={lang} />
      <How lang={lang} />
      <Services lang={lang} />
      <Team lang={lang} />
      <Contact lang={lang} onAudit={goAudit} />
    </>
  );
}