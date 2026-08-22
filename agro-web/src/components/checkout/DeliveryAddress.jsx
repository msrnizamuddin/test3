// src/components/checkout/DeliveryAddress.jsx

import CheckoutField from "./CheckoutField";
import { DISTRICTS } from "@/constants/checkout.constants";

export default function DeliveryAddress({ district, setDistrict }) {
  return (
    <div className="rounded-3xl border border-sand-100 bg-surface p-6 shadow-lg md:p-8">
      <h2 className="mb-5 text-lg font-bold text-navy-700">Delivery Address</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <CheckoutField label="District" required>
          <select
            name="district"
            required
            value={district}
            onChange={(event) => setDistrict(event.target.value)}
            className="checkout-input"
          >
            {DISTRICTS.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </CheckoutField>

        <CheckoutField label="Upazila / Area">
          <input
            type="text"
            name="area"
            placeholder="e.g. Savar"
            className="checkout-input"
          />
        </CheckoutField>

        <CheckoutField label="Full Address" required className="sm:col-span-2">
          <textarea
            name="address"
            required
            rows={3}
            placeholder="House, road, landmark..."
            className="checkout-input resize-none"
          />
        </CheckoutField>

        <CheckoutField label="Order Notes (optional)" className="sm:col-span-2">
          <textarea
            name="notes"
            rows={2}
            placeholder="Anything we should know about your delivery?"
            className="checkout-input resize-none"
          />
        </CheckoutField>
      </div>
    </div>
  );
}
