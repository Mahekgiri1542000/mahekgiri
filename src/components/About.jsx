import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal } from '../hooks.jsx';
import SecHead from './SecHead.jsx';

export default function About() {
  const A = PORTFOLIO.about;
  const D = PORTFOLIO.identity;
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SecHead eyebrow="About Me" title='Five years turning ideas into <span class="grad-text">fast, reliable websites.</span>' />
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, alignItems: "start" }}>
          <Reveal className="about-portrait">
            <div className="glass" style={{ padding: 10, borderRadius: "var(--r-lg)" }}>
              <div style={{ borderRadius: "var(--r)", overflow: "hidden", aspectRatio: "4/5", background: "var(--slate)", position: "relative" }}>
                <img src={D.photo} alt={D.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(11,17,32,0.7))" }} />
                <div style={{ position: "absolute", left: 16, right: 16, bottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 9, height: 9, borderRadius: 99, background: "#27c93f", boxShadow: "0 0 10px #27c93f" }} />
                  <span style={{ fontWeight: 700, fontSize: 13.5 }}>Available for freelance & contract</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, padding: "12px 6px 4px", flexWrap: "wrap" }}>
                {A.industries.slice(0, 4).map((t) => <span key={t} className="chip" style={{ fontSize: 12 }}>{t}</span>)}
              </div>
            </div>
          </Reveal>
          <div>
            {A.summary.map((p, i) => (
              <Reveal key={i} d={i + 1}><p style={{ fontSize: "clamp(16px,1.4vw,18.5px)", color: "var(--text-soft)", marginTop: i ? 18 : 0 }}>{p}</p></Reveal>
            ))}
            <div className="hl-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 32 }}>
              {A.highlights.map((h, i) => (
                <Reveal key={i} d={i + 1} className="glass card-hover" style={{ padding: 20, borderRadius: "var(--r)" }}>
                  <div className="icon-tile" style={{ width: 44, height: 44, marginBottom: 14 }}>
                    <Icon name={["code", "gauge", "rocket"][i]} size={22} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)" }}>{h.k}</div>
                  <div style={{ fontWeight: 800, fontSize: 16.5, margin: "6px 0 7px" }}>{h.t}</div>
                  <div style={{ fontSize: 13.5, color: "var(--text-dim)", lineHeight: 1.5 }}>{h.d}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
