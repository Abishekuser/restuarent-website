import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import FloatingFood3D from "./FloatingFood3D.jsx";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yScene = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      style={{ position: "relative" }}
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 md:pt-20"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-clay/20 blur-[140px]" />
      </div>

      {/* Floating decorative spice glyphs (parallax) */}
      {["🌶️", "🍃", "⭐"].map((emoji, i) => (
        <motion.span
          key={i}
          style={{ y: yScene }}
          className={`hidden md:block absolute text-3xl opacity-70 animate-float select-none`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6 + i * 0.2, duration: 1 }}
          aria-hidden
        >
          <span
            style={{
              position: "absolute",
              top: `${18 + i * 22}%`,
              left: i % 2 === 0 ? "6%" : "auto",
              right: i % 2 !== 0 ? "8%" : "auto",
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {emoji}
          </span>
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:px-20 md:grid-cols-2">
        {/* Text column */}
        <motion.div style={{ y: yText, opacity }} className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" /> South Indian &amp; Chinese, Reimagined
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="heading-xl text-5xl sm:text-6xl lg:text-7xl"
          >
            Flavor, served
            <br />
            with <span className="gold-text italic">soul.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-cream/70 leading-relaxed font-body font-light"
          >
            From sizzling Chettinad classics to wok-tossed Indo-Chinese
            favorites — Spice Garden brings two beloved cuisines together
            under one warm, golden roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Reserve Table
            </a>
            <a href="#menu" className="btn-outline">
              View Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 flex items-center gap-8 border-t border-gold/10 pt-6"
          >
            <div>
              <p className="font-display text-3xl text-gold-light">14+</p>
              <p className="text-xs uppercase tracking-widest text-cream/50 mt-1">Years of Craft</p>
            </div>
            <div className="h-8 w-px bg-gold/15" />
            <div>
              <p className="font-display text-3xl text-gold-light">45+</p>
              <p className="text-xs uppercase tracking-widest text-cream/50 mt-1">Signature Dishes</p>
            </div>
            <div className="h-8 w-px bg-gold/15" />
            <div>
              <p className="font-display text-3xl text-gold-light">4.8★</p>
              <p className="text-xs uppercase tracking-widest text-cream/50 mt-1">Guest Rating</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D showcase column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ y: yScene }}
          className="relative h-[380px] md:h-[520px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gold/15 to-transparent blur-2xl" />
          <FloatingFood3D />
        </motion.div>
      </div>

      <motion.a
        href="#menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50 text-xs tracking-widest uppercase"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
