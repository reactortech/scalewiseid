import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function SnakePreloader() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("scalewise_preloaded")) return;
    setShow(true);
    const t = setTimeout(() => {
      sessionStorage.setItem("scalewise_preloaded", "1");
      setShow(false);
    }, reduce ? 600 : 1600);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0, transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <svg viewBox="0 0 200 400" className="h-[70vh] w-auto" fill="none">
            <defs>
              <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {/* Gold stroke behind, slightly offset */}
            <motion.path
              d="M40 380 C 40 320, 160 320, 160 260 S 40 200, 40 140 S 160 80, 160 20"
              stroke="#F5B90C"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: reduce ? 1 : 1 }}
              transition={{ duration: reduce ? 0.3 : 1.2, ease: "easeOut" }}
              style={{ transform: "translate(4px, 4px)" }}
            />
            {/* White stroke on top */}
            <motion.path
              d="M40 380 C 40 320, 160 320, 160 260 S 40 200, 40 140 S 160 80, 160 20"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: reduce ? 0.3 : 1.2, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}