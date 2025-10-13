// Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/hero1.jpg",
    eyebrow: "every device",
    title: (
      <>
        <span className="font- text-7xl ">Managed  </span> solutions
      </>
    ),
    subtitle: "Find your solution.",
    cta: "Find Your Solution",
    align: "left",
  },
  {
    image: "/images/hero2.jpg",
    eyebrow: "Our company",
    title: (
      <>
        AlgoVexa is your trusted source <br /> in{" "}
        <span className="text-7xl font-extrabold">IT</span> services and support
      </>
    ),
    subtitle:
      "AlgoVexa is a privately owned IT Support and IT Services business formed in 1988. We thrive on solving IT problems and meeting your business needs.",
    cta: "Explore Our Company",
    align: "center",
  },
  {
    image: "/images/hero3.jpg",
    eyebrow: "Our services",
    title: (
      <>
        Stay Up, <span className="text-7xl font-black">Stay Running</span>, Stay
        Protected
      </>
    ),
    subtitle:
      "Managed IT services, backup & recovery, and cybersecurity built specifically for your business.",
    cta: "Find Your Solution",
    align: "right",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef();

  // Preload images
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // Autoplay logic
  useEffect(() => {
    autoplayRef.current = () => setCurrent((p) => (p + 1) % slides.length);
  });

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => autoplayRef.current(), 6000);
    return () => clearInterval(id);
  }, [isPaused]);

  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full h-[88vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#00B0E0]/75" />

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex items-center px-6 md:px-16">
        <div
          className={`max-w-3xl w-full ${
            slides[current].align === "center"
              ? "text-center mx-auto"
              : slides[current].align === "right"
              ? "text-right ml-auto"
              : "text-left"
          }`}
        >
          {/* Eyebrow */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`eyebrow-${current}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-wider text-sm md:text-base font-semibold text-white/80 mb-3"
            >
              {slides[current].eyebrow}
            </motion.p>
          </AnimatePresence>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mx-auto"
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div
            key={`cta-${current}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-8 flex flex-wrap gap-4 ${
              slides[current].align === "center"
                ? "justify-center"
                : slides[current].align === "right"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#00B0E0] font-semibold rounded-md shadow hover:opacity-90 transition"
            >
              {slides[current].cta}
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-md border border-white/40 text-white hover:bg-white/10 transition"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute z-40 top-1/2 left-6 -translate-y-1/2 p-3 rounded-full bg-white/30 hover:bg-white/70 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-40 top-1/2 right-6 -translate-y-1/2 p-3 rounded-full bg-white/30 hover:bg-white/70 transition"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute z-40 bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-transform ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
