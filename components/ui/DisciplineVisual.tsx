// Premium animated visuals — one per discipline.
// Layered SVG: brand gradients, glow, dot-grid backdrop, orchestrated entrances,
// continuous ambient motion (CSS keyframes + SMIL animateMotion for path travel).
// All motion disabled under prefers-reduced-motion (see globals.css).

const VB = 260;

function Frame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg
      className="dv"
      viewBox={`0 0 ${VB} ${VB}`}
      width="290"
      height="290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-purple`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9775FF" />
          <stop offset="100%" stopColor="#6B46E5" />
        </linearGradient>
        <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#29DCA4" />
          <stop offset="100%" stopColor="#0FA97B" />
        </linearGradient>
        <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B75FD" />
          <stop offset="100%" stopColor="#2A5CD8" />
        </linearGradient>
        <linearGradient id={`${id}-amber`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2B95C" />
          <stop offset="100%" stopColor="#D98324" />
        </linearGradient>
        <linearGradient id={`${id}-red`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#9775FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#9775FF" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-soft`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="9" floodColor="#14131A" floodOpacity="0.10" />
        </filter>
        <pattern id={`${id}-dots`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#14131A" opacity="0.06" />
        </pattern>
      </defs>
      <rect width={VB} height={VB} fill={`url(#${id}-dots)`} />
      {children}
    </svg>
  );
}

/* 01 — Strategy & Advisory
   Orbit system: layered gradient arcs, sweeping beacon travelling the orbit,
   waypoints lighting up, a strategy line drawing from centre to target. */
function Strategy() {
  const orbit = 'M130,42 a88,88 0 1,1 -0.01,0';
  return (
    <Frame id="dv1">
      <circle cx="130" cy="130" r="104" fill="url(#dv1-glow)" className="dv-breathe" style={{ transformOrigin: '130px 130px' }} />
      <circle cx="130" cy="130" r="88" stroke="var(--line-2)" strokeWidth="1.5" />
      <g className="dv-rot-slow" style={{ transformOrigin: '130px 130px' }}>
        <circle cx="130" cy="130" r="64" stroke="url(#dv1-purple)" strokeWidth="2" strokeDasharray="24 200" strokeLinecap="round" />
        <circle cx="130" cy="130" r="64" stroke="var(--line-2)" strokeWidth="1.5" strokeDasharray="2 8" />
      </g>
      <g className="dv-rot-rev" style={{ transformOrigin: '130px 130px' }}>
        <circle cx="130" cy="130" r="40" stroke="url(#dv1-teal)" strokeWidth="2" strokeDasharray="16 160" strokeLinecap="round" />
      </g>
      {/* strategy line: centre -> target waypoint */}
      <path d="M130 130 L196 74" stroke="url(#dv1-purple)" strokeWidth="2.5" strokeLinecap="round" className="dv-draw" pathLength={100} style={{ animationDelay: '0.35s' }} />
      <circle cx="196" cy="74" r="9" fill="var(--paper-2)" stroke="url(#dv1-purple)" strokeWidth="2.5" filter="url(#dv1-soft)" className="dv-pop" style={{ transformOrigin: '196px 74px', animationDelay: '1.1s' }} />
      <circle cx="196" cy="74" r="3.5" fill="#6B46E5" className="dv-pop" style={{ transformOrigin: '196px 74px', animationDelay: '1.2s' }} />
      {[[62, 170, 0.5], [92, 62, 0.7], [176, 178, 0.9]].map(([x, y, d]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="4.5" fill="var(--paper)" stroke="#9775FF" strokeWidth="2" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${d}s` }} />
      ))}
      <circle cx="130" cy="130" r="7" fill="url(#dv1-purple)" filter="url(#dv1-soft)" />
      {/* beacon travelling the outer orbit */}
      <circle r="5" fill="#9775FF">
        <animateMotion dur="9s" repeatCount="indefinite" path={orbit} />
      </circle>
      <circle r="10" fill="#9775FF" opacity="0.25">
        <animateMotion dur="9s" repeatCount="indefinite" path={orbit} />
      </circle>
    </Frame>
  );
}

/* 02 — Product & Innovation
   Launch curve: gradient area chart rising to a milestone, spark travelling
   the curve with a soft trail, milestones popping in sequence. */
function Product() {
  const curve = 'M34 200 C 84 200, 92 138, 132 128 S 196 84, 226 56';
  return (
    <Frame id="dv2">
      <circle cx="200" cy="76" r="70" fill="url(#dv2-glow)" opacity="0.7" className="dv-breathe" style={{ transformOrigin: '200px 76px' }} />
      {/* area fill under curve */}
      <path d={`${curve} L226 214 L34 214 Z`} fill="url(#dv2-teal)" opacity="0.10" className="dv-fade" style={{ animationDelay: '0.7s' }} />
      <path d={curve} stroke="var(--line-2)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path d={curve} stroke="url(#dv2-teal)" strokeWidth="3" strokeLinecap="round" className="dv-draw" pathLength={100} />
      {/* baseline */}
      <line x1="34" y1="214" x2="226" y2="214" stroke="var(--line-2)" strokeWidth="1.5" />
      {[[34, 200, 0.2], [132, 128, 0.6]].map(([x, y, d]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="6" fill="var(--paper-2)" stroke="#0FA97B" strokeWidth="2.5" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${d}s` }} />
      ))}
      {/* launch milestone */}
      <g className="dv-pop" style={{ transformOrigin: '226px 56px', animationDelay: '1s' }}>
        <circle cx="226" cy="56" r="13" fill="url(#dv2-teal)" filter="url(#dv2-soft)" />
        <path d="M220 56 l4.5 4.5 8 -9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="226" cy="56" r="13" stroke="#29DCA4" strokeWidth="2" className="dv-ring" style={{ transformOrigin: '226px 56px' }} />
      {/* spark travelling the curve */}
      <circle r="4.5" fill="#0FA97B">
        <animateMotion dur="4.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" path={curve} />
      </circle>
      <circle r="9" fill="#29DCA4" opacity="0.3">
        <animateMotion dur="4.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1" path={curve} />
      </circle>
    </Frame>
  );
}

