"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CategoryProduct from "@/components/ui/CategoryProduct";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/home";

export default function ProductPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleBuy = (product) => {
    addToCart(product);
    router.push("/checkout");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product) => product.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-white px-4 py-12 text-gray-900 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
            আমাদের পণ্য
          </p>

          <h1 className="text-3xl font-bold text-navy-900 md:text-4xl">
            Agricultural Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Explore our collection of quality agricultural products, seeds,
            fertilizers, pesticides, seedlings, and equipment.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          {/* =================================================
              SIDEBAR
          ================================================= */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="mb-4 px-2 text-lg font-bold text-navy-900">
                Categories
              </h2>

              <nav className="space-y-1">
                {PRODUCT_CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-gradient-brand text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-100 hover:text-brand-700"
                      }`}
                    >
                      {category === "All" ? "All Products" : category}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* =================================================
              PRODUCTS
          ================================================= */}
          <section>
            {/* Result Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-navy-900">
                  {selectedCategory === "All"
                    ? "All Products"
                    : selectedCategory}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {filteredProducts.length} products available
                </p>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <CategoryProduct
                    key={product.slug}
                    {...product}
                    priority={index < 3}
                    onBuy={handleBuy}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  No products found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  There are no products in this category.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
