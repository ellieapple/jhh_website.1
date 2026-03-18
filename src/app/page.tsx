import CallbackBar from "@/components/CallbackBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhySection from "@/components/WhySection";
import CtaBanner from "@/components/CtaBanner";
import ServicesSection from "@/components/ServicesSection";
import InspectionDetail from "@/components/InspectionDetail";
import ConsultationDetail from "@/components/ConsultationDetail";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import CallbackModal from "@/components/CallbackModal";

export default function Home() {
  return (
    <main>
      <CallbackBar />
      <Nav />
      <Hero />
      <TrustBar />
      <WhySection />
      <CtaBanner />
      <ServicesSection />
      <InspectionDetail />
      <ConsultationDetail />
      <FinalCta />
      <Footer />
      <CallbackModal />
    </main>
  );
}
