import {
  Github,
  Mail,
  Linkedin,
  Zap,
  Bot,
  MessageCircle,
  Code2,
  Database,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";

function TechStack() {
  const techs = [
    { name: "Next.js", icon: Code2 },
    { name: "Supabase", icon: Database },
    { name: "Stripe", icon: CreditCard },
    { name: "OpenAI", icon: Sparkles },
  ];
  return (
    <section className="border-y border-slate-800/80 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-widest text-slate-500">
          Stack habitual
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/40 px-5 py-3"
            >
              <t.icon className="h-4 w-4 shrink-0 text-slate-400" />
              <span className="font-mono text-sm text-slate-400">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Rapid MVP",
      description: "De idea a producto en semanas, con stack moderno y escalable.",
      icon: Zap,
    },
    {
      title: "SaaS Automation",
      description: "Flujos, integraciones y automatización que ahorran tiempo y costes.",
      icon: Bot,
    },
    {
      title: "Consultoría",
      description: "Arquitectura, stack y estrategia técnica para tu producto.",
      icon: MessageCircle,
    },
  ];
  return (
    <section className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Servicios
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-slate-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800/80 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Hansel Altamirano
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Thechimichurri21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/hansel-jam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hanseljoan2@gmail.com"
            className="text-slate-400 transition hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="glow-bg" />
      <Hero />
      <TechStack />
      <ProjectCard />
      <Services />
      <Footer />
    </div>
  );
}
