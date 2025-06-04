"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [showBookingMessage, setShowBookingMessage] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const handleBookNow = () => {
    setShowBookingMessage(true);
    setTimeout(() => setShowBookingMessage(false), 5000);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/prices" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 py-2 shadow-lg" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="text-white font-bold text-xl">Voyage Auto Care</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Book Now Button */}
          <Button
            onClick={handleBookNow}
            className="bg-blue-600 hover:bg-blue-700 hidden sm:inline-flex text-white"
          >
            Book Now
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-full left-0 w-full pb-4 shadow-lg z-40 transition-all duration-300 ease-in-out">
            <ul className="flex flex-col items-center space-y-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white text-lg hover:text-blue-400 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => {
                    handleBookNow();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full px-8 py-3"
                >
                  Book Now
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <div className="relative w-full min-h-screen overflow-hidden max-h-[100vh]">
        <Image
          src="/banner.png"
          alt="Voyage Auto Care Banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Voyage Auto Care
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl mb-8 max-w-2xl">
            Premium Mobile Auto Detailing Service at Your Convenience
          </p>
          <div className="flex gap-4">
            <Button
              onClick={handleBookNow}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-lg shadow-lg transition-all hover:scale-105 text-white"
              size="lg"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Booking Message Modal */}
      {showBookingMessage && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowBookingMessage(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Ready to Book?
            </h2>
            <p className="text-lg text-gray-300 mb-6 text-center">
              We're excited to give your vehicle the care it deserves!
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                To schedule your premium mobile detailing service, please contact us directly:
              </p>
              <ul className="list-none space-y-2 text-center">
                <li>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-blue-400 hover:underline text-xl font-semibold"
                  >
                    Call Us: +1 (555) 123-4567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@voyageautocare.com"
                    className="text-blue-400 hover:underline text-xl font-semibold"
                  >
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
