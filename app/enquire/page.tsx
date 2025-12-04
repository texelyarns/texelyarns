// app/enquire/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Enquire | Texel Yarns",
  description: "Submit your enquiry for yarn products, specifications or bulk orders.",
};

export default function EnquirePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* ----------------------- */}
        {/*        PAGE HEADER      */}
        {/* ----------------------- */}
        <div className="text-center mb-12">
          <Image
            src="/images/texel_logo.png"
            alt="Texel Logo"
            width={130}
            height={130}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Send Us Your Enquiry
          </h1>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Share your requirements or product specifications. Our team will
            get back to you shortly.
          </p>
        </div>

        {/* ========================================================= */}
        {/* =====================  FORM LAYOUT A  ==================== */}
        {/* ========================================================= */}

        {/* <form
          name="texel-enquiry"
          method="POST"
          data-netlify="true"
          encType="multipart/form-data"
          className="bg-white rounded-lg shadow-lg p-8 space-y-6 border border-neutral-200"
        >
          required hidden input for Netlify
          <input type="hidden" name="form-name" value="texel-enquiry" />

          FULL NAME
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
            />
          </div>

          EMAIL
          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
            />
          </div>

          PHONE
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              type="text"
              required
              className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
            />
          </div>

          MESSAGE
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
            />
          </div>

          FILE UPLOAD
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Attach Files (Optional)
            </label>
            <input
              name="attachment"
              type="file"
              multiple
              className="block w-full text-sm text-gray-700 border border-neutral-300 rounded-lg cursor-pointer bg-neutral-50 file:px-4 file:py-2 file:rounded-lg file:border-none file:bg-brand-primary file:text-white file:cursor-pointer"
            />
          </div>

          SUBMIT BUTTON
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-primary text-white py-3 font-semibold shadow-md hover:bg-brand-primary/90 transition"
            >
              Submit Enquiry
            </button>
          </div>
        </form> */}

        {/* ========================================================= */}
        {/* =====================  LAYOUT C  (Optional)  ============== */}
        {/* ========================================================= */}

        
        <form
          name="texel-enquiry"
          method="POST"
          data-netlify="true"
          action="/success"
          encType="multipart/form-data"
          className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8 mt-16 border border-neutral-200"
        >
          <input type="hidden" name="form-name" value="texel-enquiry" />

          <div className="space-y-6">

            <div>
              <label className="block font-medium text-gray-700 mb-1">Full Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                name="phone"
                type="text"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-2"
              />
            </div>

          </div>

          <div className="space-y-6">

            <div>
              <label className="block font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-2"
              ></textarea>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Attach Files</label>
              <input
                name="attachment"
                type="file"
                multiple
                // className="block w-full text-sm border border-neutral-300 rounded-lg"
                className="block w-full text-sm text-gray-700 border border-neutral-300 rounded-lg cursor-pointer bg-neutral-50 file:px-4 file:py-2 file:rounded-lg file:border-none file:bg-brand-primary file:text-white file:cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-primary text-white py-3 font-semibold shadow-md hover:bg-brand-primary/90 transition"
            >
              Submit Enquiry
            </button>

          </div>
        </form>
       

      </div>
    </section>
  );
}
