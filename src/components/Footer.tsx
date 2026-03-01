import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 lg:px-10 section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <span className="font-display font-black text-primary-foreground text-lg">G</span>
              </div>
              <div>
                <p className="font-display font-black text-foreground tracking-wide">GLOBALTRANS</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Международная логистика</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Надёжная доставка грузов из Азии и стран ЮВА с&nbsp;2007 года.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Авиадоставка</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Автодоставка</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Ж/Д доставка</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Морская доставка</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Таможенное оформление</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">О компании</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Преимущества</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Клиенты</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Контакты</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <span>+7 495 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                <span>info@globaltrans.ru</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span>Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2007–2026 GlobalTrans. Все права защищены.</p>
          <p className="text-xs text-muted-foreground">Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
