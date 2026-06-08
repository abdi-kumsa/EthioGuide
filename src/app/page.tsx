import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import PromiseSection from "@/components/PromiseSection";
import Testimonials from "@/components/Testimonials";
import FoundersSection from "@/components/FoundersSection";
import BookCallSection from "@/components/BookCallSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <Packages />
      <PromiseSection />
      <Testimonials />
      <FoundersSection />
      <BookCallSection />
      <Footer />
    </main>
  );
}
