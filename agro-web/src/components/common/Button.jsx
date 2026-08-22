import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  const variants = {
    primary:
      "bg-gradient-brand text-white hover:brightness-110 dark:bg-gradient-brand dark:hover:brightness-125",

    secondary:
      "bg-navy-600 text-white hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-600",

    outline:
      "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-900/40",
  };

  const classes = `
    inline-flex items-center justify-center
    px-6 py-3 font-semibold rounded-full
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
    shadow-sm
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:hover:scale-100
    ${variants[variant] || variants.primary}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
