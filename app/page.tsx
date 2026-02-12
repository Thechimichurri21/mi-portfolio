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
import { SpotlightCard } from "@/components/ui/spotlight-card";

function StatusCell() {
  return (
    <div className="flex h-full flex-col justify-center p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/80 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-zinc-400">
          Available for projects
        </span>
      </div>
      <p className="font-mono text-xs text-zinc-500">Spain / Remote</p>
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
          className="flex flex-col items-center justify-center gap-2 rounded-lg border border-white/[0.06] bg-zinc-900/30 p-4"
        >
          <t.icon className="h-5 w-5 text-zinc-400" />
          <span className="font-mono text-xs text-zinc-400">{t.name}</span>
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
          className="flex items-start gap-4 rounded-lg border border-white/[0.06] bg-zinc-900/30 p-4 transition hover:border-white/10"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
            <s.icon className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-sm font-semibold text-white">{s.title}</h3>
            <p className="text-xs text-zinc-400">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FooterCell() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 p-6 sm:flex-row">
      <p className="font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} Hansel Altamirano
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/Thechimichurri21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition hover:text-white"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/hansel-jam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:hanseljoan2@gmail.com"
          className="text-zinc-400 transition hover:text-white"
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
        <SpotlightCard className="col-span-full bg-zinc-900/20 backdrop-blur-md lg:col-span-3 lg:row-span-2">
          <Hero />
        </SpotlightCard>

        {/* CELDA 2: Status/About */}
        <SpotlightCard className="col-span-1 row-span-1 bg-emerald-950/20 backdrop-blur-md">
          <StatusCell />
        </SpotlightCard>

        {/* CELDA 3: Stack */}
        <SpotlightCard className="col-span-1 row-span-1 bg-zinc-900/20 backdrop-blur-md">
          <TechStackCell />
        </SpotlightCard>

        {/* CELDA 4: HookMaster - Project */}
        <SpotlightCard className="col-span-full bg-zinc-900/20 backdrop-blur-md lg:col-span-2 lg:row-span-2">
          <ProjectCard />
        </SpotlightCard>

        {/* CELDA 5: Services */}
        <SpotlightCard className="col-span-full bg-zinc-900/20 backdrop-blur-md lg:col-span-2 lg:row-span-1">
          <ServicesCell />
        </SpotlightCard>

        {/* CELDA 6: Links/Footer */}
        <SpotlightCard className="col-span-full bg-zinc-900/20 backdrop-blur-md lg:col-span-4">
          <FooterCell />
        </SpotlightCard>
      </div>
    </div>
  );
}
