"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { MENU } from "@/utils/menu";
import { SocialMedia } from "../ui";
import { IMenu } from "./types";
import { useLockBodyScroll } from "@/hooks";

export const Menu = ({ isOpen, onClose }: IMenu) => {
  useLockBodyScroll(isOpen);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-[10px]"
          />

          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full z-[100] flex pointer-events-auto overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[15%] md:w-[40%] xl:w-1/2 relative flex justify-center items-center"
            >
              <img
                src="/logo-zaragoza.webp"
                alt="Decoración"
                className="object-cover hidden md:block"
                width={150}
                height={150}
              />
            </motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="w-[85%] md:w-[60%] xl:w-1/2 bg-gradient-to-br from-[#0a0a1a] via-[#0b0b22] to-black text-white relative px-5 lg:px-19 py-10 flex flex-col gap-5"
            >
              <div
                onClick={onClose}
                className="flex justify-end bg-[#36364e] hover:bg-[#36364e]/80 transition-colors duration-300 rounded-full p-2 cursor-pointer w-fit ml-auto"
              >
                <IconX className="text-pink-400" />
              </div>
              <nav className="h-full flex flex-col gap-5 justify-center overflow-auto">
                {MENU.map((menu) => (
                  <Link
                    key={menu.id}
                    href={menu.url}
                    onClick={onClose}
                    className="text-4xl md:text-5xl uppercase font-semibold hover:text-primary transition-colors duration-300 self-start"
                  >
                    {menu.label}
                  </Link>
                ))}
              </nav>
              <div className="flex gap-3 items-center flex-wrap">
                <span>Siguenos en:</span>
                <SocialMedia colorText="text-white" />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
