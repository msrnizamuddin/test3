import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/home";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 px-4 bg-linear-to-b from-[#0D1C45] to-[#0a1636] text-white overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#1B5CA8]/20 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="আমাদের সেবাসমূহ"
          title="Our Agricultural Services"
          description="Comprehensive solutions from seed to harvest — empowering every farmer across Bangladesh."
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
