import { motion } from "framer-motion";

const clientNames = [
  "МЕГАФОН", "NIVEA", "АЛРОСА", "GARNIER", "LOREAL", "NESTLE", "PANDORA",
  "DREAMWORKS", "РОСТЕЛЕКОМ", "FIFA", "KFC", "MERLION", "FINNTRAIL",
];

const ClientLogo = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 w-[160px] h-[70px] bg-secondary rounded-xl flex items-center justify-center mx-3">
    <span className="text-muted-foreground font-display font-bold text-xs tracking-widest">{name}</span>
  </div>
);

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 section-divider overflow-hidden">
      <div className="px-6 lg:px-10 max-w-7xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Наши клиенты</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl lg:text-5xl uppercase mb-4"
        >
          Помогаем бизнесу
          <br />доставлять продукцию
        </motion.h2>
        <div className="flex items-center gap-3">
          <span className="stat-number text-4xl">1000+</span>
          <span className="text-muted-foreground text-sm">клиентов с 2007 года</span>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-hidden mb-4">
        <div className="animate-marquee flex">
          {[...clientNames, ...clientNames].map((name, i) => (
            <ClientLogo key={`a-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reversed) */}
      <div className="flex overflow-hidden" style={{ direction: "rtl" }}>
        <div className="animate-marquee flex">
          {[...clientNames.slice().reverse(), ...clientNames.slice().reverse()].map((name, i) => (
            <ClientLogo key={`b-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
