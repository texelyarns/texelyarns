// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const products = [
//   {
//     name: "Carded Cotton Yarn",
//     count: "20s / 30s / 40s",
//     img: "/images/yarn1.png",
//   },
//   {
//     name: "Combed Cotton Yarn",
//     count: "20s / 30s",
//     img: "/images/yarn2.png",
//   },
//   {
//     name: "Compact Cotton Yarn",
//     count: "30s / 40s",
//     img: "/images/yarn5.png",
//   },
//   {
//     name: "Open-End (OE) Yarn",
//     count: "10s / 20s",
//     img: "/images/yarn4.png",
//   },
// ];

// export default function ProductShowcase() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-center text-4xl font-bold mb-10 text-gray-900 reveal">
//           Our Yarn Products
//         </h2>

//         {/* Scroll container */}
//         <motion.div
//           className="flex gap-8 overflow-x-auto no-scrollbar py-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >
//           {products.map((p, index) => (
//             <motion.div
//               key={index}
//               className="
//                 min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow-lg 
//                 overflow-hidden cursor-pointer border border-gray-100
//                 hover:shadow-2xl transition
//               "
//               whileHover={{ scale: 1.04 }}
//               transition={{ type: "spring", stiffness: 150, damping: 12 }}
//             >
//               {/* Image */}
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={p.img}
//                   alt={p.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
//                 <p className="text-sm text-brand-primary font-medium mt-1">
//                   {p.count}
//                 </p>

//                 <button className="mt-4 w-full bg-brand-primary text-white py-2 rounded-lg hover:bg-brand-primary/90 transition text-sm">
//                   View Details
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Real 10s product image → from your uploaded file
const REAL_PRODUCT_IMAGE = "/images/yarn1.png";

// const products = [
//   {
//     name: "10s Carded Cotton Yarn",
//     count: "10s (Current Production)",
//     img: REAL_PRODUCT_IMAGE,
//     status: "available",
//   },
//   {
//     name: "20s Combed Cotton Yarn",
//     count: "Coming Soon",
//     img: "/images/yarn2.png",
//     status: "placeholder",
//   },
//   {
//     name: "30s Compact Cotton Yarn",
//     count: "Coming Soon",
//     img: "/images/yarn5.png",
//     status: "placeholder",
//   },
//   {
//     name: "40s OE Cotton Yarn",
//     count: "Coming Soon",
//     img: "/images/yarn4.png",
//     status: "placeholder",
//   },
// ];
const products = [
  {
    name: "Carded Cotton Yarn",
    count: "20s / 30s / 40s",
    img: "/images/yarn1.png",
    status: "available",
  },
  {
    name: "Combed Cotton Yarn",
    count: "20s / 30s",
    img: "/images/yarn2.png",
    status: "available",

  },
  {
    name: "Compact Cotton Yarn",
    count: "30s / 40s",
    img: "/images/yarn5.png",
    status: "available",
  },
  {
    name: "Open-End (OE) Yarn",
    count: "10s / 20s",
    img: "/images/yarn4.png",
    status: "available",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10 text-gray-900 reveal">
          Our Yarn Products
        </h2>

        <motion.div
          className="flex gap-8 overflow-x-auto no-scrollbar py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {products.map((p, index) => (
            <motion.div
              key={index}
              className="
                min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow-lg 
                overflow-hidden cursor-pointer border border-gray-100
                hover:shadow-2xl transition relative
              "
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            >
              {/* Coming Soon Tag */}
              {p.status === "placeholder" && (
                <div className="absolute top-3 right-3 bg-gray-900/70 text-white text-xs px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>

                <p
                  className={`mt-1 text-sm ${
                    p.status === "available"
                      ? "text-brand-primary font-medium"
                      : "text-gray-500 italic"
                  }`}
                >
                  {p.count}
                </p>

                {/* CTA */}
                <button
                  disabled={p.status !== "available"}
                  className={`
                    mt-4 w-full py-2 rounded-lg text-sm transition
                    ${
                      p.status === "available"
                        ? "bg-brand-primary text-white hover:bg-brand-primary/90"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  {p.status === "available" ? "View Details" : "Not Available"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
