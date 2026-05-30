// hooks.jsx — shared animation helpers
import { useState, useEffect, useRef } from 'react';

// Count-up number that animates when scrolled into view
export function CountUp({ end, suffix = "", dur = 1600 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, dur]);
  return <span ref={ref} className="mono-num">{val}{suffix}</span>;
}

// Reveal wrapper — self-contained scroll-reveal (own observer + state)
export function Reveal({ children, as = "div", d, className = "", style, ...rest }) {
  const El = as;
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 800) * 0.95 && rect.bottom > 0) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);
  return <El ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} data-d={d} style={style} {...rest}>{children}</El>;
}

// Self-contained animated skill bar — fills when scrolled into view
export function SkillBar({ level }) {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setW(level); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [level]);
  return <div ref={ref} className="bar-track"><div className="bar-fill" style={{ width: w + "%" }} /></div>;
}
