import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal } from '../hooks.jsx';
import SecHead from './SecHead.jsx';

export default function Process() {
  const steps = PORTFOLIO.process;
  const icons = ["sparkle", "layers", "code", "shield", "rocket", "wrench"];
  return (
    <section id="process" className="section">
      <div className="wrap">
        <SecHead center eyebrow="Work Process" title='A clear path from <span class="grad-text">idea to launch.</span>'
          sub="A proven six-step workflow that keeps projects on time, transparent and stress-free — you always know exactly what's happening." />
        <div className="proc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, position: "relative" }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} d={(i % 3) + 1} className="glass card-hover sheen glow-border" style={{ padding: 28, borderRadius: "var(--r-lg)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 14, right: 18, fontSize: 64, fontWeight: 800, lineHeight: 1, color: "rgba(148,163,184,0.07)", fontFamily: "var(--font-mono)" }}>{s.n}</div>
              <div className="icon-tile" style={{ background: "var(--grad-bv)", color: "#fff" }}>
                <Icon name={icons[i]} size={22} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, margin: "18px 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