/* 03 — Experience Design
   Canvas composition: gradient shape morph-float, pen curve with control
   handles, cursor gliding along the curve. */
function Design() {
  const pen = 'M52 178 C 92 76, 168 76, 208 178';
  return (
    <Frame id="dv3">
      <circle cx="130" cy="128" r="92" fill="url(#dv3-glow)" opacity="0.6" className="dv-breathe" style={{ transformOrigin: '130px 128px' }} />
      {/* floating gradient shapes */}
      <rect x="70" y="58" width="52" height="52" rx="16" fill="url(#dv3-blue)" opacity="0.14" className="dv-drift-a" />
      <circle cx="176" cy="86" r="26" fill="url(#dv3-purple)" opacity="0.14" className="dv-drift-b" />
      {/* pen curve */}
      <path d={pen} stroke="url(#dv3-blue)" strokeWidth="3" strokeLinecap="round" className="dv-draw" pathLength={100} />
      <line x1="52" y1="178" x2="92" y2="76" stroke="var(--line-2)" strokeWidth="1.5" strokeDasharray="3 5" className="dv-fade" style={{ animationDelay: '0.9s' }} />
      <line x1="208" y1="178" x2="168" y2="76" stroke="var(--line-2)" strokeWidth="1.5" strokeDasharray="3 5" className="dv-fade" style={{ animationDelay: '0.9s' }} />
      {[[92, 76], [168, 76]].map(([x, y], i) => (
        <rect key={i} x={x - 6} y={y - 6} width="12" height="12" rx="2.5" fill="var(--paper)" stroke="#2A5CD8" strokeWidth="2.5" filter="url(#dv3-soft)" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${1 + i * 0.15}s` }} />
      ))}
      {[[52, 178], [208, 178]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6.5" fill="url(#dv3-blue)" filter="url(#dv3-soft)" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${0.2 + i * 0.15}s` }} />
      ))}
      {/* cursor gliding along curve */}
      <g filter="url(#dv3-soft)">
        <path d="M0 0 l16 6 -7 2.5 -2.5 7 z" fill="#2A5CD8">
          <animateMotion dur="5.5s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" path={pen} />
        </path>
      </g>
    </Frame>
  );
}

/* 04 — AI & Data
   Neural core: gradient nodes, data pulses flowing along links (SMIL),
   glowing core with breathing halo. */
