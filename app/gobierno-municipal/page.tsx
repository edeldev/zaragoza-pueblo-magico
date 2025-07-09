"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContainerPages } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { Council, Dependencies, Mayoress } from "@/components/Government";
import { TABS_GOVERNMENT } from "@/utils";

const tabContent: Record<string, React.ReactNode> = {
  Alcaldesa: <Mayoress />,
  Cabildo: <Council />,
  Dependencias: <Dependencies />,
};

const PageAlcaldesa = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultTab = "Alcaldesa";
  const tabFromUrl = searchParams.get("tab") || defaultTab;

  const [activeTab, setActiveTab] = useState(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  const handleTabClick = (key: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("tab", key);
    router.replace(`?${params.toString()}`);
  };

  return (
    <ContainerPages className="bg-white px-5 lg:px-0">
      <div className="text-center py-15">
        <h2 className="text-xl md:text-3xl font-bold uppercase">
          Gobierno municipal de General Zaragoza Nuevo León
        </h2>
        <span className="md:text-2xl font-semibold">
          Administración 2024 - 2017
        </span>
      </div>

      <div className="flex flex-col gap-4 container mx-auto pb-10">
        <div className="flex items-center overflow-x-auto no-scrollbar space-x-3 pb-2 border-b border-gray-300">
          {TABS_GOVERNMENT.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer relative px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all duration-300
                ${
                  activeTab === tab
                    ? "text-pink-100 bg-pink-600 shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </ContainerPages>
  );
};

export default PageAlcaldesa;
