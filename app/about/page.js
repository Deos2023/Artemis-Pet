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

const AboutPage = () => {
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
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-snug">
              About <span className="text-pink-500">Artemis Pet</span>
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Since <span className="font-semibold">October 2021</span>, Artemis Pet 
              has been dedicated to offering exceptional care, love, and 
              attention for pets. We believe every pet deserves a premium, 
              joyful, and healthy life experience.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition shadow-lg hover:shadow-pink-200"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/abt.jpg"
              alt="About Artemis Pet"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover z-10"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-300 rounded-full -z-0 opacity-80"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg z-20"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">🐕</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-8 bg-white p-3 rounded-full shadow-lg z-20"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <span className="text-2xl">🐈</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/abt2.jpg"
              alt="Our Mission"
              width={600}
              height={450}
              className="rounded-2xl shadow-md object-cover"
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-200 rounded-full -z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Artemis Pet, our mission is to provide trusted, 
              compassionate, and professional pet care that exceeds expectations. 
              From premium grooming to comprehensive medical support, we ensure 
              every furry friend feels loved, safe, and cared for.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to become the leading provider of luxury pet care services, 
              setting new standards in animal wellness and customer experience 
              through innovation, expertise, and genuine love for animals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline Section */}
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
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-200"></div>
            
            <motion.div 
              className="space-y-12"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  year: "2021",
                  title: "Grand Opening",
                  description: "Artemis Pet launched with premium grooming and basic care services, quickly becoming a local favorite.",
                  side: "left"
                },
                {
                  year: "2022",
                  title: "Medical Services Added",
                  description: "Expanded to include veterinary consultations and emergency care with certified professionals.",
                  side: "right"
                },
                {
                  year: "2023",
                  title: "Luxury Creche Launch",
                  description: "Introduced our state-of-the-art pet daycare facility with live webcams and premium amenities.",
                  side: "left"
                },
                {
                  year: "2024",
                  title: "Premium Essentials Store",
                  description: "Launched our boutique offering high-end pet products, foods, and accessories.",
                  side: "right"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex ${item.side === 'left' ? 'flex-row-reverse' : ''} items-center`}
                  variants={fadeIn}
                >
                  <div className={`w-5/12 ${item.side === 'left' ? 'pl-8' : 'pr-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-sky-100">
                      <h3 className="text-xl font-bold text-pink-500">{item.year}</h3>
                      <h4 className="text-lg font-semibold text-sky-900 mt-2">{item.title}</h4>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.3 }}
                    />
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The principles that guide everything we do at Artemis Pet
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Compassion",
                desc: "Every pet is treated like family, with unconditional kindness and love.",
                icon: "❤️",
                color: "bg-pink-50"
              },
              {
                title: "Excellence",
                desc: "We deliver premium services with attention to detail and expertise.",
                icon: "⭐",
                color: "bg-yellow-50"
              },
              {
                title: "Trust",
                desc: "Creating safe, reliable, and comfortable environments for all pets.",
                icon: "🤝",
                color: "bg-sky-50"
              },
              {
                title: "Innovation",
                desc: "Continuously improving our services with the latest pet care advancements.",
                icon: "💡",
                color: "bg-purple-50"
              },
              {
                title: "Community",
                desc: "Building relationships with pet parents and supporting local animal welfare.",
                icon: "👨‍👩‍👧‍👦",
                color: "bg-green-50"
              },
              {
                title: "Wellness",
                desc: "Promoting holistic health and happiness for every animal in our care.",
                icon: "🌿",
                color: "bg-teal-50"
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${value.color} border border-white`}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-sky-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet Our Expert Team
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Certified professionals who are passionate about animal care
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Head Veterinarian",
                bio: "10+ years of experience in pet healthcare and wellness.",
                image: "/team1.jpg"
              },
              {
                name: "Michael Rodriguez",
                role: "Master Groomer",
                bio: "Certified professional groomer with award-winning techniques.",
                image: "/team2.jpg"
              },
              {
                name: "Emma Williams",
                role: "Training Specialist",
                bio: "Animal behavior expert with certifications in positive reinforcement training.",
                image: "/team3.jpg"
              },
              {
                name: "James Thompson",
                role: "Facility Manager",
                bio: "Ensures our creche maintains the highest standards of safety and comfort.",
                image: "/team4.jpg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 bg-sky-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                    {member.role}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sky-900">{member.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
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
            Join the Artemis Pet Family
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-sky-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover why thousands of pet parents trust us for premium care, 
            unconditional love, and expert support. Your pets deserve nothing less than exceptional.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-white/20"
            >
              Get in Touch Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;