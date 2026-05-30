import { useState } from 'react';
import Icon from '../icons.jsx';
import PORTFOLIO from '../data.js';

export default function Contact() {
  const D = PORTFOLIO.identity;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [err, setErr] = useState({});
  const sent = status === "sent";
  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = true;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = true;
    if (!form.message.trim()) er.message = true;
    setErr(er);
    if (Object.keys(er).length) return;

    // No Formspree configured → open visitor's email app, pre-addressed to you.
    if (!D.formspree) {
      const subject = encodeURIComponent(`New project enquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }
    // Formspree → real email, no backend needed.
    setStatus("sending");
    try {
      const res = await fetch(D.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, _subject: `New enquiry from ${form.name}` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch (_) {
      setStatus("error");
    }
  };
  const channels = [
    { icon: "mail", label: "Email", value: D.email, href: `mailto:${D.email}` },
    { icon: "whatsapp", label: "WhatsApp", value: `+${D.whatsapp}`, href: `https://wa.me/${D.whatsappIntl}` },
    { icon: "linkedin", label: "LinkedIn", value: "Connect with me", href: D.linkedin },
  ];
  const field = (k, label, type = "text", isArea = false) => (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "var(--text-soft)", marginBottom: 8 }}>{label}</span>
      {isArea ? (
        <textarea name={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} rows={5} placeholder="Tell me about your project…"
          style={{ width: "100%", resize: "vertical", padding: "14px 16px", borderRadius: 14, background: "rgba(15,23,42,0.5)", border: `1.5px solid ${err[k] ? "#f87171" : "var(--line)"}`, color: "var(--text)", font: "inherit", fontSize: 15, outline: "none" }} />
      ) : (
        <input name={k} value={form[k]} type={type} onChange={(e) => setForm({ ...form, [k]: e.target.value })} placeholder={label}
          style={{ width: "100%", padding: "14px 16px", borderRadius: 14, background: "rgba(15,23,42,0.5)", border: `1.5px solid ${err[k] ? "#f87171" : "var(--line)"}`, color: "var(--text)", font: "inherit", fontSize: 15, outline: "none" }} />
      )}
    </label>
  );

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="glass" style={{ borderRadius: "var(--r-xl)", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: -80, right: -60, width: 280, height: 280, background: "var(--grad-bv)", filter: "blur(90px)", opacity: 0.3 }} />
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 0, position: "relative" }}>
            <div className="contact-left" style={{ padding: "clamp(30px,4vw,52px)", borderRight: "1px solid var(--line)" }}>
              <span className="eyebrow"><span className="dot" />Contact</span>
              <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.08, margin: "20px 0 14px" }}>Let's build your <span className="grad-text">next website.</span></h2>
              <p style={{ color: "var(--text-soft)", fontSize: 16, marginBottom: 30 }}>Have a project in mind or need a reliable developer for your team? I usually reply within a few hours.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {channels.map((c) => (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-chan card-hover" style={{ display: "flex", alignItems: "center", gap: 15, padding: 16, borderRadius: "var(--r)", background: "rgba(148,163,184,0.06)", border: "1px solid var(--line)" }}>
                    <span className="icon-tile"><Icon name={c.icon} /></span>
                    <span><span style={{ display: "block", fontSize: 12.5, color: "var(--text-dim)", fontWeight: 600 }}>{c.label}</span><span style={{ fontWeight: 700, fontSize: 15 }}>{c.value}</span></span>
                    <Icon name="arrowUpRight" size={18} style={{ marginLeft: "auto", color: "var(--text-dim)" }} />
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-right" style={{ padding: "clamp(30px,4vw,52px)" }}>
              {sent ? (
                <div style={{ height: "100%", minHeight: 320, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: 99, background: "var(--grad-bv)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22, boxShadow: "var(--glow-blue)" }}><Icon name="check" size={36} /></div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 8px" }}>Message sent!</h3>
                  <p style={{ color: "var(--text-soft)", maxWidth: "34ch" }}>Thanks {form.name.split(" ")[0]} — I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {field("name", "Your name")}
                  {field("email", "Email address", "email")}
                  {field("message", "Message", "text", true)}
                  <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={{ width: "100%", padding: "16px", opacity: status === "sending" ? 0.7 : 1 }}>
                    {status === "sending" ? "Sending…" : "Let's Build Your Next Website"}<Icon name={status === "sending" ? "clock" : "arrow"} size={18} />
                  </button>
                  {status === "error" && (
                    <p style={{ fontSize: 13, color: "#fca5a5", textAlign: "center", margin: 0 }}>Something went wrong. Please email me directly at {D.email}.</p>
                  )}
                  <p style={{ fontSize: 12.5, color: "var(--text-dim)", textAlign: "center", margin: 0 }}>Or email me directly at {D.email}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
