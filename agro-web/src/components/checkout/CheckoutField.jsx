// src/components/checkout/CheckoutField.jsx

export default function CheckoutField({
  label,
  required = false,
  className = "",
  children,
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold text-navy-700">
        {label}

        {required && <span className="text-brand-600"> *</span>}
      </span>

      {children}
    </label>
  );
}