function AI() {
  const L = [
    'M56 78 L130 62', 'M56 78 L130 130', 'M56 182 L130 130', 'M56 182 L130 198',
    'M130 62 L204 104', 'M130 130 L204 104', 'M130 130 L204 156', 'M130 198 L204 156',
  ];
  return (
    <Frame id="dv4">
      <circle cx="130" cy="130" r="96" fill="url(#dv4-glow)" opacity="0.55" className="dv-breathe" style={{ transformOrigin: '130px 130px' }} />
      {L.map((d, i) => (
        <path key={i} d={d} stroke="var(--line-2)" strokeWidth="1.5" />
      ))}
      {/* data pulses along links */}
      {L.map((d, i) => (
        <circle key={`p${i}`} r="3" fill="#D98324">
          <animateMotion dur="2.6s" begin={`${i * 0.33}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
      {/* input nodes */}
      {[[56, 78], [56, 182]].map(([x, y], i) => (
        <circle key={`in${i}`} cx={x} cy={y} r="9" fill="var(--paper-2)" stroke="url(#dv4-amber)" strokeWidth="2.5" filter="url(#dv4-soft)" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.15}s` }} />
      ))}
      {/* hidden layer */}
      {[[130, 62], [130, 198]].map(([x, y], i) => (
        <circle key={`h${i}`} cx={x} cy={y} r="9" fill="var(--paper-2)" stroke="url(#dv4-purple)" strokeWidth="2.5" filter="url(#dv4-soft)" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${0.3 + i * 0.15}s` }} />
      ))}
      {/* glowing core */}
      <circle cx="130" cy="130" r="17" fill="url(#dv4-purple)" filter="url(#dv4-soft)" className="dv-core" style={{ transformOrigin: '130px 130px' }} />
      <circle cx="130" cy="130" r="17" stroke="#9775FF" strokeWidth="2" className="dv-ring" style={{ transformOrigin: '130px 130px' }} />
      {/* output nodes */}
      {[[204, 104], [204, 156]].map(([x, y], i) => (
        <circle key={`o${i}`} cx={x} cy={y} r="9" fill="url(#dv4-amber)" filter="url(#dv4-soft)" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${0.6 + i * 0.15}s` }} />
      ))}
    </Frame>
  );
}

/* 05 — Engineering
   Editor window: chrome bar, syntax-toned lines typing in, cursor blink,
   deploy check sliding in, gentle float. */
function Engineering() {
  return (
    <Frame id="dv5">
      <circle cx="130" cy="126" r="96" fill="url(#dv5-glow)" opacity="0.5" className="dv-breathe" style={{ transformOrigin: '130px 126px' }} />
      <g className="dv-hover" filter="url(#dv5-soft)">
        <rect x="42" y="52" width="176" height="140" rx="14" fill="var(--paper)" stroke="var(--line-2)" strokeWidth="1.5" />
        <path d="M42 84 h176" stroke="var(--line-2)" strokeWidth="1.5" />
        <circle cx="60" cy="68" r="4" fill="#F87171" />
        <circle cx="74" cy="68" r="4" fill="#F2B95C" />
        <circle cx="88" cy="68" r="4" fill="#29DCA4" />
        {/* code lines */}
        <line x1="60" y1="106" x2="128" y2="106" stroke="url(#dv5-purple)" strokeWidth="5" strokeLinecap="round" className="dv-type" />
        <line x1="72" y1="124" x2="168" y2="124" stroke="var(--line-2)" strokeWidth="5" strokeLinecap="round" className="dv-type" style={{ animationDelay: '0.35s' }} />
        <line x1="72" y1="142" x2="148" y2="142" stroke="url(#dv5-blue)" strokeWidth="5" strokeLinecap="round" className="dv-type" style={{ animationDelay: '0.7s' }} />
        <line x1="60" y1="160" x2="112" y2="160" stroke="var(--line-2)" strokeWidth="5" strokeLinecap="round" className="dv-type" style={{ animationDelay: '1.05s' }} />
        <rect x="120" y="154" width="4" height="13" rx="1.5" fill="#6B46E5" className="dv-blink" />
      </g>
      {/* deploy badge */}
      <g className="dv-pop" style={{ transformOrigin: '206px 186px', animationDelay: '1.5s' }}>
        <circle cx="206" cy="186" r="19" fill="url(#dv5-teal)" filter="url(#dv5-soft)" />
        <path d="M197.5 186 l6 6 11 -12.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="206" cy="186" r="19" stroke="#29DCA4" strokeWidth="2" className="dv-ring" style={{ transformOrigin: '206px 186px', animationDelay: '1.6s' }} />
    </Frame>
  );
}

/* 06 — Enterprise Implementation
   System integration: platform-agnostic modules docking into a hub,
   connectors drawing in, data flowing between modules, final check. */
