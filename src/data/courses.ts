import { BookOpen, Calculator, TrendingUp, type LucideIcon } from "lucide-react";

export type ValidityOption = { label: string; price: number };
export type ViewOption = { label: string; price: number };

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  faculty: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  level: string;
  duration: string;
  startingPrice: number;
  modes: { name: string; perks: string[]; note?: string }[];
  validity: ValidityOption[];
  views: ViewOption[];
  studyMaterial: { note: string; covers: string[] };
  learn: string[];
  includes: string[];
  highlights: string[];
  features: string[];
}

export const courses: Course[] = [
  {
    slug: "ca-inter-taxation",
    title: "CA Inter Taxation (Income Tax + GST)",
    shortTitle: "CA Inter Taxation",
    faculty: "CA Shavez Alam",
    tagline: "Income Tax + GST — simplified for scoring",
    description:
      "Master Income Tax and GST from basics to advanced level with practical case studies and amendments applicable for Sept 2026 / Jan 2027.",
    icon: BookOpen,
    badge: "Most Popular",
    level: "CA Intermediate",
    duration: "6–12 Months",
    startingPrice: 4999,
    modes: [
      { name: "Pen Drive Mode", perks: ["Plug & study anytime", "No internet required"], note: "Pen drive cost extra" },
      { name: "Google Drive Mode", perks: ["Access from anywhere", "Laptop compatible"] },
      { name: "Mobile App", perks: ["Learn on the go", "Optimised for mobile"] },
    ],
    validity: [
      { label: "6 Months Validity", price: 4999 },
      { label: "12 Months Validity", price: 5999 },
    ],
    views: [
      { label: "1.5 Views", price: 4999 },
      { label: "2 Views", price: 5999 },
    ],
    studyMaterial: {
      note: "Soft Copy Notes (PDF Format). Hard cover books cost ₹500 extra.",
      covers: ["Concept Notes", "Practice Questions", "Success Summary Books"],
    },
    learn: [
      "Income Tax from basics to advanced level",
      "GST concepts with practical case studies",
      "Amendments applicable for Sept 2026 / Jan 2027",
      "Exam-oriented question solving approach",
    ],
    includes: [
      "Complete Video Lectures",
      "Soft Copy Notes (PDF)",
      "Question Bank + Practice Coverage",
      "Amendments & Revision Lectures",
    ],
    highlights: [
      "Simplified explanation of complex provisions",
      "Practical examples for better retention",
      "Focus on scoring areas",
    ],
    features: ["Income Tax + GST coverage", "Sept 2026 / Jan 2027 amendments", "PDF notes & question bank"],
  },
  {
    slug: "ca-inter-fm-sm",
    title: "CA Inter FM and SM",
    shortTitle: "CA Inter FM & SM",
    faculty: "CA Shavez Alam",
    tagline: "Financial + Strategic Management made scoring",
    description:
      "Crack FM with logical clarity and SM with memory techniques — a balanced blend of theory and practical decision-making.",
    icon: TrendingUp,
    badge: "Bestseller",
    level: "CA Intermediate",
    duration: "6–12 Months",
    startingPrice: 4999,
    modes: [
      { name: "Pen Drive Mode", perks: ["Plug & study anytime", "No internet required"], note: "Pen drive cost extra" },
      { name: "Google Drive Mode", perks: ["Access from anywhere", "Laptop compatible"] },
      { name: "Mobile App", perks: ["Learn on the go", "Optimised for mobile"] },
    ],
    validity: [
      { label: "6 Months Validity", price: 4999 },
      { label: "12 Months Validity", price: 5999 },
    ],
    views: [
      { label: "1.5 Views", price: 4999 },
      { label: "2 Views", price: 5999 },
    ],
    studyMaterial: {
      note: "Soft Copy Notes (PDF Format). Hard cover books cost ₹500 extra.",
      covers: ["Concept Notes", "Practice Questions", "Success Summary Books"],
    },
    learn: [
      "FM: Capital budgeting, cost of capital, leverages & ratios",
      "FM: Practical financial decision-making",
      "SM: Business strategies simplified",
      "SM: Theory made easy with case-study based understanding",
    ],
    includes: [
      "FM Numerical Lectures",
      "SM Theory Lectures",
      "Notes (PDF Format)",
      "Revision & Exam Strategy Sessions",
    ],
    highlights: [
      "FM made scoring with logical clarity",
      "SM made easy with memory techniques",
      "Balanced approach: theory + practical",
    ],
    features: ["FM numericals + SM theory", "Revision & exam strategy", "PDF notes included"],
  },
  {
    slug: "ca-inter-costing",
    title: "CA Inter Costing",
    shortTitle: "CA Inter Costing",
    faculty: "CA Shavez Alam",
    tagline: "Cost Accounting from scratch to scoring",
    description:
      "Learn Cost Accounting concepts from scratch with strong problem-solving techniques, scanner-based questions and exam shortcuts.",
    icon: Calculator,
    badge: "Premium",
    level: "CA Intermediate",
    duration: "6–12 Months",
    startingPrice: 4999,
    modes: [
      { name: "Pen Drive Mode", perks: ["Plug & study anytime", "No internet required"], note: "Pen drive cost extra" },
      { name: "Google Drive Mode", perks: ["Access from anywhere", "Laptop compatible"] },
      { name: "Mobile App", perks: ["Learn on the go", "Optimised for mobile"] },
    ],
    validity: [
      { label: "6 Months Validity", price: 4999 },
      { label: "12 Months Validity", price: 5999 },
    ],
    views: [
      { label: "1.5 Views", price: 4999 },
      { label: "2 Views", price: 5999 },
    ],
    studyMaterial: {
      note: "Soft Copy Notes (PDF Format). Hard cover books cost ₹500 extra.",
      covers: ["Concept Notes", "Practice Questions", "Success Summary Books"],
    },
    learn: [
      "Cost Accounting concepts from scratch",
      "Problem-solving techniques for exams",
      "Theory + practical integration",
      "Scanner-based important questions",
    ],
    includes: [
      "Full Concept Lectures",
      "Numerical Problem Practice",
      "PDF Notes & Study Material",
      "Exam-oriented shortcuts & tricks",
    ],
    highlights: [
      "Step-by-step numerical solving",
      "Time-saving techniques for exams",
      "Strong focus on accuracy",
    ],
    features: ["Concept + numerical lectures", "Scanner-based questions", "Shortcuts & tricks"],
  },
];

export const getCourseBySlug = (slug?: string) => courses.find((c) => c.slug === slug);
