import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2, User, Users, Calendar, Clock } from "lucide-react";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text", icon: User, placeholder: "Anjali Kumar" },
  { name: "phone", label: "Phone Number", type: "tel", icon: Phone, placeholder: "+91 98765 43210" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    notes: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return(
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-14">
        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="eyebrow">Get in Touch</span>
          <h2 className="heading-xl mt-5 text-4xl md:text-5xl">
            Reserve your <span className="gold-text italic">table.</span>
          </h2>
          <p className="mt-5 text-cream/60 font-light leading-relaxed">
            Fill in your details and our team will confirm your reservation
            within the hour. For same-day bookings, calling ahead is best.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:+911234567890" className="flex items-center gap-4 group">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold/25 text-gold-light transition-colors group-hover:bg-gold/10">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <p className="text-xs uppercase tracking-widest text-cream/40">Call Us</p>
                <p className="text-ivory group-hover:text-gold-light transition-colors">+91 12345 67890</p>
              </span>
            </a>
            <a href="mailto:hello@spicegarden.in" className="flex items-center gap-4 group">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold/25 text-gold-light transition-colors group-hover:bg-gold/10">
                <Mail className="h-4 w-4" />
              </span>
              <span>
                <p className="text-xs uppercase tracking-widest text-cream/40">Email Us</p>
                <p className="text-ivory group-hover:text-gold-light transition-colors">hello@spicegarden.in</p>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 card-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                >
                  <CheckCircle2 className="h-16 w-16 text-gold-light" strokeWidth={1.2} />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl text-ivory">Reservation Requested</h3>
                <p className="mt-2 text-cream/60 font-light max-w-sm">
                  Thank you, {form.name.split(" ")[0] || "friend"}. We'll confirm your table
                  for {form.guests} guest{form.guests !== "1" ? "s" : ""} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-8 text-sm"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {FIELDS.map((f) => (
                    <div key={f.name} className="relative">
                      <label className="block text-xs uppercase tracking-widest text-cream/40 mb-2">
                        {f.label}
                      </label>
                      <div className="relative">
                        <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" />
                        <input
                          required
                          type={f.type}
                          name={f.name}
                          value={form[f.name]}
                          placeholder={f.placeholder}
                          onChange={handleChange}
                          onFocus={() => setFocused(f.name)}
                          onBlur={() => setFocused(null)}
                          className="w-full rounded-xl bg-espresso/60 border border-gold/15 py-3 pl-11 pr-4 text-ivory placeholder:text-cream/25 outline-none transition-all duration-300 focus:border-gold/60 focus:shadow-gold"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream/40 mb-2">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" />
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl bg-espresso/60 border border-gold/15 py-3 pl-11 pr-4 text-ivory outline-none transition-all duration-300 focus:border-gold/60"
                      >
                        {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream/40 mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" />
                      <input
                        required
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-espresso/60 border border-gold/15 py-3 pl-11 pr-4 text-ivory outline-none transition-all duration-300 focus:border-gold/60 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cream/40 mb-2">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" />
                      <input
                        required
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-espresso/60 border border-gold/15 py-3 pl-11 pr-4 text-ivory outline-none transition-all duration-300 focus:border-gold/60 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream/40 mb-2">
                    Special Requests (optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Window seat, birthday celebration, allergies..."
                    className="w-full rounded-xl bg-espresso/60 border border-gold/15 py-3 px-4 text-ivory placeholder:text-cream/25 outline-none transition-all duration-300 focus:border-gold/60 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary w-full disabled:opacity-70"
                >
                  {submitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="h-4 w-4 rounded-full border-2 border-espresso/40 border-t-espresso"
                    />
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Confirm Reservation
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
