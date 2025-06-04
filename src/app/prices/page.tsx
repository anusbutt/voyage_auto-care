import Image from "next/image";

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "Sedan",
      image: "/sedan.png",
      interior: 170,
      both: 210
    },
    {
      name: "Small SUV",
      image: "/smallsuv.png",
      interior: 170,
      both: 210
    },
    {
      name: "Large SUV",
      image: "/bigsuv.png",
      interior: 180,
      both: 220
    },
    {
      name: "Truck",
      image: "/truck.png",
      interior: 180,
      both: 240
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="relative h-48 mb-4">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{tier.name}</h3>
              <div className="space-y-2 text-gray-300">
                <p>Interior Only: ${tier.interior}</p>
                <p>Interior + Exterior: ${tier.both}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}