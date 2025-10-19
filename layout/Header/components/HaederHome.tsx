"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import { Menu } from "@/components";

export const HeaderHome = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isFeaturesInView, setIsFeaturesInView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfFeaturesInView = () => {
      const featuresElement = document.getElementById("section-features");
      if (featuresElement) {
        const rect = featuresElement.getBoundingClientRect();
        const isInView = rect.top <= 200;
        setIsFeaturesInView(isInView);

        const headerHeight = isInView ? 96 : 130;
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight}px`
        );
      }
    };

    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
      checkIfFeaturesInView();
    };

    window.addEventListener("scroll", handleScroll);

    const featuresElement = document.getElementById("section-features");
    if (featuresElement) {
      const rect = featuresElement.getBoundingClientRect();
      const isInView = rect.top <= 200;
      setIsFeaturesInView(isInView);

      const headerHeight = isInView ? 96 : 130;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const logoVariants = {
    normal: {
      width: 80,
      height: 80,
      scale: 1,
      rotate: 0,
      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
    },
    compact: {
      width: 60,
      height: 60,
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      filter: "drop-shadow(0 2px 12px rgba(255,255,255,0.4)) brightness(1.2)",
    },
  };

  const iconVariants = {
    normal: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
    },
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
      <motion.header
        ref={headerRef}
        initial={{
          backgroundColor: isFeaturesInView
            ? "rgba(0, 0, 0, 1)"
            : "rgba(0, 0, 0, 0)",
          paddingTop: isFeaturesInView ? "8px" : "20px",
          paddingBottom: isFeaturesInView ? "8px" : "20px",
        }}
        animate={{
          backgroundColor: isFeaturesInView
            ? "rgba(0, 0, 0, 1)"
            : "rgba(0, 0, 0, 0)",
          paddingTop: isFeaturesInView ? "8px" : "20px",
          paddingBottom: isFeaturesInView ? "8px" : "20px",
        }}
        transition={{
          duration: 0,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed w-full px-5 lg:px-0 z-99 top-0"
      >
        <motion.div
          initial={{
            height: isFeaturesInView ? "80px" : "90px",
          }}
          animate={{
            height: isFeaturesInView ? "80px" : "90px",
          }}
          transition={{
            duration: hasScrolled ? 0.5 : 0,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="container mx-auto flex justify-between items-center"
        >
          <Link href="/">
            <motion.div
              initial={{
                width: isFeaturesInView ? 60 : 80,
                height: isFeaturesInView ? 60 : 80,
                scale: 1,
                rotate: 0,
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
              variants={logoVariants}
              animate={isFeaturesInView ? "compact" : "normal"}
              transition={{
                duration: hasScrolled ? 0.6 : 0,
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
                  opacity: isFeaturesInView && hasScrolled ? [0, 0.3, 0] : 0,
                  scale: isFeaturesInView && hasScrolled ? [0.8, 1.2, 0.8] : 1,
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
                src="/logo-zaragoza-light.webp"
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
            animate={isFeaturesInView ? "compact" : "normal"}
            transition={{
              duration: hasScrolled ? 0.5 : 0,
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
            className="cursor-pointer relative"
          >
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white opacity-0"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: isFeaturesInView && hasScrolled ? 1 : 0,
                scale: isFeaturesInView && hasScrolled ? [0, 1] : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2,
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white opacity-0"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: isFeaturesInView && hasScrolled ? 1 : 0,
                scale: isFeaturesInView && hasScrolled ? [0, 1] : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.3,
              }}
            />
            <IconMenu size={30} className="text-white relative z-10" />
          </motion.div>
        </motion.div>
      </motion.header>
    </>
  );
};
