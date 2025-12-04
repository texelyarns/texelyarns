"use client";

import { useState } from "react";

export default function EnquiryForm({ formName }: { formName: string }) {
  const [fileName, setFileName] = useState("");

  return (
    <form
      name={formName}
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      className="space-y-4"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Buyer Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Buyer Name</label>
        <input
          type="text"
          name="buyerName"
          required
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium mb-1">Company Name</label>
        <input
          type="text"
          name="companyName"
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
        <input
          type="text"
          name="whatsapp"
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* Product Count */}
      <div>
        <label className="block text-sm font-medium mb-1">Product Count</label>
        <input
          type="text"
          name="productCount"
          required
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* Blend Ratio */}
      <div>
        <label className="block text-sm font-medium mb-1">Blend Ratio</label>
        <input
          type="text"
          name="blendRatio"
          placeholder="Example: 60/40, 70/30, Recycled mix"
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium mb-1">Quantity (Kgs)</label>
        <input
          type="number"
          name="quantity"
          required
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* Application */}
      <div>
        <label className="block text-sm font-medium mb-1">Application</label>
        <select
          name="application"
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        >
          <option>Knitting</option>
          <option>Weaving</option>
          <option>Both</option>
        </select>
      </div>

      {/* Shipping Place */}
      <div>
        <label className="block text-sm font-medium mb-1">Shipping Place</label>
        <input
          type="text"
          name="shippingPlace"
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-lg border border-neutral-300 p-3 focus:ring-brand-primary"
        ></textarea>
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Upload File (optional)
        </label>

        <input
          type="file"
          name="attachment"
          onChange={(e) =>
            setFileName(e.target.files?.[0]?.name ?? "")
          }
          className="w-full rounded-lg border border-neutral-300 p-3 bg-white"
        />

        {fileName && (
          <p className="text-xs text-neutral-500 mt-1">{fileName}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-primary text-white py-3 font-medium hover:bg-brand-primary/90"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
