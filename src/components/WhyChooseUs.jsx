import { motion } from "framer-motion";
import { Sprout, ChefHat, Timer, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Sprout,
    title: "Fresh Ingredients",
    desc: "Vegetables sourced daily and spices ground in-house, never pre-mixed or stored long.",
  },
  {
    icon: ChefHat,
    title: "Experienced Chefs",
    desc: "Our kitchen is led by chefs trained in both Chettinad and Cantonese cooking traditions.",
  },
  {
    icon: Timer,
    title: "Fast, Attentive Service",
    desc: "From table service to takeaway, orders are prepared quickly without cutting corners.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    desc: "Every dish follows the same tested recipe, plate after plate, visit after visit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-cocoa/40 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow justify-center">Why Spice Garden</span>
          <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
            Made to be <span className="gold-text italic">trusted.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-panel rounded-2xl p-8 text-center transition-shadow duration-300 hover:shadow-gold"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-light/20 to-gold-dark/10 border border-gold/25">
                <f.icon className="h-6 w-6 text-gold-light" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-xl text-ivory">{f.title}</h3>
              <p className="mt-3 text-sm text-cream/60 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
