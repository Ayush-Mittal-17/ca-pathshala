import { Link } from "react-router-dom";
import { GraduationCap, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { courses } from "@/data/courses";

const cols = [
  {
    title: "Courses",
    type: "courses", // special flag
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/#features" },
      { name: "Faculty", href: "/#faculty" },
      { name: "Results", href: "/#results" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "/#cta" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-emerald flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                CA <span className="gradient-text">Pathshala</span>
              </span>
            </Link>

            <p className="text-base text-muted-foreground leading-relaxed max-w-sm mb-5">
              India's smartest CA coaching platform — empowering future Chartered Accountants with structured learning, expert faculty, and 24/7 mentorship.
            </p>

            <div className="flex items-center gap-3">
              {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-base mb-4">{col.title}</h4>

              <ul className="space-y-2.5">
                
                {/* 🔥 Courses Dynamic */}
                {col.type === "courses" &&
                  courses.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/courses/${c.slug}`}
                        className="text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {c.shortTitle}
                      </Link>
                    </li>
                  ))}

                {/* Normal Links */}
                {col.links &&
                  col.links.map((l) => (
                    <li key={l.name}>
                      <a
                        href={l.href}
                        className="text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CA Pathshala. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Designed and Developed by{" "}
            <a
              href="https://trustingbrains.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              TrustingBrains
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;