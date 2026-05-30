import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';
import { Reveal, CountUp } from '../hooks.jsx';

function HeroVisual({ photo, name }) {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 460 }}>
      <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: "conic-gradient(from 0deg, var(--blue), var(--violet), var(--teal), var(--blue))", filter: "blur(2px)", opacity: 0.85, animation: "spin-slow 18s linear infinite", maskImage: "radial-gradient(circle, transparent 60%, #000 61%, #000 66%, transparent 67%)", WebkitMaskImage: "radial-gradient(circle, transparent 60%, #000 61%, #000 66%, transparent 67%)" }} />
      <div style={{ position: "absolute", width: 320, height: 320, background: "var(--grad-bv)", filter: "blur(60px)", opacity: 0.5, animation: "pulse-ring 6s ease-in-out infinite" }} />
      <div style={{ position: "relative", width: 300, height: 360, animation: "floaty 7s ease-in-out infinite" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--grad-bvt)", borderRadius: "32px", animation: "blob 12s ease-in-out infinite", boxShadow: "var(--shadow-lg)" }} />
        <div style={{ position: "absolute", inset: 8, borderRadius: "28px", overflow: "hidden", background: "var(--slate)" }}>
          <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(15,23,42,0.55))", mixBlendMode: "multiply" }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: 18, left: -6, animation: "floaty2 6s ease-in-out infinite" }}>
        <div className="glass" style={{ padding: "10px 15px", display: "flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 13.5 }}>
          <Icon name="wordpress" size={20} style={{ color: "var(--blue)" }} /> WordPress Expert
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 40, right: -14, animation: "floaty 8s ease-in-out infinite" }}>
        <div className="glass" style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(20,184,166,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)" }}><Icon name="gauge" size={20} /></span>
          <div><div style={{ fontWeight: 800, fontSize: 16 }} className="mono-num">98</div><div style={{ fontSize: 11, color: "var(--text-dim)" }}>Lighthouse</div></div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: -18, left: -10, animation: "floaty2 7.5s ease-in-out infinite" }}>
        <div className="glass" style={{ padding: "9px 14px", display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 13 }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: "#27c93f", boxShadow: "0 0 10px #27c93f" }} /> Available for work
        </div>
      </div>
    </div>
  );
}

export function Hero({ layout = "split" }) {
  const D = PORTFOLIO.identity;
  const centered = layout === "centered";
  const scrollTo = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const Title = (
    <h1 style={{ fontSize: centered ? "clamp(40px, 7vw, 88px)" : "clamp(38px, 5.4vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.035em", fontWeight: 800, margin: "20px 0 0" }}>
      Hi, I'm {D.name}.<br />
      <span className="grad-text" style={{ backgroundSize: "200% auto", animation: "shimmer 6s linear infinite" }}>I build WordPress<br />that performs.</span>
    </h1>
  );
  const Sub = (
    <p style={{ color: "var(--text-soft)", fontSize: "clamp(16px, 1.5vw, 19px)", maxWidth: "52ch", margin: centered ? "24px auto 0" : "24px 0 0" }}>{D.intro}</p>
  );
  const Roles = (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: centered ? "center" : "flex-start", marginTop: 22 }}>
      <span className="chip chip--mono"><Icon name="wordpress" size={15} style={{ color: "var(--blue)" }} />{D.role}</span>
      <span className="chip chip--mono"><Icon name="code" size={15} style={{ color: "var(--violet)" }} />{D.role2}</span>
    </div>
  );
  const CTAs = (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 13, justifyContent: centered ? "center" : "flex-start", marginTop: 34 }}>
      <a href="#projects" onClick={scrollTo("projects")} className="btn btn-primary">View Projects<Icon name="arrow" size={17} /></a>
      <a href="#contact" onClick={scrollTo("contact")} className="btn btn-ghost">Hire Me</a>
      <a href={D.resume} download className="btn btn-ghost"><Icon name="download" size={17} />Download Resume</a>
    </div>
  );

  return (
    <section id="top" className="section" style={{ paddingTop: 150, paddingBottom: 90, position: "relative" }}>
      <div className="wrap">
        {centered ? (
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Reveal><span className="eyebrow"><span className="dot" />{D.years} · {D.location}</span></Reveal>
            <Reveal d="1">{Title}</Reveal>
            <Reveal d="2">{Roles}</Reveal>
            <Reveal d="2">{Sub}</Reveal>
            <Reveal d="3">{CTAs}</Reveal>
            <Reveal d="4" style={{ marginTop: 56, width: "100%" }}><HeroVisual photo={D.photo} name={D.name} /></Reveal>
          </div>
        ) : (
          <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 50, alignItems: "center" }}>
            <div>
              <Reveal><span className="eyebrow"><span className="dot" />{D.years}</span></Reveal>
              <Reveal d="1">{Title}</Reveal>
              <Reveal d="2">{Roles}</Reveal>
              <Reveal d="2">{Sub}</Reveal>
              <Reveal d="3">{CTAs}</Reveal>
            </div>
            <Reveal d="2" className="hero-visual-col"><HeroVisual photo={D.photo} name={D.name} /></Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

export function StatsBand() {
  const stats = PORTFOLIO.stats;
  return (
    <section className="wrap" style={{ marginTop: -10, marginBottom: 30 }}>
      <Reveal className="glass stats-band" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, padding: "10px 0", borderRadius: "var(--r-lg)" }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-cell" style={{ textAlign: "center", padding: "22px 18px", borderLeft: i ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
              <span className="grad-text"><CountUp end={s.value} suffix={s.suffix} /></span>
            </div>
            <div style={{ color: "var(--text-soft)", fontSize: 14, marginTop: 9 }}>{s.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
