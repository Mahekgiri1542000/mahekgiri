import { useState, useEffect } from 'react';
import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal } from '../hooks.jsx';

function ProjectCard({ p, style, i, onCase }) {
  const overlay = style === "overlay";
  const VisitBtn = (cls, extra) => (
    <a className={cls} href={p.url} target="_blank" rel="noreferrer" style={extra}>Visit<Icon name="arrowUpRight" size={15} /></a>
  );
  if (overlay) {
    return (
      <Reveal d={(i % 2) + 1} className="card-hover proj-overlay" style={{ position: "relative", borderRadius: "var(--r-lg)", overflow: "hidden", minHeight: 360, border: "1px solid var(--glass-border)", boxShadow: "var(--shadow)" }}>
        <div style={{ position: "absolute", inset: 0, background: p.hue }} />
        <div className="proj-pattern" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.5 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,17,32,0.1) 0%, rgba(11,17,32,0.55) 55%, rgba(11,17,32,0.94) 100%)" }} />
        <div style={{ position: "absolute", top: 26, left: 26, right: 26, height: 150, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", padding: 12 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>{["#ff5f56", "#ffbd2e", "#27c93f"].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: 99, background: c }} />)}<span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{p.client}</span></div>
          <div style={{ height: 9, width: "70%", background: "rgba(255,255,255,0.35)", borderRadius: 4, marginBottom: 9 }} />
          <div style={{ height: 9, width: "92%", background: "rgba(255,255,255,0.2)", borderRadius: 4, marginBottom: 9 }} />
          <div style={{ height: 9, width: "55%", background: "rgba(255,255,255,0.2)", borderRadius: 4 }} />
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span className="chip" style={{ background: "rgba(255,255,255,0.14)", borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>{p.tag}</span>
            <span className="chip chip--mono" style={{ background: "rgba(20,184,166,0.2)", borderColor: "rgba(20,184,166,0.4)", color: "#99f6e4" }}>{p.metric}</span>
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>{p.title}</h3>
          <p className="proj-desc" style={{ fontSize: 14, color: "var(--text-soft)", margin: "0 0 16px", maxWidth: "42ch" }}>{p.d}</p>
          <div style={{ display: "flex", gap: 10 }}>
            {VisitBtn("btn btn-primary btn-sm")}
            <button className="btn btn-ghost btn-sm" onClick={() => onCase(p)} style={{ background: "rgba(255,255,255,0.1)" }}>Case Study</button>
          </div>
        </div>
      </Reveal>
    );
  }
  return (
    <Reveal d={(i % 2) + 1} className="glass card-hover" style={{ borderRadius: "var(--r-lg)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: 200, background: p.hue, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", inset: "26px 26px auto 26px", borderRadius: 10, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", padding: 12 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 10, alignItems: "center" }}>{["#ff5f56", "#ffbd2e", "#27c93f"].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: 99, background: c }} />)}<span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "rgba(255,255,255,0.7)" }}>{p.client}</span></div>
          <div style={{ height: 8, width: "65%", background: "rgba(255,255,255,0.35)", borderRadius: 4, marginBottom: 7 }} />
          <div style={{ height: 8, width: "88%", background: "rgba(255,255,255,0.2)", borderRadius: 4 }} />
        </div>
        <span className="chip chip--mono" style={{ position: "absolute", top: 16, right: 16, background: "rgba(11,17,32,0.5)", borderColor: "rgba(255,255,255,0.2)", color: "#99f6e4" }}>{p.metric}</span>
      </div>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <h3 style={{ fontSize: 21, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>{p.title}</h3>
          <span className="chip" style={{ fontSize: 12 }}>{p.tag}</span>
        </div>
        <p style={{ fontSize: 14.5, color: "var(--text-dim)", margin: "10px 0 16px", lineHeight: 1.6 }}>{p.d}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
          {p.tech.map((t) => <span key={t} className="chip chip--mono">{t}</span>)}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
          {VisitBtn("btn btn-primary btn-sm", { flex: 1 })}
          <button className="btn btn-ghost btn-sm" onClick={() => onCase(p)} style={{ flex: 1 }}>Case Study</button>
        </div>
      </div>
    </Reveal>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  );
}

function CaseModal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!p) return null;
  const s = p.study;
  const list = (items) => (
    <ul style={{ margin: "0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
      {items.map((t) => (
        <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.55 }}>
          <Icon name="check" size={16} style={{ color: "var(--teal)", flexShrink: 0, marginTop: 3 }} />{t}
        </li>
      ))}
    </ul>
  );
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(5,9,18,0.72)", backdropFilter: "blur(8px)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "5vh 20px", overflowY: "auto", animation: "fadeq .3s ease" }}>
      <div onClick={(e) => e.stopPropagation()} className="glass" style={{ width: "min(820px, 100%)", borderRadius: "var(--r-xl)", overflow: "hidden", background: "var(--glass-bg-strong)", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ position: "relative", padding: "32px 32px 26px", background: p.hue }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,17,32,0.15), rgba(11,17,32,0.55))" }} />
          <div style={{ position: "relative" }}>
            <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: -8, right: -8, width: 40, height: 40, borderRadius: 99, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(11,17,32,0.4)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={20} /></button>
            <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              <span className="chip" style={{ background: "rgba(255,255,255,0.16)", borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>{p.tag}</span>
              <span className="chip chip--mono" style={{ background: "rgba(20,184,166,0.25)", borderColor: "rgba(20,184,166,0.45)", color: "#ccfbf1" }}>{p.metric}</span>
            </div>
            <h3 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>{p.title}</h3>
            <a href={p.url} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 13.5, color: "#fff", opacity: 0.92 }}>{p.client}<Icon name="arrowUpRight" size={15} /></a>
          </div>
        </div>
        <div style={{ padding: "30px 32px 34px", display: "flex", flexDirection: "column", gap: 26 }}>
          <Block title="Context"><p style={{ margin: 0, fontSize: 15.5, color: "var(--text-soft)", lineHeight: 1.65 }}>{s.context}</p></Block>
          <Block title="Challenge">{list(s.challenge)}</Block>
          <Block title="Solution">
            <p style={{ margin: "0 0 14px", fontSize: 15.5, color: "var(--text-soft)", lineHeight: 1.65 }}>{s.solution}</p>
            {list(s.points)}
          </Block>
          <Block title="Outcome">{list(s.outcome)}</Block>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.tech.map((t) => <span key={t} className="chip chip--mono">{t}</span>)}
          </div>
          <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>Visit live site<Icon name="arrowUpRight" size={17} /></a>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ cardStyle = "classic" }) {
  const P = PORTFOLIO.projects;
  const [active, setActive] = useState(null);
  const scrollContact = (e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <div className="sec-head" style={{ margin: 0 }}>
            <Reveal><span className="eyebrow"><span className="dot" />Featured Work</span></Reveal>
            <Reveal d="1"><h2 className="sec-title">Case studies that <span className="grad-text">deliver results.</span></h2></Reveal>
          </div>
          <Reveal d="2"><a href="#contact" onClick={scrollContact} className="btn btn-ghost">Start a project<Icon name="arrow" size={16} /></a></Reveal>
        </div>
        <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
          {P.map((p, i) => <ProjectCard key={i} p={p} i={i} style={cardStyle} onCase={setActive} />)}
        </div>
      </div>
      <CaseModal p={active} onClose={() => setActive(null)} />
    </section>
  );
}
