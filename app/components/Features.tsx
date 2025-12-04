export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-xl font-bold text-brand-primary">High Quality Cotton</h3>
          <p className="text-gray-600 mt-3">
            Using premium-grade raw cotton to ensure consistent spinning performance 
            and superior yarn standards.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-brand-primary">Modern Machinery</h3>
          <p className="text-gray-600 mt-3">
            Equipped with efficient machinery delivering higher output, minimal waste, 
            and stable yarn quality.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-brand-primary">Reliable Delivery</h3>
          <p className="text-gray-600 mt-3">
            Streamlined logistics and a transparent shipment tracking system ensure 
            timely deliveries.
          </p>
        </div>

      </div>
    </section>
  );
}
