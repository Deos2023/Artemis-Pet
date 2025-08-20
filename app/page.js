"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const page = () => {
  const services = [
    {
      title: "Pet Grooming",
      desc: "Professional grooming for dogs & cats.",
      img: "/sl2.png",
    },
    {
      title: "Pet Training",
      desc: "Obedience & behavior training for pets.",
      img: "/sl3.png",
    },
    {
      title: "Medical Support",
      desc: "Checkups & emergency medical care.",
      img: "/sl1.png",
    },
    {
      title: "Pet Creche",
      desc: "Safe and caring creche for your pets.",
      img: "/sl2.png",
    },
    {
      title: "Pet Essentials",
      desc: "Food, toys, and daily needs for pets.",
      img: "/sl3.png",
    },
  ];
  return (
    <div>
      {/* hero section */}

      <section className="bg-sky-50 pt-40 sm:pt-20  pb-12 md:pt-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-snug">
              Caring for Pets,
              <br />
              <span className="text-pink-500">Since October 2021</span>
            </h1>

            <p className="text-gray-600 max-w-md">
              At <span className="font-semibold">Artemis Pet</span>, we provide
              expert pet grooming, medical checkups, essentials, and love-filled
              creche services for your furry friends.
            </p>

            <Link
              href="/services"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition"
            >
              Our Services
            </Link>

            {/* Highlight card */}
            <div className="flex items-center bg-white rounded-xl shadow-md p-3 max-w-md">
              <div className="flex-shrink-0">
                <Image
                  src="/sl1.png" // replace with a real image
                  alt="Pet Care"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-sky-900 font-bold text-lg">
                  The Kind of Care Your Pets Deserve
                </h3>
                <p className="text-sm text-gray-500">
                  Pet grooming • Creche • Essentials
                </p>
              </div>
              <div className="ml-3">
                <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sky-500 hover:bg-sky-50">
                  ➜
                </button>
              </div>
            </div>
          </div>

          {/* Right Image (Dog PNG placeholder) */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/dog.png" // 👉 replace with your PNG
              alt="Dog"
              width={500}
              height={500}
              className="object-contain relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-yellow-400 rounded-full -z-0"></div>
          </div>
        </div>
      </section>

      {/* services slider */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-900 mb-12">
            Our Pet Care Services
          </h2>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  {/* Image */}
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />

                  {/* Floating Card */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-md w-[85%]">
                    <h3 className="text-sky-900 font-bold text-lg">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* about */}

      <section className="py-16 bg-sky-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="relative">
            <Image
              src="/abt.jpg" // 👉 replace with your image
              alt="About Artemis Pet"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
            {/* Optional background shape */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-200 rounded-full -z-10"></div>
          </div>

          {/* Right Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">
              About <span className="text-pink-500">Artemis Pet</span>
            </h1>

            <p className="text-lg text-gray-700 font-medium">
              Caring for Pets Since October 2021
            </p>

            <p className="text-gray-600 leading-relaxed">
              At Artemis Pet, we believe every pet deserves the best care, love,
              and attention. Our services range from grooming and medical
              support to creche and essentials, ensuring your furry friends are
              happy and healthy. With a dedicated team and state-of-the-art
              facilities, we are committed to making your pet’s life joyful and
              comfortable.
            </p>
          </div>
        </div>
      </section>

      
      {/* testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-900 mb-12">
            What Our Customers Say
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              {
                name: "Riya Sharma",
                feedback:
                  "Artemis Pet is amazing! My dog loved the grooming service and came back so happy.",
                img: "/user1.jpg",
              },
              {
                name: "Amit Verma",
                feedback:
                  "Best pet care service! The creche is super safe and my cat enjoys staying here.",
                img: "/user2.jpg",
              },
              {
                name: "Neha Patel",
                feedback:
                  "Professional staff and excellent medical care for pets. Highly recommended!",
                img: "/user3.jpg",
              },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-sky-50 p-6 rounded-2xl shadow-md text-center">
                  {/* <Image
                    src={t.img}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 object-cover"
                  /> */}
                  <p className="text-gray-600 italic">"{t.feedback}"</p>
                  <h3 className="mt-3 font-semibold text-sky-900">{t.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      

      {/* contact form */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-8">
            Contact Us
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const message = e.target.message.value;
              const phoneNumber = "919432762212"; // 👉 replace with your WhatsApp number
              const url = `https://wa.me/${phoneNumber}?text=Hello, my name is ${name}. ${message}`;
              window.open(url, "_blank");
            }}
            className="bg-white p-8 rounded-2xl text-sky-900 shadow-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section  */}

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-sky-900 to-pink-600 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Give Your Pet the Care They Deserve 🐾
          </h2>
          <p className="text-lg mb-8">
            From grooming and training to medical care, Artemis Pet is here to
            make your pet’s life better.
          </p>
          <Link
            href="/services"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book a Service
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
