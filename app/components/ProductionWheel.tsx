"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type Step = {
  id: number;
  title: string;
  short: string;
};

const STEPS: Step[] = [
  { id: 0, title: "Raw Fibers", short: "Cotton & Polyester" },
  { id: 1, title: "Mixing", short: "Blending to spec" },
  { id: 2, title: "Opening/Blending", short: "Open & homogenize" },
  { id: 3, title: "Carding", short: "Form sliver" },
  { id: 4, title: "Drawing", short: "Draft for uniformity" },
  { id: 5, title: "OE Spinning", short: "Open-End rotor spinning" },
  { id: 6, title: "Winding", short: "Cone/package formation" },
  { id: 7, title: "Weighing/Packing", short: "QC, pack & weigh" },
  { id: 8, title: "Shipping", short: "Dispatch to customer" },
];

const PLACEHOLDER_LOGO = "/images/texel_logo.png";

export default function ProductionWheel() {
  const [hydrated, setHydrated] = useState(false);
  const [vw, setVw] = useState(360);

  useEffect(() => {
    setHydrated(true);
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Final perfect geometry
  // const FULL = Math.min(vw * 0.9, 360);     // keep smaller for stable center
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(320);
  // const FULL = containerWidth * 0.95
  const FULL = Math.min(containerWidth * 0.95, 360); 
  const RADIUS = FULL / 2 - 15;
  const ICON_SIZE = FULL * 0.10;
  // const CENTER_SIZE = FULL * 0.40;          // smaller for stability
  const centerRef = useRef<number | null>(null);

  useEffect(() => {
    if (containerWidth && !centerRef.current) {
      centerRef.current = Math.min(containerWidth * 0.38, 140); 
    }
  }, [containerWidth]);

  const CENTER_SIZE = centerRef.current ?? 120; // fallback for S

  // Animation state
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const outerCtrl = useAnimation();
  const innerCtrl = useAnimation();

  const baseRotRef = useRef({ outer: 0, inner: 0 });
  const autoRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);

  const OUTER_SPEED = 6;
  const INNER_SPEED = -3;

  
  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setContainerWidth(w);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);


  // Continuous rotation loop
  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        baseRotRef.current.outer =
          (baseRotRef.current.outer + OUTER_SPEED * dt) % 360;

        baseRotRef.current.inner =
          (baseRotRef.current.inner + INNER_SPEED * dt) % 360;
      }

      const per = 360 / STEPS.length;
      const focus = -active * per;

      outerCtrl.start({
        rotate: focus + baseRotRef.current.outer,
        transition: { duration: 0.45, ease: "linear" },
      });

      innerCtrl.start({
        rotate: (focus * -0.5) + baseRotRef.current.inner,
        transition: { duration: 0.50, ease: "linear" },
      });

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active, paused]);

  // Auto-step
  useEffect(() => {
    autoRef.current = window.setInterval(() => {
      if (!paused) setActive((prev) => (prev + 1) % STEPS.length);
    }, 1200);

    return () => { 
      autoRef.current && clearInterval(autoRef.current);
    };
  }, [paused]);

  function pauseTemporarily() {
    setPaused(true);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => setPaused(false), 2500);
  }

  const primaryFill = "var(--theme-brand-primary)";
  const secondaryStroke = "var(--theme-brand-secondary)";

  const Icon = ({ idx }: { idx: number }) => {
    const fill = primaryFill;
    const stroke = secondaryStroke;
    // return (
    //   <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
    //     <circle cx="12" cy="12" r="6" fill={fill} fillOpacity={0.18} />
    //     <path d="M8 12a4 4 0 0 0 8 0" stroke={stroke} strokeWidth="1.4" />
    //   </svg>
    // );
    switch (idx) {
      case 0:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <g fill={fill} fillOpacity="0.18">
              <circle cx="12" cy="11" r="5" />
            </g>
            <path
              d="M7 11c-1-1-1-3 1-4 2-1 3 0 4 0s2-1 4-1 3 1 3 3c0 2-2 2-3 3"
              stroke={stroke}
            />
          </svg>
        );
      case 1:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="6" fill={fill} />
            <path d="M8 9v7l4 2 4-2V9" stroke={stroke} />
          </svg>
        );
      case 2:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="3" fill={fill} />
            <path d="M6 10v6M9 10v6M12 10v6" stroke={stroke} />
          </svg>
        );
      case 3:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <ellipse cx="12" cy="10" rx="7" ry="3" fill={fill} />
            <rect x="6" y="8" width="12" height="8" stroke={stroke} />
          </svg>
        );
      case 4:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <circle cx="7" cy="9" r="2.5" fill={fill} />
            <circle cx="17" cy="9" r="2.5" fill={fill} />
            <path d="M9 9h6v6H9z" stroke={stroke} />
          </svg>
        );
      case 5:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" fill={fill} />
            <path d="M8 12a4 4 0 008 0" stroke={stroke} />
          </svg>
        );
      case 6:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <polygon points="12,5 18,19 6,19" fill={fill} />
            <path d="M12 7v10" stroke={stroke} />
          </svg>
        );
      case 7:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <rect x="6" y="9" width="12" height="8" fill={fill} />
            <path d="M12 13v2" stroke={stroke} />
          </svg>
        );
      case 8:
        return (
          <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
            <rect x="2" y="7" width="14" height="7" fill={fill} />
            <path d="M16 9h4l2 3v3" stroke={stroke} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Our Production Flow
        </h2>
        <p className="text-neutral-600 max-w-2xl mb-8">
          High-quality yarn manufactured using cotton and polyester blends.
          Hover or tap a stage to explore the process.
        </p>

        {/* ===== WHEEL WRAPPER (Perfect Centering) ===== */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{
            width: FULL,
            height: FULL,
            position: "relative",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => pauseTemporarily()}
        >
          {/* OUTER ROTATING RING */}
          <motion.div
            animate={outerCtrl}
            style={{
              position: "absolute",
              inset: 0,
              transformOrigin: "center center",
            }}
          >
            <svg width={FULL} height={FULL}>
              <defs>
                <radialGradient id="pwGrad">
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
                strokeOpacity="0.06"
                strokeWidth={1}
              />
            </svg>

            {/* Icon Orbit Layer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "auto",
              }}
            >
              {STEPS.map((s, i) => {
                const angle = (360 / STEPS.length) * i - 90;
                const rad = (angle * Math.PI) / 180;

                const x = FULL / 2 + RADIUS * Math.cos(rad);
                const y = FULL / 2 + RADIUS * Math.sin(rad);

                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActive(i);
                      pauseTemporarily();
                    }}
                    className="absolute rounded-full flex items-center justify-center"
                    style={{
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                      width: ICON_SIZE * 1.6,
                      height: ICON_SIZE * 1.6,
                      background: i === active
                        ? `${primaryFill}22`
                        : `${primaryFill}11`,
                      border: `1px solid ${secondaryStroke}33`,
                    }}
                  >
                    <Icon idx={i} />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* INNER RING */}
          <motion.div
            animate={innerCtrl}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformOrigin: "center center",
            }}
          >
            <svg width={FULL * 0.65} height={FULL * 0.65}>
              <circle
                cx={(FULL * 0.65) / 2}
                cy={(FULL * 0.65) / 2}
                r={(FULL * 0.65) / 2 - 5}
                stroke={secondaryStroke}
                strokeWidth={6}
                strokeOpacity="0.15"
                strokeDasharray="12 18"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* CENTER HUB — now stable */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: CENTER_SIZE,
              height: CENTER_SIZE,
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-md"
              style={{
                width: CENTER_SIZE * 0.9,
                height: CENTER_SIZE * 0.9,
                overflow: "hidden",
              }}
            >
              <Image
                src={PLACEHOLDER_LOGO}
                alt="Logo"
                width={CENTER_SIZE * 1}
                height={CENTER_SIZE * 0.6}
                priority
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* <div className="mt-4 text-center">
              <div className="text-xs text-neutral-500">Stage</div>
              <div className="text-lg font-semibold">{STEPS[active].title}</div>
              <div className="text-sm text-neutral-600">
                {STEPS[active].short}
              </div>
            </div> */}
            <div className="mt-3 text-center" style={{ height: 24 }}>
              <div className="text-sm font-semibold text-gray-900">
                {STEPS[active].title}
              </div>
            </div>
          </div>
        </div>

        {/* LEGEND */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setActive(i);
                pauseTemporarily();
              }}
              className={`p-3 text-left rounded-lg border transition ${
                i === active
                  ? "border-brand-primary/30 bg-brand-primary/5"
                  : "border-neutral-200 bg-white"
              }`}
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
