"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/common/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { useCart } from "@/context/CartContext";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/home";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { addToCart } = useCart();
  const router = useRouter();

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.cat === activeCategory);

  const handleBuy = (product) => {
    addToCart(product);
    router.push("/checkout");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section
      id="products"
      className="py-20 px-4 bg-background text-foreground transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="আমাদের পণ্য"
          title="Our Products"
          description="Browse our full range of certified agricultural products for every farming need."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRODUCT_CATEGORIES.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-full
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    active
                      ? "bg-gradient-brand text-white shadow-md"
                      : `
                        bg-surface
                        border border-border
                        text-gray-600 dark:text-gray-300
                        hover:border-brand-500
                        hover:text-brand-600
                        dark:hover:border-brand-400
                        dark:hover:text-brand-400
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
                onBuy={handleBuy}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
