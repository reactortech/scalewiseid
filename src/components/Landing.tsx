import { motion, useInView, useReducedMotion, animate as fmAnimate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { dict, clients, type Lang } from "@/lib/i18n";
import { SnakePreloader } from "./SnakePreloader";

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

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-gold shadow-[0_0_20px_rgba(245,185,12,0.35)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path d="M6 20 C 6 16, 18 16, 18 12 S 6 8, 6 4" stroke="#181716" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <span className="text-lg tracking-tight">
        <span className="font-extrabold text-white">Scale</span>
        <span className="font-normal text-white/90">wise.id</span>
      </span>
    </div>
  );
}

function Navbar({ lang, setLang, onCta }: { lang: Lang; setLang: (l: Lang) => void; onCta: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = dict[lang];
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 50);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { href: `#${IDS.services}`, label: t.nav.services },
    { href: `#${IDS.cases}`, label: t.nav.cases },
    { href: `#${IDS.how}`, label: t.nav.how },
    { href: `#${IDS.team}`, label: t.nav.team },
    { href: `#${IDS.contact}`, label: t.nav.contact },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="shrink-0"><LogoMark /></a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs">
            {(["id", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 font-semibold uppercase transition-colors ${
                  lang === l ? "bg-gold text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={onCta}
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(245,185,12,0.5)] md:inline-flex"
          >
            {t.nav.cta}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 md:hidden"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-white" />
              <span className="block h-0.5 w-4 bg-white" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-ink/95 backdrop-blur md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm text-white/80">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onCta(); }}
              className="mt-3 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink"
            >{t.nav.cta}</button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ lang, onCta, onCases }: { lang: Lang; onCta: () => void; onCases: () => void }) {
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
            onClick={onCta}
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

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{children}</p>;
}

function Problem({ lang }: { lang: Lang }) {
  const t = dict[lang].problem;
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
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
  return (
    <section id={IDS.cases} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
            {t.headline1} <GoldWord>{t.headline2}</GoldWord>
          </h2>
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
          <h2 className="mx-auto mt-4 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
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
          <h2 className="mx-auto mt-4 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
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
          <h2 className="mt-4 font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
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

function Contact({ lang }: { lang: Lang }) {
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

function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <footer className="border-t border-white/5 bg-ink py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <LogoMark />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body-muted">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white">{t.footer.nav}</p>
          <ul className="mt-4 space-y-2 text-sm text-body-muted">
            <li><a className="hover:text-gold" href={`#${IDS.services}`}>{t.nav.services}</a></li>
            <li><a className="hover:text-gold" href={`#${IDS.cases}`}>{t.nav.cases}</a></li>
            <li><a className="hover:text-gold" href={`#${IDS.how}`}>{t.nav.how}</a></li>
            <li><a className="hover:text-gold" href={`#${IDS.team}`}>{t.nav.team}</a></li>
            <li><a className="hover:text-gold" href={`#${IDS.contact}`}>{t.nav.contact}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white">{t.footer.contact}</p>
          <ul className="mt-4 space-y-2 text-sm text-body-muted">
            <li><a className="hover:text-gold" href="https://wa.me/62895411181899">WhatsApp +62 895-4111-81899</a></li>
            <li><a className="hover:text-gold" href="mailto:scalewise.id@gmail.com">scalewise.id@gmail.com</a></li>
            <li><a className="hover:text-gold" href="https://instagram.com/scalewise.id">@scalewise.id</a></li>
            <li><a className="hover:text-gold" href="https://www.scalewise.id">www.scalewise.id</a></li>
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white">{t.footer.office}</p>
          <p className="mt-2 text-sm text-body-muted">C Hub, Bulaksumur, Sleman, D.I Yogyakarta 55581</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 px-5 pt-6 text-xs text-body-muted md:px-8">
        © 2026 Scalewise.id. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingWA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.7);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <a
      href="https://wa.me/62895411181899?text=Halo%20Scalewise%2C%20saya%20mau%20klaim%20Free%20Growth%20Audit"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_0_30px_rgba(245,185,12,0.4)] transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" style={{ animationDuration: "3s" }} />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.88 0-3.17-1.24-6.15-3.43-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.85 9.85 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.87-9.87 2.64 0 5.11 1.03 6.98 2.9a9.79 9.79 0 0 1 2.9 6.98c0 5.44-4.43 9.9-9.87 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.22 5.1 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}

export default function Landing() {
  const [lang, setLang] = useState<Lang>("id");
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-ink font-sans text-white antialiased">
      <SnakePreloader />
      <Navbar lang={lang} setLang={setLang} onCta={() => scrollTo(IDS.contact)} />
      <main>
        <Hero lang={lang} onCta={() => scrollTo(IDS.contact)} onCases={() => scrollTo(IDS.cases)} />
        <StatsBar lang={lang} />
        <Problem lang={lang} />
        <Cases lang={lang} />
        <How lang={lang} />
        <Services lang={lang} />
        <Team lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWA />
    </div>
  );
}