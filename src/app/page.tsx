"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';

export default function Home() {
  const [showBookingMessage, setShowBookingMessage] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gray-900 text-gray-100">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Voyage Auto Care</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Premium Mobile Interior & Exterior Auto Detailing - We Come to You, Anywhere in the USA
          </p>
        </section>

        {/* Services Section */}
        <section className="bg-gray-800 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Interior Services</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Vacuum: Carpets, Seats, Trunk</li>
                <li>Shampoo Floor Mats</li>
                <li>Dashboard & Console Detailing</li>
                <li>Cupholders, Ash Trays, Door Pockets</li>
                <li>Leather/Vinyl Conditioning & UV Protectant</li>
                <li>Air Freshener</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Exterior Services</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Wheels & Tires Detailing</li>
                <li>Pressure Clean Wheel Wells</li>
                <li>Biodegradable Wash & Hand Dry</li>
                <li>Window & Mirror Cleaning</li>
                <li>Door Jams, Bug & Tar Removal</li>
                <li>Spray Wax & Tire Shine</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-6 bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: 'Sedan',
                image: '/sedan.png',
                interior: 170,
                both: 210,
              },
              {
                name: 'Small SUV',
                image: '/smallsuv.png',
                interior: 170,
                both: 210,
              },
              {
                name: 'Big SUV',
                image: '/bigsuv.png',
                interior: 180,
                both: 220,
              },
              {
                name: 'Truck',
                image: '/truck.png',
                interior: 180,
                both: 240,
              },
            ].map((car) => (
              <div key={car.name} className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
                {/* Increased image container size and image dimensions */}
                <div className="flex justify-center items-center h-64 w-full mb-4">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={250} // Increased width for the image component
                    height={150} // Increased height for the image component
                    className="object-contain" // Ensures image scales within its container
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-300">Interior: ${car.interior}</p>
                <p className="text-gray-300">Interior + Exterior: ${car.both}</p>
              </div>
            ))}
          </div>

          {/* Booking Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowBookingMessage(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
            >
              Book Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      {showBookingMessage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowBookingMessage(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Ready to Book?</h2>
            <p className="text-lg text-gray-300 mb-6 text-center">
              We're excited to give your vehicle the care it deserves!
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                To schedule your premium mobile detailing service, please contact us directly:
              </p>
              <ul className="list-none space-y-2 text-center">
                <li>
                  <a href="mailto:info@voyageautocare.com" className="text-blue-400 hover:underline text-xl font-semibold">
                    Email Us: info@voyageautocare.com
                  </a>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-6 text-center">
                Our team will assist you in selecting the perfect package and finding a convenient time for your service.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}