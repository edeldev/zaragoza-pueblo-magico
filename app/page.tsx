"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Main,
  Administration,
  ExploreZaragoza,
  About,
  Trade,
  Contact,
} from "@/components";
import { IconCaretDown } from "@tabler/icons-react";
import { Activities } from "@/components/layout";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        scrub: 1,
      },
    });

    tl.to("#hero-key", { duration: 1, scale: 1 })
      .to("#hero-footer", { opacity: 0 }, "<")
      .to(
        "#hero-key",
        {
          opacity: 0,
          duration: 0.1,
        },
        0.12
      )
      .to(
        "#zaragoza-text",
        {
          opacity: 1,
          duration: 0.3,
        },
        0.17
      )
      .to(
        "#name",
        {
          opacity: 1,
          duration: 0.3,
        },
        0.19
      )
      .to(
        "#year",
        {
          opacity: 1,
          duration: 0.3,
        },
        0.25
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <>
      <div id="logo-mask" className="fixed top-0 w-full h-screen">
        <section>
          <picture
            id="hero-key"
            className="h-screen scale-125 block overflow-hidden w-full"
          >
            {!imageLoaded && (
              <div className="absolute inset-0 z-10 backdrop-blur-xl bg-black/50 transition-opacity duration-300" />
            )}
            <img
              id="hero-key-background"
              src={"/background-zaragoza.webp"}
              alt="background"
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </picture>
        </section>
      </div>

      <div
        className="fixed top-0 left-0 w-full h-screen bg-black/15 pointer-events-none z-1"
        aria-hidden="true"
      />
      <Main />

      <motion.div
        id="hero-footer"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed left-1/2 bottom-3 transform -translate-x-1/2"
        aria-label="Desplázate hacia abajo"
        role="presentation"
      >
        <IconCaretDown size={30} className="text-[#B9026D]" />
      </motion.div>
      <Administration />

      <ExploreZaragoza />

      <About />

      <Activities />

      <Trade />

      <Contact />
    </>
  );
}
