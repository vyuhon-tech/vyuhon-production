// Premium static SVG card visuals — one per insight article.
// Style: layered organic shapes, rich brand gradients, subtle patterns — no animations.
// Inspired by reference aesthetics; fully aligned with Vyuhon brand language.

const W = 400;
const H = 300;

// ─── Shared Frame ───────────────────────────────────────────────────────────

function Frame({ id, children, bg1, bg2, bg3 }: {
  id: string;
  children: React.ReactNode;
  bg1: string;
  bg2: string;
  bg3?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg1} />
          {bg3 && <stop offset="50%" stopColor={bg3} />}
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
        <radialGradient id={`${id}-inner`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-glow-tl`} cx="15%" cy="15%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-glow-br`} cx="85%" cy="85%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-dots`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#fff" opacity="0.06" />
        </pattern>
        <filter id={`${id}-drop`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.18" />
        </filter>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      {/* Background fill */}
      <rect width={W} height={H} fill={`url(#${id}-bg)`} />
      {/* Inner highlight */}
      <rect width={W} height={H} fill={`url(#${id}-inner)`} />
      {/* Corner glows */}
      <rect width={W} height={H} fill={`url(#${id}-glow-tl)`} />
      <rect width={W} height={H} fill={`url(#${id}-glow-br)`} />
      {/* Dot grid overlay */}
      <rect width={W} height={H} fill={`url(#${id}-dots)`} />

      {children}
    </svg>
  );
}

// Central label overlay
function CardLabel({ id, x = 200, y = 150, size = 22, children }: {
  id: string;
  x?: number;
  y?: number;
  size?: number;
  children: React.ReactNode;
}) {
  return (
    <text
      x={x} y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#fff"
      fontFamily="'Season Mix','Source Serif 4',Georgia,serif"
      fontWeight="560"
      fontSize={size}
      letterSpacing="-0.4"
      filter={`url(#${id}-drop)`}
    >
      {children}
    </text>
  );
}

// ─── Organic Blob helpers ────────────────────────────────────────────────────
// Creates petal/lotus-style blob using smooth bezier arcs

function Petal({ cx, cy, r, fill, opacity = 1, rotate = 0, filter }: {
  cx: number; cy: number; r: number;
  fill: string; opacity?: number;
  rotate?: number; filter?: string;
}) {
  const p = `M${cx},${cy - r}
    C${cx + r * 0.55},${cy - r} ${cx + r},${cy - r * 0.55} ${cx + r},${cy}
    C${cx + r},${cy + r * 0.55} ${cx + r * 0.55},${cy + r} ${cx},${cy + r}
    C${cx - r * 0.55},${cy + r} ${cx - r},${cy + r * 0.55} ${cx - r},${cy}
    C${cx - r},${cy - r * 0.55} ${cx - r * 0.55},${cy - r} ${cx},${cy - r} Z`;
  return (
    <path
      d={p}
      fill={fill}
      opacity={opacity}
      filter={filter}
      style={rotate ? { transformOrigin: `${cx}px ${cy}px`, transform: `rotate(${rotate}deg)` } : undefined}
    />
  );
}

// Squircle (rounded square variant)
function Squircle({ cx, cy, size, fill, opacity = 1, rotate = 0, filter }: {
  cx: number; cy: number; size: number;
  fill: string; opacity?: number;
  rotate?: number; filter?: string;
}) {
  const s = size / 2;
  const c = s * 0.58;
  const p = `M${cx},${cy - s}
    C${cx + c},${cy - s} ${cx + s},${cy - c} ${cx + s},${cy}
    C${cx + s},${cy + c} ${cx + c},${cy + s} ${cx},${cy + s}
    C${cx - c},${cy + s} ${cx - s},${cy + c} ${cx - s},${cy}
    C${cx - s},${cy - c} ${cx - c},${cy - s} ${cx},${cy - s} Z`;
  return (
    <path
      d={p}
      fill={fill}
      opacity={opacity}
      filter={filter}
      style={rotate ? { transformOrigin: `${cx}px ${cy}px`, transform: `rotate(${rotate}deg)` } : undefined}
    />
  );
}

// ─── Card Visuals ────────────────────────────────────────────────────────────

