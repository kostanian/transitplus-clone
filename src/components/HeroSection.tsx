import { motion } from "framer-motion";
import { ArrowDown, Info } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Международная логистика"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-10 pt-32 pb-20 w-full max-w-[900px]">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-7xl uppercase leading-[1.1] tracking-tight"
        >
          Надёжная
          <br />
          доставка
          <br />
          грузов из Азии
          <br />
          <span className="inline-flex items-center gap-4">
            и стран ЮВА
            <span className="inline-flex items-center gap-2 bg-secondary rounded-full px-5 py-2 text-base font-sans font-normal normal-case tracking-normal">
              от 100 кг
              <Info size={16} className="text-muted-foreground" />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed"
        >
          Надёжно транспортируем любые виды грузов для вашего бизнеса небом, морем и&nbsp;сушей.
        </motion.p>
      </div>

      {/* Bottom CTA */}
      <motion.a
        href="#calculator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-8 right-6 lg:right-10 bg-secondary hover:bg-dark-surface-hover transition-colors rounded-xl px-8 py-5 flex items-center gap-4 group"
      >
        <span className="text-sm font-medium uppercase tracking-wider">Рассчитайте стоимость доставки</span>
        <ArrowDown size={18} className="text-gold group-hover:translate-y-1 transition-transform" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
