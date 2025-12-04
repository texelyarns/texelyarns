"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Contact Us
        </h1>
        <p className="text-neutral-600">
          We're here to help with enquiries, partnerships, and product information.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 border border-neutral-200">

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          className="space-y-5"
        >

          {/* Required Netlify hidden field */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--theme-brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--theme-brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--theme-brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--theme-brand-primary)]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--theme-brand-primary)] text-white font-semibold rounded-lg py-3 shadow hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