// 01 — Why AI Projects Fail (Purple)
function FailureVisual() {
  return (
    <Frame id="iv1" bg1="#3b1fa8" bg2="#1e0a6e" bg3="#5630cc">
      {/* Blurred glow blobs */}
      <circle cx="320" cy="60" r="100" fill="#9775FF" opacity="0.25" filter="url(#iv1-soft)" />
      <circle cx="80" cy="240" r="80" fill="#6B46E5" opacity="0.2" filter="url(#iv1-soft)" />
      {/* Layered petals */}
      <Petal cx={200} cy={148} r={110} fill="rgba(151,117,255,0.22)" rotate={20} />
      <Petal cx={200} cy={148} r={82} fill="rgba(151,117,255,0.28)" rotate={0} />
      <Petal cx={200} cy={148} r={58} fill="rgba(255,255,255,0.12)" rotate={-15} />
      {/* Disconnected arc marks */}
      <path d="M116 90 A90 90 0 0 1 284 90" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" strokeDasharray="6 7" />
      <path d="M116 210 A90 90 0 0 0 284 210" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" strokeDasharray="6 7" />
      {/* X symbol */}
      <line x1="185" y1="133" x2="215" y2="163" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="215" y1="133" x2="185" y2="163" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
      <CardLabel id="iv1" y={230} size={19}>Why AI Projects Fail</CardLabel>
    </Frame>
  );
}

// 02 — RAG Systems (Teal / Deep Green)
function RAGVisual() {
  return (
    <Frame id="iv2" bg1="#0a4a36" bg2="#052c20" bg3="#0d6647">
      <circle cx="300" cy="80" r="110" fill="#29DCA4" opacity="0.15" filter="url(#iv2-soft)" />
      <circle cx="100" cy="220" r="80" fill="#0FA97B" opacity="0.18" filter="url(#iv2-soft)" />
      {/* Layered circles — data retrieval rings */}
      <circle cx="200" cy="145" r="115" stroke="rgba(41,220,164,0.15)" strokeWidth="1.5" fill="none" />
      <circle cx="200" cy="145" r="85" stroke="rgba(41,220,164,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="8 6" />
      <circle cx="200" cy="145" r="55" stroke="rgba(41,220,164,0.28)" strokeWidth="2" fill="none" />
      {/* Inner petal bloom */}
      <Petal cx={200} cy={145} r={95} fill="rgba(41,220,164,0.14)" rotate={45} />
      <Petal cx={200} cy={145} r={68} fill="rgba(41,220,164,0.18)" rotate={0} />
      <Petal cx={200} cy={145} r={44} fill="rgba(255,255,255,0.1)" rotate={22} />
      {/* Core dot */}
      <circle cx="200" cy="145" r="12" fill="rgba(41,220,164,0.7)" />
      <circle cx="200" cy="145" r="6" fill="#fff" opacity="0.85" />
      <CardLabel id="iv2" y={258} size={19}>RAG Systems</CardLabel>
    </Frame>
  );
}

