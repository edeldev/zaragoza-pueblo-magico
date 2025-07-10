"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import { Menu } from "@/components";

export const HeaderPages = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoVariants = {
    compact: {
      width: 60,
      height: 60,
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      filter: "drop-shadow(0 2px 12px rgba(255,255,255,0.4)) brightness(1.2)",
    },
  };

  const iconVariants = {
    compact: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      opacity: 0.9,
      filter: "drop-shadow(0 4px 8px rgba(255,255,255,0.3)) brightness(1.3)",
    },
  };

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="fixed w-full px-5 lg-px-0 bg-black py-2 top-0 z-99">
        <div className="container mx-auto flex justify-between items-center h-[80px]">
          <Link href="/">
            <motion.div
              initial={{
                width: 60,
                height: 60,
                scale: 1,
                rotate: 0,
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
              variants={logoVariants}
              animate={"compact"}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                rotate: [0, -8, 8, 0],
                filter:
                  "drop-shadow(0 8px 16px rgba(255,255,255,0.5)) brightness(1.4)",
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                  rotate: { duration: 0.6 },
                },
              }}
              whileTap={{
                scale: 0.92,
                transition: { duration: 0.1 },
              }}
              className="cursor-pointer relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                initial={{
                  opacity: 0,
                  scale: 1,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
                }}
              />
              <img
                src="/logo-zaragoza-light.png"
                alt="logo"
                width={80}
                height={80}
                className="object-cover relative z-10"
              />
            </motion.div>
          </Link>

          <motion.div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{
              scale: 1,
              rotate: 0,
              opacity: 1,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
            variants={iconVariants}
            animate={"compact"}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.25,
              rotate: [0, 15, -15, 0],
              filter:
                "drop-shadow(0 6px 12px rgba(255,255,255,0.6)) brightness(1.5)",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                rotate: { duration: 0.8 },
              },
            }}
            whileTap={{
              scale: 0.85,
              transition: { duration: 0.1 },
            }}
            className="cursor-pointer"
          >
            <IconMenu size={30} className="text-white" />
          </motion.div>
        </div>
      </header>
    </>
  );
};
