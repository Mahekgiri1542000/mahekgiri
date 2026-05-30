import { useState, useEffect, useRef } from 'react';
import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal } from '../hooks.jsx';
import SecHead from './SecHead.jsx';

export default function Testimonials() {
  const T = PORTFOLIO.testimonials;
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);
  const start = () => { stop(); timer.current = setInterval(() => setIdx((i) => (i + 1) % T.length), 5500); };
  const stop = () => timer.current && clearInterval(timer.current);
  useEffect(() => { start(); return stop; }, []);
  const go = (i) => { setIdx((i + T.length) % T.length); start(); };

  return (
    <section className="section" style={{ background: "linear-gradient(180deg, transparent, rgba(30,41,59,0.4), transparent)" }}>
      <div className="wrap">
        <SecHead center eyebrow="Testimonials" title='Trusted by founders <span class="grad-text">& agencies.</span>' />
        <Reveal style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
          <div onMouseEnter={stop} onMouseLeave={start} className="glass" style={{ padding: "clamp(28px, 5vw, 52px)", borderRadius: "var(--r-xl)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, left: -10, color: "rgba(139,92,246,0.18)" }}><Icon name="quote" size={130} /></div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 22 }}>
                {Array.from({ length: T[idx].rating }).map((_, i) => <Icon key={i} name="star" size={22} style={{ color: "#fbbf24", fill: "#fbbf24" }} />)}
              </div>
              <p key={idx} style={{ fontSize: "clamp(19px, 2.4vw, 27px)", fontWeight: 600, lineHeight: 1.45, letterSpacing: "-0.01em", margin: 0, animation: "fadeq .5s ease" }}>"{T[idx].quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 15, marginTop: 30 }}>
                <div style={{ width: 52, height: 52, borderRadius: 99, background: "var(--grad-bv)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, flexShrink: 0 }}>{T[idx].name.split(" ").map(w => w[0]).join("")}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 16.5 }}>{T[idx].name}</div>
                  <div style={{ color: "var(--text-dim)", fontSize: 14 }}>{T[idx].role} · {T[idx].company}</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginTop: 26 }}>
            <button onClick={() => go(idx - 1)} aria-label="Previous" className="t-nav" style={{ width: 44, height: 44, borderRadius: 99, background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--text)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} /></button>
            <div style={{ display: "flex", gap: 9 }}>
              {T.map((_, i) => (
                <button key={i} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} style={{ width: i === idx ? 28 : 9, height: 9, borderRadius: 99, border: "none", cursor: "pointer", background: i === idx ? "var(--grad-bv)" : "rgba(148,163,184,0.3)", transition: "all .3s" }} />
              ))}
            </div>
            <button onClick={() => go(idx + 1)} aria-label="Next" className="t-nav" style={{ width: 44, height: 44, borderRadius: 99, background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--text)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="arrow" size={18} /></button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
