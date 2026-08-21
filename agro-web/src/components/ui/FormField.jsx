import { forwardRef } from "react";

const FormField = forwardRef(function FormField(
  { label, error, ...props },
  ref,
) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
        {label}
      </label>

      <input
        ref={ref}
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#16A34A] dark:focus:border-green-400 focus:ring-2 focus:ring-green-100 dark:focus:ring-green-900/40 transition-colors"
      />

      {error && (
        <p className="text-rose-500 dark:text-rose-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

export default FormField;
