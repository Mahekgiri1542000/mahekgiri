import { useState, useEffect } from 'react';
import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { NAV_LINKS } from './nav-links.js';

export default function Navbar() {
  const D = PORTFOLIO.identity;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => (e) => { e.preventDefault(); setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all .4s" }}>
      <div style={{
        margin: scrolled ? "12px auto" : "20px auto", width: scrolled ? "min(1120px, 94vw)" : "min(1200px, 94vw)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: scrolled ? "11px 14px 11px 22px" : "15px 16px 15px 24px",
        borderRadius: 99,
        background: scrolled ? "var(--glass-bg-strong)" : "rgba(15,23,42,0.35)",
        border: "1px solid", borderColor: scrolled ? "var(--glass-border)" : "transparent",
        backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
        boxShadow: scrolled ? "var(--shadow)" : "none", transition: "all .4s cubic-bezier(.2,.7,.3,1)",
      }}>
        <a href="#top" onClick={go("top")} style={{ display: "flex", alignItems: "center", gap: 11, fontWeight: 800, letterSpacing: "-0.02em" }}>
          <span style={{ width: 38, height: 38, borderRadius: 11, background: "var(--grad-bv)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, boxShadow: "var(--glow-blue)" }}>{D.initials}</span>
          <span style={{ fontSize: 17 }}>{D.name}<span style={{ color: "var(--teal)" }}>.</span></span>
        </a>

        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className="nav-link"
               style={{ fontSize: 14.5, fontWeight: 600, color: "var(--text-soft)", padding: "9px 14px", borderRadius: 99, transition: "color .2s, background .2s" }}>{label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#contact" onClick={go("contact")} className="btn btn-primary btn-sm nav-cta">Hire Me<Icon name="arrow" size={16} /></a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}
            style={{ display: "none", width: 42, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center", background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--text)", cursor: "pointer" }}>
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div style={{
        position: "absolute", top: "100%", left: "3vw", right: "3vw",
        display: open ? "flex" : "none", flexDirection: "column", gap: 4,
        padding: 14, marginTop: -2, borderRadius: 22,
        background: "var(--glass-bg-strong)", border: "1px solid var(--glass-border)", backdropFilter: "blur(18px)", boxShadow: "var(--shadow-lg)",
      }}>
        {NAV_LINKS.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={go(id)} style={{ padding: "13px 16px", borderRadius: 12, fontWeight: 600, color: "var(--text-soft)" }}>{label}</a>
        ))}
        <a href="#contact" onClick={go("contact")} className="btn btn-primary" style={{ marginTop: 6 }}>Hire Me</a>
      </div>
    </header>
  );
}
