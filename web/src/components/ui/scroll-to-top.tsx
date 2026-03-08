"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Snake S-curves winding around the staff within the star
const SNAKE = "M 24,12 C 29,15.5 19,19 24,22.5 C 29,26 19,29.5 24,33";
const DASH_PERIOD = 8; // segment (4) + gap (4)

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 drop-shadow-lg"
          aria-label="Nach oben scrollen"
        >
          <svg viewBox="0 0 48 48" width="54" height="54" fill="none" aria-hidden>
            {/* Star of Life — 3 overlapping rectangles at 0°, 60°, 120° */}
            <g style={{ fill: "var(--brand)" }}>
              <rect x="17" y="2"  width="14" height="44" rx="2.5" />
              <rect x="17" y="2"  width="14" height="44" rx="2.5" transform="rotate(60  24 24)" />
              <rect x="17" y="2"  width="14" height="44" rx="2.5" transform="rotate(120 24 24)" />
            </g>

            {/* Staff — Rod of Asclepius */}
            <line
              x1="24" y1="10" x2="24" y2="38"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Snake — marching dashes winding upward */}
            <motion.path
              d={SNAKE}
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, DASH_PERIOD] }}
              transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
