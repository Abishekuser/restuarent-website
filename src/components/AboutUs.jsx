import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-gold/15 shadow-gold">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop"
              alt="Spice Garden kitchen preparing traditional dishes"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -right-6 md:-right-10 card-panel rounded-2xl px-8 py-6 text-center shadow-gold"
          >
            <p className="font-display text-5xl gold-text">14</p>
            <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Years of Experience</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">Our Story</span>
          <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
            Two kitchens, <span className="gold-text italic">one table.</span>
          </h2>
          <p className="mt-6 text-cream/70 font-light leading-relaxed">
            Spice Garden opened in 2012 with a simple idea: bring the
            comforting, spice-forward cooking of South India and the bold,
            wok-fired flavors of Chinese cuisine onto the same menu — without
            compromising either one.
          </p>
          <p className="mt-4 text-cream/70 font-light leading-relaxed">
            What began as a single family-run dining room has grown into a
            neighbourhood favourite for weekend family lunches and after-work
            dinners alike, while our kitchen still runs on the same
            hand-ground masalas and fresh-cut vegetables we started with.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-gold/40 pl-4">
              <p className="font-display text-3xl text-gold-light">2</p>
              <p className="text-sm text-cream/50 mt-1">Cuisines mastered</p>
            </div>
            <div className="border-l-2 border-gold/40 pl-4">
              <p className="font-display text-3xl text-gold-light">50k+</p>
              <p className="text-sm text-cream/50 mt-1">Guests served yearly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
