import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Priya Raghunathan",
    role: "Weekend regular",
    rating: 5,
    text: "The masala dosa tastes exactly like my grandmother's, and the Hakka noodles are just as good. Rare to find both done right in one place.",
  },
  {
    name: "Arjun Mehta",
    role: "Young professional",
    rating: 5,
    text: "My go-to for after-work dinners. Quick service, consistent flavour, and the Schezwan fried rice is worth the visit alone.",
  },
  {
    name: "The Sundaram Family",
    role: "Family of four",
    rating: 4,
    text: "We bring the kids every other Sunday. Great for families — spacious, warm staff, and something on the menu everyone actually agrees on.",
  },
  {
    name: "Kevin D'Souza",
    role: "Food blogger",
    rating: 5,
    text: "Chettinad chicken had real depth of spice, not just heat. One of the few places doing Indo-Chinese fusion without diluting either cuisine.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/5 blur-[110px]" />

      <div className="mx-auto max-w-4xl text-center">
        <span className="eyebrow justify-center">Guest Voices</span>
        <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
          What our <span className="gold-text italic">guests say.</span>
        </h2>

        <div className="relative mt-16">
          <Quote className="mx-auto h-10 w-10 text-gold/30" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="mt-4"
            >
              <p className="font-display text-2xl md:text-3xl text-ivory/90 leading-snug italic">
                “{REVIEWS[index].text}”
              </p>
              <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: REVIEWS[index].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="mt-4 font-body text-ivory">{REVIEWS[index].name}</p>
              <p className="text-sm text-cream/50">{REVIEWS[index].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-colors hover:bg-gold/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-gold/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-colors hover:bg-gold/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
