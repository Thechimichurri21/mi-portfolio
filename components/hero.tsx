import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 max-w-4xl text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Product Engineer & AI-Native Builder
        </span>
      </h1>
      <p className="mb-10 max-w-xl text-lg text-slate-400 sm:text-xl">
        Turning ideas into scalable SaaS
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
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
