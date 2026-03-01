import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CalculatorSection from "@/components/CalculatorSection";
import ServicesSection from "@/components/ServicesSection";
import AdditionalServices from "@/components/AdditionalServices";
import AdvantagesSection from "@/components/AdvantagesSection";
import PromoSection from "@/components/PromoSection";
import ClientsSection from "@/components/ClientsSection";
import ContactsSection from "@/components/ContactsSection";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <CalculatorSection />
        <ServicesSection />
        <AdditionalServices />
        <AdvantagesSection />
        <PromoSection />
        <ClientsSection />
        <ContactsSection />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
