import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal } from '../hooks.jsx';

export default function Resume() {
  const E = PORTFOLIO.experience;
  const D = PORTFOLIO.identity;
  return (
    <section id="resume" className="section">
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <div className="sec-head" style={{ margin: 0 }}>
            <Reveal><span className="eyebrow"><span className="dot" />Experience</span></Reveal>
            <Reveal d="1"><h2 className="sec-title">Career <span className="grad-text">timeline.</span></h2></Reveal>
          </div>
          <Reveal d="2"><a href={D.resume} download className="btn btn-primary"><Icon name="download" size={17} />Download Resume</a></Reveal>
        </div>
        <div className="exp-list" style={{ position: "relative" }}>
          <div className="exp-line" style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: "linear-gradient(var(--blue), var(--violet), var(--teal))" }} />
          {E.map((e, i) => (
            <Reveal key={i} d={(i % 3) + 1} className="exp-item" style={{ position: "relative", paddingLeft: 44, paddingBottom: i === E.length - 1 ? 0 : 40 }}>
              <span style={{ position: "absolute", left: 0, top: 6, width: 16, height: 16, borderRadius: 99, background: "var(--navy)", border: "3px solid var(--blue)", boxShadow: "0 0 14px rgba(59,130,246,0.7)" }} />
              <div className="glass" style={{ padding: 26, borderRadius: "var(--r-lg)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{e.role}</h3>
                  <span className="chip chip--mono">{e.period}</span>
                </div>
                <div style={{ color: "var(--teal)", fontWeight: 700, fontSize: 14.5, marginTop: 6 }}>{e.org}</div>
                <p style={{ color: "var(--text-soft)", fontSize: 14.5, margin: "12px 0 14px", lineHeight: 1.6 }}>{e.d}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {e.points.map((pt) => (
                    <span key={pt} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--text-soft)" }}>
                      <Icon name="check" size={15} style={{ color: "var(--teal)" }} />{pt}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
