"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Blue Bar */}
      {!scrolled && (
        <div className="bg-sky-500 text-white text-sm py-2 px-4 flex justify-between items-center">
          {/* Left Social Icons */}
          <div className="flex items-center space-x-3">
            <Link href="#" className="text-white hover:text-gray-200">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              <FaLinkedinIn />
            </Link>
          </div>

          {/* Right Contact */}
          <div className="flex flex-col text-sm sm:flex-row sm:space-x-6 text-right sm:text-left">
            <span className="text-xs">📍 CK - 67, CK Block, Sector II, Bidhannagar, Kolkata, WB 700091</span>
            <span>📞 9432762212 </span>
            <span>✉️ saltlakeartemis@gmail.com</span>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? "bg-sky-50 shadow-md" : "bg-sky-50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
  <div className="w-12 h-12 relative">
    <Image
      src="/logo.png" // ✅ Replace with your logo path in /public folder
      alt="Artemis Pet Logo"
      fill
      className="object-contain rounded-full"
    />
  </div>
              <span className="text-pink-600 font-bold text-lg">Artemis Pet</span>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-bold items-center">
            <Link href="/" className="text-sky-900 hover:text-pink-500">Home</Link>
            <Link href="/services" className="text-sky-900 hover:text-pink-500">Services</Link>
            <Link href="/about" className="text-sky-900 hover:text-pink-500">About</Link>
            {/* <Link href="/blog" className="text-sky-900 hover:text-pink-500">Blog</Link> */}
            <Link href="/contact" className="text-sky-900 hover:text-pink-500">Contact</Link>
            <Link
              href="/contact"
              className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden bg-white text-sky-900 shadow-lg px-4 py-3 space-y-3">
    <Link href="/" onClick={() => setIsOpen(false)} className="block">
      Home
    </Link>
    <Link href="/services" onClick={() => setIsOpen(false)} className="block">
      Services
    </Link>
    <Link href="/about" onClick={() => setIsOpen(false)} className="block">
      About
    </Link>
    {/* <Link href="/blog" onClick={() => setIsOpen(false)} className="block">Blog</Link> */}
    <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
      Contact
    </Link>
    <Link
      href="/contact"
      onClick={() => setIsOpen(false)}
      className="block bg-pink-500 text-white px-4 py-2 rounded-full text-center"
    >
      Get Quote
    </Link>
  </div>
)}

      </nav>
    </header>
  );
}
