import { Expand } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { GALLERY_IMAGES } from "@/data/home";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="আমাদের গ্যালারি" title="Gallery" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image}
              className="group relative overflow-hidden rounded-2xl aspect-video bg-gray-100 dark:bg-gray-900 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0D1C45]/70 via-[#0D1C45]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-[#1B5CA8] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Expand size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
