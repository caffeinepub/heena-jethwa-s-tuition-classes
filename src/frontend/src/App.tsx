import {
  BookMarked,
  BookOpen,
  Calculator,
  Clock,
  FlaskConical,
  Globe,
  GraduationCap,
  Leaf,
  Lightbulb,
  MapPin,
  Monitor,
  Pencil,
  Phone,
  TreePine,
  User,
} from "lucide-react";

// ─── Decorative Blobs ──────────────────────────────────────────────────────

function DecorativeBlobs() {
  return (
    <>
      <div
        className="blob blob-primary"
        style={{
          width: "340px",
          height: "340px",
          top: "-80px",
          right: "-60px",
        }}
      />
      <div
        className="blob blob-accent"
        style={{
          width: "260px",
          height: "260px",
          bottom: "40px",
          left: "-80px",
        }}
      />
      <div
        className="blob blob-secondary"
        style={{
          width: "180px",
          height: "180px",
          top: "40%",
          right: "20%",
        }}
      />
    </>
  );
}

// ─── Map Grid Pattern ──────────────────────────────────────────────────────

function MapGridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="map-grid"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </pattern>
        <pattern
          id="map-dots"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#map-grid)"
        className="text-foreground"
      />
      <rect
        width="100%"
        height="100%"
        fill="url(#map-dots)"
        className="text-primary"
      />
    </svg>
  );
}

// ─── Section Heading ───────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
        {children}
      </h2>
      <div className="mx-auto h-1 w-16 rounded-full bg-primary opacity-60" />
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────

function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-ocid="hero.section"
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Background blobs */}
      <DecorativeBlobs />

      {/* Floating decorative icons */}
      <div
        aria-hidden="true"
        className="absolute top-16 left-[8%] text-primary opacity-15 animate-float"
      >
        <BookOpen size={80} strokeWidth={1.2} />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-24 right-[10%] text-accent-foreground opacity-20 animate-float-slow"
      >
        <GraduationCap size={96} strokeWidth={1.2} />
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-32 left-[12%] text-primary opacity-20 animate-float-delayed"
      >
        <Pencil size={64} strokeWidth={1.2} />
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-24 right-[8%] text-muted-foreground opacity-15 animate-float"
      >
        <BookMarked size={72} strokeWidth={1.2} />
      </div>

      {/* Abstract geometric shapes */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-[5%] w-20 h-20 rounded-full border-2 border-primary opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 right-[6%] w-32 h-32 rounded-full border border-accent opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 left-1/2 w-10 h-10 rounded-sm rotate-45 bg-accent opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-card border border-border text-muted-foreground text-sm font-medium mb-8 shadow-xs">
          <BookOpen size={14} className="text-primary" />
          Junior to 8th Grade | CBSE | ICSE | State Board
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 text-balance">
          Heena Jethwa&apos;s
          <br />
          <span className="text-primary">Tuition Classes</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Personalized learning to help students build strong academic
          foundations and confidence.
        </p>

        <button
          type="button"
          onClick={scrollToContact}
          data-ocid="hero.primary_button"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base md:text-lg shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
        >
          <Phone size={18} />
          Contact for Admission
        </button>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z"
            fill="oklch(0.95 0.02 55)"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── Class Information Section ─────────────────────────────────────────────

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <div className="bg-background rounded-2xl p-6 shadow-xs border border-border flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          {label}
        </p>
        <p className="font-display text-lg text-foreground font-bold">
          {value}
        </p>
      </div>
    </div>
  );
}

