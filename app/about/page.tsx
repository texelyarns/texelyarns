"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("shown")),
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroImage = "/images/factory2.png";

  return (
    <div className="bg-white">

      {/* -------------------- HERO -------------------- */}
      <section
        className="relative h-80 md:h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
          About Texel Yarns LLP
        </h1>
      </section>

      {/* -------------------- INTRO -------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 reveal opacity-0 translate-y-8 transition duration-700">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          Excellence in Yarn Manufacturing
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-4xl">
          Texel Yarns LLP is dedicated to producing high-quality cotton yarn through a combination
          of modern machinery, experienced workforce, and a rigorous quality management system.
          Our mission is to deliver consistent, reliable yarn that meets global textile standards.
        </p>
      </section>

      {/* -------------------- VISION & MISSION -------------------- */}
      <section className="bg-brand-secondary py-20 reveal opacity-0 translate-y-8 transition duration-700">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          <div className="p-10 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as a trusted and innovative yarn manufacturer delivering superior
              quality products to domestic and international markets with integrity and efficiency.
            </p>
          </div>

          <div className="p-10 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To continuously enhance our manufacturing capabilities, maintain sustainable
              practices, and deliver consistent value to our stakeholders while ensuring customer
              satisfaction at every stage.
            </p>
          </div>

        </div>
      </section>

      {/* -------------------- COMPANY INFO -------------------- */}
      <section id="company" className="max-w-6xl mx-auto px-6 py-20 reveal opacity-0 translate-y-8 transition duration-700">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image src={heroImage} alt="Company Overview" fill className="object-cover" />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-primary">Company Overview</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Established with a strong focus on technology and quality, Texel Yarns LLP operates
              with a well-structured production line, stringent checkpoints, and experienced staff.
              Our commitment to excellence is reflected in every bale of yarn produced.
            </p>
          </div>

        </div>
      </section>

      {/* -------------------- INFRASTRUCTURE -------------------- */}
      <section id="infrastructure" className="bg-brand-secondary py-20 reveal opacity-0 translate-y-8 transition duration-700">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-brand-dark text-center">Infrastructure & Capacity</h3>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              {
                title: "Advanced Machinery",
                desc: "High-performance carding, combing and spinning units ensuring consistent yarn quality.",
              },
              {
                title: "Production Capacity",
                desc: "Daily output capacity optimized for efficiency with minimal downtime.",
              },
              {
                title: "Quality Systems",
                desc: "Rigorous testing and quality checks at key stages of the production lifecycle.",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-brand-primary">{item.title}</h4>
                <p className="mt-4 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- PROCESS FLOW -------------------- */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-20 reveal opacity-0 translate-y-8 transition duration-700">
        <h3 className="text-3xl md:text-4xl font-bold text-brand-primary text-center">Manufacturing Process</h3>

        <div className="grid md:grid-cols-5 gap-10 mt-16">

          {[
            { step: "1", title: "Raw Cotton Selection", desc: "Choosing the finest cotton according to quality parameters." },
            { step: "2", title: "Carding", desc: "Opening, cleaning and aligning fibers for sliver formation." },
            { step: "3", title: "Combing / Drawing", desc: "Refining fiber alignment and removing short fibers." },
            { step: "4", title: "Spinning", desc: "Converting refined slivers into high-quality yarn." },
            { step: "5", title: "Winding", desc: "Final shaping, packing and quality checks." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 mx-auto bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {item.step}
              </div>
              <h4 className="mt-4 font-semibold text-brand-dark">{item.title}</h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* -------------------- VALUES -------------------- */}
      <section className="bg-white py-24 reveal opacity-0 translate-y-8 transition duration-700">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-brand-primary text-center">Our Core Values</h3>

          <div className="grid md:grid-cols-3 gap-10 mt-16 by">

            {[
              {
                title: "Quality First",
                desc: "Ensuring consistent and superior quality across all yarn types.",
              },
              {
                title: "Reliability",
                desc: "On-time production, punctual delivery and transparent communication.",
              },
              {
                title: "Innovation",
                desc: "Adopting modern machinery and methods for improved efficiency.",
              },
            ].map((v) => (
              <div key={v.title} className="p-10 bg-brand-secondary-light rounded-xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-brand-primary">{v.title}</h4>
                <p className="mt-4 text-gray-700">{v.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
