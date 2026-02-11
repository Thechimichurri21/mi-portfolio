import {
  Github,
  Mail,
  Twitter,
  Zap,
  Bot,
  MessageCircle,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";

function TechStack() {
  const techs = [
    { name: "Next.js", icon: "▲" },
    { name: "Supabase", icon: "⚡" },
    { name: "Stripe", icon: "💳" },
    { name: "OpenAI", icon: "🤖" },
  ];
  return (
    <section className="border-y border-slate-800/80 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Stack habitual
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-4 text-slate-300"
            >
              <span className="text-2xl">{t.icon}</span>
              <span className="font-medium">{t.name}</span>
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
          © {new Date().getFullYear()} Tu Nombre
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="mailto:tu@email.com"
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
