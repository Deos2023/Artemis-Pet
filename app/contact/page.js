"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    const phoneNumber = "919432762212"; // WhatsApp Number with country code
    const text = `Hello Artemis Pet,%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Service Interested In:* ${service || 'Not specified'}%0A%0A
*Message:*%0A${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-100 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-sky-100 opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-sky-50 pt-52 sm:pt-32 pb-16 text-center relative overflow-hidden">
        {/* Animated footprints */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 opacity-10"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-4xl">🐾</span>
          </motion.div>
          <motion.div
            className="absolute top-32 left-24 opacity-10"
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <span className="text-4xl">🐾</span>
          </motion.div>
          <motion.div
            className="absolute bottom-40 right-16 opacity-10"
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <span className="text-3xl">🐾</span>
          </motion.div>
        </div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-sky-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact <span className="text-pink-500">Artemis Pet</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Established in <strong>October 2021</strong>, Artemis Pet is your trusted partner in premium pet grooming, medical support, luxury creche, and exclusive essentials.  
          Reach out to us for any queries or bookings!
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're here to answer all your questions and provide the best care for your pets
          </motion.p>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaPhoneAlt className="text-pink-500 text-3xl" />,
                title: "Phone",
                content: "9432762212 / 9681613277",
                link: "tel:+919432762212",
                description: "Call us for immediate assistance"
              },
              {
                icon: <FaEnvelope className="text-pink-500 text-3xl" />,
                title: "Email",
                content: "saltlakeartemis@gmail.com",
                link: "mailto:saltlakeartemis@gmail.com",
                description: "Send us an email anytime"
              },
              {
                icon: <FaMapMarkerAlt className="text-pink-500 text-3xl" />,
                title: "Address",
                content: "CK-67, CK Block, Sector II, Bidhannagar, Kolkata, West Bengal 700091",
                link: "https://goo.gl/maps/example",
                description: "Visit our premium facility"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === "Address" ? "_blank" : "_self"}
                className="bg-sky-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group border border-sky-100"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-6 group-hover:bg-pink-50 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.content}</p>
                <p className="text-sm text-pink-500 font-medium">{item.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-sky-50 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/4 opacity-10"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-5xl">🐾</span>
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/3 opacity-10"
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <span className="text-5xl">🐾</span>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-extrabold text-sky-900 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Send Us a Message
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fill out the form below and we'll get back to you as soon as possible
          </motion.p>
          
          <motion.form
            onSubmit={handleWhatsApp}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-sky-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sky-900 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sky-900 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sky-900 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sky-900 font-semibold mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                >
                  <option value="">Select a service</option>
                  <option value="Grooming">Premium Grooming</option>
                  <option value="Training">Professional Training</option>
                  <option value="Medical">Medical Support</option>
                  <option value="Creche">Luxury Creche</option>
                  <option value="Essentials">Pet Essentials</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sky-900 font-semibold mb-2">Message *</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="Tell us how we can help you and your pet..."
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="text-xl" />
              Send via WhatsApp
            </motion.button>
            
            <p className="text-center text-gray-500 text-sm">
              Alternatively, you can call us directly at{" "}
              <a href="tel:+919432762212" className="text-pink-500 hover:underline">+91 94327 62212</a>
            </p>
          </motion.form>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-extrabold text-sky-900 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Business Hours
          </motion.h2>
          
          <motion.div 
            className="bg-sky-50 rounded-2xl shadow-md p-8 border border-sky-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
                { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
                { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
                { day: "Emergency Services", hours: "24/7 Available" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-sky-100 last:border-b-0">
                  <span className="font-medium text-sky-900">{item.day}</span>
                  <span className="text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-100">
              <p className="text-pink-700 text-sm text-center">
                <strong>Emergency services:</strong> Available 24/7 for existing clients. Please call directly for urgent matters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-extrabold text-sky-900 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Find Us on the Map
          </motion.h2>
          
          <motion.div 
            className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.6812694209993!2d88.4262916!3d22.5873401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02758f63ec0daf%3A0x6b83d43e85b03b2c!2sARTEMIS%20Pet!5e1!3m2!1sen!2sin!4v1755687649101!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition group"
            >
              Get directions to our facility
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-900 to-pink-600 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to Give Your Pet Premium Care?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-sky-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us today to schedule a visit or consultation for your furry friend
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+919432762212"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-white/20"
            >
              Call Now
            </a>
            <a
              href="#contact-form"
              className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Send Message
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}