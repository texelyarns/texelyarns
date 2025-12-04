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

