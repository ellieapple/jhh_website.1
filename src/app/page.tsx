"use client";

import { useState } from "react";
import CallbackBar from "@/components/CallbackBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhySection from "@/components/WhySection";
import CtaBanner from "@/components/CtaBanner";
import ServicesSection from "@/components/ServicesSection";
import DetailSections from "@/components/DetailSections";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import CallbackModal from "@/components/CallbackModal";
import Toast from "@/components/Toast";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const showToast = () => {
    window.dispatchEvent(new CustomEvent("jhh:toast", { detail: undefined }));
  };

  return (
    <div style={{ background: "var(--warm-white)" }}>
      <CallbackBar onOpen={openModal} />
      <Nav onOpenModal={openModal} />
      <Hero onOpenModal={openModal} onViewWork={showToast} />
      <TrustBar />
      <WhySection />
      <CtaBanner onOpen={openModal} />
      <ServicesSection onOpen={openModal} />
      <DetailSections />
      <FinalCta onOpen={openModal} />
      <Footer />
      <CallbackModal isOpen={modalOpen} onClose={closeModal} />
      <Toast />
    </div>
  );
}
