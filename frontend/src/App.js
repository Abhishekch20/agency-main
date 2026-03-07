import "@/App.css";
import { useEffect } from "react";
import Lenis from "lenis";
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
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
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
