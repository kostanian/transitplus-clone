import { motion } from "framer-motion";
import { Plane, Truck, TrainFront, Ship, ChevronRight } from "lucide-react";

const countries = [
  {
    name: "Китай",
    flag: "🇨🇳",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Truck, label: "Авто" },
      { icon: TrainFront, label: "Ж/Д" },
      { icon: Ship, label: "Море" },
    ],
  },
  {
    name: "Индия",
    flag: "🇮🇳",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Ship, label: "Море" },
    ],
  },
  {
    name: "Турция",
    flag: "🇹🇷",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Truck, label: "Авто" },
      { icon: Ship, label: "Море" },
    ],
  },
  {
    name: "Казахстан",
    flag: "🇰🇿",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Truck, label: "Авто" },
      { icon: TrainFront, label: "Ж/Д" },
    ],
  },
  {
    name: "Корея",
    flag: "🇰🇷",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Ship, label: "Море" },
    ],
  },
  {
    name: "Вьетнам",
    flag: "🇻🇳",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Ship, label: "Море" },
    ],
  },
  {
    name: "Таиланд",
    flag: "🇹🇭",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Ship, label: "Море" },
    ],
  },
  {
    name: "Сингапур",
    flag: "🇸🇬",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Ship, label: "Море" },
    ],
  },
  {
    name: "Гонконг",
    flag: "🇭🇰",
    methods: [
      { icon: Plane, label: "Авиа" },
      { icon: Ship, label: "Море" },
    ],
  },
];

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-24 px-6 lg:px-10 section-divider">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Международная доставка</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl lg:text-5xl uppercase mb-12"
        >
          Доставим товары из&nbsp;любой
          <br />точки мира
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-6 hover:bg-dark-surface-hover transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="font-display font-bold text-lg">{country.name}</h3>
                </div>
                <ChevronRight size={18} className="text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2">
                {country.methods.map((method, mi) => {
                  const MethodIcon = method.icon;
                  return (
                    <span
                      key={mi}
                      className="inline-flex items-center gap-1.5 bg-secondary rounded-lg px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      <MethodIcon size={12} className="text-gold" />
                      {method.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
