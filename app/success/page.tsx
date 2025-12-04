"use client";

import Link from "next/link";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">

      {/* Success Icon */}
      <div className="mb-6">
        <svg
          width="90"
          height="90"
          viewBox="0 0 24 24"
          className="text-[var(--theme-brand-primary)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
          <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h1 className="text-3xl font-semibold text-gray-900 mb-3">
        Enquiry Submitted Successfully
      </h1>

      <p className="text-neutral-600 max-w-md leading-relaxed mb-8">
        Thank you for getting in touch. Our team will review your enquiry and
        respond shortly.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-[var(--theme-brand-primary)] text-white font-medium shadow hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
