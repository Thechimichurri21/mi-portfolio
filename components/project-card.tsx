"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ProjectCard() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Proyecto destacado
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="origin-center"
        >
          <a
            href="#"
            className="group block overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/80 p-8 shadow-xl transition hover:border-slate-700 sm:p-10"
          >
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                En Producción
              </span>
              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                B2C
              </span>
              <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400">
                Stripe
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">
              HookMaster AI
            </h2>
            <p className="max-w-2xl text-slate-400">
              Plataforma de copywriting impulsada por IA para hooks y headlines
              de alto impacto. Integración con Stripe, onboarding guiado y
              métricas en tiempo real.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 group-hover:text-white">
              Ver proyecto
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
