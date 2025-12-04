// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-700">
//           Texel Yarns LLP
//         </Link>

//         {/* Mobile menu button */}
//         <button 
//           className="md:hidden block" 
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle Menu"
//         >
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
//           </svg>
//         </button>

//         {/* Menu
//         <div className={`md:flex space-x-6 font-medium ${open ? "block" : "hidden"} md:block`}>
//           <Link href="/about">About</Link>
//           <Link href="/products">Products</Link>
//           <Link href="/gallery">Gallery</Link>
//           <Link href="/certifications">Certifications</Link>
//           <Link href="/order">Order</Link>
//           <Link href="/tracking">Tracking</Link>
//           <Link href="/contact">Contact</Link>
//         </div> */}

//         <div className={`${open ? "block absolute top-full left-0 w-full bg-white shadow-lg" : "hidden"} md:flex md:static md:bg-transparent md:shadow-none space-y-4 md:space-y-0 md:space-x-6 font-medium`}>
//         <Link href="/about" className="block px-6 py-3 md:px-0 md:py-0 hover:bg-gray-50 md:hover:bg-transparent" onClick={() => setOpen(false)}>About</Link>
//         <Link href="/products" className="block px-6 py-3 md:px-0 md:py-0 hover:bg-gray-50 md:hover:bg-transparent" onClick={() => setOpen(false)}>Products</Link>
//         <Link href="/gallery" className="block px-6 py-3 md:px-0 md:py-0 hover:bg-gray-50 md:hover:bg-transparent" onClick={() => setOpen(false)}>Gallery</Link>
//         <Link href="/certifications" className="block px-6 py-3 md:px-0 md:py-0 hover:bg-gray-50 md:hover:bg-transparent" onClick={() => setOpen(false)}>Certifications</Link>
//         <Link href="/order" className="block px-6 py-3 md:px-0 md:py-0 hover:bg-gray-50 md:hover:bg-transparent" onClick={() => setOpen(false)}>Order</Link>
//         <Link href="/tracking" className="block px-6 py-3 md:px-0 md:py-0 hover:bg-gray-50 md:hover:bg-transparent" onClick={() => setOpen(false)}>Tracking</Link>
//         <Link href="/contact" className="block px-6 py-3 md:px-0 md:py-0 hover:bg-gray-50 md:hover:bg-transparent" onClick={() => setOpen(false)}>Contact</Link>
//         </div>

//       </div>
//     </nav>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-700">
//           Texel Yarns LLP
//         </Link>

//         {/* Mobile menu button */}
//         <button 
//           className="md:hidden block" 
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle Menu"
//         >
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 font-medium">
//           <Link href="/about">About</Link>
//           <Link href="/products">Products</Link>
//           <Link href="/gallery">Gallery</Link>
//           <Link href="/certifications">Certifications</Link>
//           <Link href="/order">Order</Link>
//           <Link href="/tracking">Tracking</Link>
//           <Link href="/contact">Contact</Link>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg ${open ? "block" : "hidden"}`}>
//           <div className="flex flex-col py-4">
//             <Link 
//               href="/about" 
//               className="px-6 py-3 hover:bg-gray-50"
//               onClick={() => setOpen(false)}
//             >
//               About
//             </Link>
//             <Link 
//               href="/products" 
//               className="px-6 py-3 hover:bg-gray-50"
//               onClick={() => setOpen(false)}
//             >
//               Products
//             </Link>
//             <Link 
//               href="/gallery" 
//               className="px-6 py-3 hover:bg-gray-50"
//               onClick={() => setOpen(false)}
//             >
//               Gallery
//             </Link>
//             <Link 
//               href="/certifications" 
//               className="px-6 py-3 hover:bg-gray-50"
//               onClick={() => setOpen(false)}
//             >
//               Certifications
//             </Link>
//             <Link 
//               href="/order" 
//               className="px-6 py-3 hover:bg-gray-50"
//               onClick={() => setOpen(false)}
//             >
//               Order
//             </Link>
//             <Link 
//               href="/tracking" 
//               className="px-6 py-3 hover:bg-gray-50"
//               onClick={() => setOpen(false)}
//             >
//               Tracking
//             </Link>
//             <Link 
//               href="/contact" 
//               className="px-6 py-3 hover:bg-gray-50"
//               onClick={() => setOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Common link styles for desktop
  // const desktopLinkClass = "relative group transition-all duration-300 hover:text-blue-600";
  // Alternative desktop link style - background slide
  // const desktopLinkClass = "relative overflow-hidden group px-3 py-2 rounded-lg transition-all duration-300 hover:text-white";
  
  // // Common link styles for mobile
  // const mobileLinkClass = "px-6 py-3 transition-all duration-300 hover:bg-blue-50 hover:pl-8 hover:text-blue-600";
  // Bounce animation style
  // const desktopLinkClass = "transition-all duration-300 hover:text-blue-600 hover:translate-y-[-2px]";

  // // Mobile with bounce
  // const mobileLinkClass = "px-6 py-3 transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 hover:text-blue-600";

  // Scale with shadow (great for buttons)
  const desktopLinkClass = "transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:font-semibold";

  // For mobile:
  const mobileLinkClass = "px-6 py-3 transition-all duration-300 hover:bg-blue-50 hover:scale-[1.02] hover:shadow-sm hover:border-l-4 border-l-blue-500";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo with hover animation */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-blue-700 transition-all duration-300 hover:text-blue-800 hover:scale-105"
        >
          Texel Yarns LLP
        </Link>

        {/* Mobile menu button with animation */}
        <button 
          className="md:hidden block transition-transform duration-300 hover:scale-110" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        {/* Desktop Menu */}
        
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/about" className={desktopLinkClass}>
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className={desktopLinkClass}>
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
          </Link>
          <Link href="/products" className={desktopLinkClass}>
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/gallery" className={desktopLinkClass}>
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/certifications" className={desktopLinkClass}>
            Certifications
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/order" className={desktopLinkClass}>
            Order
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/tracking" className={desktopLinkClass}>
            Tracking
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className={desktopLinkClass}>
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${open ? "block opacity-100" : "hidden opacity-0"}`}>
          <div className="flex flex-col py-2">
            <Link href="/about" className={mobileLinkClass} onClick={() => setOpen(false)}>About</Link>
            <Link href="/products" className={mobileLinkClass} onClick={() => setOpen(false)}>Products</Link>
            <Link href="/gallery" className={mobileLinkClass} onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="/certifications" className={mobileLinkClass} onClick={() => setOpen(false)}>Certifications</Link>
            <Link href="/order" className={mobileLinkClass} onClick={() => setOpen(false)}>Order</Link>
            <Link href="/tracking" className={mobileLinkClass} onClick={() => setOpen(false)}>Tracking</Link>
            <Link href="/contact" className={mobileLinkClass} onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}