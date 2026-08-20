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
              className="group relative overflow-hidden rounded-2xl aspect-video bg-green-100"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