// 03 — Product Manager's Guide (Blue)
function ProductVisual() {
  return (
    <Frame id="iv3" bg1="#0d3580" bg2="#071f52" bg3="#1848a8">
      <circle cx="340" cy="280" r="120" fill="#3B75FD" opacity="0.2" filter="url(#iv3-soft)" />
      <circle cx="60" cy="40" r="90" fill="#2A5CD8" opacity="0.18" filter="url(#iv3-soft)" />
      {/* Grid lines — product roadmap feel */}
      {[70, 120, 170, 220].map(y => (
        <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {[80, 140, 200, 260, 320].map(x => (
        <line key={x} x1={x} y1="40" x2={x} y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {/* Rising chart bars */}
      <rect x="80" y="200" width="36" height="60" rx="8" fill="rgba(59,117,253,0.35)" />
      <rect x="132" y="170" width="36" height="90" rx="8" fill="rgba(59,117,253,0.45)" />
      <rect x="184" y="130" width="36" height="130" rx="8" fill="rgba(59,117,253,0.55)" />
      <rect x="236" y="90" width="36" height="170" rx="8" fill="rgba(59,117,253,0.65)" />
      <rect x="288" y="55" width="36" height="205" rx="8" fill="url(#iv3-bar)" />
      {/* Gradient for last bar */}
      <defs>
        <linearGradient id="iv3-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B75FD" />
          <stop offset="100%" stopColor="#2A5CD8" />
        </linearGradient>
      </defs>
      {/* Trend line */}
      <polyline points="98,220 150,185 202,148 254,108 306,72" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <CardLabel id="iv3" y={276} size={17}>Product Manager&apos;s Guide</CardLabel>
    </Frame>
  );
}

// 04 — Designing for Enterprise AI Adoption (Indigo / Blue-Purple)
function AdoptionVisual() {
  return (
    <Frame id="iv4" bg1="#1a1270" bg2="#0c0842" bg3="#2d1e9e">
      <circle cx="60" cy="60" r="120" fill="#9775FF" opacity="0.15" filter="url(#iv4-soft)" />
      <circle cx="340" cy="240" r="100" fill="#3B75FD" opacity="0.18" filter="url(#iv4-soft)" />
      {/* Squircle layers — interface adoption */}
      <Squircle cx={200} cy={145} size={200} fill="rgba(151,117,255,0.14)" rotate={12} />
      <Squircle cx={200} cy={145} size={148} fill="rgba(151,117,255,0.2)" rotate={0} />
      <Squircle cx={200} cy={145} size={96} fill="rgba(255,255,255,0.1)" rotate={-8} />
      {/* Person silhouette */}
      <circle cx="200" cy="128" r="24" fill="rgba(255,255,255,0.22)" />
      <circle cx="200" cy="118" r="10" fill="rgba(255,255,255,0.7)" />
      <path d="M182,138 Q200,155 218,138" fill="rgba(255,255,255,0.6)" />
      {/* Adoption pulse ring */}
      <circle cx="200" cy="145" r="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
      <circle cx="200" cy="145" r="65" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="5 6" />
      <CardLabel id="iv4" y={258} size={18}>Designing AI Adoption</CardLabel>
    </Frame>
  );
}

// 05 — Pilot to Production (Red / Crimson)
function ScalingVisual() {
  return (
    <Frame id="iv5" bg1="#7a0e0e" bg2="#4a0606" bg3="#a01414">
      <circle cx="320" cy="60" r="110" fill="#F87171" opacity="0.2" filter="url(#iv5-soft)" />
      <circle cx="80" cy="240" r="90" fill="#DC2626" opacity="0.2" filter="url(#iv5-soft)" />
      {/* Stacked layered organic shapes — scaling up */}
      <Petal cx={200} cy={148} r={108} fill="rgba(248,113,113,0.16)" rotate={45} />
      <Petal cx={200} cy={148} r={78} fill="rgba(248,113,113,0.22)" rotate={22} />
      <Petal cx={200} cy={148} r={52} fill="rgba(255,255,255,0.13)" rotate={0} />
      {/* Rocket / upward arrow */}
      <path d="M200 180 L200 100 M185 125 L200 100 L215 125" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Base flames */}
      <ellipse cx="200" cy="182" rx="10" ry="6" fill="rgba(255,255,255,0.35)" />
      <CardLabel id="iv5" y={260} size={19}>Pilot to Production</CardLabel>
    </Frame>
  );
}

// 06 — AI-Ready Organisation (Amber / Gold)
function ReadinessVisual() {
  const spokes = 6;
  const scores = [0.82, 0.60, 0.92, 0.65, 0.78, 0.72];
  const cx = 200, cy = 142, maxR = 88;

  const pts = scores.map((s, i) => {
    const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * maxR * s, cy + Math.sin(a) * maxR * s];
  });
  const polygon = pts.map(([x, y]) => `${x},${y}`).join(' ');

  const outerPts = Array.from({ length: spokes }, (_, i) => {
    const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR];
  });

  return (
    <Frame id="iv6" bg1="#8a3e00" bg2="#5c2800" bg3="#b85200">
      <circle cx="320" cy="50" r="110" fill="#F2B95C" opacity="0.18" filter="url(#iv6-soft)" />
      <circle cx="80" cy="250" r="90" fill="#D98324" opacity="0.18" filter="url(#iv6-soft)" />
      {/* Radar grid */}
      {[0.33, 0.66, 1].map((f, j) => (
        <polygon
          key={j}
          points={outerPts.map(([x, y]) => `${cx + (x - cx) * f},${cy + (y - cy) * f}`).join(' ')}
          stroke="rgba(242,185,92,0.2)"
          strokeWidth="1"
          fill="none"
        />
      ))}
      {outerPts.map(([x, y], i) => (
        <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(242,185,92,0.15)" strokeWidth="1" />
      ))}
      {/* Score fill */}
      <polygon points={polygon} fill="rgba(242,185,92,0.3)" stroke="#F2B95C" strokeWidth="2" />
      {/* Vertex dots */}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5} fill="#F2B95C" opacity="0.9" />
      ))}
      <circle cx={cx} cy={cy} r={5} fill="rgba(255,255,255,0.6)" />
      <CardLabel id="iv6" y={264} size={18}>AI-Ready Organisation</CardLabel>
    </Frame>
  );
}

