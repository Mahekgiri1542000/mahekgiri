import { Reveal } from '../hooks.jsx';

export default function SecHead({ eyebrow, title, sub, center }) {
  return (
    <div className={`sec-head ${center ? "center" : ""}`}>
      <Reveal><span className="eyebrow"><span className="dot" />{eyebrow}</span></Reveal>
      <Reveal d="1"><h2 className="sec-title" dangerouslySetInnerHTML={{ __html: title }} /></Reveal>
      {sub && <Reveal d="2"><p className="sec-sub">{sub}</p></Reveal>}
    </div>
  );
}
