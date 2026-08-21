export default function ServiceCard({
  img,
  icon: Icon,
  title,
  subtitle,
  desc,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-[#CC2229]/60 hover:bg-white/10 hover:-translate-y-1.5 shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300">
      <div className="relative overflow-hidden h-44">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0D1C45]/90 via-[#0D1C45]/20 to-transparent" />

        <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/95 dark:bg-gray-900/90 flex items-center justify-center text-[#1B5CA8] dark:text-blue-400 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          <Icon size={22} />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-red-300 transition-colors">
          {title}
        </h3>

        <p className="text-red-300 dark:text-red-400 text-xs mb-2">
          {subtitle}
        </p>

        <p className="text-blue-200 dark:text-blue-300 text-xs leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
