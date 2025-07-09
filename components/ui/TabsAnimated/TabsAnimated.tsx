"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ContainerPages } from "@/components";

interface TabsAnimatedProps {
  title?: string;
  subtitle?: string;
  tabs: string[];
  content: Record<string, React.ReactNode>;
  queryKey?: string;
  useQueryParams?: boolean;
}

export const TabsAnimated = ({
  title,
  subtitle,
  tabs,
  content,
  queryKey = "tab",
  useQueryParams = true,
}: TabsAnimatedProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultTab = tabs[0];
  const tabFromUrl = useQueryParams
    ? searchParams.get(queryKey) || defaultTab
    : defaultTab;

  const [activeTab, setActiveTab] = useState(tabFromUrl);

  useEffect(() => {
    if (useQueryParams) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl, useQueryParams]);

  const handleTabClick = (key: string) => {
    if (useQueryParams) {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(queryKey, key);
      router.replace(`?${params.toString()}`);
    }
    setActiveTab(key);
  };

  return (
    <ContainerPages className="bg-white px-5 lg:px-0">
      {(title || subtitle) && (
        <div className="text-center py-15">
          {title && (
            <h2 className="text-xl md:text-3xl font-bold uppercase">{title}</h2>
          )}
          {subtitle && (
            <span className="md:text-2xl font-semibold">{subtitle}</span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4 container mx-auto pb-10">
        <div className="flex items-center overflow-x-auto no-scrollbar space-x-3 pb-2 border-b border-gray-300">
          {tabs.map((tab) => (
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
              {content[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </ContainerPages>
  );
};
