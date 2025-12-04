"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

/**
 * ProductionWheel.tsx (final)
 *
 * - Duotone icons embedded inline
 * - Dual-ring rotation (outer + inner)
 * - Decoupled rotation math to avoid jitter: rotate = baseRotation + focusRotation
 * - Auto-rotate until user interacts; hover pauses; click selects and pauses; resumes after inactivity
 * - Theme-aware (uses CSS vars set by ThemeLoader)
 *
 * Placeholder center logo: uses uploaded image path (replace with final logo later)
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

// Placeholder logo — replace with final logo path later.
// Using uploaded file path as requested (toolchain will map it into served URL).
const PLACEHOLDER_LOGO = "/images/texel_logo.png";

export default function ProductionWheel() {
  const [active, setActive] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const autoRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);
  const mounted = useRef(false);

  const outerCtrl = useAnimation();
  const innerCtrl = useAnimation();

  // Rotation parameters
  const OUTER_BASE_SPEED = 6; // deg/sec base spin
  const INNER_BASE_SPEED = -3; // deg/sec inner counter spin
  const STEP_INTERVAL_MS = 1200; // auto advance step every 1.2s


  // geometry (responsive)
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 640 : false;
  const isTablet =
    typeof window !== "undefined" ? window.innerWidth >= 640 && window.innerWidth < 1024 : false;

  const RADIUS = isMobile ? 140 : isTablet ? 240 : 360;
  const ICON_SIZE = isMobile ? 26 : isTablet ? 32 : 44;
  const CENTER_SIZE = isMobile ? 70 : isTablet ? 100 : 140;

  // // geometry
  // const RADIUS = 360;
  // const CENTER_SIZE = 140;
  // const ICON_SIZE = 44;

  // helper: CSS var colors
  const primaryFill = "var(--theme-brand-primary, #0A4D68)";
  const secondaryStroke = "var(--theme-brand-secondary, #088395)";

  // generate continuous base rotation using requestAnimationFrame (no jitter)
  const baseRotRef = useRef({ outer: 0, inner: 0 });
  useEffect(() => {
    mounted.current = true;
    let raf = 0;
    let last = performance.now();

    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        baseRotRef.current.outer = (baseRotRef.current.outer + OUTER_BASE_SPEED * dt) % 360;
        baseRotRef.current.inner = (baseRotRef.current.inner + INNER_BASE_SPEED * dt) % 360;
      }

      // compute desired focusRotation so active step sits at top
      const anglePer = 360 / STEPS.length;
      const focusAngle = -active * anglePer; // focus rotation

      // combine rotations
      const outerTotal = focusAngle + baseRotRef.current.outer;
      const innerTotal = focusAngle * -0.5 + baseRotRef.current.inner;

      // animate to combined rotation (smooth)
      outerCtrl.start({ rotate: outerTotal, transition: { duration: 0.45, ease: "linear" } }).catch(() => {});
      innerCtrl.start({ rotate: innerTotal, transition: { duration: 0.5, ease: "linear" } }).catch(() => {});

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      mounted.current = false;
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, active]);

  // Auto-advance steps
  useEffect(() => {
    startAutoAdvance();
    return () => {
      stopAutoAdvance();
      clearResumeTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAutoAdvance() {
    if (autoRef.current) return;
    autoRef.current = window.setInterval(() => {
      if (!paused) setActive((s) => (s + 1) % STEPS.length);
    }, STEP_INTERVAL_MS);
  }

  function stopAutoAdvance() {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }

  function clearResumeTimer() {
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }

  // pause on hover; don't set active on hover (prevents jump)
  function handlePointerEnter() {
    setPaused(true);
    clearResumeTimer();
  }

  function handlePointerLeave() {
    // resume shortly after mouse leaves
    clearResumeTimer();
    resumeRef.current = window.setTimeout(() => {
      setPaused(false);
    }, 1600);
  }

  // user selection via click (pauses longer)
  function onSelect(index: number) {
    setActive(index);
    setPaused(true);
    clearResumeTimer();
    resumeRef.current = window.setTimeout(() => {
      setPaused(false);
    }, 5000);
  }

  // SVG Duotone icons (returns JSX) - minimal, semantic, lightweight
  const Icon = ({ idx }: { idx: number }) => {
    const fill = primaryFill;
    const stroke = secondaryStroke;
    const commonProps = { fill, stroke };

    switch (idx) {
      case 0: // Raw Fibers - cotton + polyester (boll + fiber)
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <g fill={fill} fillOpacity="0.18">
              <circle cx="12" cy="11" r="5" />
            </g>
            <path d="M7 11c-1-1-1-3 1-4 2-1 3 0 4 0s2-1 4-1 3 1 3 3c0 2-2 2-3 3" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M12 16v4" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );
      case 1: // Mixing - paddle / mixer
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="3" width="16" height="6" rx="1.5" fill={fill} fillOpacity="0.12" />
            <path d="M8 9v7l4 2 4-2V9" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="12" cy="5" r="0.75" fill={stroke} />
          </svg>
        );
      case 2: // Opening & Blending - rollers
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="7" width="18" height="3" rx="0.9" fill={fill} fillOpacity="0.12" />
            <path d="M6 10v5M9 10v6M12 10v5M15 10v6M18 10v5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
      case 3: // Carding - cylinder
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="10" rx="7" ry="3" fill={fill} fillOpacity="0.12" />
            <rect x="6" y="8" width="12" height="8" rx="2" stroke={stroke} strokeWidth="1.2" fill="none" />
            <path d="M7 12h10" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );
      case 4: // Drawing - drafting rollers
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="9" r="2.5" fill={fill} fillOpacity="0.12" />
            <circle cx="17" cy="9" r="2.5" fill={fill} fillOpacity="0.12" />
            <path d="M9 9h6v6H9z" stroke={stroke} strokeWidth="1.3" fill="none" />
            <path d="M9 15v2M15 15v2" stroke={stroke} strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        );
      case 5: // OE Spinning - rotor bowl
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="6" fill={fill} fillOpacity="0.12" />
            <path d="M8 12a4 4 0 008 0" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 8v8" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );
      case 6: // Winding - cone
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,5 18,19 6,19" fill={fill} fillOpacity="0.12" />
            <path d="M12 7v10" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <path d="M10 17h4" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );
      case 7: // Weighing & Packing - scale + box
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="9" width="12" height="8" rx="1.2" fill={fill} fillOpacity="0.12" />
            <path d="M8 9v-2h8v2" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 13v2" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
      case 8: // Shipping - truck
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="14" height="7" rx="1" fill={fill} fillOpacity="0.12" />
            <path d="M16 9h4l2 3v3" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="7" cy="17" r="1.6" fill={stroke} />
            <circle cx="18" cy="17" r="1.6" fill={stroke} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Production Flow</h2>
        <p className="text-neutral-600 max-w-2xl mb-8">
          High-quality yarn manufactured using cotton and polyester blends. Hover or click a stage for details — the wheel pauses when you interact.
        </p>

        <div
          // className="relative mx-auto"
          // style={{ width: RADIUS * 2 + 80, height: RADIUS * 2 + 80 }}
          className="relative mx-auto"
          style={{
            width: RADIUS * 2 + (isMobile ? 20 : 80),
            height: RADIUS * 2 + (isMobile ? 20 : 80),
          }}
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
        >
          {/* Outer rotating ring container */}
          <motion.div
            animate={outerCtrl}
            className="absolute left-0 top-0"
            style={{
              // width: RADIUS * 2 + 80,
              // height: RADIUS * 2 + 80,
              width: RADIUS * 2 + (isMobile ? 20 : 80),
              height: RADIUS * 2 + (isMobile ? 20 : 80),
              transformOrigin: "center",
            }}
            aria-hidden
          >
            <svg width={RADIUS * 2 + 80} height={RADIUS * 2 + 80} viewBox={`0 0 ${RADIUS * 2 + 80} ${RADIUS * 2 + 80}`} className="absolute left-0 top-0">
              <defs>
                <radialGradient id="pwGrad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor={primaryFill} stopOpacity="0.06" />
                  <stop offset="100%" stopColor={primaryFill} stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx={(RADIUS + 40)} cy={(RADIUS + 40)} r={RADIUS} fill="url(#pwGrad)" stroke={secondaryStroke} strokeOpacity="0.06" strokeWidth="1" />
            </svg>

            <div style={{ width: RADIUS * 2 + 80, height: RADIUS * 2 + 80, position: "relative" }}>
              {STEPS.map((s, i) => {
                const angle = (360 / STEPS.length) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const cx = (RADIUS + 40) + (RADIUS - 48) * Math.cos(rad);
                const cy = (RADIUS + 40) + (RADIUS - 48) * Math.sin(rad);
                const isActive = i === active;

                return (
                  <div
                    key={s.id}
                    style={{
                      position: "absolute",
                      left: cx,
                      top: cy,
                      transform: "translate(-50%, -50%)",
                      zIndex: isActive ? 40 : 20,
                    }}
                  >
                    <button
                      onClick={() => onSelect(i)}
                      onMouseEnter={() => {
                        // on hover, only pause and preview (do not change active permanently)
                        setPaused(true);
                        clearResumeTimer();
                        // temporarily show title in center by setting active briefly
                        setActive(i);
                      }}
                      onMouseLeave={() => {
                        // schedule resume; do not force active change
                        clearResumeTimer();
                        resumeRef.current = window.setTimeout(() => setPaused(false), 1000);
                      }}
                      aria-label={`${s.title}`}
                      className="flex flex-col items-center gap-2 focus:outline-none"
                      style={{ width: ICON_SIZE * 2, height: ICON_SIZE * 2, background: "transparent", border: "none", padding: 0 }}
                    >
                      <div
                        style={{
                          width: isActive ? ICON_SIZE * 1.9 : ICON_SIZE * 1.5,
                          height: isActive ? ICON_SIZE * 1.9 : ICON_SIZE * 1.5,
                          borderRadius: 999,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 220ms ease",
                          background: `linear-gradient(180deg, ${primaryFill}22, ${primaryFill}08)`,
                          boxShadow: isActive ? "0 10px 30px rgba(2,6,23,0.12)" : "none",
                          border: `1px solid ${secondaryStroke}33`,
                        }}
                      >
                        <Icon idx={i} />
                      </div>

                      <div className="hidden md:block text-xs text-center" style={{ width: 120 }}>
                        <div className={`truncate ${isActive ? "font-semibold text-gray-900" : "text-neutral-500"}`}>{s.title}</div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Inner ring (counter-rotating) */}
          <motion.div
            animate={innerCtrl}
            className="absolute left-0 top-0 pointer-events-none"
            style={{
              width: RADIUS * 2 + 80,
              height: RADIUS * 2 + 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformOrigin: "center",
            }}
            aria-hidden
          >
            <svg width={RADIUS * 1.2} height={RADIUS * 1.2} viewBox={`0 0 ${RADIUS * 1.2} ${RADIUS * 1.2}`}>
              <defs>
                <linearGradient id="innerLine" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor={secondaryStroke} stopOpacity="0.16" />
                  <stop offset="100%" stopColor={primaryFill} stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <circle cx={(RADIUS * 1.2) / 2} cy={(RADIUS * 1.2) / 2} r={(RADIUS * 1.2) / 2 - 6} fill="none" stroke="url(#innerLine)" strokeWidth={6} strokeDasharray="10 18" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Center hub */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center"
            // style={{ width: CENTER_SIZE + 100, height: CENTER_SIZE + 120 }}
            style={{
              width: CENTER_SIZE + (isMobile ? 20 : 100),
              height: CENTER_SIZE + (isMobile ? 40 : 120),
            }}
          >
            <div
              className="rounded-full overflow-hidden bg-white border border-neutral-100 flex items-center justify-center"
              style={{
                width: CENTER_SIZE,
                height: CENTER_SIZE,
                boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
              }}
            >
              {/* <Image src={PLACEHOLDER_LOGO} alt="Company logo placeholder" width={100} height={100} style={{ objectFit: "contain" }} /> */}
              <Image
                src={PLACEHOLDER_LOGO}
                alt="Company logo placeholder"
                width={CENTER_SIZE * 0.8}
                height={CENTER_SIZE * 0.8}
                style={{ objectFit: "contain" }}
              />

            </div>

            <div className="mt-4 max-w-[360px]">
              <div className="text-xs text-neutral-500">Stage</div>
              <div className="text-lg md:text-xl font-semibold text-gray-900">{STEPS[active].title}</div>
              <div className="mt-1 text-sm text-neutral-600">{STEPS[active].short}</div>
            </div>
          </div>
        </div>

        {/* Legend list for direct access */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => onSelect(i)}
              className={`text-left p-3 rounded-lg transition border ${
                i === active ? "border-brand-primary/30 bg-brand-primary/5" : "border-neutral-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: i === active ? "var(--theme-brand-primary, #0A4D68)16" : "transparent" }}>
                  {/* small icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="7" fill={i === active ? "var(--theme-brand-primary)" : "transparent"} fillOpacity={0.12} />
                    <path d="M6 12c1-2 3-3 6-3s5 1 6 3" stroke="var(--theme-brand-secondary)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-900">{s.title}</div>
                  <div className="text-xs text-neutral-500">{s.short}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
