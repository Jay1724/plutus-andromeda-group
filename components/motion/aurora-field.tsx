"use client";

import { motion } from "framer-motion";

export function AuroraField({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-nebula/30 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-15%] top-[5%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[110px]"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[20%] h-[32rem] w-[32rem] rounded-full bg-nebula/20 blur-[130px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.ellipse
            cx="640"
            cy="360"
            rx="520"
            ry="180"
            stroke="currentColor"
            strokeOpacity="0.18"
            className="text-foreground"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "640px 360px" }}
          />
          <motion.ellipse
            cx="640"
            cy="360"
            rx="380"
            ry="130"
            stroke="currentColor"
            strokeOpacity="0.14"
            className="text-foreground"
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "640px 360px" }}
          />
          <motion.ellipse
            cx="640"
            cy="360"
            rx="640"
            ry="230"
            stroke="currentColor"
            strokeOpacity="0.1"
            className="text-foreground"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "640px 360px" }}
          />
        </svg>

        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    </div>
  );
}
