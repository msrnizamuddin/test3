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
      "bg-linear-to-r from-[#F97316] to-[#c2410c] text-white hover:brightness-110 shadow-lg shadow-orange-900/20 dark:shadow-orange-950/40",
    secondary:
      "bg-linear-to-r from-[#16A34A] to-[#15803d] text-white hover:brightness-110 shadow-lg shadow-green-900/20 dark:shadow-green-950/40",
    outline:
      "border-2 border-[#F97316] text-[#F97316] hover:bg-orange-50 dark:border-[#fb923c] dark:text-orange-400 dark:hover:bg-orange-950/40",
  };

  const classes = `
    inline-flex items-center justify-center
    px-6 py-3 font-semibold rounded-xl
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 active:translate-y-0
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#16A34A] dark:focus-visible:ring-offset-gray-950
    disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0
    ${variants[variant]}
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