function Implementation() {
  const flows = ['M96 96 L130 130', 'M164 96 L130 130', 'M96 164 L130 130', 'M164 164 L130 130'];
  return (
    <Frame id="dv6">
      <circle cx="130" cy="130" r="98" fill="url(#dv6-glow)" opacity="0.45" className="dv-breathe" style={{ transformOrigin: '130px 130px' }} />
      <rect x="50" y="50" width="160" height="160" rx="18" stroke="var(--line-2)" strokeWidth="1.5" strokeDasharray="6 6" className="dv-rot-dash" />
      {/* connectors */}
      {flows.map((d, i) => (
        <path key={i} d={d} stroke="var(--line-2)" strokeWidth="1.5" className="dv-fade" style={{ animationDelay: `${0.9 + i * 0.1}s` }} />
      ))}
      {flows.map((d, i) => (
        <circle key={`f${i}`} r="2.5" fill="#DC2626">
          <animateMotion dur="1.9s" begin={`${1.4 + i * 0.45}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}
      {/* modules docking in from four directions */}
      <g className="dv-dock-l" filter="url(#dv6-soft)">
        <rect x="66" y="66" width="60" height="60" rx="12" fill="var(--paper)" stroke="url(#dv6-red)" strokeWidth="2.5" />
        <line x1="80" y1="88" x2="112" y2="88" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
        <line x1="80" y1="102" x2="102" y2="102" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" opacity="0.3" />
      </g>
      <g className="dv-dock-r" filter="url(#dv6-soft)">
        <rect x="134" y="66" width="60" height="60" rx="12" fill="var(--paper)" stroke="url(#dv6-purple)" strokeWidth="2.5" />
        <circle cx="164" cy="96" r="13" stroke="#6B46E5" strokeWidth="3" opacity="0.5" />
      </g>
      <g className="dv-dock-b" filter="url(#dv6-soft)">
        <rect x="66" y="134" width="60" height="60" rx="12" fill="var(--paper)" stroke="url(#dv6-blue)" strokeWidth="2.5" />
        <path d="M82 174 l10 -14 8 8 12 -16" stroke="#2A5CD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" fill="none" />
      </g>
      {/* hub module completes the system */}
      <g className="dv-dock-d" filter="url(#dv6-soft)">
        <rect x="134" y="134" width="60" height="60" rx="12" fill="url(#dv6-red)" />
        <path d="M150 164 l9 9 17 -19" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <rect x="134" y="134" width="60" height="60" rx="12" stroke="#DC2626" strokeWidth="2" className="dv-ring" style={{ transformOrigin: '164px 164px', animationDelay: '1.3s' }} />
    </Frame>
  );
}

/* 07 — Managed Services
   Live operations: uptime pulse line streaming (SMIL dot + dash flow),
   radar sweep beam, expanding health rings. */
function Managed() {
  const pulse = 'M36 130 h44 l12 -30 16 60 14 -44 10 14 h72';
  return (
    <Frame id="dv7">
      <circle cx="130" cy="130" r="98" fill="url(#dv7-glow)" opacity="0.5" className="dv-breathe" style={{ transformOrigin: '130px 130px' }} />
      <circle cx="130" cy="130" r="86" stroke="var(--line-2)" strokeWidth="1.5" />
      <circle cx="130" cy="130" r="86" stroke="var(--line-2)" strokeWidth="1.5" strokeDasharray="2 10" className="dv-rot-slow" style={{ transformOrigin: '130px 130px' }} />
      {/* radar sweep beam */}
      <g className="dv-rot-med" style={{ transformOrigin: '130px 130px' }}>
        <path d="M130 130 L130 46 A84 84 0 0 1 172 55 Z" fill="url(#dv7-teal)" opacity="0.16" />
        <line x1="130" y1="130" x2="130" y2="46" stroke="url(#dv7-teal)" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* expanding health rings */}
      <circle cx="130" cy="130" r="28" stroke="#29DCA4" strokeWidth="1.5" className="dv-radar" style={{ transformOrigin: '130px 130px' }} />
      <circle cx="130" cy="130" r="28" stroke="#29DCA4" strokeWidth="1.5" className="dv-radar" style={{ transformOrigin: '130px 130px', animationDelay: '1.5s' }} />
      {/* uptime pulse line */}
      <path d={pulse} stroke="var(--line-2)" strokeWidth="1.5" opacity="0.6" />
      <path d={pulse} stroke="url(#dv7-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="dv-flow" pathLength={100} />
      <circle r="5" fill="#0FA97B" filter="url(#dv7-soft)">
        <animateMotion dur="3.2s" repeatCount="indefinite" path={pulse} />
      </circle>
      {/* monitored nodes on the perimeter */}
      {[[130, 44, 0.3], [204, 172, 0.55], [56, 172, 0.8]].map(([x, y, d]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="6" fill="var(--paper)" stroke="#0FA97B" strokeWidth="2.5" filter="url(#dv7-soft)" className="dv-pop" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${d}s` }} />
      ))}
    </Frame>
  );
}

const VISUALS: Record<string, () => React.ReactElement> = {
  '01': Strategy,
  '02': Product,
  '03': Design,
  '04': AI,
  '05': Engineering,
  '06': Implementation,
  '07': Managed,
};

export default function DisciplineVisual({ num }: { num: string }) {
  const V = VISUALS[num] ?? Strategy;
  return <V />;
}
