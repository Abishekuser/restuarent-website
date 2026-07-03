import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const HOURS = [
  { day: "Monday – Friday", time: "11:30 AM – 10:30 PM" },
  { day: "Saturday – Sunday", time: "11:00 AM – 11:00 PM" },
  { day: "Public Holidays", time: "11:00 AM – 11:00 PM" },
];

export default function Location() {
  return (
    <section className="section-pad bg-cocoa/40">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Visit Us</span>
          <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
            Find our <span className="gold-text italic">table.</span>
          </h2>

          <div className="mt-8 flex gap-4">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold/25 text-gold-light">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-cream/40">Address</p>
              <p className="mt-1 text-ivory font-light leading-relaxed">
                24, Lakeview Avenue, RA Puram,<br />Chennai, Tamil Nadu 600028
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold/25 text-gold-light">
              <Clock className="h-4 w-4" />
            </span>
            <div className="w-full">
              <p className="text-xs uppercase tracking-widest text-cream/40 mb-2">Opening Hours</p>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between max-w-sm border-b border-gold/10 pb-2 text-sm">
                    <span className="text-cream/60 font-light">{h.day}</span>
                    <span className="text-ivory">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-gold/15 shadow-gold h-[420px]"
        >
          <iframe
            title="Spice Garden location map"
            src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
            className="h-full w-full grayscale-[35%] contrast-125"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
