// src/components/checkout/CheckoutHeader.jsx

export default function CheckoutHeader() {
  return (
    <div className="mb-10 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-navy-600">
        চেকআউট
      </p>

      <h1 className="text-3xl font-black leading-tight text-navy-700 md:text-4xl">
        Complete Your <span className="text-brand-600">Order</span>
      </h1>

      <p className="mx-auto mt-3 max-w-2xl text-gray-600">
        Provide your delivery information and choose your preferred payment
        method.
      </p>
    </div>
  );
}
