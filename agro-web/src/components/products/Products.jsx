"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/common/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { useCart } from "@/context/CartContext";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/home";

export default function Products({
  categoryLimit = null,
  productLimit = null,
  showMore = false,
  showHeader = true,
  scrollOnHover = false,
}) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuy = (product) => {
    addToCart(product);
    router.push("/checkout");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Remove "All"
  const allCategories = PRODUCT_CATEGORIES.filter(
    (category) => category !== "All",
  );

  // Limit categories
  const categories =
    categoryLimit === null
      ? allCategories
      : allCategories.slice(0, categoryLimit);

  const hasMoreCategories =
    categoryLimit !== null && allCategories.length > categories.length;

  return (
    <section
      id="products"
      className="bg-white px-4 py-16 text-gray-900 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {showHeader && (
          <SectionHeader
            eyebrow="আমাদের পণ্য"
            title={
              <>
                Agricultural <span className="text-brand-600">Products</span>
              </>
            }
            description="Discover quality seeds, seedlings, fertilizers, pesticides, and agricultural equipment for better farming."
          />
        )}

        {/* Categories */}
        <div className={showHeader ? "mt-12 space-y-14" : "space-y-14"}>
          {categories.map((category) => {
            const categoryProducts = PRODUCTS.filter(
              (product) => product.cat === category,
            );

            if (categoryProducts.length === 0) {
              return null;
            }

            // Limit products inside each category
            const visibleProducts =
              productLimit === null
                ? categoryProducts
                : categoryProducts.slice(0, productLimit);

            return (
              <CategoryRow
                key={category}
                category={category}
                products={visibleProducts}
                scrollOnHover={scrollOnHover}
                onBuy={handleBuy}
                onAddToCart={handleAddToCart}
              />
            );
          })}
        </div>

        {/* Show More Categories */}
        {showMore && hasMoreCategories && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => router.push("/products")}
              className="rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105"
            >
              Show More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* =======================================================
   CATEGORY ROW

   A single horizontally-scrollable row of products.
   - Native scroll (touch/trackpad/scrollbar drag) always works,
     since this is a plain overflow-x-auto container — nothing
     here overrides it.
   - scrollOnHover just adds one thing on top: it lets a normal
     vertical mouse wheel move the row horizontally instead of
     scrolling the page, while the cursor is over it.
======================================================= */

function CategoryRow({
  category,
  products,
  scrollOnHover,
  onBuy,
  onAddToCart,
}) {
  const scrollRef = useRef(null);

  const handleWheel = (event) => {
    if (!scrollOnHover) {
      return;
    }

    // Only hijack the wheel when the user is scrolling more
    // vertically than horizontally — leaves trackpad horizontal
    // swipes (which the browser already handles natively) alone.
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
      return;
    }

    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaY;
  };

  return (
    <div>
      {/* Category Header */}
      <div className="mb-5">
        <h3 className="text-2xl font-bold text-gray-900">{category}</h3>

        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-brand" />
      </div>

      {/* Product Row */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide overscroll-contain"
      >
        {products.map((product, index) => (
          <div
            key={product.slug}
            className="flex-none w-[calc(50%-10px)] sm:w-[calc(33.333%-13.333px)] md:w-[calc(25%-15px)] lg:w-[calc(23%-16px)]"
          >
            <ProductCard
              {...product}
              priority={index === 0}
              onBuy={onBuy}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
