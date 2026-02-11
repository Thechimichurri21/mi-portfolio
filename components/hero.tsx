import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2">
        <span
          className="relative flex h-2 w-2"
          aria-hidden
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/80 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-slate-400">
          Available for new projects
        </span>
      </div>
      <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
          Product Engineer & AI-Native Builder
        </span>
      </h1>
      <p className="mb-12 max-w-xl text-lg text-slate-400 sm:text-xl">
        Turning ideas into scalable SaaS
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 text-slate-100 transition hover:bg-slate-700"
        >
          Ver proyectos
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-slate-300 transition hover:border-slate-500 hover:bg-slate-800/50"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
