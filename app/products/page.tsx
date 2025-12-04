"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ProductsPage() {
  // Simple scroll reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("shown");
        }),
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const baseImage = "/images/yarn4.png";

  return (
    <div className="bg-white">

      {/* -------------------- HERO -------------------- */}
      <section
        className="relative h-80 md:h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.55)), url(${baseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
          Our Yarn Products
        </h1>
      </section>

      {/* -------------------- INTRO -------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 reveal opacity-0 translate-y-8 transition duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          Precision, Quality & Consistency
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
          Texel Yarns LLP manufactures high-quality cotton yarns using advanced machinery,
          optimized production processes and strict quality controls. Our yarns are suitable
          for weaving, knitting, hosiery, dyeing and premium garment applications.
        </p>
      </section>

      {/* -------------------- PRODUCT SECTIONS -------------------- */}
      <div className="space-y-24">

        {/* ---------- CARD 1: CARDED ---------- */}
        <section id="carded" className="max-w-6xl mx-auto px-6 reveal opacity-0 translate-y-8 transition duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={baseImage}
                alt="Carded Yarn"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">Carded Yarn</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Produced using high-efficiency carding machines, our Carded Yarn offers
                excellent performance for weaving and knitting. Ideal for value-focused
                production without compromising consistency.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Count Range: 10s – 40s</li>
                <li>• Uniformity Index: High</li>
                <li>• Ideal For: Weaving, Knitting, Denim, Home textiles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- CARD 2: COMBED ---------- */}
        <section id="combed" className="max-w-6xl mx-auto px-6 reveal opacity-0 translate-y-8 transition duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">

            <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={baseImage}
                alt="Combed Yarn"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">Combed Yarn</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Combed yarn undergoes an additional refining process that removes short
                fibers and impurities — resulting in superior softness, strength, and dye
                uptake. Preferred for premium fabrics.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Count Range: 20s – 60s</li>
                <li>• Low hairiness & high smoothness</li>
                <li>• Ideal For: Premium garments, Hosiery, Dyed fabrics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- CARD 3: COMPACT ---------- */}
        <section id="compact" className="max-w-6xl mx-auto px-6 reveal opacity-0 translate-y-8 transition duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={baseImage}
                alt="Compact Yarn"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">Compact Yarn</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Compact spinning technology achieves exceptional fiber alignment and
                minimal yarn hairiness. This results in higher strength, better efficiency
                in weaving/knitting, and improved fabric appearance.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Count Range: 20s – 80s</li>
                <li>• Highest strength & lowest hairiness</li>
                <li>• Ideal For: Premium woven fabrics, Shirting, High-speed knitting</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* -------------------- TECHNICAL SPEC TABLE -------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-24 reveal opacity-0 translate-y-8 transition duration-700">
        <h3 className="text-3xl font-bold text-brand-primary text-center">
          Technical Specifications
        </h3>

        <div className="overflow-x-auto mt-10">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-gray-700">
            <thead className="bg-brand-primary text-white">
              <tr>
                <th className="p-4 text-left">Yarn Type</th>
                <th className="p-4 text-left">Count Range</th>
                <th className="p-4 text-left">Strength</th>
                <th className="p-4 text-left">Hairiness</th>
                <th className="p-4 text-left">Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Carded Yarn</td>
                <td className="p-4">10s – 40s</td>
                <td className="p-4">Medium</td>
                <td className="p-4">Moderate</td>
                <td className="p-4">General weaving/knitting</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Combed Yarn</td>
                <td className="p-4">20s – 60s</td>
                <td className="p-4">High</td>
                <td className="p-4">Low</td>
                <td className="p-4">Premium garments, hosiery</td>
              </tr>
              <tr>
                <td className="p-4">Compact Yarn</td>
                <td className="p-4">20s – 80s</td>
                <td className="p-4">Very High</td>
                <td className="p-4">Very Low</td>
                <td className="p-4">High-end woven fabrics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
