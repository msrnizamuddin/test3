"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/home";

function useCountUp(target, active, duration = 900) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);

      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, active, duration]);

  return count;
}

function StatItem({ stat }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const count = useCountUp(stat.value, active);
  const Icon = stat.icon;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center px-5 py-10 text-center md:py-12"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sand-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-sand-300/15">
        {Icon && <Icon size={24} strokeWidth={1.8} />}
      </div>

      <div className="text-3xl font-black tracking-tight text-white md:text-4xl">
        {count.toLocaleString()}
        <span className="ml-0.5 text-brand-400">+</span>
      </div>

      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/70 md:text-sm">
        {stat.label}
      </div>

      <div className="mt-5 h-1 w-8 rounded-full bg-sand-300 transition-all duration-300 group-hover:w-14" />
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #4580d1 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #2288d4 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #82c0ef 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`${index !== 0 ? "border-l border-white/10" : ""} ${
                index >= 2 ? "border-t border-white/10 md:border-t-0" : ""
              }`}
            >
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>

      <svg
        className="absolute inset-x-0 -bottom-px h-10 w-full sm:h-14 lg:h-16"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,40 L1440,100 L0,100 Z"
          style={{ fill: "var(--background)" }}
        />
      </svg>
    </section>
  );
}
