export default function ServiceCard({
  img,
  icon: Icon,
  title,
  subtitle,
  desc,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-navy-400/40 bg-navy-400/20 hover:border-brand-400 hover:bg-navy-400/35 dark:border-navy-600/40 dark:bg-navy-900/30 dark:hover:border-brand-500 dark:hover:bg-navy-800/40 transition-all duration-300">
      <div className="relative overflow-hidden h-44">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 to-transparent" />

        <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 dark:bg-gray-900/90 flex items-center justify-center text-navy-600 dark:text-sand-400">
          <Icon size={22} />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-white text-sm mb-0.5">{title}</h3>

        <p className="text-sand-300 dark:text-sand-400 text-xs mb-2">
          {subtitle}
        </p>

        <p className="text-navy-200 dark:text-navy-100 text-xs leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
