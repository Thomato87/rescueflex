"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Snappy spring — responsive but not instant
const SPRING = { stiffness: 500, damping: 30, mass: 0.4 };

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  // Crosshair follows with light spring; dot is exact
  const sx = useSpring(mx, SPRING);
  const sy = useSpring(my, SPRING);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest("a, button, [role='button'], label, input, textarea, select, [tabindex]")
      );
    };

    document.documentElement.addEventListener("mouseleave", () => setVisible(false));
    document.documentElement.addEventListener("mouseenter", () => setVisible(true));
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mx, my]);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* Precise center dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[3px] w-[3px] rounded-full"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          background: "var(--brand)",
        }}
      />

      {/* Medical crosshair — follows with spring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 0.65 : 1, opacity: hovering ? 0.7 : 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ color: "var(--brand)" }}
        >
          <circle cx="16" cy="16" r="7.5" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      </motion.div>
    </>
  );
}
