import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Products from "@/components/products/Products";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
    </div>
  );
}
