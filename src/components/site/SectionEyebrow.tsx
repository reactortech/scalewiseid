import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <span className="inline-block rounded-full border-[1.5px] border-gold px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.15em] text-gold">
        {children}
      </span>
    </div>
  );
}