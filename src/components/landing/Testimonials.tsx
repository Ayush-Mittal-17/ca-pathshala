import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "CA Final, AIR 47",
    text: "CA Pathshala turned my preparation around. The structured modules and constant doubt support helped me clear Final in my first attempt.",
  },
  {
    name: "Rohan Mehta",
    role: "CA Intermediate Cleared",
    text: "The faculty actually cares. Mock tests felt exactly like the real ICAI exams — I went in confident and came out with rank.",
  },
  {
    name: "Priya Nair",
    role: "CA Foundation Student",
    text: "Affordable, premium-quality coaching from anywhere. The app is beautiful and the lectures are crystal clear.",
  },
  {
    name: "Aditya Verma",
    role: "CA Final Aspirant",
    text: "The case-study workshops are gold. Nowhere else have I seen this level of conceptual depth combined with exam strategy.",
  },
  {
    name: "Sneha Kapoor",
    role: "CA Intermediate, AIR 22",
    text: "From doubt-solving at midnight to mentor calls before exams — the support is unreal. Highly recommended.",
  },
  {
    name: "Karan Patel",
    role: "CA Foundation Cleared",
    text: "Cleared Foundation with 78%. The revision marathons and chapter-wise tests made all the difference.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            TESTIMONIALS
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Loved by <span className="gradient-text">future CAs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from students who turned their CA dream into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card glass-card-hover p-7 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-6 text-[15px] flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="h-10 w-10 rounded-full bg-gradient-emerald flex items-center justify-center font-semibold text-primary-foreground text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
