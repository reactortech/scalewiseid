import { useEffect, useState } from "react";

export function FloatingWA() {
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
      href="https://wa.me/6285190945612?text=Halo%20Scalewise%2C%20saya%20mau%20klaim%20Free%20Growth%20Audit"
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