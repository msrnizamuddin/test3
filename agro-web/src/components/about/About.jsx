import Button from "@/components/common/Button";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex font-semibold text-xs uppercase tracking-[0.2em] text-[#1B5CA8] bg-[#1B5CA8]/10 dark:text-blue-300 dark:bg-blue-500/10 px-3 py-1 rounded-full">
            আমাদের পরিচয়
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6 leading-tight tracking-tight">
            Rooted in the Soil,
            <br />
            <span className="text-gradient-brand">
              Growing with Bangladesh
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Founded on <strong>28 February 2020</strong> during the COVID
            pandemic, Agro1 Global began from a small demonstration plot and has
            grown into one of Bangladesh&apos;s most trusted agricultural
            companies — now operating over <strong>80 bigha</strong> of
            demonstration farmland.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            We provide end-to-end agro solutions: certified seeds, organic
            fertilizers, pest control, soil-free seedling production, polyhouse
            farming, and agricultural training.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-black/5 dark:ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1634962458589-30d58befcab2?w=700&h=500&fit=crop&auto=format"
              alt="Agro1 farmland"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-linear-to-br from-[#CC2229] to-[#a3191f] text-white rounded-2xl p-5 shadow-xl shadow-red-900/30">
            <div className="text-3xl font-bold">২০২০</div>

            <div className="text-sm font-medium opacity-90">
              Founded during pandemic
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-800">
            <div className="font-bold text-lg text-[#1B5CA8] dark:text-blue-400">
              🏆 #1
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400">
              Seedling Producer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
