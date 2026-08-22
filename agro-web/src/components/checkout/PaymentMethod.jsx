// src/components/checkout/PaymentMethod.jsx

import { PAYMENT_METHODS } from "@/constants/checkout.constants";

export default function PaymentMethod({ payment, setPayment }) {
  return (
    <div className="rounded-3xl border border-sand-100 bg-surface p-6 shadow-lg md:p-8">
      <h2 className="mb-5 text-lg font-bold text-navy-700">Payment Method</h2>

      <div className="space-y-3">
        {PAYMENT_METHODS.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition-all ${
              payment === method.id
                ? "border-brand-600 bg-brand-600/5"
                : "border-sand-100 hover:border-sand-200"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={payment === method.id}
              onChange={() => setPayment(method.id)}
              className="mt-1 h-4 w-4 accent-brand-600"
            />

            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-navy-700">
                  {method.title}
                </span>

                {method.badge && (
                  <span className="rounded-full bg-gradient-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    {method.badge}
                  </span>
                )}
              </div>

              <p className="mt-0.5 text-xs text-gray-500">
                {method.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
