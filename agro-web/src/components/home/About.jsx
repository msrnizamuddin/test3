import Button from "@/components/common/Button";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-semibold text-sm uppercase tracking-widest text-[#1B5CA8]">
            আমাদের পরিচয়
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            Rooted in the Soil,
            <br />
            <span className="text-[#CC2229]">Growing with Bangladesh</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Founded on <strong>28 February 2020</strong> during the COVID
            pandemic, Agro1 Global began from a small demonstration plot and has
            grown into one of Bangladesh&apos;s most trusted agricultural
            companies — now operating over <strong>80 bigha</strong> of
            demonstration farmland.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            We provide end-to-end agro solutions: certified seeds, organic
            fertilizers, pest control, soil-free seedling production, polyhouse
            farming, and agricultural training.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#services" variant="secondary">
              Our Services
            </Button>

            <Button href="#contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1634962458589-30d58befcab2?w=700&h=500&fit=crop&auto=format"
              alt="Agro1 farmland"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-[#CC2229] text-white rounded-2xl p-5 shadow-xl">
            <div className="text-3xl font-bold">২০২০</div>

            <div className="text-sm font-medium opacity-90">
              Founded during pandemic
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-green-100">
            <div className="font-bold text-lg text-[#1B5CA8]">🏆 #1</div>

            <div className="text-xs text-gray-500">Seedling Producer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
