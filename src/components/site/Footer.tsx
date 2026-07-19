import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { dict } from "@/lib/i18n";
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

export function Footer() {
  const { lang } = useLang();
  const t = dict[lang];
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const goSection = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate({ to: "/", hash: id });
    }
  };
  return (
    <footer className="border-t border-white/5 bg-ink py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Link to="/"><LogoMark /></Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body-muted">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white">{t.footer.nav}</p>
          <ul className="mt-4 space-y-2 text-sm text-body-muted">
            {[
              { id: "services", label: t.nav.services },
              { id: "cases", label: t.nav.cases },
              { id: "how", label: t.nav.how },
              { id: "contact", label: t.nav.contact },
            ].map((l) => (
              <li key={l.id}>
                <button onClick={() => goSection(l.id)} className="hover:text-gold">{l.label}</button>
              </li>
            ))}
            <li><Link to="/audit" className="hover:text-gold">{t.nav.cta}</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white">{t.footer.contact}</p>
          <ul className="mt-4 space-y-2 text-sm text-body-muted">
            <li><a className="hover:text-gold" href="https://wa.me/6285190945612">WhatsApp +62 851-9094-5612</a></li>
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