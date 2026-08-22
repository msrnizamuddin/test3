import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/home";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-4 py-20 md:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="আমাদের সেবাসমূহ"
          title={
            <>
              Our Agricultural <span className="text-brand-600">Services</span>
            </>
          }
          description="Comprehensive solutions from seed to harvest — empowering every farmer across Bangladesh."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
