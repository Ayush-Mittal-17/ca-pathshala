import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, BadgeCheck, Check, GraduationCap, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { getCourseBySlug } from "@/data/courses";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = getCourseBySlug(slug);

  const [modeIdx, setModeIdx] = useState(0);
  const [validityIdx, setValidityIdx] = useState(0);
  const [viewIdx, setViewIdx] = useState(0);
  const [hardCopy, setHardCopy] = useState(false);

  const total = useMemo(() => {
    if (!course) return 0;
    const base = Math.max(course.validity[validityIdx].price, course.views[viewIdx].price);
    return base + (hardCopy ? 500 : 0);
  }, [course, validityIdx, viewIdx, hardCopy]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto pt-32 pb-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-3">Course not found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Button asChild variant="hero">
            <Link to="/#courses">Browse all courses</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = course.icon;

  const handleBuy = () => {
    toast({
      title: "Added to cart",
      description: `${course.shortTitle} • ${course.modes[modeIdx].name} • ${course.validity[validityIdx].label} • ${course.views[viewIdx].label} • ₹${total.toLocaleString("en-IN")}`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="relative section-padding pb-10">
          <div className="absolute inset-0 -z-10 opacity-50">
            <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          </div>
          <div className="container mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-xl bg-gradient-emerald flex items-center justify-center shadow-lg shadow-primary/20">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-primary uppercase tracking-wider">{course.level}</div>
                    <div className="text-xs text-muted-foreground">By {course.faculty}</div>
                  </div>
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  {course.title}
                </h1>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl">{course.description}</p>

                <div className="flex flex-wrap gap-2">
                  {course.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      <Sparkles className="h-3 w-3" /> {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buy Card */}
              <aside className="lg:col-span-1">
                <div className="glass-card p-6 lg:sticky lg:top-28">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Total Price</div>
                  <div className="font-display text-4xl font-bold mb-1">
                    ₹{total.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-muted-foreground mb-5">Inclusive of all taxes</div>

                  <Selector
                    label="Mode of Delivery"
                    options={course.modes.map((m) => m.name)}
                    selected={modeIdx}
                    onSelect={setModeIdx}
                  />
                  <Selector
                    label="Validity"
                    options={course.validity.map((v) => `${v.label} • ₹${v.price.toLocaleString("en-IN")}`)}
                    selected={validityIdx}
                    onSelect={setValidityIdx}
                  />
                  <Selector
                    label="Views"
                    options={course.views.map((v) => `${v.label} • ₹${v.price.toLocaleString("en-IN")}`)}
                    selected={viewIdx}
                    onSelect={setViewIdx}
                  />

                  <label className="flex items-start gap-3 p-3 rounded-lg border border-border/60 hover:border-primary/40 cursor-pointer transition-colors mb-5">
                    <input
                      type="checkbox"
                      checked={hardCopy}
                      onChange={(e) => setHardCopy(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded accent-primary"
                    />
                    <div className="text-sm">
                      <div className="font-medium">Add hard copy books</div>
                      <div className="text-xs text-muted-foreground">+ ₹500 — printed study material</div>
                    </div>
                  </label>

                  <Button onClick={handleBuy} variant="hero" size="lg" className="w-full">
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now
                  </Button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" /> Secure checkout • Instant access
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="section-padding pt-10">
          <div className="container mx-auto grid lg:grid-cols-2 gap-6">
            <DetailCard title="What you'll learn" items={course.learn} />
            <DetailCard title="Course includes" items={course.includes} />
            <DetailCard title="Key highlights" items={course.highlights} />

            <div className="glass-card p-7">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" /> Study Material
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{course.studyMaterial.note}</p>
              <ul className="space-y-2.5">
                {course.studyMaterial.covers.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-7 lg:col-span-2">
              <h3 className="font-display text-xl font-bold mb-5">Modes of delivery</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {course.modes.map((m) => (
                  <div key={m.name} className="rounded-xl border border-border/60 p-5 hover:border-primary/40 transition-colors">
                    <div className="font-display font-semibold mb-2">{m.name}</div>
                    <ul className="space-y-1.5">
                      {m.perks.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                    {m.note && <div className="text-[11px] text-primary/80 mt-3">* {m.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const DetailCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="glass-card p-7">
    <h3 className="font-display text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {it}
        </li>
      ))}
    </ul>
  </div>
);

const Selector = ({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: number;
  onSelect: (i: number) => void;
}) => (
  <div className="mb-4">
    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
    <div className="grid gap-2">
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => onSelect(i)}
          className={`text-left text-sm px-3 py-2.5 rounded-lg border transition-all ${
            selected === i
              ? "border-primary bg-primary/10 text-foreground"
              : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default CourseDetail;