// 07 — Hidden Cost of Bad Data (Dark Teal)
function DataCostVisual() {
  return (
    <Frame id="iv7" bg1="#043d2e" bg2="#02251b" bg3="#075c44">
      <circle cx="300" cy="60" r="110" fill="#29DCA4" opacity="0.12" filter="url(#iv7-soft)" />
      <circle cx="100" cy="240" r="80" fill="#0FA97B" opacity="0.12" filter="url(#iv7-soft)" />
      {/* Layered data pipeline rectangles */}
      {[
        { y: 72, w: 280, opacity: 0.85, fill: 'rgba(41,220,164,0.35)' },
        { y: 134, w: 280, opacity: 0.5, fill: 'rgba(41,220,164,0.2)' },
        { y: 196, w: 280, opacity: 0.25, fill: 'rgba(41,220,164,0.12)' },
      ].map(({ y, w, opacity, fill }, i) => (
        <rect key={i} x={(W - w) / 2} y={y} width={w} height={48} rx="12"
          fill={fill} stroke="rgba(41,220,164,0.25)" strokeWidth="1" opacity={opacity} />
      ))}
      {/* Good / Warning labels */}
      <circle cx="186" cy="157" r="10" fill="rgba(248,113,113,0.7)" />
      <text x="186" y="157" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="13" fontWeight="700">!</text>
      <circle cx="214" cy="219" r="10" fill="rgba(248,113,113,0.5)" />
      <text x="214" y="219" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="13" fontWeight="700">!</text>
      <circle cx="186" cy="96" r="10" fill="rgba(41,220,164,0.7)" />
      <path d="M181,96 l4,4 7,-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <CardLabel id="iv7" y={270} size={18}>Hidden Cost of Bad Data</CardLabel>
    </Frame>
  );
}

// 08 — AI Strategy (Purple / Violet)
function StrategyFundVisual() {
  return (
    <Frame id="iv8" bg1="#2a1060" bg2="#170840" bg3="#3d1a80">
      <circle cx="320" cy="280" r="130" fill="#9775FF" opacity="0.2" filter="url(#iv8-soft)" />
      <circle cx="60" cy="40" r="100" fill="#6B46E5" opacity="0.18" filter="url(#iv8-soft)" />
      {/* Document stack */}
      {[{ x: 148, y: 62, rot: -6 }, { x: 152, y: 58, rot: 3 }].map(({ x, y, rot }, i) => (
        <rect key={i} x={x} y={y} width={104} height={148} rx="10"
          fill="rgba(151,117,255,0.15)" stroke="rgba(151,117,255,0.25)" strokeWidth="1"
          style={{ transformOrigin: `${x + 52}px ${y + 74}px`, transform: `rotate(${rot}deg)` }}
        />
      ))}
      {/* Front document */}
      <rect x={148} y={56} width={104} height={148} rx="10"
        fill="rgba(151,117,255,0.22)" stroke="rgba(151,117,255,0.45)" strokeWidth="1.5" />
      {/* Text lines */}
      {[90, 108, 124, 140].map((y, i) => (
        <rect key={y} x={165} y={y} width={i === 0 ? 48 : 70} height={6} rx="3" fill="rgba(255,255,255,0.25)" />
      ))}
      {/* Approval badge */}
      <circle cx="236" cy="180" r="28" fill="rgba(151,117,255,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M224,180 l9,9 17,-18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <CardLabel id="iv8" y={270} size={18}>Executive AI Strategy</CardLabel>
    </Frame>
  );
}

