import { Users, BookMarked, ClipboardCheck, MessageCircle, Wallet, Trophy } from "lucide-react";

const features = [
  { icon: Users, title: "Expert Faculty", desc: "Learn from India's top-ranked CAs and AIR holders with decades of teaching experience." },
  { icon: BookMarked, title: "Structured Learning", desc: "ICAI-aligned curriculum broken into bite-sized modules for steady, exam-ready progress." },
  { icon: ClipboardCheck, title: "Unlimited Mock Tests", desc: "Real-exam-pattern tests with detailed analytics to track every weakness and win." },
  { icon: MessageCircle, title: "24/7 Doubt Support", desc: "Get every doubt resolved in minutes by our dedicated mentor community." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Premium coaching at a fraction of traditional costs. EMI options available." },
  { icon: Trophy, title: "Result-Driven Coaching", desc: "92% of our serious learners clear their CA exams in the first attempt." },
];

const Features = () => {
  return (
    <section id="features" className="section-padding relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            WHY US
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why students <span className="gradient-text">choose CA Pathshala</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything a CA aspirant needs — under one focused, distraction-free platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="glass-card glass-card-hover p-7">
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
