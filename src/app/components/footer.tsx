"use client";

import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Company */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Voyage Auto Care</h3>
          <p className="mb-4 text-gray-300">
            Professional mobile auto detailing services bringing showroom-quality cleaning directly to your location.
          </p>
          <div className="flex space-x-4 text-xl">
            {/* Mail icon */}
            <a href="mailto:voyageautocare@gmail.com" className="text-gray-300 hover:text-white transition" aria-label="Email Us">
              <FaEnvelope />
            </a>
            {/* Facebook icon added here */}
            <a 
              href="https://www.facebook.com/share/1BdvANViCy/" 
              className="text-gray-300 hover:text-white transition" 
              aria-label="Visit our Facebook page"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Recommended for security with target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Detailing Services */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Premium Interior Detailing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Complete Exterior Detailing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Ceramic Coating Application</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Paint Correction & Polishing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Leather Conditioning</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Headlight Restoration</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            
            <li className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3" />
              <a href="mailto:info@voyageautocare.com" className="hover:text-white transition">info@voyageautocare.com</a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-400 mr-3" />
              <span>Serving all major cities in USA</span>
            </li>
            <li className="flex items-center">
              <FaClock className="text-blue-400 mr-3" />
              <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Why Choose Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Mobile service - we come to you</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Eco-friendly cleaning products</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Certified detailing professionals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>100% satisfaction guarantee</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Competitive pricing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>Flexible scheduling</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2020 Voyage Auto Care. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}