import { motion } from "framer-motion";
import { Package, Search, FileCheck, Warehouse, FileText, ArrowRight } from "lucide-react";

const additionalServices = [
  {
    icon: Package,
    title: "Экспорт товаров и оборудования",
    description: "Комплексное оформление и вывоз российских товаров и оборудования на внешние рынки.",
  },
  {
    icon: Search,
    title: "Поиск поставщиков",
    description: "Услуги по поиску надёжных поставщиков, организации и проверке производства, инспекции товаров.",
  },
  {
    icon: FileCheck,
    title: "Таможенное оформление под ключ",
    description: "Полный комплекс таможенных процедур для ввоза иностранных товаров на территорию России.",
  },
  {
    icon: Warehouse,
    title: "Складские услуги",
    description: "Приём, консолидация, инспекция, доупаковка и маркировка товаров и оборудования.",
  },
  {
    icon: FileText,
    title: "Разрешительная документация",
    description: "Оформление деклараций, сертификатов соответствия, нотификаций и иных документов.",
  },
];

const AdditionalServices = () => {
  return (
    <section className="py-24 px-6 lg:px-10 section-divider">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl lg:text-5xl uppercase mb-4"
        >
          Комплексный подход
          <br />к логистике
        </motion.h2>

        <div className="flex items-center gap-3 mb-12">
          <span className="stat-number text-4xl">97%</span>
          <span className="text-muted-foreground text-sm">клиентов заказывают<br />сопутствующие услуги</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 hover:bg-dark-surface-hover transition-colors group cursor-pointer"
              >
                <Icon size={28} className="text-gold mb-4" />
                <h3 className="font-display font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                  Заказать услугу <ArrowRight size={14} />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
