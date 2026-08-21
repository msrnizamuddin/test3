"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/home";
import Button from "@/components/common/Button";

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setSlide(index);
    startAutoPlay();
  };

  const currentSlide = HERO_SLIDES[slide];

  return (
    <section
      id="home"
      className="relative h-140 md:h-170 overflow-hidden bg-gray-100 dark:bg-gray-950"
    >
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === slide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#0D1C45]/95 via-[#0D1C45]/70 to-black/30 dark:from-[#050b1c]/95 dark:via-[#0D1C45]/75 dark:to-black/40" />
        </div>
      ))}

      <div
        className="pointer-events-none absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-[#CC2229]/20 blur-3xl animate-float-slow"
        aria-hidden
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div key={slide} className="max-w-xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-[#CC2229] to-[#a3191f] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 shadow-lg shadow-red-900/30">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {currentSlide.tag}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              {currentSlide.title}
            </h1>

            <p className="text-blue-100 dark:text-gray-200 text-lg leading-relaxed mb-8">
              {currentSlide.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/products">Explore Products</Button>

              <Button
                href="/about"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 dark:border-white/20 dark:bg-black/20 dark:hover:bg-black/30"
              >
                Company Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.title}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === slide
                ? "w-8 h-2.5 bg-linear-to-r from-[#CC2229] to-[#a3191f]"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80 dark:bg-white/30 dark:hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() =>
          goToSlide((slide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 dark:bg-black/30 dark:hover:bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={() => goToSlide((slide + 1) % HERO_SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 dark:bg-black/30 dark:hover:bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}
