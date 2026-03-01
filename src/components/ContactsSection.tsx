import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send } from "lucide-react";

const ContactsSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена!");
  };

  return (
    <section id="contacts" className="py-24 px-6 lg:px-10 section-divider">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Контакты</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl lg:text-5xl uppercase mb-4"
        >
          Свяжитесь с нами
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl leading-relaxed">
          Мы с радостью поделимся нашим многолетним опытом в логистике для оптимизации вашего бизнеса.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Sales */}
            <div className="bg-card border border-border rounded-2xl p-7">
              <h3 className="font-display font-bold text-lg mb-4">Отдел продаж</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold" />
                  <a href="tel:+74951234567" className="text-foreground hover:text-gold transition-colors">+7 495 123 45 67</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gold" />
                  <a href="mailto:info@globaltrans.ru" className="text-foreground hover:text-gold transition-colors">info@globaltrans.ru</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">пн — пт с 8:30 до 17:30 по Москве</span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-card border border-border rounded-2xl p-7">
              <h3 className="font-display font-bold text-lg mb-4">Поддержка клиентов</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold" />
                  <a href="tel:+79291234567" className="text-foreground hover:text-gold transition-colors">+7 929 123 45 67</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gold" />
                  <a href="mailto:support@globaltrans.ru" className="text-foreground hover:text-gold transition-colors">support@globaltrans.ru</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">пн — пт с 8:30 до 17:30 по Москве</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-7">
            <h3 className="font-display font-bold text-lg mb-6">Оставьте заявку на сотрудничество</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">1. Ваши контакты</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 w-full mt-3"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">2. Сообщение</label>
                <textarea
                  placeholder="Текст сообщения"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 w-full resize-none"
                />
              </div>

              <button
                type="submit"
                className="gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider text-sm w-full flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Отправить заявку
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
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
