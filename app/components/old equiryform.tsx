"use client";

import { useState } from "react";

export default function EnquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="p-6 bg-white rounded-lg text-center border shadow">
        <div className="text-xl font-semibold text-gray-900 mb-2">
          Thank you!
        </div>
        <div className="text-neutral-600">
          Your enquiry has been submitted successfully.
        </div>
      </div>
    );
  }

  return (
    <form
      name="texel-enquiry"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      className={`rounded-lg p-6 border shadow bg-[var(--theme-surface)]`}
      style={{
        borderColor: "var(--theme-brand-primary)",
      }}
      onSubmit={() => setSubmitted(true)}
    >
      <input type="hidden" name="form-name" value="texel-enquiry" />
      <input type="hidden" name="bot-field" />

      {/* Name */}
      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">Your Name</span>
        <input
          required
          name="name"
          type="text"
          className="w-full rounded-lg border px-3 py-2"
        />
      </label>

      {/* Email */}
      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">Email</span>
        <input
          required
          name="email"
          type="email"
          className="w-full rounded-lg border px-3 py-2"
        />
      </label>

      {/* Phone */}
      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">Phone</span>
        <input
          name="phone"
          type="text"
          className="w-full rounded-lg border px-3 py-2"
        />
      </label>

      {/* Message */}
      <label className="block mb-4">
        <span className="block text-sm font-medium mb-1">Message</span>
        <textarea
          required
          name="message"
          rows={compact ? 3 : 5}
          className="w-full rounded-lg border px-3 py-2 resize-none"
        />
      </label>

      {/* File Upload */}
      <label className="block mb-6">
        <span className="block text-sm font-medium mb-1">Attach File (Optional)</span>
        <input
          name="attachment"
          type="file"
          className="w-full rounded-lg border px-3 py-2 bg-white"
        />
      </label>

      <button
        type="submit"
        className="w-full py-3 rounded-lg font-medium text-white"
        style={{
          background: "var(--theme-brand-primary)",
        }}
      >
        Submit Enquiry
      </button>
    </form>
  );
}
