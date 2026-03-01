import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ShieldCheck, Building2, FileCheck2, Layers, Scale, Award } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Головной офис в Москве",
    description: "Всегда готовы встретиться очно и обсудить детали сотрудничества.",
    stat: null,
  },
  {
    icon: ShieldCheck,
    title: "Приоритетные условия на таможне",
    description: "Статус «зелёного коридора» — выпуск декларации занимает от 15 минут вместо стандартных 4 часов — 10 дней.",
    stat: { value: "от 15 мин", label: "Автоматический выпуск деклараций" },
  },
  {
    icon: Building2,
    title: "Складские комплексы в Азии и России",
    description: "Собственные склады в двух странах и штат сотрудников для консолидации и проверки заказов.",
    stat: { value: "4 500 м²", label: "Площадь складов компании" },
  },
  {
    icon: FileCheck2,
    title: "Собственное декларирование",
    description: "Проверим документы, предупредим о рисках, проведём таможенную очистку и поможем завершить сделку.",
    stat: { value: "800+", label: "Сертификатов уже оформлено" },
  },
  {
    icon: Layers,
    title: "Комплексное обслуживание",
    description: "Собственные ресурсы для решения логистических задач гарантируют выгодную стоимость и качество.",
    stat: { value: "18", label: "Логистических услуг для бизнеса" },
  },
  {
    icon: Scale,
    title: "Юридическая безопасность",
    description: "Договоры по нормам местного и международного права, страхование 100% перевозимых грузов.",
    stat: { value: "100%", label: "Гарантия сохранности груза" },
  },
  {
    icon: Award,
    title: "Надёжность, признанная государством",
    description: "Член Торгово-промышленной палаты РФ — гарантия прозрачности и защищённости.",
    stat: null,
  },
];

const AdvantagesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = advantages[activeIndex];
  const Icon = active.icon;

  return (
    <section id="advantages" className="py-24 px-6 lg:px-10 section-divider">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Преимущества</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl lg:text-5xl uppercase mb-12"
        >
          Координация всей цепочки
          <br />международных поставок
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation */}
          <div className="lg:w-[300px] space-y-1">
            <p className="text-sm text-muted-foreground mb-4">
              <span className="text-gold font-bold">7 причин</span> доверить груз GlobalTrans
            </p>
            {advantages.map((adv, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-sm ${
                  i === activeIndex
                    ? "bg-card border border-border text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-gold font-mono text-xs">0{i + 1}</span>
                {adv.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 lg:p-12 h-full"
              >
                <Icon size={40} className="text-gold mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">{active.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">{active.description}</p>
                {active.stat && (
                  <div className="bg-secondary rounded-xl p-6 inline-block">
                    <span className="stat-number text-3xl block mb-1">{active.stat.value}</span>
                    <span className="text-sm text-muted-foreground">{active.stat.label}</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
