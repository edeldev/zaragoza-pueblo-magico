"use client";
import { useState } from "react";
import {
  Main,
  Administration,
  ExploreZaragoza,
  About,
  Trade,
  Contact,
} from "@/components";
import { Activities } from "@/components/layout";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

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

      <Administration />

      <ExploreZaragoza />

      <About />

      <Activities />

      <Trade />

      <Contact />
    </>
  );
}
