export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  dark = false,
}) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <span
        className={`font-semibold text-sm uppercase tracking-widest ${
          dark ? "text-sand-300" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`text-3xl md:text-4xl font-bold mt-2 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 max-w-xl mx-auto ${
            dark ? "text-navy-100" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
