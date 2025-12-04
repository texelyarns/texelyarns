// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import ProductShowcase from "./components/ProductShowcase";

// export default function Home() {
//   return (
//     <div>
//       <Hero />
//       <Features />
//       <ProductShowcase />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Hero from "@/app/components/Hero";
// import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import RecyclingCycle from "./components/RecyclingCycle";
import ProductionWheel from "./components/ProductionWheel";
import EnquiryModal from "@/app/components/EnquiryModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="pt-20">
      <Hero openModal={() => setModalOpen(true)} />
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Core sections */}
      {/* <RecyclingCycle /> */}
      <ProductionWheel />
      <Features />
      <ProductShowcase />

      {/* You can continue adding more homepage sections below */}
      {/* Example: <Stats />, <WhyChooseUs />, <Testimonials />, etc. */}
    </main>
  );
}


// "use client";

// import { useState } from "react";
// import Hero from "./components/Hero";
// import EnquiryModal from "./components/EnquiryModal";
// import ProductShowcase from "./components/ProductShowcase";
// import ProductionWheel from "./components/ProductionWheel";
// import Features from "./components/Features";
// import Footer from "./components/Footer";

// export default function HomePage() {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <>
//       {/* Modal */}
//       <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

//       {/* Sections */}
//       <Hero />
//       <ProductShowcase />
//       <ProductionWheel />
//       <Features />
//       <Footer />
//     </>
//   );
// }
