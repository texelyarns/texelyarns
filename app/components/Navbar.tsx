"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Premium Navbar
 * - Dropdowns: Products, About, Gallery, Certifications
 * - Mobile: Fade+slide drawer from right with backdrop blur
 * - Floating active pill indicator (option B)
 * - Scroll-aware: translucent on scroll
 *
 * Paste this file as app/components/Navbar.tsx
 */

type MenuItem = {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
};

const MENU: MenuItem[] = [
  { name: "About", children: [{ name: "Company", href: "/about#company" }, { name: "Infrastructure", href: "/about#infrastructure" }, { name: "Process", href: "/about#process" }] },
  { name: "Products", children: [{ name: "Carded", href: "/products#carded" }, { name: "Combed", href: "/products#combed" }, { name: "Compact", href: "/products#compact" }] },
  { name: "Gallery", children: [{ name: "Mill photos", href: "/gallery#mill" }, { name: "Yarn photos", href: "/gallery#yarn" }] },
  { name: "Certifications", href: "/certifications" },
  { name: "Enquiries", href: "/enquire" },
  // { name: "Tracking", href: "/tracking" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // For pill indicator
  // const navRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  // Close drawer on navigation or Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setDrawerOpen(false); // close when route changes
  }, [pathname]);

  // Scroll behavior: translucent when scrolled > 24px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Compute pill position when menu or route changes and when layout updates
  useEffect(() => {
    const update = () => {
      if (!navRef.current) return;
      const links = Array.from(navRef.current.querySelectorAll("[data-navlink]")) as HTMLElement[];
      // find exact match or partial (startsWith) for active
      let activeEl: HTMLElement | undefined = links.find((el) => {
        const href = el.getAttribute("data-href") || "";
        if (!href) return false;
        // prefer exact match, then startsWith
        return href === pathname;
      });
      if (!activeEl) {
        activeEl = links.find((el) => {
          const href = el.getAttribute("data-href") || "";
          return href && pathname.startsWith(href) && href !== "/";
        });
      }
      if (!activeEl) {
        activeEl = links.find((el) => (el.getAttribute("data-href") || "") === "/");
      }
      if (activeEl) {
        const parentRect = navRef.current.getBoundingClientRect();
        const rect = activeEl.getBoundingClientRect();
        setPillStyle({ left: rect.left - parentRect.left, width: rect.width });
      } else {
        setPillStyle({ left: 0, width: 0 });
      }
    };

    update();
    // update on resize
    window.addEventListener("resize", update);
    // small timeout to allow layout to stabilize
    const t = setTimeout(update, 160);
    return () => {
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, [pathname]);

  // For click outside of drawer to close
  const backdropUrl = "/images/yarn2.png"; // local file path — will be transformed by your toolchain
  const drawerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!drawerOpen) return;
      if (!drawerRef.current) return;
      if (e.target instanceof Node && !drawerRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
          scrolled ? "bg-white/20 shadow-sm" : "bg-white/95"
        }`}
      >
        {/* <nav ref={navRef} className="max-w-7xl mx-auto px-6 md:px-8"> */}
        <nav className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link href="/" className="text-2xl font-bold text-brand-primary tracking-tight">
                <Image src={"/images/texel_logo.png"} alt="Company logo placeholder" width={100} height={10} style={{ objectFit: "contain" }} />
              </Link>
            </div>

            {/* Desktop links */}
            {/* <div className="hidden md:flex items-center relative"> */}
            <div ref={navRef} className="hidden md:flex items-center relative">
              {/* moving pill */}
              <div
                aria-hidden
                className="absolute -bottom-0.5 h-8 px-1 flex items-center pointer-events-none"
                // className={`absolute -bottom-1 h-8 flex items-center pointer-events-none transition-all`}
                style={{
                  left: pillStyle.left - 8,
                  width: pillStyle.width + 16,
                  transition: "left 220ms cubic-bezier(.2,.9,.2,1), width 220ms cubic-bezier(.2,.9,.2,1)",
                  // opacity: pillStyle.width > 0 ? 1 : 0,
                }}
              >
                <span className="block w-full h-8 rounded-lg bg-brand-primary/10 backdrop-blur-sm" />
              </div>

              <ul className="flex gap-8 items-center text-sm" role="menubar" aria-label="Main navigation">
                {MENU.map((m) =>
                  m.children ? (
                    <li key={m.name} className="relative group" role="none" onMouseEnter={() => {}} onMouseLeave={() => {}}>
                      {/* parent link (non-navigating) */}
                      {/* <button
                        className="px-2 py-1 text-gray-700 font-medium inline-flex items-center gap-2 focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded="false"
                        role="menuitem"
                        data-navlink
                        data-href={m.children[0].href} /* approximate anchor for pill positioning */ }
                        {/* >
                        <span>{m.name}</span> */}
                        {/* chevron */}
                        {/* <svg className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg>
                      </button> */}
                      <Link
                        href={`/${m.name.toLowerCase()}`}
                        data-navlink
                        data-href={`/${m.name.toLowerCase()}`}
                        className="px-2 py-1 text-gray-700 font-medium inline-flex items-center gap-2 focus:outline-none"
                      >
                        {m.name}
                        <svg className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg>
                      </Link>

                      {/* dropdown */}
                      {/* <div
                        className="absolute left-0 top-full w-56 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 pt-3
                        before:absolute before:top-0 before:left-0 before:w-full before:h-3 before:bg-transparent"
                        role="menu"
                      >
                        <ul className="py-2">
                          {m.children.map((c) => (
                            <li key={c.name}>
                              <Link
                                href={c.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary/5 hover:text-brand-primary transition"
                                role="menuitem"
                                data-navlink
                                data-href={c.href}
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div> */}
                      <div
                        className="
                          absolute left-0 top-full w-56 bg-white border border-gray-100 rounded-lg shadow-lg
                          opacity-0 translate-y-2 pointer-events-none
                          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                          transition-all duration-200 pt-3

                          /* Critical: hover bridge so dropdown doesn't disappear */
                          before:absolute before:-top-3 before:left-0 before:w-full before:h-3 before:bg-transparent
                        "
                        role="menu"
                      >
                        <ul className="py-2">
                          {m.children.map((c) => (
                            <li key={c.name}>
                              <Link
                                href={c.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary/5 hover:text-brand-primary transition"
                                role="menuitem"
                                data-navlink
                                data-href={c.href}
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li key={m.name} role="none">
                      <Link
                        href={m.href || "#"}
                        data-navlink
                        data-href={m.href || "/"}
                        className="px-2 py-1 text-gray-700 font-medium relative inline-block"
                        role="menuitem"
                      >
                        {m.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* mobile toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-md text-brand-primary hover:bg-brand-primary/5 transition"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer + backdrop */}
      {/* Backdrop */}
      <div
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{
          background: drawerOpen ? "rgba(8,12,20,0.45)" : "transparent",
          backdropFilter: drawerOpen ? "blur(6px) saturate(120%)" : "none",
        }}
      >
        {/* clicking the backdrop will close via parent click handler below */}
      </div>

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-half w-full max-w-sm transform bg-white/95 border-l border-gray-100 shadow-lg transition-all duration-350
          ${drawerOpen ? "translate-x-0 opacity-80" : "translate-x-full opacity-0"}`}
          // this controls the slide-in and fade -in
        style={{
          // use a subtle patterned background using the uploaded image (toolchain will convert path to URL)
          backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.85)), url("${backdropUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="text-lg font-bold text-brand-primary">TEXEL YARNS LLP</Link>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-auto">
            <ul className="space-y-4">
              {MENU.map((m) =>
                m.children ? (
                  <li key={m.name}>
                    <details className="group" open={false}>
                      <summary className="flex items-center justify-between cursor-pointer list-none py-2 px-1 text-gray-800 font-medium">
                        <span>{m.name}</span>
                        <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg>
                      </summary>

                      <ul className="mt-2 pl-4 space-y-2">
                        {m.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={() => setDrawerOpen(false)}
                              className="block py-2 text-gray-700 hover:text-brand-primary transition"
                            >
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={m.name}>
                    <Link href={m.href || "/"} onClick={() => setDrawerOpen(false)} className="block py-2 text-gray-800 font-medium">
                      {m.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="mt-auto">
            <Link href="/order" className="block w-full text-center bg-brand-primary text-white py-3 rounded-md font-semibold mb-3">
              Place an Order
            </Link>
            <Link href="/contact" className="block w-full text-center border border-gray-200 py-3 rounded-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
