"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Simple lightbox component
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200px] bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-[90%] max-w-3xl h-[80%]">
        <Image
          src={src}
          alt="Preview"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState("mill");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("shown")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Your uploaded image as placeholder
  const defaultImg = "/images/office.png";

  // We can add more images later
  const millImages = ["/images/factory1.png", "/images/factory2.png", "/images/drawing1.png", "/images/combing.png","/images/carding1.png","/images/oe9.png"];
  const yarnImages = ["/images/bluedrum.png", "/images/yellowdrum.png", "/images/yarn1.png"];

  const images = filter === "mill" ? millImages : yarnImages;

  return (
    <div className="bg-white pb-20">

      {/* ------------ HERO -------------- */}
      <section
        className="relative h-80 md:h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${defaultImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">Gallery</h1>
      </section>

      {/* ------------ FILTER TABS -------------- */}
      <section className="max-w-6xl mx-auto px-6 py-12 reveal opacity-0 translate-y-8 transition duration-700">
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setFilter("mill")}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === "mill"
                ? "bg-brand-primary text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Mill Photos
          </button>

          <button
            onClick={() => setFilter("yarn")}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === "yarn"
                ? "bg-brand-primary text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Yarn Photos
          </button>
        </div>
      </section>

      {/* ------------ GRID GALLERY -------------- */}
      <section className="max-w-6xl mx-auto px-6 reveal opacity-0 translate-y-8 transition duration-700">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg shadow hover:shadow-xl transition cursor-pointer"
              onClick={() => setLightboxImg(src)}
            >
              <Image
                src={src}
                alt="Gallery Image"
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ------------ LIGHTBOX -------------- */}
      {lightboxImg && <Lightbox src={lightboxImg} onClose={() => setLightboxImg(null)} />}

    </div>
  );
}
