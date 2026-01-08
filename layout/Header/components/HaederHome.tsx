"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import { Menu } from "@/components";

const HEADER_HEIGHT = 105;

export const HeaderHome = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onScroll = useCallback(() => {
    const about = document.getElementById("about");
    if (!about) return;

    const rect = about.getBoundingClientRect();
    const shouldBeCompact = rect.top <= HEADER_HEIGHT;

    setIsCompact((prev) => {
      if (prev !== shouldBeCompact) return shouldBeCompact;
      return prev;
    });
  }, []);

  useEffect(() => {
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const headerVariants = {
    transparent: {
      backgroundColor: "rgba(0,0,0,0)",
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    solid: {
      backgroundColor: "black",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
  };

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <motion.header
        initial="transparent"
        variants={headerVariants}
        animate={isCompact ? "solid" : "transparent"}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 w-full z-99 px-5 lg:px-0"
      >
        <div className="container mx-auto flex items-center justify-between h-[80px]">
          <Link href="/" passHref>
            <motion.div
              className="cursor-pointer"
              animate={{
                scale: isCompact ? 0.85 : 1,
                rotate: [0, -2, 2, 0],
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
              whileHover={{
                scale: isCompact ? 0.95 : 1.1,
                rotate: [0, -8, 8, 0],
                filter:
                  "drop-shadow(0 8px 16px rgba(255,255,255,0.5)) brightness(1.4)",
              }}
              whileTap={{ scale: 0.92 }}
            >
              <img
                src="/logo-zaragoza-light.webp"
                alt="logo"
                width={70}
                height={70}
                style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
              />
            </motion.div>
          </Link>

          <motion.div
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer"
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
            whileTap={{ scale: 0.9 }}
          >
            <IconMenu size={30} className="text-white" />
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};
