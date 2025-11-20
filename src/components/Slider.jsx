"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=1600",
    title: "Empower Your Tech Skills",
    subtitle: "Learn Fullstack, React, Node, and more!",
    link: "https://google.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=1600",
    title: "Master Modern Development",
    subtitle: "Industry-relevant courses with projects",
    link: "https://youtube.com",
  },
  {
    image:
      "https://media.istockphoto.com/id/2149124402/photo/web-developer-coding-on-computer.webp?w=1600",
    title: "Build Your Future",
    subtitle: "Transform your career with technology",
    link: "https://example.com",
  },
];

export default function SimpleSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <div className="w-full mx-auto mt-20 px-4">
      <section className="relative w-full h-[260px] md:h-[420px] overflow-hidden rounded-3xl shadow-xl bg-white">
        {/* Slide Image */}
        <img
          src={slide.image}
          className="w-full h-full object-cover rounded-3xl"
          alt="slide"
        />

        {/* Text Overlay (Clickable) */}
        <a
          href={slide.link}
          className="absolute inset-0 bg-black/40 rounded-3xl flex flex-col justify-center items-center text-center px-4"
        >
          <h2 className="text-xl md:text-3xl font-bold text-white hover:underline">
            {slide.title}
          </h2>

          <p className="text-sm md:text-lg text-white/90 mt-2 hover:underline">
            {slide.subtitle}
          </p>
        </a>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black w-8 h-8 rounded-full flex items-center justify-center"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black w-8 h-8 rounded-full flex items-center justify-center"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}
