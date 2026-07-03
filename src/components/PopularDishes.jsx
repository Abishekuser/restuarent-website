import { useMemo, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Flame, Leaf } from "lucide-react";

const DISHES = [
  {
    name: "Chettinad Chicken",
    tag: "South Indian",
    desc: "Slow-roasted chicken in a fiery, roasted-spice masala from the Chettinad region.",
    price: "₹420",
    spice: 3,
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Masala Dosa",
    tag: "South Indian",
    desc: "Crisp fermented crepe folded over a turmeric-spiced potato filling, served with chutneys.",
    price: "₹180",
    spice: 1,
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hakka Noodles",
    tag: "Chinese",
    desc: "Wok-tossed noodles with charred vegetables and a smoky soy-garlic glaze.",
    price: "₹260",
    spice: 1,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Chilli Garlic Prawns",
    tag: "Chinese",
    desc: "Wok-seared prawns tossed in a sharp chilli-garlic sauce with scallions.",
    price: "₹480",
    spice: 3,
    img: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hyderabadi Biryani",
    tag: "South Indian",
    desc: "Fragrant basmati layered with slow-cooked meat, saffron, and fried onions.",
    price: "₹380",
    spice: 2,
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Schezwan Fried Rice",
    tag: "Chinese",
    desc: "Bold, numbing Schezwan chillies folded through wok-fried rice and vegetables.",
    price: "₹240",
    spice: 3,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
  },
];

const FILTERS = ["All", "South Indian", "Chinese"];

function DishCard({ dish, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="card-panel group relative overflow-hidden rounded-2xl"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={dish.img}
            alt={dish.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/10 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-espresso/70 backdrop-blur px-3 py-1 text-[11px] tracking-widest uppercase text-gold-light border border-gold/20">
            {dish.tag}
          </span>
        </div>

        <div style={{ transform: "translateZ(40px)" }} className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl text-ivory">{dish.name}</h3>
            <span className="font-display text-xl text-gold-light whitespace-nowrap">{dish.price}</span>
          </div>
          <p className="mt-2 text-sm text-cream/60 font-light leading-relaxed">{dish.desc}</p>
          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: dish.spice }).map((_, i) => (
              <Flame key={i} className="h-4 w-4 text-gold" fill="currentColor" />
            ))}
            {dish.spice === 1 && <Leaf className="h-4 w-4 text-emerald-500/80 ml-1" />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PopularDishes() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? DISHES : DISHES.filter((d) => d.tag === filter)),
    [filter]
  );

  return (
    <section id="menu" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow justify-center">Our Signatures</span>
          <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
            Popular <span className="gold-text italic">Dishes</span>
          </h2>
          <p className="mt-4 text-cream/60 font-light">
            A curated table of our most-loved South Indian classics and
            Indo-Chinese favorites — made fresh, every single day.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide border transition-all duration-300 ${
                filter === f
                  ? "bg-gold text-espresso border-gold font-medium"
                  : "border-gold/20 text-cream/70 hover:border-gold/50 hover:text-gold-light"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dish, i) => (
            <DishCard dish={dish} index={i} key={dish.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
