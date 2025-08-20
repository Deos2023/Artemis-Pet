"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const services = [
    {
      title: "Pet Grooming",
      desc: "Professional grooming for dogs & cats, including baths, haircuts, and nail care.",
      img: "/sl2.png",
    },
    {
      title: "Pet Training",
      desc: "Behavioral & obedience training to make your pet disciplined and happy.",
      img: "/sl3.png",
    },
    {
      title: "Medical Support",
      desc: "Routine checkups, vaccinations, and emergency medical care for pets.",
      img: "/sl1.png",
    },
    {
      title: "Pet Creche",
      desc: "A safe and caring creche where your pets feel at home while you’re away.",
      img: "/sl2.png",
    },
    {
      title: "Pet Essentials",
      desc: "Food, toys, treats, and accessories to keep your pets happy and healthy.",
      img: "/sl3.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sky-50 pt-52 sm:pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">
            Our <span className="text-pink-500">Services</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            At Artemis Pet, we provide complete care solutions for your furry
            friends. From grooming to training and medical support, we’re here
            for your pet’s happiness.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-sky-50 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={120}
                height={120}
                className="mx-auto mb-6 object-contain"
              />
              <h3 className="text-xl font-bold text-sky-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-8">
            Why Choose <span className="text-pink-500">Artemis Pet?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Expert Staff",
                desc: "Our trained team ensures the best care for your pets.",
                icon: "🐾",
              },
              {
                title: "Safe & Caring",
                desc: "We treat every pet like family with love and safety.",
                icon: "❤️",
              },
              {
                title: "All-in-One",
                desc: "From grooming to medical care, everything under one roof.",
                icon: "🏥",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-900 to-pink-600 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-lg mb-8">
            Book a service today and let Artemis Pet pamper your furry friend
            with love & care.
          </p>
          <Link
            href="/contact"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
