export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Interior Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Complete vacuum of carpets, seats, and trunk</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Shampoo and extraction of floor mats</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dashboard and console detailing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Leather/Vinyl conditioning with UV protectant</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Exterior Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Wheels and tires deep cleaning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pressure wash wheel wells</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Biodegradable wash and hand dry</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Bug and tar removal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}