import { Link, useNavigate } from "@tanstack/react-router";
import { useLang } from "@/lib/lang-context";
import { caseDashboards, dashboardCopy, pick } from "@/lib/case-dashboards";
import type { CaseSlug } from "@/lib/i18n";

type Props = {
  slug: CaseSlug;
  beforeImage?: string;
  afterImage?: string;
};

export function CaseStudyDashboard({ slug, beforeImage, afterImage }: Props) {
  const { lang } = useLang();
  const d = caseDashboards[slug];
  const navigate = useNavigate();
  const c = dashboardCopy;

  return (
    <div className="min-h-[100svh] bg-ink pt-24 pb-6 lg:h-[100svh] lg:pt-20 lg:pb-4 lg:flex lg:flex-col">
      <div className="mx-auto w-full max-w-[1400px] flex-1 px-5 md:px-8 lg:flex lg:flex-col lg:min-h-0">
        {/* Back link */}
        <Link
          to="/"
          hash="cases"
          className="mb-4 inline-flex items-center gap-2 text-sm text-body-muted transition-colors hover:text-gold"
        >
          {pick(c.back, lang)}
        </Link>

        {/* Header row */}
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:items-center">
          <div className="min-w-0">
            <span className="inline-block rounded-full border-[1.5px] border-gold px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-gold">
              {pick(d.niche, lang)}
            </span>
            <h1
              className="mt-3 font-bold tracking-tight text-white"
              style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)", lineHeight: 1.15 }}
            >
              {pick(d.title, lang)} <span className="text-white/40">/</span>
              <br />
              <span className="text-gold">{pick(d.titleAccent, lang)}</span>
            </h1>
          </div>
          <div className="shrink-0 rounded-full border border-white/10 bg-navy/60 px-4 py-2 text-xs font-semibold text-white">
            {d.platform}
          </div>
        </header>

        {/* Main area */}
        <div className="mt-5 grid gap-4 lg:mt-4 lg:grid-cols-[62fr_38fr] lg:flex-1 lg:min-h-0">
          {/* LEFT column */}
          <div className="flex flex-col gap-4 lg:min-h-0">
            {/* Before → After panels */}
            <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr] lg:flex-1 lg:min-h-0">
              <BeforeAfterPanel
                label={pick(c.before, lang)}
                image={beforeImage}
                placeholder={pick(c.placeholder, lang)}
              />
              <div className="hidden items-center justify-center lg:flex">
                <span
                  className="text-4xl font-black text-gold"
                  style={{ textShadow: "0 0 20px rgba(245,185,12,0.55)" }}
                >
                  →
                </span>
              </div>
              <BeforeAfterPanel
                label={pick(c.after, lang)}
                image={afterImage}
                placeholder={pick(c.placeholder, lang)}
              />
            </div>

            {/* Hero stats row */}
            <div
              className="grid gap-2 sm:gap-3"
              style={{ gridTemplateColumns: `repeat(${Math.min(d.heroStats.length, 5)}, minmax(0, 1fr))` }}
            >
              {d.heroStats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gold/30 bg-navy/40 px-3 py-2.5 text-center"
                >
                  <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-body-muted">
                    {pick(s.label, lang)}
                  </p>
                  <p
                    className="mt-1 font-extrabold text-gold leading-tight"
                    style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.35rem)" }}
                  >
                    {s.value}
                  </p>
                  {s.sub && (
                    <p className="mt-0.5 text-[9px] text-body-muted">{pick(s.sub, lang)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hero stats — mobile only (2-col grid, above images per spec) */}
          {/* handled above; on mobile the grid becomes 2 cols */}

          {/* RIGHT column */}
          <div className="flex flex-col gap-3 lg:min-h-0">
            <InfoCard title={pick(c.problem, lang)}>
              <ul className="space-y-2">
                {d.problem[lang].map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] leading-snug text-body-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title={pick(c.strategy, lang)}>
              <ul className="space-y-2">
                {d.strategy[lang].map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] leading-snug text-body-muted">
                    <span className="mt-0.5 shrink-0 text-gold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-white/10 bg-navy/30 px-5 py-3">
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-body-muted">
              {pick(c.period, lang)}
            </p>
            <p className="mt-0.5 truncate text-sm font-semibold text-white">
              {pick(d.period, lang)}
            </p>
          </div>
          <button
            onClick={() => navigate({ to: "/audit" })}
            className="shrink-0 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(245,185,12,0.55)] sm:text-sm"
          >
            {pick(c.cta, lang)}
          </button>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterPanel({
  label,
  image,
  placeholder,
}: {
  label: string;
  image?: string;
  placeholder: string;
}) {
  return (
    <div className="flex min-h-0 flex-col gap-2">
      <span className="inline-block self-start rounded-full border border-gold/40 bg-navy/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
        {label}
      </span>
      <div className="relative aspect-[16/10] w-full flex-1 overflow-hidden rounded-xl border border-white/10 bg-navy/40 lg:aspect-auto">
        {image ? (
          <img
            src={image}
            alt={label}
            className="absolute inset-0 h-full w-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-4 text-center text-xs text-body-muted">
            <div>
              <div className="mx-auto mb-2 h-8 w-8 rounded-lg border border-dashed border-white/20" />
              {placeholder}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-navy p-4 lg:flex-1 lg:min-h-0 lg:overflow-auto">
      <h3 className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
        {title}
      </h3>
      {children}
    </div>
  );
}