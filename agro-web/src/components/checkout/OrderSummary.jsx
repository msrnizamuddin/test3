// src/components/checkout/OrderSummary.jsx

import Image from "next/image";

export default function OrderSummary({
  cartItems,
  subtotal,
  deliveryFee,
  total,
  district,
  updateQuantity,
  removeFromCart,
  submitting,
}) {
  return (
    <div className="rounded-3xl border border-sand-100 bg-surface p-6 shadow-lg md:p-8">
      <h2 className="mb-5 text-lg font-bold text-navy-700">Order Summary</h2>

      {/* Products */}
      <div className="max-h-80 space-y-4 overflow-y-auto pr-1">
        {cartItems.map((item) => {
          const quantity = item.quantity || 1;
          const price = getPrice(item.price);

          return (
            <div key={item.name} className="flex items-center gap-3">
              {/* Image */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-sand-100 bg-gray-100">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                )}
              </div>

              {/* Product */}
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-navy-700">
                  {item.name}
                </div>

                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.name, Math.max(1, quantity - 1))
                    }
                    disabled={submitting}
                    className="flex h-5 w-5 items-center justify-center rounded-full border border-sand-100 hover:border-brand-600 hover:text-brand-600"
                  >
                    −
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={() => updateQuantity(item.name, quantity + 1)}
                    disabled={submitting}
                    className="flex h-5 w-5 items-center justify-center rounded-full border border-sand-100 hover:border-brand-600 hover:text-brand-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <div className="text-sm font-bold text-navy-700">
                  ৳{(price * quantity).toLocaleString()}
                </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.name)}
                  disabled={submitting}
                  className="text-[11px] text-gray-400 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Totals */}
      <div className="mt-6 space-y-2 border-t border-sand-100 pt-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>৳{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery ({district})</span>

          <span>৳{deliveryFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between pt-2 text-base font-black text-navy-700">
          <span>Total</span>

          <span>৳{total.toLocaleString()}</span>
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-full bg-gradient-brand px-7 py-3.5 text-center font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting
          ? "Placing Order..."
          : `Place Order — ৳${total.toLocaleString()}`}
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        By placing this order you agree to our delivery and return policy.
      </p>
    </div>
  );
}

function getPrice(price) {
  if (typeof price === "number") {
    return price;
  }

  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
}
