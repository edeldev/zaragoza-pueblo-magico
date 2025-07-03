"use client";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Main, Administration, ExploreZaragoza, About } from "@/components";
import { IconCaretDown } from "@tabler/icons-react";
import BACKGROUND from "@/public/zaragoza.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        scrub: 1,
      },
    });

    tl.to("#hero-key", { duration: 1, scale: 1 })
      .to("#hero-main", { opacity: 0 }, "<")
      .to("#hero-footer", { opacity: 0 }, "<")
      .to(
        "#hero-key",
        {
          opacity: 0,
          duration: 0.1,
        },
        0.2
      )
      .to(
        "#zaragoza-text",
        {
          opacity: 1,
          duration: 0.2,
        },
        0.3
      )
      .to(
        "#name",
        {
          opacity: 1,
          duration: 0.3,
        },
        0.3
      )
      .to(
        "#year",
        {
          opacity: 1,
          duration: 0.4,
        },
        0.4
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);
  return (
    <Fragment>
      <div id="logo-mask" className="fixed top-0 w-full h-screen">
        <section>
          <picture
            id="hero-key"
            className="h-screen scale-125 block overflow-hidden fixed w-full"
          >
            <Image
              id="hero-key-background"
              src={BACKGROUND}
              alt="background"
              className="w-full h-full object-cover"
            />
          </picture>
        </section>
      </div>
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
      >
        <IconCaretDown size={30} className="text-[#B9026D]" />
      </motion.div>
      <Administration />

      <ExploreZaragoza />

      <About />
    </Fragment>
  );
}
