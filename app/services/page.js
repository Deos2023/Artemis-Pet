"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
      staggerChildren: 0.2
    }
  }
};

const ServicesPage = () => {
  const services = [
    {
      title: "Premium Pet Grooming",
      desc: "Luxury grooming experience with premium products, including spa baths, breed-specific haircuts, nail care, and teeth brushing.",
      img: "/sl2.png",
      icon: "✂️",
      features: ["Breed-specific styling", "Hypoallergenic products", "Spa treatment", "De-shedding"],
      price: "Starting at ₹1,499"
    },
    {
      title: "Professional Pet Training",
      desc: "Comprehensive behavioral & obedience training programs tailored to your pet's needs and personality.",
      img: "/sl3.png",
      icon: "🎓",
      features: ["Basic obedience", "Behavior correction", "Puppy training", "Advanced tricks"],
      price: "Packages from ₹8,999"
    },
    {
      title: "Veterinary Medical Support",
      desc: "Complete healthcare including routine checkups, vaccinations, dental care, and emergency medical services.",
      img: "/sl1.png",
      icon: "🏥",
      features: ["Health checkups", "Vaccinations", "Dental care", "Emergency services"],
      price: "Consultation: ₹999"
    },
    {
      title: "Luxury Pet Creche",
      desc: "Premium daycare with climate-controlled suites, live webcams, play areas, and individual attention.",
      img: "/sl2.png",
      icon: "🏠",
      features: ["Live webcam access", "Climate-controlled", "Play groups", "Nap time suites"],
      price: "From ₹799/day"
    },
    {
      title: "Premium Pet Essentials",
      desc: "Curated selection of high-quality food, designer toys, organic treats, and luxury accessories.",
      img: "/sl3.png",
      icon: "🛍️",
      features: ["Organic food", "Designer accessories", "Interactive toys", "Grooming products"],
      price: "Various price points"
    },
    {
      title: "Pet Taxi Service",
      desc: "Safe and comfortable transportation service for your pets to and from our facility.",
      img: "/sl1.png",
      icon: "🚗",
      features: ["Air-conditioned vehicles", "Safety harnesses", "Tracking available", "On-time service"],
      price: "Starting at ₹299"
    },
  ];

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
      <section className="bg-sky-50 pt-52 sm:pt-32 pb-16 relative overflow-hidden">
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
        
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-sky-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our <span className="text-pink-500">Premium Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At Artemis Pet, we provide exceptional care solutions for your cherished companions. 
            From luxury grooming to comprehensive medical support, we're dedicated to your pet's wellbeing.
          </motion.p>
          
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href="#services"
              className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition group"
            >
              Explore our services
              <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Premium Pet Care Services
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive range of services designed to keep your pet healthy, happy, and thriving
          </motion.p>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-sky-100"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-2xl">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sky-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sky-800 mb-2">Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-pink-500 mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-sky-100">
                    <span className="font-bold text-pink-500">{service.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-200 transition"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
        
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How Our Service Process Works
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A seamless experience from booking to completion
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book Appointment",
                description: "Schedule online or via call at your convenience",
                icon: "📅"
              },
              {
                step: "02",
                title: "Consultation",
                description: "We discuss your pet's specific needs and requirements",
                icon: "💬"
              },
              {
                step: "03",
                title: "Premium Service",
                description: "Our experts deliver exceptional care for your pet",
                icon: "✨"
              },
              {
                step: "04",
                title: "Follow-up",
                description: "We ensure your complete satisfaction with our service",
                icon: "✅"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto text-2xl z-10 relative">
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 bg-pink-100 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="text-sm text-pink-500 font-semibold mb-2">{item.step}</div>
                <h3 className="font-bold text-sky-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-pink-500">Artemis Pet?</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the difference of premium pet care
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
                title: "Certified Experts",
                desc: "Our team includes certified groomers, trainers, and veterinary professionals with years of experience.",
                icon: "⭐",
                color: "bg-yellow-50"
              },
              {
                title: "Premium Facilities",
                desc: "State-of-the-art facilities with climate control, hygiene protocols, and safety measures.",
                icon: "🏢",
                color: "bg-sky-50"
              },
              {
                title: "Personalized Care",
                desc: "Customized service plans tailored to your pet's breed, age, and specific needs.",
                icon: "🎯",
                color: "bg-pink-50"
              },
              {
                title: "Natural Products",
                desc: "We use only premium, natural, and hypoallergenic products for all our services.",
                icon: "🌿",
                color: "bg-green-50"
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden costs with clear, upfront pricing for all our services and packages.",
                icon: "💰",
                color: "bg-teal-50"
              },
              {
                title: "Emergency Support",
                desc: "24/7 emergency support and consultation for our premium care members.",
                icon: "🆘",
                color: "bg-red-50"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${item.color} border border-white`}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="text-3xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Pet Parents Say
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from our satisfied customers about their experience with Artemis Pet
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Riya Sharma",
                service: "Grooming & Creche",
                feedback: "My golden retriever absolutely loves his spa days at Artemis! The groomers are amazing and the creche facility is fantastic.",
                rating: 5
              },
              {
                name: "Amit Verma",
                service: "Training Program",
                feedback: "The obedience training transformed my mischievous labrador. The trainers are patient and knowledgeable.",
                rating: 5
              },
              {
                name: "Neha Patel",
                service: "Medical Care",
                feedback: "Dr. Sarah handled my cat's dental issue with such care. The follow-up was exceptional too!",
                rating: 5
              },
              {
                name: "Sanjay Mehta",
                service: "All Services",
                feedback: "We use multiple services and couldn't be happier. Professional, caring, and worth every rupee!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex text-yellow-400 mb-4">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
                <div>
                  <h4 className="font-semibold text-sky-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-900 to-pink-600 text-center text-white relative overflow-hidden">
        {/* Animated elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to Pamper Your Pet?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-sky-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book a premium service today and let Artemis Pet provide exceptional care 
            and love for your furry family member.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-white/20"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="inline-block bg-transparent border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;