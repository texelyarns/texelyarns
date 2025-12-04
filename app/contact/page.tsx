export default function ContactPage() {
  return (
    <section className="py-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-neutral-600 mt-2">
          Reach out for enquiries, support, or partnership discussions.
        </p>
      </div>

      {/* Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow border border-neutral-200 p-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/texel_logo.png"
            alt="Texel Yarns"
            className="h-20 object-contain"
          />
        </div>

        {/* Company Info */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            Texel Yarns LLP
          </h2>

          <p className="text-neutral-700 leading-relaxed">
            603 AALANKATTU THOTTAM, <br />
            VEERACHOLAPURAM, ERODE, KANGAYAM, TIRUPPUR (DT) - 638701
          </p>

          {/* <div className="space-y-1">
            <p className="text-neutral-800">
              <strong>Phone:</strong> +91 98408 50081
            </p>
            <p className="text-neutral-800">
              <strong>Email:</strong> telexyarns@gmail.com
            </p>
          </div> */}
          <div className="space-y-1">
            <p className="text-neutral-800">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919840850081" className="hover:underline hover:text-blue-600">
                +91 98408 50081
              </a>
            </p>
            <p className="text-neutral-800">
              <strong>Email:</strong>{" "}
              <a href="mailto:telexyarns@gmail.com" className="hover:underline hover:text-blue-600">
                telexyarns@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-80 rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
          <iframe
            title="map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4533.360446867017!2d77.68393469172463!3d10.960281893407183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99bb23bcaf109%3A0xfa21144a8d9e9fdf!2sKangayam%2C%20Tamil%20Nadu%20638111!5e1!3m2!1sen!2sin!4v1764813370312!5m2!1sen!2sin"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

