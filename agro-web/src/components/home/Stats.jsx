import { STATS } from "@/data/home";

export default function Stats() {
  return (
    <section className="bg-[#1B5CA8] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-500">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center py-6 px-4 text-center"
            >
              <Icon size={26} className="mb-2" />

              <span className="text-2xl font-bold text-red-300">{value}</span>

              <span className="text-sm text-blue-200 mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
