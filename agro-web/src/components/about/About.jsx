"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".about-reveal-left, .about-reveal-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-background px-4 py-20 md:py-24 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Image */}
        <div className="about-reveal-left relative">
          <div
            ref={imageRef}
            className="group relative overflow-hidden rounded-3xl shadow-2xl"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1634962458589-30d58befcab2?w=800&h=600&fit=crop&auto=format"
              alt="Agro1 farmland"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-navy-500/20 via-transparent to-transparent" />
          </div>

          {/* Founded Card */}
          <div className="absolute -bottom-6 -right-3 rounded-2xl bg-gradient-brand p-5 text-white shadow-xl md:-right-6">
            <div className="text-3xl font-black">২০২০</div>

            <div className="text-sm font-medium opacity-90">
              Founded during pandemic
            </div>
          </div>

          {/* Award Card */}
          <div className="absolute -left-3 -top-5 rounded-2xl border border-sand-100 bg-surface px-5 py-3 shadow-lg md:-left-5">
            <div className="text-xl font-black text-navy-600">🏆 #1</div>

            <div className="text-xs text-gray-500">Seedling Producer</div>
          </div>
        </div>

        {/* Content */}
        <div className="about-reveal-right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy-600">
            আমাদের পরিচয়
          </p>

          <h2 className="mb-5 text-3xl font-black leading-tight text-navy-700 md:text-4xl">
            Rooted in the Soil,
            <br />
            <span className="text-brand-600">Growing with Bangladesh</span>
          </h2>

          <p className="mb-4 leading-relaxed text-gray-600">
            Founded on <strong>28 February 2020</strong> during the COVID
            pandemic, Agro1 Global began from a small demonstration plot and has
            grown into one of Bangladesh&apos;s most trusted agricultural
            companies — now operating over <strong>80 bigha</strong> of
            demonstration farmland.
          </p>

          <p className="mb-8 leading-relaxed text-gray-600">
            We provide end-to-end agro solutions: certified seeds, organic
            fertilizers, pest control, soil-free seedling production, polyhouse
            farming, and agricultural training.
          </p>

          {/* Benefits */}
          <div className="space-y-4">
            {[
              {
                title: "Certified Seeds & Fertilizers",
                description: "100% quality guaranteed",
              },
              {
                title: "Nationwide Delivery",
                description: "All 64 districts covered",
              },
              {
                title: "Expert Advisory",
                description: "Free agronomist support",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  ✓
                </div>

                <div>
                  <div className="text-sm font-semibold text-navy-700">
                    {item.title}
                  </div>

                  <div className="text-xs text-gray-500">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-gradient-brand px-7 py-3 font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Shop Products
            </Link>

            <Link
              href="/contact"
              className="rounded-full border-2 border-navy-600 px-7 py-3 font-bold text-navy-600 transition-all duration-300 hover:bg-navy-600 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-reveal-left,
        .about-reveal-right {
          opacity: 0;
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .about-reveal-left {
          transform: translateX(-40px);
        }

        .about-reveal-right {
          transform: translateX(40px);
        }

        .about-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}
