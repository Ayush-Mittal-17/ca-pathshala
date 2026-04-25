import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Students Enrolled" },
  { value: 50, suffix: "%", label: "Success Rate" },
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Hours of Content" },
];

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({ s, visible }: { s: typeof stats[number]; visible: boolean }) => {
  const v = useCountUp(s.value, 1800, visible);
  const display = s.value >= 1000 ? `${(v / 1000).toFixed(v >= s.value ? 0 : 1)}K` : v.toString();
  return (
    <div className="glass-card p-8 text-center">
      <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {display}
        {s.suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
    </div>
  );
};

const Results = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            RESULTS
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Numbers that <span className="gradient-text">speak success</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <StatCard key={s.label} s={s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
