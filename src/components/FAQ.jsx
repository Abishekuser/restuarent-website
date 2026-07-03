import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What are your opening hours?",
    a: "We're open every day from 11:30 AM to 10:30 PM, including public holidays. Kitchen orders are taken until 10:00 PM.",
  },
  {
    q: "Do I need a reservation, and what's the policy?",
    a: "Walk-ins are welcome, but we recommend reserving for parties of 4 or more, especially on weekends. Tables are held for 15 minutes past the booked time before being released.",
  },
  {
    q: "Do you offer home delivery?",
    a: "Yes — we deliver within a 7 km radius through our own delivery line and major food delivery apps. Delivery typically takes 35–45 minutes.",
  },
  {
    q: "Can you accommodate large groups or events?",
    a: "Absolutely. We host family gatherings and small corporate events up to 40 guests — reach out through the contact form and we'll arrange a custom menu.",
  },
  {
    q: "Is there a vegetarian menu available?",
    a: "Yes, roughly half our menu across both cuisines is vegetarian, including dedicated Jain options on request.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-gold/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="font-display text-lg md:text-xl text-ivory group-hover:text-gold-light transition-colors">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gold/30 text-gold-light"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-cream/60 font-light leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad bg-cocoa/40">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="eyebrow justify-center">Good to Know</span>
          <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
            Frequently <span className="gold-text italic">asked.</span>
          </h2>
        </div>

        <div className="mt-14">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
