import { motion } from "framer-motion";

const PromoSection = () => {
  return (
    <section className="py-20 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto gradient-gold rounded-2xl p-10 lg:p-14 text-center"
      >
        <p className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-2">Новым клиентам</p>
        <h3 className="font-display font-black text-2xl lg:text-4xl text-primary-foreground uppercase mb-2">
          Подача таможенной декларации
        </h3>
        <p className="font-display font-black text-4xl lg:text-6xl text-primary-foreground uppercase mb-8">
          Бесплатно
        </p>
        <button className="bg-primary-foreground text-primary font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider text-sm">
          Оставить заявку
        </button>
      </motion.div>
    </section>
  );
};

export default PromoSection;
