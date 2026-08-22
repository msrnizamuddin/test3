import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/home";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-[#0D1C45] via-[#122b62] to-[#1B5CA8] px-4 py-20 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #1B5CA8 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #CC2229 0%, transparent 70%)",
          }}
        />

        {[...Array(8)].map((_, index) => (
          <span
            key={index}
            className="absolute h-2 w-2 rounded-full bg-white/10"
            style={{
              left: `${8 + index * 12}%`,
              top: `${15 + ((index * 19) % 70)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="আমাদের সেবাসমূহ"
          title={
            <>
              Our Agricultural <span className="text-[#CC2229]">Services</span>
            </>
          }
          description="Comprehensive solutions from seed to harvest — empowering every farmer across Bangladesh."
          className="[&_p:first-child]:text-blue-300 [&_h2]:text-white [&_p:last-child]:text-blue-100"
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
