const base = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

const ICONS = {
  // Câmera de cinema
  camera: (
    <svg {...base}>
      <rect x="2.5" y="7" width="13" height="10" rx="1.5" />
      <path d="M15.5 10.5 21.5 7.5v9l-6-3" />
      <circle cx="9" cy="12" r="2.6" />
    </svg>
  ),
  // Drone quadricóptero
  drone: (
    <svg {...base}>
      <rect x="9.5" y="10" width="5" height="4" rx="1" />
      <path d="M9.5 11 5.5 7M14.5 11l4-4M9.5 13l-4 4M14.5 13l4 4" />
      <circle cx="4.5" cy="6" r="1.6" />
      <circle cx="19.5" cy="6" r="1.6" />
      <circle cx="4.5" cy="18" r="1.6" />
      <circle cx="19.5" cy="18" r="1.6" />
    </svg>
  ),
  // Edição: linha do tempo com playhead
  edit: (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 10h18M3 14.5h18M12 3v18" />
      <path d="M7 7.5h2.5M14 12h4M6 16.5h4" />
    </svg>
  ),
  // Acabamento: ajuste de cor e brilho
  finish: (
    <svg {...base}>
      <path d="M5 6h14M5 12h14M5 18h14" />
      <circle cx="9" cy="6" r="2" fill="var(--bg)" />
      <circle cx="15" cy="12" r="2" fill="var(--bg)" />
      <circle cx="8" cy="18" r="2" fill="var(--bg)" />
    </svg>
  ),
};

export default function Icon({ name }) {
  return ICONS[name] ?? null;
}
