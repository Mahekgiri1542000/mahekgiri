import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { NAV_LINKS } from './nav-links.js';

export default function Footer() {
  const D = PORTFOLIO.identity;
  const go = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const socials = [["github", D.github], ["linkedin", D.linkedin], ["whatsapp", `https://wa.me/${D.whatsappIntl}`], ["mail", `mailto:${D.email}`]];
  return (
    <footer style={{ borderTop: "1px solid var(--line)", paddingTop: 64, paddingBottom: 40, marginTop: 40 }}>
      <div className="wrap">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40, paddingBottom: 48 }}>
          <div>
            <a href="#top" onClick={go("top")} style={{ display: "flex", alignItems: "center", gap: 11, fontWeight: 800, marginBottom: 16 }}>
              <span style={{ width: 38, height: 38, borderRadius: 11, background: "var(--grad-bv)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{D.initials}</span>
              <span style={{ fontSize: 18 }}>{D.name}<span style={{ color: "var(--teal)" }}>.</span></span>
            </a>
            <p style={{ color: "var(--text-dim)", fontSize: 14.5, maxWidth: "34ch", lineHeight: 1.6 }}>WordPress & React developer building fast, reliable, conversion-focused websites for clients and agencies worldwide.</p>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 16 }}>Quick links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {NAV_LINKS.map(([l, id]) => <a key={id} href={`#${id}`} onClick={go(id)} className="foot-link" style={{ color: "var(--text-soft)", fontSize: 14.5 }}>{l}</a>)}
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 16 }}>Get in touch</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 20 }}>
              <a href={`mailto:${D.email}`} className="foot-link" style={{ color: "var(--text-soft)", fontSize: 14.5, wordBreak: "break-all" }}>{D.email}</a>
              <a href={`https://wa.me/${D.whatsappIntl}`} className="foot-link" style={{ color: "var(--text-soft)", fontSize: 14.5 }}>+{D.whatsapp}</a>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(([ic, href]) => (
                <a key={ic} href={href} target="_blank" rel="noreferrer" aria-label={ic} className="foot-social" style={{ width: 42, height: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(148,163,184,0.07)", border: "1px solid var(--line)", color: "var(--text-soft)", transition: "all .25s" }}><Icon name={ic} size={20} /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="gline" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center", paddingTop: 28, color: "var(--text-dim)", fontSize: 13.5 }}>
          <span>© {new Date().getFullYear()} {D.name}. All rights reserved.</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>Built with <Icon name="code" size={15} style={{ color: "var(--teal)" }} /> & WordPress expertise</span>
        </div>
      </div>
    </footer>
  );
}
