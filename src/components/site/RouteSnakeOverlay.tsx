import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function RouteSnakeOverlay() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [show, setShow] = useState(false);
  const prev = useRef<string | null>(null);

  useEffect(() => {
    if (prev.current === null) {
      prev.current = pathname;
      return;
    }
    if (prev.current === pathname) return;
    prev.current = pathname;
    setShow(true);
    const t = setTimeout(() => setShow(false), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-ink"
        >
          <svg viewBox="0 0 200 400" className="h-[45vh] w-auto" fill="none">
            <motion.path
              d="M40 380 C 40 320, 160 320, 160 260 S 40 200, 40 140 S 160 80, 160 20"
              stroke="#F5B90C" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ transform: "translate(4px,4px)" }}
            />
            <motion.path
              d="M40 380 C 40 320, 160 320, 160 260 S 40 200, 40 140 S 160 80, 160 20"
              stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}