// 09 — LLM Integration Patterns (Blue / Navy)
function LLMPatternsVisual() {
  const layers: [number, number][][] = [
    [[72, 150]],
    [[158, 90], [158, 210]],
    [[244, 60], [244, 150], [244, 240]],
    [[328, 105], [328, 195]],
  ];
  const palette = ['rgba(59,117,253,0.8)', 'rgba(41,220,164,0.7)', 'rgba(59,117,253,0.7)', 'rgba(151,117,255,0.8)'];
  return (
    <Frame id="iv9" bg1="#071e4a" bg2="#040e28" bg3="#0d2e72">
      <circle cx="60" cy="60" r="130" fill="#3B75FD" opacity="0.14" filter="url(#iv9-soft)" />
      <circle cx="340" cy="240" r="100" fill="#2A5CD8" opacity="0.14" filter="url(#iv9-soft)" />
      {/* Connection lines */}
      {layers.slice(0, -1).flatMap((fromLayer, li) =>
        fromLayer.flatMap(([fx, fy]) =>
          layers[li + 1].map(([tx, ty], j) => (
            <line key={`${li}-${fy}-${j}`} x1={fx} y1={fy} x2={tx} y2={ty}
              stroke="rgba(59,117,253,0.2)" strokeWidth="1.2" />
          ))
        )
      )}
      {/* Nodes */}
      {layers.flatMap((layer, li) =>
        layer.map(([cx, cy], ni) => (
          <g key={`${li}-${ni}`}>
            <circle cx={cx} cy={cy} r={li === 2 ? 18 : 12} fill={palette[li]} opacity="0.18" />
            <circle cx={cx} cy={cy} r={li === 2 ? 11 : 7} fill={palette[li]} opacity="0.9" />
          </g>
        ))
      )}
      <CardLabel id="iv9" y={278} size={17}>LLM Integration Patterns</CardLabel>
    </Frame>
  );
}

// 10 — AI Change Management (Amber / Warm)
function ChangeManagementVisual() {
  const people: [number, number][] = [[145, 115], [200, 88], [255, 115], [160, 175], [240, 175]];
  return (
    <Frame id="iv10" bg1="#7a3800" bg2="#4c2200" bg3="#9e4c00">
      <circle cx="320" cy="60" r="120" fill="#F2B95C" opacity="0.18" filter="url(#iv10-soft)" />
      <circle cx="80" cy="240" r="90" fill="#D98324" opacity="0.18" filter="url(#iv10-soft)" />
      {/* Petal backdrop */}
      <Petal cx={200} cy={142} r={100} fill="rgba(242,185,92,0.14)" rotate={30} />
      <Petal cx={200} cy={142} r={70} fill="rgba(242,185,92,0.18)" rotate={0} />
      {/* Connection web */}
      {([[0,1],[0,3],[1,2],[1,3],[1,4],[2,4],[3,4]] as [number,number][]).map(([a, b], i) => (
        <line key={i}
          x1={people[a][0]} y1={people[a][1]}
          x2={people[b][0]} y2={people[b][1]}
          stroke="rgba(242,185,92,0.35)" strokeWidth="1.5"
        />
      ))}
      {/* People nodes */}
      {people.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={16} fill={i === 1 ? 'rgba(242,185,92,0.6)' : 'rgba(242,185,92,0.3)'} />
          <circle cx={cx} cy={cy - 6} r={6} fill="rgba(255,255,255,0.7)" />
          <path d={`M${cx - 8},${cy + 6} Q${cx},${cy + 14} ${cx + 8},${cy + 6}`} fill="rgba(255,255,255,0.55)" />
        </g>
      ))}
      <CardLabel id="iv10" y={264} size={18}>AI Change Management</CardLabel>
    </Frame>
  );
}

