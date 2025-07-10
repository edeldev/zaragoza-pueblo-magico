"use client";
import { useEffect, useState, useRef } from "react";
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
import { EXPLORE_ZARAGOZA } from "@/utils";
import { Activities } from "@/components/layout";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeSection, setActiveSection] = useState<number>(
    EXPLORE_ZARAGOZA[0].id
  );

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

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = EXPLORE_ZARAGOZA.find(
              (item) => item.link === `#${id}`
            );
            if (match) {
              setActiveSection(match.id);
              break;
            }
          }
        }
      },
      {
        threshold: 0.9,
        rootMargin: "-130px 0px 0px 0px",
      }
    );
    observerRef.current = observer;

    EXPLORE_ZARAGOZA.forEach(({ link }) => {
      const el = document.querySelector(link);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="logo-mask" className="fixed top-0 w-full h-screen">
        <section>
          <picture
            id="hero-key"
            className="h-screen scale-125 block overflow-hidden w-full"
          >
            <img
              id="hero-key-background"
              src={"/zaragoza.png"}
              alt="background"
              className="w-full h-full object-cover"
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

      <ExploreZaragoza activeSection={activeSection} />

      <About />

      <Activities />

      <Trade />

      <Contact />
    </>
  );
}
