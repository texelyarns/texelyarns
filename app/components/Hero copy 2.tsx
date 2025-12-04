"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // handle reveal on scroll (your existing animation logic)
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

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[url('/images/hero.png')] bg-cover bg-center bg-fixed">
      {/* PARALLAX OVERLAY */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

      {/* FLOATING YARN-THREAD PARTICLES */}
      <ThreadParticles />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl reveal">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Premium Quality Cotton Yarn Manufacturing
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700">
          Texel Yarns LLP — delivering exceptional yarn crafted with precision,
          consistency, and cutting-edge textile engineering.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="px-8 py-3 bg-brand-primary text-white rounded-lg shadow hover:bg-brand-primary/90 transition"
          >
            Explore Products
          </a>

          <a
            href="/order"
            className="px-8 py-3 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary/10 transition"
          >
            Place an Order
          </a>
        </div>

        {/* SCROLL DOWN ARROW */}
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

      {/* ROTATING YARN SPOOL */}
      <motion.div
        className="absolute bottom-10 right-10 opacity-40 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/images/hero-yarn.png"
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
    FLOATING THREAD PARTICLES (OPTION C)
   ============================================================ */
function ThreadParticles() {
  const particles = Array.from({ length: 18 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-12 h-0.5 bg-brand-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360,
            opacity: 0,
          }}
          animate={{
            y: [-20, -200],
            opacity: [0, 0.7, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
