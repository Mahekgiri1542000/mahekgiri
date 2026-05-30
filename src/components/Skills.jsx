import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal, SkillBar } from '../hooks.jsx';
import SecHead from './SecHead.jsx';

export default function Skills() {
  const { skills, tools } = PORTFOLIO;
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SecHead center eyebrow="Skills & Tools" title='The stack I <span class="grad-text">build with.</span>'
          sub="A modern toolkit spanning WordPress, PHP and the JavaScript ecosystem — chosen for performance, maintainability and clean developer experience." />
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {skills.map((s, i) => (
              <Reveal key={s.name} d={(i % 4) + 1} className="skill-row">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 9, alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{s.name}</span>
                  <span className="mono-num" style={{ fontSize: 13, color: "var(--teal)" }}>{s.level}%</span>
                </div>
                <SkillBar level={s.level} />
              </Reveal>
            ))}
          </div>
          <Reveal d="2">
            <div className="glass" style={{ padding: 30, borderRadius: "var(--r-lg)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 18 }}>Tools & technologies</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 11 }}>
                {tools.map((t) => (
                  <span key={t} className="tool-chip" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "11px 16px", borderRadius: 14, background: "rgba(148,163,184,0.07)", border: "1px solid var(--line)", fontWeight: 700, fontSize: 14.5, transition: "transform .25s, border-color .25s, background .25s" }}>
                    <span style={{ width: 7, height: 7, borderRadius: 99, background: "var(--grad-bv)" }} />{t}
                  </span>
                ))}
              </div>
              <div className="gline" style={{ margin: "26px 0" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div className="icon-tile" style={{ background: "var(--grad-bv)", color: "#fff" }}><Icon name="sparkle" size={22} /></div>
                <div><div style={{ fontWeight: 800, fontSize: 16 }}>Always learning</div><div style={{ fontSize: 13.5, color: "var(--text-dim)" }}>Currently exploring headless WP & Next.js</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
