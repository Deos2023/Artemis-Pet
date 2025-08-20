"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "9432762212"; // WhatsApp Number
    const text = `Hello Artemis Pet,%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sky-50 pt-52 sm:pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">
          Contact <span className="text-pink-500">Artemis Pet</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Established in <strong>October 2021</strong>, Artemis Pet is your trusted partner in pet grooming, medical support, creche, and essentials.  
          Reach out to us for any queries or bookings!
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-sky-50 p-6 rounded-2xl shadow-md">
            <FaPhoneAlt className="text-pink-500 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-sky-900 mb-2">Phone</h3>
            <p className="text-gray-600">9432762212 / 9681613277</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-2xl shadow-md">
            <FaEnvelope className="text-pink-500 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-sky-900 mb-2">Email</h3>
            <p className="text-gray-600">saltlakeartemis@gmail.com</p>
          </div>
          <div className="bg-sky-50 p-6 rounded-2xl shadow-md">
            <FaMapMarkerAlt className="text-pink-500 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-sky-900 mb-2">Address</h3>
            <p className="text-gray-600">
              CK - 67, CK Block, Sector II, Bidhannagar,  
              Kolkata, West Bengal 700091
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-sky-900 text-center mb-8">
            Send Us a Message
          </h2>
          <form
            onSubmit={handleWhatsApp}
            className="bg-white shadow-md rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sky-900 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sky-900 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sky-900 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-sky-900 text-center mb-8">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.6812694209993!2d88.4262916!3d22.5873401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02758f63ec0daf%3A0x6b83d43e85b03b2c!2sARTEMIS%20Pet!5e1!3m2!1sen!2sin!4v1755687649101!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
