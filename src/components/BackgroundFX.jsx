import { useEffect, useRef } from 'react';

// Background graphics + motion: scroll progress, mouse spotlight,
// drifting aurora + floating decorative shapes.
export default function BackgroundFX() {
  const spot = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? h.scrollTop / max : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let mx = window.innerWidth / 2, my = window.innerHeight * 0.3, raf = null;
    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (raf || reduce) return;
      raf = requestAnimationFrame(() => {
        if (spot.current) spot.current.style.transform = `translate(${mx}px, ${my}px)`;
        raf = null;
      });
    };
    if (!reduce) window.addEventListener("pointermove", move, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <>
      <div ref={bar} className="scroll-progress" />
      <div ref={spot} className="spotlight" />
      <div className="aurora-teal" />
      <div className="fx-shape fx-ring" style={{ width: 220, height: 220, top: "16%", left: "6%", animation: "spin-slow 40s linear infinite, floaty 11s ease-in-out infinite" }} />
      <div className="fx-shape fx-ring" style={{ width: 120, height: 120, top: "62%", right: "8%", animation: "spin-slow 28s linear infinite reverse, floaty2 9s ease-in-out infinite" }} />
      <div className="fx-shape fx-dot" style={{ width: 10, height: 10, top: "28%", right: "14%", animation: "floaty 7s ease-in-out infinite" }} />
      <div className="fx-shape fx-dot" style={{ width: 7, height: 7, top: "72%", left: "12%", background: "var(--violet)", boxShadow: "0 0 12px var(--violet)", animation: "floaty2 8s ease-in-out infinite" }} />
      <div className="fx-shape fx-dot" style={{ width: 6, height: 6, top: "44%", left: "48%", background: "var(--blue)", boxShadow: "0 0 12px var(--blue)", animation: "floaty 9s ease-in-out infinite" }} />
    </>
  );
}
