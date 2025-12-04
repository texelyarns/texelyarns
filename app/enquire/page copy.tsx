// export const metadata = {
//   title: "Place an Order | Texel Yarns LLP",
// };

// export default function OrderPage() {
//   return (
//     <div className="max-w-3xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-bold mb-6 text-blue-700">
//         Place an Order
//       </h1>

//       <p className="text-gray-700 mb-8">
//         Please fill the form below with details about your yarn requirements.
//         Our team will review and contact you shortly.
//       </p>

//       {/* Netlify Form */}
//       <form
//         name="texel-order"
//         method="POST"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//         className="grid grid-cols-1 gap-6"
//       >
//         {/* Hidden field required by Netlify */}
//         <input type="hidden" name="form-name" value="texel-order" />
//         <input type="hidden" name="bot-field" />

//         {/* Customer Name */}
//         <label className="block">
//           <span className="font-medium">Customer Name</span>
//           <input
//             name="customerName"
//             required
//             className="input"
//             placeholder="Full Name"
//           />
//         </label>

//         {/* Company */}
//         <label className="block">
//           <span className="font-medium">Company Name</span>
//           <input
//             name="company"
//             className="input"
//             placeholder="Company or Organization Name"
//           />
//         </label>

//         {/* Contact */}
//         <label className="block">
//           <span className="font-medium">Phone Number</span>
//           <input
//             name="phone"
//             type="tel"
//             className="input"
//             placeholder="+91..."
//             required
//           />
//         </label>

//         <label className="block">
//           <span className="font-medium">Email Address</span>
//           <input
//             name="email"
//             type="email"
//             className="input"
//             placeholder="example@gmail.com"
//           />
//         </label>

//         {/* Yarn Details */}
//         <label className="block">
//           <span className="font-medium">Yarn Type</span>
//           <input
//             name="yarnType"
//             className="input"
//             placeholder="e.g., Combed 30s, Carded 20s"
//             required
//           />
//         </label>

//         <label className="block">
//           <span className="font-medium">Required Quantity (kg)</span>
//           <input
//             name="quantity"
//             type="number"
//             className="input"
//             placeholder="Enter quantity in kg"
//             required
//           />
//         </label>

//         {/* Delivery Details */}
//         <label className="block">
//           <span className="font-medium">Delivery Location</span>
//           <input
//             name="location"
//             className="input"
//             placeholder="City / Address"
//           />
//         </label>

//         <label className="block">
//           <span className="font-medium">Expected Delivery Date</span>
//           <input
//             name="deliveryDate"
//             type="date"
//             className="input"
//           />
//         </label>

//         {/* Additional Notes */}
//         <label className="block">
//           <span className="font-medium">Additional Notes</span>
//           <textarea
//             name="notes"
//             className="input"
//             rows={4}
//             placeholder="Any custom requirements, packaging, etc."
//           />
//         </label>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
//         >
//           Submit Order
//         </button>
//       </form>
//     </div>
//   );
// }


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
    <section className="py-20 px-6 max-w-3xl mx-auto">
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
    </section>
  );
}

