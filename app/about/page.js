"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sky-50 pt-52 sm:pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-snug">
              About <span className="text-pink-500">Artemis Pet</span>
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Since <span className="font-semibold">October 2021</span>, Artemis Pet 
              has been dedicated to offering the best care, love, and 
              attention for pets. We believe every pet deserves a safe, 
              joyful, and healthy life.
            </p>

            <Link
              href="/services"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/abt.jpg"
              alt="About Artemis Pet"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-300 rounded-full -z-0"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/mission.jpg" // replace with a mission image
              alt="Our Mission"
              width={600}
              height={450}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Artemis Pet, our mission is to provide trusted, 
              compassionate, and professional pet care. From grooming to 
              medical support, we ensure every furry friend feels loved 
              and cared for.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-12">
            Our Core Values 🐾
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion",
                desc: "Every pet is treated like family, with kindness and love.",
                icon: "❤️",
              },
              {
                title: "Care",
                desc: "Professional grooming, health checkups, and essentials.",
                icon: "🩺",
              },
              {
                title: "Trust",
                desc: "Safe, reliable, and comfortable environment for pets.",
                icon: "🤝",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-sky-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-900 to-pink-600 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Join the Artemis Pet Family 🐕🐾
          </h2>
          <p className="text-lg mb-8">
            Discover why so many pet parents trust us for care, love, and 
            support. Your pets deserve nothing less than the best.
          </p>
          <Link
            href="/contact"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
