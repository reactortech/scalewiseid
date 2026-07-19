import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { dict, type Lang } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";

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

export function Navbar() {
  const { lang, setLang } = useLang();
  const t = dict[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 50);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { id: "services", label: t.nav.services },
    { id: "cases", label: t.nav.cases },
    { id: "how", label: t.nav.how },
    { id: "contact", label: t.nav.contact },
  ];

  const goSection = (id: string) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate({ to: "/", hash: id });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="shrink-0"><LogoMark /></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button key={l.id} onClick={() => goSection(l.id)} className="text-sm text-white/80 transition-colors hover:text-gold">
              {l.label}
            </button>
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
          <Link
            to="/audit"
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(245,185,12,0.5)] md:inline-flex"
          >
            {t.nav.cta}
          </Link>
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
              <button key={l.id} onClick={() => goSection(l.id)} className="py-2 text-left text-sm text-white/80">
                {l.label}
              </button>
            ))}
            <Link
              to="/audit"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold text-ink"
            >{t.nav.cta}</Link>
          </div>
        </div>
      )}
    </header>
  );
}