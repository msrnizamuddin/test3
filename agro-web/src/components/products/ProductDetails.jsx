"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Zap,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import Button from "@/components/common/Button";
import { PRODUCTS } from "@/data/home";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const router = useRouter();
  const params = useParams();
  const { addToCart } = useCart();

  const slug = params?.slug;

  const product = PRODUCTS.find(
    (item) =>
      item.slug === slug ||
      item.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  // Product not found
  if (!product) {
    return (
      <main className="min-h-screen bg-white dark:bg-navy-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Package
            size={56}
            className="mx-auto mb-5 text-gray-300 dark:text-gray-700"
          />

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Product Not Found
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            The product you are looking for does not exist or may have been
            removed.
          </p>

          <Button href="/products">Back to Products</Button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity: 1,
    });

    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-white dark:bg-navy-900 transition-colors">
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back */}
        <Link
          href="/products"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-gray-500 dark:text-gray-400
            hover:text-brand-600 dark:hover:text-brand-400
            transition-colors
            mb-8
          "
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Product Image */}
          <div>
            <div
              className="
                relative aspect-square
                rounded-3xl overflow-hidden
                bg-gray-100 dark:bg-gray-900
                border border-gray-100 dark:border-gray-800
              "
            >
              <Image
                src={product.img}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <span
                className="
                  absolute top-5 left-5
                  bg-navy-600
                  text-white
                  text-xs font-bold
                  px-3 py-1.5
                  rounded-full
                  shadow-md
                "
              >
                {product.cat}
              </span>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <span
              className="
                text-sm font-semibold
                uppercase tracking-widest
                text-navy-600 dark:text-navy-300
                mb-3
              "
            >
              {product.cat}
            </span>

            {/* Name */}
            <h1
              className="
                text-3xl md:text-4xl lg:text-5xl
                font-bold
                text-gray-900 dark:text-white
                leading-tight
              "
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-5">
              <span
                className="
                  text-2xl font-bold
                  text-navy-600 dark:text-navy-300
                "
              >
                {product.price}
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-6
                text-gray-600 dark:text-gray-300
                leading-relaxed
              "
            >
              High-quality agricultural product designed to provide reliable
              performance and excellent results for modern farming needs.
              Carefully selected to meet professional agricultural standards.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              <Feature icon={ShieldCheck} title="Quality Assured" />

              <Feature icon={Package} title="Secure Packaging" />

              <Feature icon={Truck} title="Fast Delivery" />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={handleBuyNow}>
                <span className="flex items-center gap-2">
                  <Zap size={17} />
                  Buy Now
                </span>
              </Button>

              <Button onClick={handleAddToCart} variant="outline">
                <span className="flex items-center gap-2">
                  <ShoppingCart size={17} />
                  Add To Cart
                </span>
              </Button>
            </div>

            {/* Highlights */}
            <div
              className="
                mt-8 pt-6
                border-t
                border-gray-100 dark:border-gray-800
              "
            >
              <h2
                className="
                  font-semibold
                  text-gray-900 dark:text-white
                  mb-3
                "
              >
                Product Highlights
              </h2>

              <ul className="space-y-2">
                {[
                  "Suitable for professional agricultural use",
                  "Reliable and consistent quality",
                  "Carefully selected for farming applications",
                  "Available for bulk orders",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                      flex items-center gap-2
                      text-sm
                      text-gray-600 dark:text-gray-300
                    "
                  >
                    <Check
                      size={16}
                      className="
                        text-brand-600
                        dark:text-brand-400
                        shrink-0
                      "
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Feature Card */
function Feature({ icon: Icon, title }) {
  return (
    <div
      className="
        flex items-center gap-3
        p-3
        rounded-xl
        bg-gray-50 dark:bg-gray-900
        border
        border-gray-100 dark:border-gray-800
      "
    >
      <Icon size={22} className="text-navy-600 dark:text-navy-300 shrink-0" />

      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
        {title}
      </span>
    </div>
  );
}
