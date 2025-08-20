"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-gray-200 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-pink-500 rounded-full p-2">
              <span className="text-white font-bold text-xl">🐶</span>
            </div>
            <span className="text-white font-bold text-xl">Artemis Pet</span>
          </div>
          <p className="text-sm text-gray-300">
            Caring for your pets since <b>October 2021</b>.  
            We provide grooming, medical support, creche, and pet essentials.
          </p>

          {/* Socials */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-pink-400"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-pink-400"><FaInstagram /></Link>
            <Link href="#" className="hover:text-pink-400"><FaTwitter /></Link>
            <Link href="#" className="hover:text-pink-400"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-pink-400">Home</Link></li>
            <li><Link href="/services" className="hover:text-pink-400">Services</Link></li>
            <li><Link href="/about" className="hover:text-pink-400">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-pink-400">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-pink-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>🐾 Pet Grooming</li>
            <li>🐾 Pet Checkup</li>
            <li>🐾 Medical Support</li>
            <li>🐾 Pet Creche</li>
            <li>🐾 Pet Essentials</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 CK - 67, CK Block, Sector II, Bidhannagar, Kolkata, WB 700091</li>
            <li>📞 9432762212 / 9681613277</li>
            <li>
              ✉️ <a href="mailto:saltlakeartemis@gmail.com" className="hover:text-pink-400">
                saltlakeartemis@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Artemis Pet. All Rights Reserved. Website Developed & Maintained by Digital exposure Online Services
      </div>
    </footer>
  );
}
