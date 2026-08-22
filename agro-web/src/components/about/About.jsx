"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    date: "Feb 2020",
    title: "Founded on a single demonstration plot",
    description:
      "Agro1 Global started during the COVID pandemic with a small trial plot testing soil-free seedling methods.",
  },
  {
    date: "2021",
    title: "Polyhouse farming introduced",
    description:
      "Expanded into controlled-environment cultivation, cutting crop loss and extending growing seasons for partner farmers.",
  },
  {
    date: "2023",
    title: "Nationwide delivery network",
    description:
      "Certified seeds, fertilizers, and pest-control products became available for order and delivery across all 64 districts.",
  },
  {
    date: "Today",
    title: "80+ bigha under active cultivation",
    description:
      "Now one of Bangladesh's most trusted agricultural companies, with a resident agronomist team supporting growers directly.",
  },
];

const BENEFITS = [
  {
    title: "Certified Seeds & Fertilizers",
    description:
      "Lab-tested for germination rate and nutrient purity before every batch ships.",
  },
  {
    title: "Nationwide Delivery",
    description: "Cash-on-delivery ordering, reaching all 64 districts.",
  },
  {
    title: "Expert Advisory",
    description:
      "Free consultation with our agronomists on soil, pests, and planting schedules.",
  },
  {
    title: "Soil-Free Seedling Production",
    description:
      "Disease-resistant seedlings grown in controlled nurseries, ready to transplant.",
  },
];

// Reveal-on-scroll without styled-jsx: both server and client render the
// same "not visible" classes on first paint (no hydration mismatch is
// possible here since nothing depends on window/Date/random), and the
// visible classes are only applied after mount via IntersectionObserver.
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const REVEAL_BASE =
  "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0";

export default function About() {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();
  const [journeyRef, journeyVisible] = useReveal();

  return (
    <section
      id="about"
      className="bg-background px-4 py-20 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top: image + intro */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div
            ref={leftRef}
            className={`relative ${REVEAL_BASE} ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div
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

              <div className="absolute inset-0 bg-linear-to-br from-navy-500/20 via-transparent to-transparent" />
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
          <div
            ref={rightRef}
            className={`${REVEAL_BASE} ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
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
              pandemic, Agro1 Global began from a single demonstration plot
              where our founders tested soil-free seedling methods that local
              nurseries had never tried at scale. What started as an experiment
              in reducing seedling disease has grown into one of
              Bangladesh&apos;s most trusted agricultural companies, now
              operating over <strong>80 bigha</strong> of demonstration farmland
              across multiple districts.
            </p>

            <p className="mb-4 leading-relaxed text-gray-600">
              We provide end-to-end agro solutions: certified seeds, organic
              fertilizers, pest control, soil-free seedling production,
              polyhouse farming, and hands-on agricultural training — built for
              smallholder farmers who need reliable inputs and honest advice,
              not just a product catalog.
            </p>

            <p className="mb-8 leading-relaxed text-gray-600">
              Our mission is simple: make modern, science-backed farming methods
              accessible to every grower in Bangladesh, regardless of farm size.
              Our agronomists visit demonstration plots year-round, so the
              techniques we recommend are ones we&apos;ve tested ourselves
              first.
            </p>

            {/* Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((item) => (
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

        {/* Journey timeline — real chronological milestones */}
        <div
          ref={journeyRef}
          className={`mt-20 ${REVEAL_BASE} ${
            journeyVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-navy-600">
            আমাদের যাত্রা
          </p>

          <h3 className="mb-10 text-2xl font-black text-navy-700 md:text-3xl">
            Our Journey So Far
          </h3>

          <div className="grid gap-8 md:grid-cols-4">
            {MILESTONES.map((milestone, index) => (
              <div key={milestone.title} className="relative pl-6 md:pl-0">
                <div
                  className={`hidden h-1 w-full rounded-full md:block ${
                    index === 0 ? "bg-transparent" : "bg-sand-100"
                  }`}
                />

                <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-brand-600 md:static md:mt-4 md:h-2.5 md:w-2.5" />

                <div className="text-xs font-bold uppercase tracking-wide text-brand-600 md:mt-4">
                  {milestone.date}
                </div>

                <div className="mt-1 text-base font-bold text-navy-700">
                  {milestone.title}
                </div>

                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
