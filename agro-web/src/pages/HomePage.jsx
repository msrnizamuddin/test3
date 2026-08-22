import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Products from "@/components/products/Products";
import About from "@/components/about/About";
export default function HomePage() {
  return (
    <div>
      <Hero />

      <Stats />

      <Products categoryLimit={3} productLimit={7} showMore scrollOnHover />

      <Services />
      <About />
    </div>
  );
}
