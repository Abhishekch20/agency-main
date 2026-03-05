import "@/App.css";
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
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="font-inter antialiased">
      {/* Shared gradient wrapper for navbar + hero */}
      <div className="relative overflow-hidden">
        {/* Stripe-style gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -right-[20%] -top-[10%] w-[80%] h-[140%]"
            style={{
              background: `linear-gradient(-25deg, rgba(234,179,8,0.7) 0%, rgba(249,115,22,0.8) 15%, rgba(236,72,153,0.8) 35%, rgba(168,85,247,0.6) 55%, rgba(99,91,255,0.4) 70%, transparent 85%)`,
              transform: 'rotate(-12deg)',
              filter: 'blur(2px)',
            }}
          />
          <div
            className="absolute -right-[10%] top-[5%] w-[60%] h-[120%]"
            style={{
              background: `linear-gradient(-30deg, rgba(249,115,22,0.5) 0%, rgba(236,72,153,0.7) 25%, rgba(168,85,247,0.3) 50%, transparent 75%)`,
              transform: 'rotate(-8deg)',
              filter: 'blur(20px)',
            }}
          />
          <div
            className="absolute right-[5%] top-[20%] w-[40%] h-[80%]"
            style={{
              background: `linear-gradient(-20deg, rgba(234,179,8,0.4) 0%, rgba(249,115,22,0.5) 30%, rgba(236,72,153,0.3) 60%, transparent 100%)`,
              transform: 'rotate(-15deg)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute right-[15%] -top-[5%] w-[25%] h-[130%]"
            style={{
              background: `linear-gradient(-18deg, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.1) 60%, transparent 100%)`,
              transform: 'rotate(-10deg)',
            }}
          />
        </div>
        <Navbar />
        <Hero />
      </div>
      <Mission />
      <CreativeProcess />
      <ImpactStats />
      <StripeAnimation />
      <Testimonials />
      <ServicesTimeline />
      <LatestProjects />
      <ContactForm />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
