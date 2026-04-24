import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";

const Courses = () => {
  return (
    <section id="courses" className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            COURSES
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Choose your <span className="gradient-text">CA Inter course</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Taught by CA Shavez Alam — exam-focused lectures, notes and amendments built to help you score.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.slug}
                className="glass-card glass-card-hover p-7 group relative overflow-hidden flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 h-32 w-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-emerald flex items-center justify-center shadow-lg shadow-primary/20">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {c.badge}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">{c.level}</div>
                  <h3 className="font-display text-2xl font-bold mb-1">{c.shortTitle}</h3>
                  <p className="text-xs text-muted-foreground mb-3">By {c.faculty}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{c.tagline}</p>

                  <ul className="space-y-2.5 mb-6">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Starting at</div>
                      <div className="font-display font-bold text-lg">₹{c.startingPrice.toLocaleString("en-IN")}</div>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10 group/btn"
                    >
                      <Link to={`/courses/${c.slug}`}>
                        View Course
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
