"use client";

import { motion } from "framer-motion";
import { LayoutGrid, FileText, BarChart3, Settings } from "lucide-react";
import { useRef, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};

export function HookMasterDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={container}
      className="overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-black/40"
    >
      {/* Browser chrome — glassmorphism */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1.5 font-mono text-[10px] text-slate-500">
          app.hookmaster.ai
        </div>
      </div>

      <div className="flex min-h-[200px] sm:min-h-[240px]">
        {/* Sidebar colapsada */}
        <motion.aside
          variants={item}
          className="flex w-12 shrink-0 flex-col items-center gap-4 border-r border-white/10 bg-black/30 py-4"
        >
          <LayoutGrid className="h-4 w-4 text-slate-500" />
          <FileText className="h-4 w-4 text-slate-500" />
          <BarChart3 className="h-4 w-4 text-slate-500" />
          <Settings className="h-4 w-4 text-slate-500" />
        </motion.aside>

        {/* Área principal */}
        <div className="flex flex-1 flex-col justify-center p-6">
          <motion.div variants={item} className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <span className="font-mono text-sm text-slate-500">
                Enter your video topic...
              </span>
            </div>
            <div className="flex justify-end">
              <motion.button
                variants={item}
                className={`rounded-lg px-4 py-2 font-mono text-sm font-medium transition-colors ${
                  isHovered
                    ? "bg-blue-500 text-white"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                Generate Hook
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
