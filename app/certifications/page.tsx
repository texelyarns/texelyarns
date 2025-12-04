// "use client";
// import Image from "next/image";

// const CERTS = [
//   { id: 1, title: "ISO 9001", file: "/certifications/iso-9001.png" },
//   { id: 2, title: "OEKO-TEX", file: "/certifications/oeko-tex.png" },
//   { id: 3, title: "GOTS Certification", file: "/certifications/gots.png" },
//   { id: 4, title: "Recycled Claim Standard", file: "/certifications/rcs.png" },
//   { id: 5, title: "EU Standard Compliance", file: "/certifications/eu-std.png" },
//   { id: 6, title: "BSCI Audit", file: "/certifications/bsci.png" },
// ];

// export default function CertificationsPage() {
//   return (
//     <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">
//         Certifications
//       </h1>

//       <p className="text-neutral-600 max-w-2xl mb-10">
//         Our production process meets world-class quality and environmental
//         standards. These certifications validate our commitment to excellence.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {CERTS.map((c) => (
//           <div
//             key={c.id}
//             className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
//           >
//             <div className="relative w-full h-48 mb-4">
//               <Image
//                 src={c.file}
//                 fill
//                 alt={c.title}
//                 className="object-contain"
//               />
//             </div>

//             <h3 className="text-lg font-semibold text-gray-900">
//               {c.title}
//             </h3>

//             <button
//               className="mt-3 text-sm text-brand-primary underline"
//               onClick={() => window.open(c.file, "_blank")}
//             >
//               View Certificate
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// "use client";

// import Image from "next/image";

// const CERTS = [
//   { id: 1, title: "ISO 9001", file: "/certifications/iso-9001.png" },
//   { id: 2, title: "Uster Certificate", file: "/certifications/uster.png" },
//   { id: 3, title: "OEKO-TEX", file: "/certifications/oeko-tex.png" },
//   { id: 4, title: "GOTS Certification", file: "/certifications/gots.png" },
//   { id: 5, title: "Recycled Claim Standard", file: "/certifications/rcs.png" },
//   { id: 6, title: "BSCI Audit", file: "/certifications/bsci.png" },
// ];

// export default function CertificationsPage() {
//   return (
//     <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">
//         Certifications
//       </h1>

//       <p className="text-neutral-600 max-w-2xl mb-10">
//         These certifications validate our commitment to consistent quality,
//         sustainability, and international manufacturing standards.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {CERTS.map((c) => (
//           <div
//             key={c.id}
//             className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
//           >
//             <div className="relative w-full h-48 mb-4">
//               <Image
//                 src={c.file}
//                 alt={c.title}
//                 fill
//                 className="object-contain"
//               />
//             </div>

//             <h3 className="text-lg font-semibold text-gray-900">
//               {c.title}
//             </h3>

//             <button
//               className="mt-3 text-sm text-brand-primary underline"
//               onClick={() => window.open(c.file, "_blank")}
//             >
//               View Certificate
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "ISO 9001 – Quality Management",
    file: "/certificates/iso-9001.jpg", // placeholder
  },
  {
    id: 2,
    title: "Uster Statistics",
    file: "/certificates/uster.jpg",
  },
  {
    id: 3,
    title: "OE Spinning Certification",
    file: "/certificates/oe-cert.jpg",
  },
  {
    id: 4,
    title: "Environmental Compliance",
    file: "/certificates/env-cert.jpg",
  },
];

export default function CertificationsPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Certifications
        </h1>

        <p className="text-neutral-600 max-w-2xl mb-12">
          Texel Yarns LLP adheres to international standards in quality,
          safety, and textile performance. Replace these placeholders with
          your official certificates once available.
        </p>

        {/* ----------------------------------------------
            ACTIVE LAYOUT = A (Simple Clean Grid)
        ------------------------------------------------ */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-lg border shadow-sm p-4 hover:shadow-md transition"
              style={{
                borderColor: "var(--theme-brand-primary)",
              }}
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-50">
                <Image
                  src={c.file}
                  alt={c.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="font-semibold text-gray-900 text-center">
                {c.title}
              </div>
            </div>
          ))}
        </div> */}

        {/* ---------------------------------------------------------
            ALTERNATE LAYOUT = C (Commented Out — Toggle Anytime)
        ---------------------------------------------------------- */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((c) => (
            <div
              key={c.id}
              className="rounded-lg p-8 shadow-lg border relative"
              style={{
                background: "var(--theme-surface)",
                borderColor: "var(--theme-brand-primary)",
              }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 
                              w-24 h-24 rounded-full bg-white border shadow 
                              flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/texel_logo.png"
                  alt="Texel"
                  width={70}
                  height={70}
                />
              </div>

              <div className="mt-12 text-center font-semibold text-lg">
                {c.title}
              </div>

              <div className="relative w-full h-56 mt-6 rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={c.file}
                  alt={c.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ---------------------------------------------------------- */}

      </div>
    </section>
  );
}
