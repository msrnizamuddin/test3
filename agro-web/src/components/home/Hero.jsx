"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ShoppingCart, ArrowRight } from "lucide-react";

import { HERO_SLIDES } from "@/data/home";
import Button from "@/components/common/Button";

const HERO_WORDS = ["Tomorrow", "Bangladesh", "Your Farm", "Prosperity"];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [heroWord, setHeroWord] = useState(0);

  const currentSlide = HERO_SLIDES[slide];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroWord((current) => (current + 1) % HERO_WORDS.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-104px)] overflow-hidden bg-[#8B1E2D]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1E2D] via-[#8B1E2D] to-[#457B9D]" />

        <div
          className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #457B9D 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #E63946 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute right-[20%] top-[20%] h-[300px] w-[300px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #F4D35E 0%, transparent 70%)",
          }}
        />

        {[...Array(14)].map((_, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-[#F4D35E]/20"
            style={{
              width: `${5 + (index % 3) * 3}px`,
              height: `${5 + (index % 3) * 3}px`,
              left: `${6 + index * 7}%`,
              top: `${12 + ((index * 17) % 72)}%`,
              animation: `heroFloat ${3 + (index % 3)}s ease-in-out ${index * 0.25}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-104px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F4D35E]/30 bg-[#E63946]/90 px-4 py-2 text-xs font-semibold text-white shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F4D35E] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F4D35E]" />
              </span>
              Trusted by 10,000+ Farmers across Bangladesh
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Plant a Garden,
              <br />
              <span className="mt-2 block">
                Believe in{" "}
                <span
                  key={heroWord}
                  className="inline-block bg-gradient-to-r from-[#F4D35E] via-[#F4D35E] to-white bg-clip-text text-transparent"
                  style={{
                    animation: "heroWordIn 0.6s ease both",
                  }}
                >
                  {HERO_WORDS[heroWord]}
                </span>
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {currentSlide?.subtitle ||
                "Bangladesh's premier agro supplier — certified seeds, organic fertilizers, modern tools, and expert guidance for every farmer."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/products"
                variant="primary"
                className="border-0 bg-[#E63946] px-8 py-3.5 text-white shadow-xl shadow-black/20 hover:bg-[#8B1E2D]"
              >
                <ShoppingCart size={18} className="mr-2" />
                Shop Now
              </Button>

              <Button
                href="/products"
                variant="outline"
                className="border-[#F4D35E]/60 bg-white/10 px-8 py-3.5 text-white backdrop-blur-md hover:bg-[#F4D35E]/20 hover:text-white"
              >
                Browse Categories
                <ArrowRight size={17} className="ml-2" />
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                ["10K+", "Farmers"],
                ["200+", "Products"],
                ["48h", "Delivery"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black text-white">{value}</div>

                  <div className="text-xs uppercase tracking-wider text-[#F4D35E]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[500px] items-center justify-center lg:flex">
            <div className="relative">
              <div className="relative h-[390px] w-[390px] overflow-hidden rounded-[2rem] border-[3px] border-[#F4D35E]/30 shadow-2xl">
                <Image
                  src={
                    currentSlide?.img ||
                    "https://images.unsplash.com/photo-1558289282-647de9fdf608?w=700&h=700&fit=crop&auto=format"
                  }
                  alt={currentSlide?.title || "Farmer planting"}
                  fill
                  priority
                  sizes="390px"
                  className="object-cover transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-[#457B9D]/30 via-transparent to-[#8B1E2D]/20" />
              </div>

              <div
                className="absolute -right-12 -top-7 rounded-2xl border border-[#F4D35E]/30 bg-white px-5 py-3 shadow-2xl"
                style={{
                  animation: "heroFloat 4s ease-in-out 1s infinite",
                }}
              >
                <div className="text-xs text-gray-500">Best Selling</div>

                <div className="text-sm font-bold text-[#8B1E2D]">
                  Hybrid Seeds 🌱
                </div>
              </div>

              <div
                className="absolute -bottom-7 -left-12 rounded-2xl border border-[#457B9D]/20 bg-white px-5 py-3 shadow-2xl"
                style={{
                  animation: "heroFloat 5s ease-in-out 0.5s infinite",
                }}
              >
                <div className="text-xs text-gray-500">Delivered</div>

                <div className="text-sm font-bold text-[#E63946]">
                  Fast 48h ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {HERO_SLIDES.length > 1 && (
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {HERO_SLIDES.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === slide
                  ? "w-8 bg-[#F4D35E]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}

      <div className="absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-[#F4D35E] md:flex">
        <span>Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
