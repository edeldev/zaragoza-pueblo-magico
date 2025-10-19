"use client";
import { motion } from "framer-motion";

export const RenderRainDrops = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {[...Array(60)].map((_, index) => {
        const left = Math.random() * 100;
        const duration = 1 + Math.random() * 0.5;
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={index}
            className="absolute bg-white/40 rounded-full drop-shadow-lg"
            style={{
              width: `${1 + Math.random() * 1.5}px`,
              height: `${10 + Math.random() * 10}px`,
              left: `${left}%`,
              top: `-100px`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            initial={{ y: -10 }}
            animate={{ y: "110vh" }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};
