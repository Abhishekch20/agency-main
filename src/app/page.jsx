import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CreativeProcess from "@/components/CreativeProcess";

const ImpactStats = dynamic(() => import("@/components/ImpactStats"), { ssr: true });
const StripeAnimation = dynamic(() => import("@/components/StripeAnimation"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const ServicesTimeline = dynamic(() => import("@/components/ServicesTimeline"), { ssr: true });
const LatestProjects = dynamic(() => import("@/components/LatestProjects"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const ScrollToTopProgress = dynamic(() => import("@/components/ScrollToTopProgress"), { ssr: true });

export const metadata = {
  title: "Syntrix Technologies | Next-Gen Software Engineering",
  description: "High-performance production infrastructure, AI/ML, and hyper-scalable digital interfaces.",
};

export default function HomePage() {
  return (
    <main className="font-sans antialiased bg-[#020617] text-white">
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
    </main>
  );
}
