"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type Step = { id: number; title: string; short: string };

const STEPS: Step[] = [
  { id: 0, title: "Raw Fibers", short: "Cotton & Polyester" },
  { id: 1, title: "Mixing", short: "Blending to spec" },
  { id: 2, title: "Opening & Blending", short: "Open & homogenize" },
  { id: 3, title: "Carding", short: "Form sliver" },
  { id: 4, title: "Drawing", short: "Draft for uniformity" },
  { id: 5, title: "OE Spinning", short: "Open-End rotor spinning" },
  { id: 6, title: "Winding", short: "Cone/package formation" },
  { id: 7, title: "Weighing & Packing", short: "QC, pack & weigh" },
  { id: 8, title: "Shipping", short: "Dispatch to customer" },
];

const PLACEHOLDER_LOGO = "/images/texel_logo.png";

export default function ProductionWheel() {
  // hydration-safe viewport detection
  const [hydrated, setHydrated] = useState(false);
  const [vw, setVw] = useState(360);

  useEffect(() => {
    setHydrated(true);
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const FULL = hydrated ? Math.min(vw * 0.9, 380) : 380; // total box (number)
  const RADIUS = FULL / 2 - 40; // numeric radius used for math
  const ICON_SIZE = hydrated ? Math.max(22, FULL * 0.09) : 32;
  const CENTER = hydrated ? FULL * 0.42 : 160;

  // state + animation controllers
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const outerCtrl = useAnimation();
  const innerCtrl = useAnimation();
  const baseRotRef = useRef({ outer: 0, inner: 0 });
  const autoRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);

  const OUTER_BASE_SPEED = 6;
  const INNER_BASE_SPEED = -3;
  const STEP_INTERVAL_MS = 1200;

  // Rotation loop
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        baseRotRef.current.outer =
          (baseRotRef.current.outer + OUTER_BASE_SPEED * dt) % 360;
        baseRotRef.current.inner =
          (baseRotRef.current.inner + INNER_BASE_SPEED * dt) % 360;
      }

      const anglePer = 360 / STEPS.length;
      const focus = -active * anglePer;

      outerCtrl.start({
        rotate: focus + baseRotRef.current.outer,
        transition: { duration: 0.45, ease: "linear" },
      });
      innerCtrl.start({
        rotate: focus * -0.5 + baseRotRef.current.inner,
        transition: { duration: 0.5, ease: "linear" },
      });

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused, outerCtrl, innerCtrl]);

  // Auto-advance
  useEffect(() => {
    autoRef.current = window.setInterval(() => {
      if (!paused) setActive((s) => (s + 1) % STEPS.length);
    }, STEP_INTERVAL_MS);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [paused]);

  function clearResume() {
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }
  function handleHoverIn() {
    setPaused(true);
    clearResume();
  }
  function handleHoverOut() {
    clearResume();
    resumeRef.current = window.setTimeout(() => setPaused(false), 1500);
  }
  function select(i: number) {
    setActive(i);
    setPaused(true);
    clearResume();
    resumeRef.current = window.setTimeout(() => setPaused(false), 4000);
  }

  // themed duotone icons
  const primaryFill = "var(--theme-brand-primary)";
  const secondaryStroke = "var(--theme-brand-secondary)";
  const Icon = ({ idx }: { idx: number }) => {
    const fill = primaryFill;
    const stroke = secondaryStroke;
    const size = ICON_SIZE;
    switch (idx) {
      case 0:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <g fill={fill} fillOpacity="0.18">
              <circle cx="12" cy="11" r="5" />
            </g>
            <path d="M7 11c-1-1-1-3 1-4 2-1 3 0 4 0s2-1 4-1 3 1 3 3c0 2-2 2-3 3" stroke={stroke} strokeWidth="1.2" />
          </svg>
        );
      // ... other icons (kept small for brevity) ...
      case 5:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" fill={fill} fillOpacity="0.12" />
            <path d="M8 12a4 4 0 008 0" stroke={stroke} strokeWidth="1.4" />
          </svg>
        );
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" fill={fill} fillOpacity="0.12" />
          </svg>
        );
    }
  };

  // Convert numeric pixel center into the transformOrigin string used by CSS transforms.
  const transformOriginPx = `${FULL / 2}px ${FULL / 2}px`;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Production Flow</h2>
        <p className="text-neutral-600 max-w-2xl mb-8">
          High-quality yarn manufactured using cotton and polyester blends. Hover or tap a stage to explore the process.
        </p>

        {/* container sized by FULL (numeric). center & relative so absolute children align */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{ 
            width: FULL, 
            height: FULL 
          }}
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          {/* OUTER rotating container.
              >>> CRITICAL: use pixel transformOrigin (not 'center') to match math coordinates.
          */}
          <motion.div
            animate={outerCtrl}
            className="absolute left-0 top-0"
            style={{
              width: FULL,
              height: FULL,
              transformOrigin: transformOriginPx, // <-- precise center origin in px
            }}
          >
            {/* outer glow / ring */}
            <svg width={FULL} height={FULL}>
              <defs>
                <radialGradient id="pwGrad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor={primaryFill} stopOpacity="0.06" />
                  <stop offset="100%" stopColor={primaryFill} stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle
                cx={FULL / 2}
                cy={FULL / 2}
                r={RADIUS}
                fill="url(#pwGrad)"
                stroke={secondaryStroke}
                strokeOpacity={0.06}
                strokeWidth={1}
              />
            </svg>

            {/* icons positioned by numeric math (same FULL / RADIUS used above) */}
            <div style={{ width: FULL, height: FULL, position: "relative" }}>
              {STEPS.map((s, i) => {
                const angle = (360 / STEPS.length) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const x = FULL / 2 + (RADIUS - 30) * Math.cos(rad);
                const y = FULL / 2 + (RADIUS - 30) * Math.sin(rad);
                const activeFlag = i === active;

                return (
                  <button
                    key={s.id}
                    onClick={() => select(i)}
                    onMouseEnter={() => {
                      setPaused(true);
                      setActive(i);
                      clearResume();
                    }}
                    onMouseLeave={() => {
                      clearResume();
                      resumeRef.current = window.setTimeout(() => setPaused(false), 1200);
                    }}
                    aria-label={s.title}
                    className="absolute rounded-full flex items-center justify-center"
                    style={{
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                      width: ICON_SIZE * 1.8,
                      height: ICON_SIZE * 1.8,
                      background: activeFlag ? `linear-gradient(180deg, ${primaryFill}22, ${primaryFill}11)` : `linear-gradient(180deg, ${primaryFill}11, ${primaryFill}06)`,
                      border: `1px solid ${secondaryStroke}26`,
                      boxShadow: activeFlag ? "0 8px 24px rgba(0,0,0,0.15)" : "none",
                    }}
                  >
                    <Icon idx={i} />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* INNER ring — also use the exact same pixel origin */}
          <motion.div
            animate={innerCtrl}
            className="absolute pointer-events-none flex items-center justify-center"
            style={{
              width: FULL,
              height: FULL,
              transformOrigin: transformOriginPx, // <-- keep same origin
            }}
          >
            <svg width={FULL * 0.65} height={FULL * 0.65}>
              <circle
                cx={(FULL * 0.65) / 2}
                cy={(FULL * 0.65) / 2}
                r={(FULL * 0.65) / 2 - 6}
                fill="none"
                stroke={secondaryStroke}
                strokeDasharray="10 18"
                strokeWidth={6}
                strokeOpacity={0.12}
              />
            </svg>
          </motion.div>

          {/* CENTER hub - sits directly above the rotating layers */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center"
            style={{ width: CENTER, height: CENTER }}
          >
            <div
              className="rounded-full overflow-hidden bg-white border border-neutral-200 flex items-center justify-center"
              style={{
                width: CENTER * 0.9,
                height: CENTER * 0.9,
                boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
              }}
            >
              <Image src={PLACEHOLDER_LOGO} alt="Logo" width={CENTER * 0.6} height={CENTER * 0.6} style={{ objectFit: "contain" }} />
            </div>

            <div className="mt-4">
              <div className="text-xs text-neutral-500">Stage</div>
              <div className="text-lg font-semibold text-gray-900">{STEPS[active].title}</div>
              <div className="text-sm text-neutral-600">{STEPS[active].short}</div>
            </div>
          </div>
        </div>

        {/* Legend list */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {STEPS.map((s, i) => {
            const selected = i === active;
            return (
              <button key={s.id} onClick={() => select(i)} className={`p-3 text-left rounded-lg border transition ${selected ? "border-brand-primary/30 bg-brand-primary/5" : "border-neutral-200 bg-white"}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: selected ? "var(--theme-brand-primary)22" : "transparent" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="7" fill={selected ? "var(--theme-brand-primary)" : "transparent"} fillOpacity={0.12} />
                      <path d="M6 12c1-2 3-3 6-3s5 1 6 3" stroke="var(--theme-brand-secondary)" strokeWidth="1.2" />
                    </svg>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-900">{s.title}</div>
                    <div className="text-xs text-neutral-500">{s.short}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
