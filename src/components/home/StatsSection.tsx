"use client";

import { Users, Briefcase, Award, Clock, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    label: "Happy Clients",
    value: 150,
    suffix: "+",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Briefcase,
    label: "Projects",
    value: 300,
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    label: "Awards",
    value: 25,
    suffix: "",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Clock,
    label: "Years",
    value: 12,
    suffix: "",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    label: "Solutions",
    value: 75,
    suffix: "+",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Sparkles,
    label: "Innovations",
    value: 42,
    suffix: "+",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-16 bg-transparent overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="h-[200%] w-[200%] [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]"></div>
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Quantifying excellence through measurable achievements and
            continuous innovation
          </p>
        </div>

        {/* Scrolling stats line */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...stats, ...stats].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`min-w-[180px] p-[2px] rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}
                >
                  <div className="bg-gray-900 rounded-xl flex flex-col items-center justify-center p-4">
                    <Icon className="h-6 w-6 mb-1 text-white" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
