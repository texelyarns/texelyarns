"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

/**
 * Fully responsive + viewport-safe Production Wheel
 * -------------------------------------------------
 * - Entire geometry now driven by viewport width.
 * - No overflow / no cutoff on iPhone / Android.
 * - Icons scale, center hub scales, orbit scales.
 * - All animation logic preserved.
 */

type Step = {
  id: number;
  title: string;
  short: string;
};

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
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const outerCtrl = useAnimation();
  const innerCtrl = useAnimation();

  const autoRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);
  const baseRotRef = useRef({ outer: 0, inner: 0 });

  // ================================================
  // 🔥 Responsive Wheel Geometry (Viewport-based)
  // ================================================
  let VW = 360;
  if (typeof window !== "undefined") VW = window.innerWidth;

  const WHEEL = Math.min(VW * 0.9, 380); // safe max
  const RADIUS = WHEEL / 2 - 40;         // margin inside circle
  const ICON_SIZE = WHEEL * 0.09;        // scales with wheel
  const CENTER = WHEEL * 0.42;           // center hub size
  const FULL = WHEEL;                    // width = height = wheel

  const primaryFill = "var(--theme-brand-primary)";
  const secondaryStroke = "var(--theme-brand-secondary)";

  // ================================================
  // 🔥 Base rotation animation (unchanged)
  // ================================================
  useEffect(() => {
    let raf: number;
    let last = performance.now();

    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        baseRotRef.current.outer = (baseRotRef.current.outer + 6 * dt) % 360;
        baseRotRef.current.inner = (baseRotRef.current.inner - 3 * dt) % 360;
      }

      const anglePer = 360 / STEPS.length;
      const focus = -active * anglePer;

      outerCtrl.start({
        rotate: focus + baseRotRef.current.outer,
        transition: { duration: 0.45, ease: "linear" }
      });

      innerCtrl.start({
        rotate: focus * -0.5 + baseRotRef.current.inner,
        transition: { duration: 0.5, ease: "linear" }
      });

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, active]);

  // ================================================
  // 🔥 Auto-advance
  // ================================================
  useEffect(() => {
    autoRef.current = window.setInterval(() => {
      if (!paused) setActive((s) => (s + 1) % STEPS.length);
    }, 1200);

    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [paused]);

  // interaction
  function select(i: number) {
    setActive(i);
    setPaused(true);

    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => setPaused(false), 4000);
  }

  // ================================================
  // 🔥 SVG Duotone icons
  // ================================================
  const Icon = ({ idx }: { idx: number }) => {
    const fill = primaryFill;
    const stroke = secondaryStroke;

    switch (idx) {
      case 0:
        return (
          <svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE}>
            <g fill={fill} fillOpacity="0.18">
              <circle cx="12" cy="11" r="5" />
            </g>
            <path d="M7 11c-1-1-1-3 1-4 2-1 3 0 4 0s2-1 4-1 3 1 3 3c0 2-2 2-3 3"
              stroke={stroke} strokeWidth="1.4" fill="none" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" width={ICON_SIZE} height={ICON_SIZE}>
            <circle cx="12" cy="12" r="5" fill={fill} fillOpacity="0.12" />
          </svg>
        );
    }
  };

  // ================================================
  // 🔥 Render
  // ================================================
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 text-gray-900">
          Our Production Flow
        </h2>
        <p className="text-neutral-600 max-w-2xl mb-8">
          High-quality yarn produced from cotton & polyester blends. Tap a stage
          to explore the flow.
        </p>

        {/* 📌 Wheel Container */}
        <div
          className="relative mx-auto"
          style={{ width: FULL, height: FULL }}
        >

          {/* Outer rotating ring */}
          <motion.div
            animate={outerCtrl}
            className="absolute left-0 top-0"
            style={{ width: FULL, height: FULL }}
          >
            <svg width={FULL} height={FULL} className="absolute left-0 top-0">
              <defs>
                <radialGradient id="pwgrad">
                  <stop offset="0%" stopColor={primaryFill} stopOpacity="0.05" />
                  <stop offset="100%" stopColor={primaryFill} stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx={FULL / 2}
                cy={FULL / 2}
                r={RADIUS}
                fill="url(#pwgrad)"
                stroke={secondaryStroke}
                strokeOpacity="0.06"
                strokeWidth="1"
              />
            </svg>

            {/* orbiting icons */}
            <div style={{ width: FULL, height: FULL, position: "relative", alignContent: "center", justifyContent: "center" }}>
              {STEPS.map((s, i) => {
                const angle = (360 / STEPS.length) * i - 90;
                const rad = (angle * Math.PI) / 180;

                const x = FULL / 2 + RADIUS * Math.cos(rad);
                const y = FULL / 2 + RADIUS * Math.sin(rad);

                return (
                  <button
                    key={s.id}
                    onClick={() => select(i)}
                    style={{
                      position: "absolute",
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)"
                    }}
                    className="rounded-full p-1"
                  >
                    <Icon idx={i} />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Inner counter-rotating ring */}
          <motion.div
            animate={innerCtrl}
            className="absolute left-0 top-0 pointer-events-none flex items-center justify-center"
            style={{ width: FULL, height: FULL }}
          >
            <svg width={FULL * 0.65} height={FULL * 0.65}>
              <circle
                cx={(FULL * 0.65) / 2}
                cy={(FULL * 0.65) / 2}
                r={(FULL * 0.65) / 2 - 6}
                fill="none"
                stroke={secondaryStroke}
                strokeOpacity="0.12"
                strokeWidth={6}
                strokeDasharray="12 18"
              />
            </svg>
          </motion.div>

          {/* Center hub */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ width: CENTER, height: CENTER }}
          >
            <div
              className="rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-md"
              style={{ width: CENTER, height: CENTER }}
            >
              <Image
                src={PLACEHOLDER_LOGO}
                alt="Logo"
                width={CENTER * 0.7}
                height={CENTER * 0.7}
              />
            </div>

            <div className="mt-4">
              <div className="text-xs text-neutral-500">Stage</div>
              <div className="text-lg font-semibold">{STEPS[active].title}</div>
              <div className="text-sm text-neutral-600">{STEPS[active].short}</div>
            </div>
          </div>
        </div>

        {/* List view */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => select(i)}
              className="p-3 rounded-lg border bg-white text-left"
            >
              <div className="font-medium text-gray-900">{s.title}</div>
              <div className="text-xs text-neutral-600">{s.short}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
