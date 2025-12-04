"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function RecyclingCycle() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("shown"));
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  const steps = [
    {
      title: "Collected Fabric Waste",
      desc: "Post-consumer & post-industrial cotton waste is sourced ethically.",
      img: "/images/recycle-step-1.jpg",
    },
    {
      title: "Sorting & Shredding",
      desc: "Cotton waste is sorted by quality, then shredded into soft fibers.",
      img: "/images/recycle-step-2.jpg",
    },
    {
      title: "Fiber Processing",
      desc: "Fibers are cleaned, opened, blended, and prepared for spinning.",
      img: "/images/recycle-step-3.jpg",
    },
    {
      title: "Yarn Spinning",
      desc: "State-of-the-art ring frames spin fibers into high-quality yarn.",
      img: "/images/recycle-step-4.jpg",
    },
    {
      title: "Ready Yarn",
      desc: "Sustainable recycled cotton yarn ready for weaving/knitting.",
      img: "/images/recycle-step-5.jpg",
    },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center reveal">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          From Fabric to Premium Yarn
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At Texel Yarns LLP, we transform discarded cotton fabrics into
          high-quality yarn — creating value from waste while reducing the
          industry’s environmental footprint.
        </p>

        {/* Flow Chart */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-12 mt-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-[280px] reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="relative w-full h-40 mb-4">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
