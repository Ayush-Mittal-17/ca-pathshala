import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Courses from "@/components/landing/Courses";
import Features from "@/components/landing/Features";
import Results from "@/components/landing/Results";
import Testimonials from "@/components/landing/Testimonials";
import Teacher from "@/components/landing/Teacher";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Features />
        <Results />
        <Testimonials />
        <Teacher />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
