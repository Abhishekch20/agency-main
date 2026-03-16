"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CreativeProcess from "@/components/CreativeProcess";
import ImpactStats from "@/components/ImpactStats";
import StripeAnimation from "@/components/StripeAnimation";
import Testimonials from "@/components/Testimonials";
import ServicesTimeline from "@/components/ServicesTimeline";
import LatestProjects from "@/components/LatestProjects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTopProgress from "@/components/ScrollToTopProgress";

function App() {
  useEffect(() => {
    // One-time cleanup after hydration
    const timer = setTimeout(() => {
      const badge = document.getElementById("emergent-badge");
      if (badge) badge.remove();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans antialiased text-slate-200 bg-[#020617]">
      <style jsx global>{`
        #emergent-badge { display: none !important; pointer-events: none !important; visibility: hidden !important; }
      `}</style>
      <Navbar />
      <main>
        <div className="relative overflow-hidden">
          <Hero />
        </div>
        <Mission />
        <CreativeProcess />
        <StripeAnimation />
        <ServicesTimeline />
        <ImpactStats />
        <LatestProjects />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTopProgress />
    </div>
  );
}

export default App;
