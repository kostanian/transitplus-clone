import { useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const CalculatorSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section id="calculator" className="py-24 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Clock size={16} className="text-gold" />
          <span className="text-sm text-muted-foreground">
            <span className="text-gold font-semibold">8 минут</span> — среднее время ответа менеджера
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl lg:text-5xl uppercase mb-10"
        >
          Рассчитайте
          <br />
          стоимость доставки
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Ваши контакты</label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-secondary border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-secondary border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
            />
          </div>

          <button
            type="submit"
            className="gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider text-sm w-full md:w-auto"
          >
            Рассчитать стоимость доставки
          </button>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 accent-gold"
            />
            <span className="text-xs text-muted-foreground">
              Я принимаю условия обработки пользовательских данных
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CalculatorSection;
