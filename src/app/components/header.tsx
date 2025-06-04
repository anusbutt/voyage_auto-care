"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Header() {
  const [showBookingMessage, setShowBookingMessage] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          <Button
            onClick={handleBookNow}
            className="bg-blue-600 hover:bg-blue-700 hidden sm:inline-flex text-white"
          >
            Book Now
          </Button>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen hero banner */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/banner.png"
          alt="Voyage Auto Care Banner"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered content */}
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

        {/* Scroll indicator */}
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

      {/* Booking message */}
      {showBookingMessage && (
        <div className="bg-blue-50 text-blue-900 text-center py-4 px-6 border-t border-blue-200 shadow">
          <div className="container mx-auto">
            <p className="text-sm md:text-base font-medium">
              Thank you for your interest! For now, bookings are available via our social media handles.
              Please find the links at the bottom of the website or{" "}
              <Link href="/contact" className="text-blue-600 font-semibold underline">
                contact us directly
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}
