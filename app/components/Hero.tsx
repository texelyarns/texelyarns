"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ============================================================
    MAIN HERO SECTION — now with optional openModal prop
   ============================================================ */
export default function Hero({
  openModal,
}: {
  openModal?: () => void;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("shown");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // If no modal handler is passed, clicking falls back to page navigation
  const handleEnquiry = () => {
    if (openModal) openModal();
    else window.location.href = "/enquire";
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[url('/images/hero.png')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      <ThreadParticles />

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl reveal">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Premium Quality Cotton Yarn Manufacturing
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700">
          Texel Yarns LLP — delivering exceptional yarn crafted with precision,
          consistency, and cutting-edge textile engineering.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="px-8 py-3 border bg-brand-secondary text-white rounded-lg shadow hover:bg-brand-primary/90 transition"
          >
            Explore Products
          </a>

          {/* UPDATED BUTTON — now triggers modal if provided */}
          <button
            onClick={handleEnquiry}
            className="px-8 py-3 border bg-brand-primary-light/40 text-white rounded-lg hover:bg-brand-primary/70 transition"
          >
            Place an Enquiry
          </button>
        </div>

        <div className="mt-20 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-brand-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* ROTATING SPOOL */}
      <motion.div
        className="absolute bottom-10 right-10 opacity-100 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/images/yarn_spool.png"
          alt="Yarn spool"
          width={180}
          height={180}
          className="drop-shadow-lg"
        />
      </motion.div>
    </section>
  );
}

/* ============================================================
    FLOATING THREAD PARTICLES (unchanged)
   ============================================================ */
function ThreadParticles() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    setMounted(true);

    const count = 18;
    const arr: { x: number; y: number }[] = [];

    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }

    setParticles(arr);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-12 h-0.5 bg-brand-primary/90 rounded-full"
          initial={{
            x: p.x,
            y: p.y,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [p.y, p.y - 200],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
