import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal } from '../hooks.jsx';
import SecHead from './SecHead.jsx';

export default function Services() {
  const S = PORTFOLIO.services;
  return (
    <section id="services" className="section">
      <div className="wrap">
        <SecHead center eyebrow="Services" title='Everything you need to <span class="grad-text">launch & grow.</span>'
          sub="From a single landing page to a full headless platform — end-to-end WordPress and front-end development built around your goals." />
        <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {S.map((s, i) => (
            <Reveal key={i} d={(i % 3) + 1} className="glass card-hover svc-card sheen glow-border" style={{ padding: 26, borderRadius: "var(--r-lg)", position: "relative", overflow: "hidden" }}>
              <div className="svc-glow" style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, background: "var(--grad-bv)", filter: "blur(50px)", opacity: 0, transition: "opacity .4s" }} />
              <div className="icon-tile"><Icon name={s.icon} /></div>
              <h3 style={{ fontSize: 18.5, fontWeight: 800, margin: "18px 0 9px", letterSpacing: "-0.01em" }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
