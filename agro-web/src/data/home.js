import {
  Sprout,
  FlaskConical,
  House,
  Leaf,
  Wheat,
  Phone,
  Tractor,
  GraduationCap,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const QUICK_LINKS = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
];
export const ABOUT = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1642832520839-a30ac9bcadd9?w=1400&h=700&fit=crop&auto=format",
    title: "Growing Bangladesh's Future",
    subtitle:
      "Quality seeds, fertilizers, and agricultural solutions for a prosperous harvest",
    tag: "Trusted by 10,000+ Farmers",
  },
  {
    img: "https://images.unsplash.com/photo-1684691583342-0dfafc6942cf?w=1400&h=700&fit=crop&auto=format",
    title: "From Soil to Success",
    subtitle:
      "Empowering farmers with modern agro-technology and expert guidance since 2020",
    tag: "80 Bigha Demonstration Farm",
  },
  {
    img: "https://images.unsplash.com/photo-1672561924208-7762120e7077?w=1400&h=700&fit=crop&auto=format",
    title: "The Nation's Largest Seedling Producer",
    subtitle:
      "Soil-free vegetable seedlings cultivated with scientific precision and care",
    tag: "Certified Organic Practices",
  },
];

export const SERVICES = [
  {
    img: "https://images.unsplash.com/photo-1533321942807-08e4008b2025?w=600&h=400&fit=crop&auto=format",
    icon: Sprout,
    title: "AGRO1 SEED",
    subtitle: "বীজ — উন্নত ফলন",
    desc: "High-yield certified seeds with germination guarantees. Vegetables, grains, and hybrid varieties.",
  },
  {
    img: "https://images.unsplash.com/photo-1530541835461-dedaf9cf368a?w=600&h=400&fit=crop&auto=format",
    icon: FlaskConical,
    title: "AGRO1 PESTICIDE",
    subtitle: "কীটনাশক — রোগমুক্ত ফসল",
    desc: "Safe and effective pest control solutions. Protect your crops from disease and insects.",
  },
  {
    img: "https://images.unsplash.com/photo-1623136299195-570a06bdae6b?w=600&h=400&fit=crop&auto=format",
    icon: House,
    title: "POLYHOUSE FARMING",
    subtitle: "পলিহাউস — আধুনিক চাষ",
    desc: "Protected cultivation systems with year-round production capacity and climate control.",
  },
  {
    img: "https://images.unsplash.com/photo-1624905918163-bd455354cfed?w=600&h=400&fit=crop&auto=format",
    icon: Leaf,
    title: "SEEDLING PRODUCTION",
    subtitle: "চারা উৎপাদন — দেশের সেরা",
    desc: "Bangladesh's largest soil-free vegetable seedling producer with proven quality roots.",
  },
  {
    img: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&h=400&fit=crop&auto=format",
    icon: Wheat,
    title: "AGRO1 FERTILIZER",
    subtitle: "সার — জৈব ও রাসায়নিক",
    desc: "Organic and chemical fertilizers promoting sustainable soil health and maximum yield.",
  },
  {
    img: "https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?w=600&h=400&fit=crop&auto=format",
    icon: Phone,
    title: "CALL CENTER SERVICE",
    subtitle: "কৃষি তথ্য সেবা",
    desc: "Expert agricultural advice at your fingertips. Call our agronomists for free guidance.",
  },
  {
    img: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=600&h=400&fit=crop&auto=format",
    icon: Tractor,
    title: "AGRI EQUIPMENT",
    subtitle: "যন্ত্রপাতি — আধুনিক কৃষি",
    desc: "Modern farming equipment supply and maintenance for efficient agricultural operations.",
  },
  {
    img: "https://images.unsplash.com/photo-1637987327476-5c77df3cb16d?w=600&h=400&fit=crop&auto=format",
    icon: GraduationCap,
    title: "LEARNING ACADEMY",
    subtitle: "কৃষি শিক্ষা কেন্দ্র",
    desc: "Training programs, workshops, and certification courses for modern agro-entrepreneurs.",
  },
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Seeds",
  "Seedlings",
  "Pesticides",
  "Fertilizer",
  "Equipment",
];

