import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/about/About";
import Services from "@/components/home/Services";
import Products from "@/components/products/Products";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/contact/Contact";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/home";
import Button from "@/components/common/Button";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Products />
      <div className="text-center mt-7 mb-4">
        <Button href="/products" variant="secondary">
          View All Products
        </Button>
      </div>
      <Services />
    </div>
  );
}
