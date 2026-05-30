import { useState } from 'react';
import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal } from '../hooks.jsx';
import SecHead from './SecHead.jsx';

export default function FAQ() {
  const F = PORTFOLIO.faq;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <SecHead center eyebrow="FAQ" title='Questions, <span class="grad-text">answered.</span>'
          sub="Everything clients and agencies usually ask before we start working together." />
        <div className="faq-list" style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
          {F.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} d={(i % 3) + 1} className="glass" style={{ borderRadius: "var(--r)", overflow: "hidden", borderColor: isOpen ? "var(--line-strong)" : "var(--glass-border)" }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: "var(--text)", cursor: "pointer", padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, font: "inherit" }}>
                  <span style={{ fontWeight: 700, fontSize: "clamp(15.5px,1.5vw,17.5px)" }}>{f.q}</span>
                  <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 99, background: isOpen ? "var(--grad-bv)" : "rgba(148,163,184,0.1)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .3s, background .3s", transform: isOpen ? "rotate(45deg)" : "none" }}>
                    <Icon name="plus" size={18} />
                  </span>
                </button>
                <div style={{ maxHeight: isOpen ? 240 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.2,.7,.3,1)" }}>
                  <p style={{ padding: "0 24px 24px", margin: 0, color: "var(--text-soft)", fontSize: 15, lineHeight: 1.65 }}>{f.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
