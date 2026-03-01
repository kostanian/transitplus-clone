import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Truck, TrainFront, Ship, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Авиадоставка",
    description: "Максимально быстрый способ доставки грузов разного вида и объёма — от образцов до коммерческих партий.",
    growth: "+12%",
    growthLabel: "Рост объёма авиадоставки за 2024 год",
    stats: [
      { value: "15", unit: "мин", label: "Таможенное оформление по «зелёному коридору»" },
      { value: "100", unit: "кг", label: "Минимальный вес груза" },
      { value: "3", unit: "дня", label: "Минимальный срок доставки" },
      { value: "85%", unit: "", label: "Грузов доставляем раньше срока" },
    ],
  },
  {
    icon: Truck,
    title: "Автодоставка",
    description: "Способ доставки с выверенным балансом сроков и стоимости для сборных и генеральных грузов.",
    growth: "+38%",
    growthLabel: "Рост объёма автодоставки за 2024 год",
    stats: [
      { value: "15", unit: "мин", label: "Таможенное оформление по «зелёному коридору»" },
      { value: "100", unit: "кг", label: "Минимальный вес груза" },
      { value: "12", unit: "дней", label: "Минимальный срок доставки" },
      { value: "6", unit: "раз/нед", label: "Выход сборных авто из Китая" },
    ],
  },
  {
    icon: TrainFront,
    title: "Ж/Д доставка",
    description: "Незаменимый способ доставки крупногабаритных и тяжёлых грузов с отправкой в контейнере.",
    growth: "+5%",
    growthLabel: "Рост объёма Ж/Д доставки за 2024 год",
    stats: [
      { value: "15", unit: "мин", label: "Таможенное оформление по «зелёному коридору»" },
      { value: "70", unit: "м³", label: "Объём контейнера" },
      { value: "16", unit: "дней", label: "Минимальный срок доставки" },
      { value: "52%", unit: "", label: "Грузов доставляем раньше срока" },
    ],
  },
  {
    icon: Ship,
    title: "Морская доставка",
    description: "Максимально экономичный и надёжный способ доставки больших объёмов грузов.",
    growth: "+8%",
    growthLabel: "Рост объёма морской доставки за 2024 год",
    stats: [
      { value: "15", unit: "мин", label: "Таможенное оформление по «зелёному коридору»" },
      { value: "30", unit: "м³", label: "Минимальный объём контейнера" },
      { value: "30", unit: "дней", label: "Минимальный срок доставки" },
      { value: "78%", unit: "", label: "Грузов доставляем раньше срока" },
    ],
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const Icon = active.icon;

  return (
    <section id="services" className="py-24 px-6 lg:px-10 section-divider">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Наши услуги</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl lg:text-5xl uppercase mb-4"
        >
          Управление каждым этапом
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Поиск поставщиков, подготовка документации, складская обработка и&nbsp;таможенное оформление.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {services.map((s, i) => {
            const TabIcon = s.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  i === activeIndex
                    ? "gradient-gold text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-dark-surface-hover"
                }`}
              >
                <TabIcon size={18} />
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Active Service Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Icon size={32} className="text-gold" />
                  <h3 className="font-display font-bold text-2xl lg:text-3xl">{active.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{active.description}</p>

                <div className="flex items-center gap-3 mb-8">
                  <span className="stat-number text-3xl">{active.growth}</span>
                  <span className="text-sm text-muted-foreground">{active.growthLabel}</span>
                </div>

                <button className="gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider text-sm inline-flex items-center gap-2">
                  Заказать {active.title.toLowerCase()}
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 lg:w-[400px]">
                {active.stats.map((stat, si) => (
                  <div key={si} className="bg-secondary rounded-xl p-5">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="stat-number text-2xl">{stat.value}</span>
                      {stat.unit && <span className="text-gold text-sm font-semibold">{stat.unit}</span>}
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
