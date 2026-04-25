import { BadgeCheck } from "lucide-react";

const Teacher = () => {
  return (
    <section id="faculty" className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            FACULTY
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Learn With <span className="gradient-text">Your Mentor</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Decade-tested teaching style, concept-first explanations, and exam strategy designed for CA aspirants.
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group animate-fade-in-up">
              <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <img
                src="/images/teacher.png"
                alt="CA Shavez Alam"
                loading="lazy"
                className="relative w-full max-w-md mx-auto rounded-2xl object-cover border border-primary/20 shadow-2xl shadow-primary/20 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-primary uppercase mb-4">
                <BadgeCheck className="h-4 w-4" />
                17+ Years Experience
              </div>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                CA Shavez Alam
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
                Trusted by thousands of CA students for simplifying complex topics into clear, high-scoring frameworks.
                Every lecture combines conceptual depth, practical examples, and the latest ICAI amendments to keep your preparation sharp and exam-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
