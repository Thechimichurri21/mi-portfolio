"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HookMasterDemo } from "./hookmaster-demo";

export function ProjectCard() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-widest text-slate-500">
          Proyecto destacado
        </p>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="origin-center"
        >
          <div className="group block overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/80 p-8 shadow-xl transition hover:border-slate-700 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:gap-14">
              {/* Columna izquierda: texto */}
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-400">
                    En Producción
                  </span>
                  <span className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-400">
                    B2C
                  </span>
                  <span className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-400">
                    Stripe
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
                  HookMaster AI
                </h2>
                <p className="max-w-lg text-slate-400 leading-relaxed">
                  Ingeniería de Retención para creadores. Plataforma SaaS con IA
                  que optimiza guiones de Short-form content. En Producción.
                </p>
                <a
                  href="https://github.com/Thechimichurri21/hookmaster-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition group-hover:text-white"
                >
                  Ver proyecto
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>

              {/* Columna derecha: demo */}
              <div className="flex items-center">
                <HookMasterDemo />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
