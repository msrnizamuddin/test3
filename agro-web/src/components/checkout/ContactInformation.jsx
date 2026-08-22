// src/components/checkout/ContactInformation.jsx

import CheckoutField from "./CheckoutField";

export default function ContactInformation() {
  return (
    <div className="rounded-3xl border border-sand-100 bg-surface p-6 shadow-lg md:p-8">
      <h2 className="mb-5 text-lg font-bold text-navy-700">
        Contact Information
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <CheckoutField label="Full Name" required>
          <input
            type="text"
            name="fullName"
            required
            placeholder="e.g. Kamal Hossain"
            className="checkout-input"
          />
        </CheckoutField>

        <CheckoutField label="Phone Number" required>
          <input
            type="tel"
            name="phone"
            required
            placeholder="01XXXXXXXXX"
            pattern="01[0-9]{9}"
            className="checkout-input"
          />
        </CheckoutField>

        <CheckoutField label="Email (optional)" className="sm:col-span-2">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="checkout-input"
          />
        </CheckoutField>
      </div>
    </div>
  );
}
