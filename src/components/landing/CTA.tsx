import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = ["7-day free trial", "No credit card required", "Cancel anytime"];

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="relative rounded-3xl border border-primary/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-glow-pulse" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute inset-0 grid-bg opacity-50" />

          <div className="relative px-6 md:px-16 py-16 md:py-24 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
              Start Your <span className="gradient-text">CA Journey</span> Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join 50,000+ aspirants learning the smart way. Your CA dream deserves the best mentors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outlineGlow" size="xl">
                Talk to a Mentor
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
