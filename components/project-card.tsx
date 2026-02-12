"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HookMasterDemo } from "./hookmaster-demo";

export function ProjectCard() {
  return (
    <div className="flex h-full flex-col p-8">
      <div className="mb-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-400">
          En Producción
        </span>
        <span className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-400">
          B2C
        </span>
        <span className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-400">
          Stripe
        </span>
      </div>
      <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
        HookMaster AI
      </h2>
      <p className="mb-6 max-w-lg text-slate-400 leading-relaxed">
        Ingeniería de Retención para creadores. Plataforma SaaS con IA que
        optimiza guiones de Short-form content. En Producción.
      </p>
      <div className="mt-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="origin-left"
        >
          <HookMasterDemo />
        </motion.div>
        <a
          href="https://github.com/Thechimichurri21/hookmaster-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
        >
          Ver proyecto
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
