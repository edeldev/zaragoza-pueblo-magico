"use client";
import { useEffect } from "react";

export const useLockBodyScroll = (isModalOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
};
