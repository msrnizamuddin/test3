import { STATS } from "@/data/home";

export default function Stats() {
  return (
    <section className="relative py-14 px-4 bg-linear-to-r from-[#123f73] via-[#1B5CA8] to-[#123f73] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 py-7 px-4 text-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-[#CC2229] to-[#a3191f] text-white shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform duration-300">
                <Icon size={22} />
              </div>

              <span className="text-2xl md:text-3xl font-extrabold text-white">
                {value}
              </span>

              <span className="text-sm text-blue-200">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
