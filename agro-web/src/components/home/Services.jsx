import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/home";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#0D1C45] text-white">
      <div className="max-w-7xl mx-auto">
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