function ClassInfoSection() {
  return (
    <section
      data-ocid="class-info.section"
      id="class-info"
      className="bg-card py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Class Information</SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <InfoCard
            icon={<GraduationCap size={28} />}
            label="Grades"
            value="Junior to 8th Grade"
          />
          <InfoCard
            icon={<BookOpen size={28} />}
            label="Boards"
            value="CBSE | ICSE | State Board"
          />
          <InfoCard
            icon={<User size={28} />}
            label="Teacher"
            value="Ms. Heena Jethwa"
          />
          <InfoCard
            icon={<Clock size={28} />}
            label="Timing"
            value="3:00 PM to 8:00 PM"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Subjects Section ──────────────────────────────────────────────────────

interface SubjectCardProps {
  icon: React.ReactNode;
  name: string;
  color: string;
}

function SubjectCard({ icon, name, color }: SubjectCardProps) {
  return (
    <div className="bg-card rounded-xl p-5 flex flex-col items-center text-center gap-3 border border-border hover:-translate-y-1 hover:shadow-warm transition-all duration-300 cursor-default">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
      >
        {icon}
      </div>
      <p className="font-semibold text-sm text-foreground leading-snug">
        {name}
      </p>
    </div>
  );
}

function SubjectsSection() {
  const subjects = [
    {
      name: "English",
      icon: <BookMarked size={22} />,
      color: "bg-primary/15 text-primary",
    },
    {
      name: "Mathematics",
      icon: <Calculator size={22} />,
      color: "bg-accent/40 text-foreground",
    },
    {
      name: "Science",
      icon: <FlaskConical size={22} />,
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Social Studies",
      icon: <Globe size={22} />,
      color: "bg-secondary text-foreground",
    },
    {
      name: "Environmental Science 1",
      icon: <Leaf size={22} />,
      color: "bg-primary/15 text-primary",
    },
    {
      name: "Environmental Science 2",
      icon: <TreePine size={22} />,
      color: "bg-accent/40 text-foreground",
    },
    {
      name: "General Knowledge",
      icon: <Lightbulb size={22} />,
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Information Technology",
      icon: <Monitor size={22} />,
      color: "bg-secondary text-foreground",
    },
  ];

  return (
    <section
      data-ocid="subjects.section"
      id="subjects"
      className="bg-background py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Subjects Covered</SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.name}
              icon={subject.icon}
              name={subject.name}
              color={subject.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Location Section ──────────────────────────────────────────────────────

function LocationSection() {
  return (
    <section
      data-ocid="location.section"
      id="location"
      className="bg-card py-20 px-6"
    >
      <div className="max-w-lg mx-auto text-center">
        <SectionHeading>Our Location</SectionHeading>

        <div className="relative rounded-3xl border border-border overflow-hidden bg-background shadow-xs p-10">
          <MapGridPattern />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary">
              <MapPin size={34} />
            </div>

            <div className="space-y-1">
              <p className="font-display text-2xl font-bold text-foreground">
                Mahada Colony
              </p>
              <p className="text-muted-foreground text-lg font-medium">
                Sawarkar Nagar
              </p>
              <p className="text-muted-foreground text-lg font-medium">
                Thane (West)
              </p>
            </div>

            {/* Decorative dot indicators */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-primary opacity-60" />
              <div className="w-8 h-0.5 bg-primary opacity-30" />
              <div className="w-3 h-3 rounded-full bg-primary opacity-80" />
              <div className="w-8 h-0.5 bg-primary opacity-30" />
              <div className="w-2 h-2 rounded-full bg-primary opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ───────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section
      data-ocid="contact.section"
      id="contact"
      className="bg-background py-20 px-6 relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="blob blob-primary"
        style={{
          width: "300px",
          height: "300px",
          top: "-60px",
          left: "-80px",
        }}
      />
      <div
        aria-hidden="true"
        className="blob blob-accent"
        style={{
          width: "240px",
          height: "240px",
          bottom: "-40px",
          right: "-60px",
        }}
      />

      <div className="relative z-10 max-w-md mx-auto text-center">
        <SectionHeading>Contact Us</SectionHeading>

        <div className="bg-card rounded-3xl border border-border p-10 shadow-xs flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-primary">
            <Phone size={40} />
          </div>

          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">
              Call us to enquire about admissions
            </p>
            <a
              href="tel:+919321667746"
              className="font-display text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            >
              +91 93216 67746
            </a>
          </div>

          <a
            href="tel:+919321667746"
            data-ocid="contact.call_button"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 w-full justify-center"
          >
            <Phone size={18} />
            Call Now
          </a>

          <p className="text-xs text-muted-foreground">
            Available Mon – Sat | 3:00 PM – 8:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        <div className="flex items-center gap-2">
          <GraduationCap size={18} className="text-primary" />
          <span className="font-display font-bold text-foreground text-sm">
            Heena Jethwa&apos;s Tuition Classes
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          © {year} All rights reserved.
        </p>

        <p className="text-xs text-muted-foreground">
          Built with <span className="text-primary">♥</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary transition-colors duration-200"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ─── Header / Nav ──────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap size={20} className="text-primary" />
          <span className="font-display font-bold text-foreground text-sm md:text-base">
            Heena Jethwa&apos;s Classes
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <button
            type="button"
            onClick={() => scrollToSection("class-info")}
            data-ocid="nav.link.1"
            className="hover:text-foreground transition-colors duration-200"
          >
            Classes
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("subjects")}
            data-ocid="nav.link.2"
            className="hover:text-foreground transition-colors duration-200"
          >
            Subjects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("location")}
            data-ocid="nav.link.3"
            className="hover:text-foreground transition-colors duration-200"
          >
            Location
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            data-ocid="nav.link.4"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-16">
        <HeroSection />
        <ClassInfoSection />
        <SubjectsSection />
        <LocationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
