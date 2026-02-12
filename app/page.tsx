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

function StatusCell() {
  return (
    <div className="flex h-full flex-col justify-center p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/80 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-slate-400">
          Available for projects
        </span>
      </div>
      <p className="font-mono text-xs text-slate-500">Spain / Remote</p>
    </div>
  );
}

function TechStackCell() {
  const techs = [
    { name: "Next.js", icon: Code2 },
    { name: "Supabase", icon: Database },
    { name: "Stripe", icon: CreditCard },
    { name: "OpenAI", icon: Sparkles },
  ];
  return (
    <div className="grid h-full grid-cols-2 gap-4 p-6">
      {techs.map((t) => (
        <div
          key={t.name}
          className="flex flex-col items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-900/30 p-4"
        >
          <t.icon className="h-5 w-5 text-slate-400" />
          <span className="font-mono text-xs text-slate-400">{t.name}</span>
        </div>
      ))}
    </div>
  );
}

function ServicesCell() {
  const items = [
    {
      title: "Rapid MVP",
      description: "De idea a producto en semanas.",
      icon: Zap,
    },
    {
      title: "SaaS Automation",
      description: "Flujos y automatización.",
      icon: Bot,
    },
    {
      title: "Consultoría",
      description: "Arquitectura y estrategia.",
      icon: MessageCircle,
    },
  ];
  return (
    <div className="flex h-full flex-col gap-4 p-6">
      {items.map((s) => (
        <div
          key={s.title}
          className="flex items-start gap-4 rounded-lg border border-white/10 bg-slate-900/30 p-4 transition hover:border-white/20"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300">
            <s.icon className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 font-semibold text-white text-sm">{s.title}</h3>
            <p className="text-xs text-slate-400">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FooterCell() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 p-6 sm:flex-row">
      <p className="font-mono text-xs text-slate-500">
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
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="glow-bg" />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {/* CELDA 1: Hero - Title */}
        <div className="col-span-full rounded-3xl border border-white/10 bg-[#050505] transition-colors duration-500 hover:border-white/20 lg:col-span-3 lg:row-span-2">
          <Hero />
        </div>

        {/* CELDA 2: Status/About */}
        <div className="col-span-1 row-span-1 rounded-3xl border border-white/10 bg-emerald-950/20 transition-colors duration-500 hover:border-white/20">
          <StatusCell />
        </div>

        {/* CELDA 3: Stack */}
        <div className="col-span-1 row-span-1 rounded-3xl border border-white/10 bg-[#050505] transition-colors duration-500 hover:border-white/20">
          <TechStackCell />
        </div>

        {/* CELDA 4: HookMaster - Project */}
        <div className="col-span-full rounded-3xl border border-white/10 bg-[#050505] transition-colors duration-500 hover:border-white/20 lg:col-span-2 lg:row-span-2">
          <ProjectCard />
        </div>

        {/* CELDA 5: Services */}
        <div className="col-span-full rounded-3xl border border-white/10 bg-[#050505] transition-colors duration-500 hover:border-white/20 lg:col-span-2 lg:row-span-1">
          <ServicesCell />
        </div>

        {/* CELDA 6: Links/Footer */}
        <div className="col-span-full rounded-3xl border border-white/10 bg-[#050505] transition-colors duration-500 hover:border-white/20 lg:col-span-4">
          <FooterCell />
        </div>
      </div>
    </div>
  );
}