export const PRODUCTS = [
  // =========================
  // SEEDS
  // =========================
  {
    name: "Hybrid Tomato Seed",
    slug: "hybrid-tomato-seed",
    cat: "Seeds",
    price: "৳ 280",
    img: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Bitter Gourd Seeds",
    slug: "bitter-gourd-seeds",
    cat: "Seeds",
    price: "৳ 150",
    img: "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Hybrid Cucumber Seeds",
    slug: "hybrid-cucumber-seeds",
    cat: "Seeds",
    price: "৳ 190",
    img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Red Amaranth Seeds",
    slug: "red-amaranth-seeds",
    cat: "Seeds",
    price: "৳ 120",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Bottle Gourd Seeds",
    slug: "bottle-gourd-seeds",
    cat: "Seeds",
    price: "৳ 165",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Sweet Corn Hybrid Seeds",
    slug: "sweet-corn-hybrid-seeds",
    cat: "Seeds",
    price: "৳ 320",
    img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Papaya Seeds Premium",
    slug: "papaya-seeds-premium",
    cat: "Seeds",
    price: "৳ 240",
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&h=300&fit=crop&auto=format",
  },

  // =========================
  // SEEDLINGS
  // =========================
  {
    name: "Vegetable Seedlings Pack",
    slug: "vegetable-seedlings-pack",
    cat: "Seedlings",
    price: "৳ 60",
    img: "https://images.unsplash.com/photo-1624905918163-bd455354cfed?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Lettuce Seedlings",
    slug: "lettuce-seedlings",
    cat: "Seedlings",
    price: "৳ 45",
    img: "https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Tomato Seedlings",
    slug: "tomato-seedlings",
    cat: "Seedlings",
    price: "৳ 55",
    img: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Capsicum Seedlings",
    slug: "capsicum-seedlings",
    cat: "Seedlings",
    price: "৳ 70",
    img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Eggplant Seedlings",
    slug: "eggplant-seedlings",
    cat: "Seedlings",
    price: "৳ 50",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Cauliflower Seedlings",
    slug: "cauliflower-seedlings",
    cat: "Seedlings",
    price: "৳ 65",
    img: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400&h=300&fit=crop&auto=format",
  },

  // =========================
  // PESTICIDES
  // =========================
  {
    name: "Pesticide Spray 1L",
    slug: "pesticide-spray-1l",
    cat: "Pesticides",
    price: "৳ 350",
    img: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Insect Control 500ml",
    slug: "insect-control-500ml",
    cat: "Pesticides",
    price: "৳ 280",
    img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Fungal Disease Protector",
    slug: "fungal-disease-protector",
    cat: "Pesticides",
    price: "৳ 420",
    img: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=400&h=300&fit=crop&auto=format",
  },

  {
    name: "Crop Protection Formula",
    slug: "crop-protection-formula",
    cat: "Pesticides",
    price: "৳ 460",
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Leaf Miner Control",
    slug: "leaf-miner-control",
    cat: "Pesticides",
    price: "৳ 390",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Broad Spectrum Insecticide",
    slug: "broad-spectrum-insecticide",
    cat: "Pesticides",
    price: "৳ 520",
    img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&h=300&fit=crop&auto=format",
  },

  // =========================
  // FERTILIZER
  // =========================
  {
    name: "Organic Compost Fertilizer",
    slug: "organic-compost-fertilizer",
    cat: "Fertilizer",
    price: "৳ 420",
    img: "https://images.unsplash.com/photo-1533321942807-08e4008b2025?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "NPK Fertilizer 5kg",
    slug: "npk-fertilizer-5kg",
    cat: "Fertilizer",
    price: "৳ 580",
    img: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&auto=format",
  },

  {
    name: "Potassium Fertilizer",
    slug: "potassium-fertilizer",
    cat: "Fertilizer",
    price: "৳ 620",
    img: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400&h=300&fit=crop&auto=format",
  },

  {
    name: "Vermicompost 10kg",
    slug: "vermicompost-10kg",
    cat: "Fertilizer",
    price: "৳ 750",
    img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Micronutrient Fertilizer",
    slug: "micronutrient-fertilizer",
    cat: "Fertilizer",
    price: "৳ 680",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&auto=format",
  },

  // =========================
  // EQUIPMENT
  // =========================
  {
    name: "Hand Sprayer Pump",
    slug: "hand-sprayer-pump",
    cat: "Equipment",
    price: "৳ 1,200",
    img: "https://images.unsplash.com/photo-1610560875826-af5b05a96cfa?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Pressure Sprayer 5L",
    slug: "pressure-sprayer-5l",
    cat: "Equipment",
    price: "৳ 1,850",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Garden Pruning Shears",
    slug: "garden-pruning-shears",
    cat: "Equipment",
    price: "৳ 650",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
  },

  {
    name: "Seedling Tray 72 Cell",
    slug: "seedling-tray-72-cell",
    cat: "Equipment",
    price: "৳ 180",
    img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&h=300&fit=crop&auto=format",
  },
];

export const STATS = [
  {
    label: "Farmers Served",
    value: "10,000+",
    icon: Users,
  },
  {
    label: "Demonstration Farm",
    value: "80 Bigha",
    icon: Wheat,
  },
  {
    label: "Product Varieties",
    value: "200+",
    icon: Package,
  },
  {
    label: "Years of Growth",
    value: "5+",
    icon: TrendingUp,
  },
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1642832520839-a30ac9bcadd9?w=500&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1610560875826-af5b05a96cfa?w=500&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1617208794629-3f18abbb5831?w=500&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1672561924208-7762120e7077?w=500&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1634962458589-30d58befcab2?w=500&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1633581392839-9c992ef68b8e?w=500&h=400&fit=crop&auto=format",
];
