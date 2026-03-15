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
    const removeEmergentBadge = () => {
      const byId = document.getElementById("emergent-badge");
      if (byId) byId.remove();

      const links = document.querySelectorAll(
        'a[href*="emergent.sh"], a[href*="utm_source=emergent-badge"]'
      );
      links.forEach((el) => {
        if (el?.textContent?.toLowerCase().includes("made with emergent")) {
          el.remove();
        }
      });
    };

    removeEmergentBadge();
    const observer = new MutationObserver(removeEmergentBadge);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const elements = document.querySelectorAll("section > div, footer > div");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => {
      el.classList.add("fade-up-on-scroll");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter antialiased">
      <Navbar />
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
      <Footer />
      <ScrollToTopProgress />
    </div>
  );
}

export default App;
