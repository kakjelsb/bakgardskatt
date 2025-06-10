
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CatsSection from "@/components/CatsSection";
import HelpSection from "@/components/HelpSection";
import StoriesSection from "@/components/StoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CatsSection />
      <HelpSection />
      <StoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