// 11 — UX of AI: Designing Trust (Blue / Periwinkle)
function TrustVisual() {
  return (
    <Frame id="iv11" bg1="#0e2860" bg2="#07163c" bg3="#183a8a">
      <circle cx="60" cy="60" r="120" fill="#3B75FD" opacity="0.18" filter="url(#iv11-soft)" />
      <circle cx="340" cy="240" r="100" fill="#2A5CD8" opacity="0.15" filter="url(#iv11-soft)" />
      {/* Shield path */}
      <path d="M200,55 L250,78 L250,148 Q250,190 200,212 Q150,190 150,148 L150,78 Z"
        fill="rgba(59,117,253,0.25)" stroke="rgba(59,117,253,0.5)" strokeWidth="2" />
      {/* Inner shield glow */}
      <path d="M200,72 L238,90 L238,146 Q238,178 200,196 Q162,178 162,146 L162,90 Z"
        fill="rgba(255,255,255,0.06)" />
      {/* Check mark */}
      <path d="M183,132 l13,13 26,-26" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Outer decorative rings */}
      <circle cx="200" cy="134" r="75" stroke="rgba(59,117,253,0.2)" strokeWidth="1" fill="none" strokeDasharray="5 7" />
      <circle cx="200" cy="134" r="100" stroke="rgba(59,117,253,0.12)" strokeWidth="1" fill="none" strokeDasharray="4 9" />
      <CardLabel id="iv11" y={270} size={18}>UX of AI — Trust</CardLabel>
    </Frame>
  );
}

// 12 — Case Study: 34% Cost Reduction (Deep Purple / Plum)
function CaseStudyVisual() {
  return (
    <Frame id="iv12" bg1="#350d70" bg2="#1e0842" bg3="#4c1890">
      <circle cx="60" cy="280" r="130" fill="#9775FF" opacity="0.2" filter="url(#iv12-soft)" />
      <circle cx="340" cy="40" r="110" fill="#6B46E5" opacity="0.18" filter="url(#iv12-soft)" />
      {/* Squircle layers */}
      <Squircle cx={200} cy={138} size={210} fill="rgba(151,117,255,0.14)" rotate={15} />
      <Squircle cx={200} cy={138} size={155} fill="rgba(151,117,255,0.2)" rotate={0} />
      <Squircle cx={200} cy={138} size={100} fill="rgba(255,255,255,0.09)" rotate={-10} />
      {/* Big percentage */}
      <text x="200" y="138"
        textAnchor="middle" dominantBaseline="middle"
        fill="#fff" fontFamily="'Season Mix','Source Serif 4',Georgia,serif"
        fontWeight="600" fontSize="72" letterSpacing="-3" opacity="0.9"
      >
        34%
      </text>
      {/* Downward cost arrow */}
      <path d="M162,168 L200,188 L238,168" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <CardLabel id="iv12" y={268} size={17}>34% Cost Reduction</CardLabel>
    </Frame>
  );
}

// ─── Registry & Export ──────────────────────────────────────────────────────

type VisualMap = Record<string, () => React.ReactElement>;

const SLUG_VISUALS: VisualMap = {
  'why-enterprise-ai-projects-fail':   FailureVisual,
  'building-rag-systems':              RAGVisual,
  'product-manager-guide-ai-features': ProductVisual,
  'designing-enterprise-ai-adoption':  AdoptionVisual,
  'pilot-to-production-scaling':       ScalingVisual,
  'ai-ready-organisation':             ReadinessVisual,
  'hidden-cost-bad-data':              DataCostVisual,
  'ai-strategy-executives-fund':       StrategyFundVisual,
  'llm-integration-patterns':          LLMPatternsVisual,
  'ai-change-management':              ChangeManagementVisual,
  'ux-of-ai-designing-trust':          TrustVisual,
  'operational-costs-case-study':      CaseStudyVisual,
};

const CAT_DEFAULTS: Record<string, [string, string]> = {
  purple: ['#2A1A5E', '#150d36'],
  teal:   ['#0a3028', '#062218'],
  blue:   ['#0c2548', '#071530'],
  amber:  ['#3d2200', '#271600'],
  red:    ['#2a0808', '#1a0404'],
};

function FallbackVisual({ catClass }: { catClass: string }) {
  const [bg1, bg2] = CAT_DEFAULTS[catClass] ?? ['#1a1625', '#12101f'];
  return (
    <Frame id={`fb-${catClass}`} bg1={bg1} bg2={bg2}>
      <Petal cx={200} cy={150} r={100} fill="rgba(255,255,255,0.1)" rotate={0} />
      <Petal cx={200} cy={150} r={65} fill="rgba(255,255,255,0.12)" rotate={30} />
      <circle cx="200" cy="150" r="22" fill="rgba(255,255,255,0.15)" />
    </Frame>
  );
}

export default function InsightVisual({ slug, catClass }: { slug: string; catClass: string }) {
  const V = SLUG_VISUALS[slug];
  if (V) return <V />;
  return <FallbackVisual catClass={catClass} />;
}
