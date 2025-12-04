export default function Hero() {
  return (
    <div className="relative bg-brand-primary text-white">
      
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Premium Cotton Yarn Manufacturing
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Combining technology, precision and consistency to deliver 
          world-class yarns for global markets.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/order"
            className="bg-white text-brand-primary font-semibold px-8 py-3 rounded-md shadow hover:bg-brand-secondary transition"
          >
            Place an Order
          </a>

          <a
            href="/products"
            className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-brand-primary transition"
          >
            View Products
          </a>
        </div>
      </div>
    </div>
  );
}
