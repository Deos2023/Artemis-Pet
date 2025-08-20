"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Page = () => {
  const services = [
    {
      title: "Pet Grooming",
      desc: "Professional grooming for dogs & cats with premium products.",
      img: "/sl2.png",
      icon: "✂️"
    },
    {
      title: "Pet Training",
      desc: "Obedience & behavior training programs tailored to your pet.",
      img: "/sl3.png",
      icon: "🎓"
    },
    {
      title: "Medical Support",
      desc: "Comprehensive checkups & emergency medical care by certified vets.",
      img: "/sl1.png",
      icon: "🏥"
    },
    {
      title: "Pet Creche",
      desc: "Luxury daycare with play areas, naptime suites, and live webcams.",
      img: "/sl2.png",
      icon: "🏠"
    },
    {
      title: "Pet Essentials",
      desc: "Premium food, designer toys, and exclusive accessories for pets.",
      img: "/sl3.png",
      icon: "🛍️"
    },
  ];

  // Animation for floating elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Animation for footprints
  const FootprintTrail = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dog footprints */}
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-4xl">🐾</span>
        </motion.div>
        <motion.div
          className="absolute top-32 left-24 opacity-20"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <span className="text-4xl">🐾</span>
        </motion.div>
        <motion.div
          className="absolute top-44 left-12 opacity-20"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <span className="text-4xl">🐾</span>
        </motion.div>
        
        {/* Cat footprints */}
        <motion.div
          className="absolute bottom-40 right-16 opacity-20"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          <span className="text-3xl">🐾</span>
        </motion.div>
        <motion.div
          className="absolute bottom-28 right-28 opacity-20"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        >
          <span className="text-3xl">🐾</span>
        </motion.div>
        <motion.div
          className="absolute bottom-16 right-14 opacity-20"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        >
          <span className="text-3xl">🐾</span>
        </motion.div>
      </div>
    );
  };

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef();
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    React.useEffect(() => {
      if (isInView) {
        let startTime;
        let animationFrame;
        
        const animateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          
          setCount(Math.floor(progress * end));
          
          if (progress < 1) {
            animationFrame = requestAnimationFrame(animateCount);
          }
        };
        
        animationFrame = requestAnimationFrame(animateCount);
        
        return () => cancelAnimationFrame(animationFrame);
      }
    }, [end, duration, isInView]);
    
    return <span ref={ref}>{count}+</span>;
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

      {/* hero section */}
      <section className="bg-sky-50 pt-40 sm:pt-20 pb-12 md:pt-28 relative overflow-hidden">
        <FootprintTrail />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold text-sky-900 leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Caring for Pets,
              <br />
              <motion.span 
                className="text-pink-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >Since October 2021</motion.span>
            </motion.h1>

            <motion.p 
              className="text-gray-600 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              At <span className="font-semibold">Artemis Pet</span>, we provide
              premium pet grooming, medical checkups, luxury essentials, and love-filled
              creche services for your cherished companions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <Link
                href="/services"
                className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition shadow-lg hover:shadow-pink-200"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Highlight card */}
            <motion.div 
              className="flex items-center bg-white rounded-xl shadow-md p-3 max-w-md border border-sky-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0">
                <Image
                  src="/sl1.png"
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
                  Premium pet grooming • Luxury creche • Designer essentials
                </p>
              </div>
              <div className="ml-3">
                <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-all duration-300 hover:shadow-md">
                  ➜
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Image (Dog PNG placeholder) */}
          <div className="relative flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/dog.png"
                alt="Dog"
                width={500}
                height={500}
                className="object-contain relative z-10"
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-60 h-60 bg-yellow-400 rounded-full -z-0 opacity-80"
              animate={floatingAnimation}
            />
            
            {/* Animated elements around the dog */}
            <motion.div
              className="absolute top-10 -left-4 bg-white p-2 rounded-full shadow-lg"
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
              <span className="text-2xl">🎾</span>
            </motion.div>
            
            <motion.div
              className="absolute bottom-20 -left-8 bg-white p-2 rounded-full shadow-lg"
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
              <span className="text-2xl">🥎</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-sky-50 rounded-2xl shadow-sm"
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={1250} />
              </h3>
              <p className="text-sky-900">Happy Pets</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-sky-50 rounded-2xl shadow-sm"
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={4} />
              </h3>
              <p className="text-sky-900">Years of Excellence</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-sky-50 rounded-2xl shadow-sm"
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={12} />
              </h3>
              <p className="text-sky-900">Expert Staff</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-sky-50 rounded-2xl shadow-sm"
            >
              <h3 className="text-4xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={98} />
              </h3>
              <p className="text-sky-900">% Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* services slider */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-center text-sky-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Premium Pet Care Services
          </motion.h2>

          {/* Swiper Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-lg border border-sky-100"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-2xl">
                        {service.icon}
                      </div>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-md w-[85%]">
                      <h3 className="text-sky-900 font-bold text-lg">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{service.desc}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* about */}
      <section className="py-16 bg-sky-50 relative">
        <FootprintTrail />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/abt.jpg"
              alt="About Artemis Pet"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
            {/* Optional background shape */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-200 rounded-full -z-10 opacity-70"
              animate={floatingAnimation}
            />
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg"
              animate={{
                rotate: [0, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">❤️</span>
            </motion.div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">
              About <span className="text-pink-500">Artemis Pet</span>
            </h1>

            <p className="text-lg text-gray-700 font-medium">
              Caring for Pets Since October 2021
            </p>

            <p className="text-gray-600 leading-relaxed">
              At Artemis Pet, we believe every pet deserves exceptional care, love,
              and attention. Our premium services range from luxury grooming and comprehensive medical
              support to state-of-the-art creche facilities and exclusive pet essentials, ensuring your 
              cherished companions are happy, healthy, and thriving.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With our dedicated team of certified professionals and cutting-edge facilities, 
              we are committed to providing an unparalleled experience that celebrates the unique 
              bond between pets and their families.
            </p>
            
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition group"
              >
                Learn more about our story
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Title */}
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-center text-sky-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Cherished Clients Say
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true, dynamicBullets: true }}
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
                    "Artemis Pet is exceptional! My golden retriever loves the premium grooming service and always comes back looking fabulous.",
                  img: "/user1.jpg",
                  rating: 5
                },
                {
                  name: "Amit Verma",
                  feedback:
                    "The luxury creche is absolutely worth it! My cat enjoys her stays, and I love being able to check in via the live webcams.",
                  img: "/user2.jpg",
                  rating: 5
                },
                {
                  name: "Neha Patel",
                  feedback:
                    "Professional, compassionate staff and excellent medical care for my senior dog. Couldn't be happier with their services!",
                  img: "/user3.jpg",
                  rating: 5
                },
                {
                  name: "Sanjay Mehta",
                  feedback:
                    "The training program transformed my mischievous pup into a well-behaved companion. Highly recommend their expert trainers!",
                  img: "/user4.jpg",
                  rating: 5
                },
              ].map((t, i) => (
                <SwiperSlide key={i}>
                  <motion.div 
                    className="bg-sky-50 p-6 rounded-2xl shadow-md h-full border border-sky-100"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex text-yellow-400 mb-4">
                      {"★".repeat(t.rating)}
                    </div>
                    <p className="text-gray-600 italic">"{t.feedback}"</p>
                    <div className="mt-6 flex items-center">
                      <div className="bg-sky-100 h-12 w-12 rounded-full flex items-center justify-center text-sky-700 font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-sky-900">{t.name}</h3>
                        <p className="text-sm text-gray-500">Pet Parent</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* contact form */}
      <section className="py-16 bg-sky-50 relative">
        <FootprintTrail />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions about our premium pet services? Reach out to our team of experts.
          </motion.p>
          
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const message = e.target.message.value;
              const phoneNumber = "919432762212";
              const url = `https://wa.me/${phoneNumber}?text=Hello, my name is ${name}. ${message}`;
              window.open(url, "_blank");
            }}
            className="bg-white p-8 rounded-2xl text-sky-900 shadow-md space-y-4 border border-sky-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none transition"
              required
            />
            <textarea
              name="message"
              placeholder="How can we help you and your pet?"
              rows="4"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none transition"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="bg-pink-500 text-white px-8 py-4 rounded-full font-medium hover:bg-pink-600 transition shadow-lg hover:shadow-pink-200 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                Send via WhatsApp 
                <span className="ml-2 text-xl">💬</span>
              </span>
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* CTA section */}
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
            Give Your Pet the Premium Care They Deserve 🐾
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-sky-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From luxury grooming and expert training to comprehensive medical care, 
            Artemis Pet is dedicated to enhancing your pet's quality of life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-white/20"
            >
              Book a Premium Service
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;