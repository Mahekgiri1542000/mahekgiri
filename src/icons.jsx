// icons.jsx — minimal stroke icon set. <Icon name="rocket" />
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const paths = {
  wordpress: <><circle cx="12" cy="12" r="9" /><path d="M3.5 9h7M6 9l3.2 8M9.2 17 12 9M12 9l2.8 8M14.8 17 18 9" /></>,
  layers: <><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" /><path d="m4 12 8 4.5 8-4.5" /><path d="m4 16.5 8 4.5 8-4.5" /></>,
  plug: <><path d="M9 3v5M15 3v5" /><path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" /><path d="M12 16v5" /></>,
  cart: <><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M3 4h2l2.2 11h10l1.8-8H6" /></>,
  blocks: <><rect x="4" y="4" width="7" height="7" rx="1.4" /><rect x="13" y="4" width="7" height="7" rx="1.4" /><rect x="4" y="13" width="7" height="7" rx="1.4" /><path d="M17 13v7M13.5 16.5h7" /></>,
  rocket: <><path d="M5 15c-1.5 1-2 4-2 4s3-.5 4-2" /><path d="M9 13c2-5 5-9 11-9 0 6-4 9-9 11l-2-2Z" /><circle cx="14.5" cy="9.5" r="1.3" /><path d="m9 13-2 2 2 2 2-2" /></>,
  api: <><path d="M7 8 3 12l4 4M17 8l4 4-4 4M14 5l-4 14" /></>,
  gauge: <><path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 18l4-5" /><circle cx="12" cy="18" r="1.3" /></>,
  wrench: <><path d="M14.5 6a3.5 3.5 0 0 0-4.7 4.2L4 16l4 4 5.8-5.8A3.5 3.5 0 0 0 18 9.5l-2.3 2.3-2.5-.7-.7-2.5L14.8 6.3Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  whatsapp: <><path d="M4 20l1.4-4A7.5 7.5 0 1 1 8 18.6L4 20Z" /><path d="M9 9c0 3 3 6 6 6 1-.2 1.6-.8 1.8-1.5-1-.7-1.7-1-2.3-.7-.5-.5-1.3-1.3-1.8-1.8.3-.6 0-1.3-.7-2.3C11.8 7.4 11.2 8 11 9Z" /></>,
  linkedin: <><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10v6M8 7v.01M12 16v-3.5a1.5 1.5 0 0 1 3 0V16M12 16v-6" /></>,
  github: <><path d="M9 19c-4 1.2-4-2.2-6-2.5m12 4.5v-3.3a3 3 0 0 0-.8-2.3c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C6.6 3.3 5.6 3.6 5.6 3.6a4.2 4.2 0 0 0-.1 3.1A4.5 4.5 0 0 0 4.3 9.8c0 4.5 2.7 5.5 5.3 5.8a3 3 0 0 0-.8 2.2V21" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  arrowUpRight: <><path d="M7 17 17 7M9 7h8v8" /></>,
  download: <><path d="M12 3v12M7 11l5 5 5-5M5 21h14" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="M10 9l5 3-5 3V9Z" /></>,
  star: <><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" /></>,
  quote: <><path d="M9 7H5v6h4v-2H7c0-1.5.8-2 2-2V7ZM19 7h-4v6h4v-2h-2c0-1.5.8-2 2-2V7Z" /></>,
  check: <><path d="m4 12 5 5L20 6" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  sparkle: <><path d="M12 3v6M12 15v6M3 12h6M15 12h6M7 7l3 3M14 14l3 3M17 7l-3 3M10 14l-3 3" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
  location: <><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
};

export default function Icon({ name, size = 24, style, className }) {
  const d = paths[name] || paths.code;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} className={className} {...P}>{d}</svg>
  );
}
