import { GraduationCap, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Courses",
    links: ["CA Foundation", "CA Intermediate", "CA Final", "Crash Courses", "Test Series"],
  },
  {
    title: "Company",
    links: ["About", "Faculty", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    links: ["Contact", "Help Center", "FAQs", "Refund Policy", "Privacy"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-emerald flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                CA <span className="gradient-text">Pathshala</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-5">
              India's smartest CA coaching platform — empowering future Chartered Accountants with structured learning, expert faculty, and 24/7 mentorship.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CA Pathshala. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed and Developed by <a href="https://trustingbrains.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              TrustingBrains
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
