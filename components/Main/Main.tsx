"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IconCarFan,
  IconCloud,
  IconCloudRain,
  IconSun,
} from "@tabler/icons-react";
import { getWeather } from "@/api/climate";
import { IWeatherInfo, TWeatherIconType } from "@/interface/weather";
import { ModalVideo } from "./components";

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weatherData, setWeatherData] = useState<IWeatherInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const weather = await getWeather();
      setWeatherData(weather);
    };
    fetchData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const getIcon = (icon: TWeatherIconType | ReactNode) => {
    switch (icon) {
      case "sun":
        return <IconSun size={20} />;
      case "cloud":
        return <IconCloud size={20} />;
      case "rain":
        return <IconCloudRain size={20} />;
      default:
        return <IconCarFan size={20} />;
    }
  };

  return (
    <div className="min-h-[400dvh] md:min-h-[300dvh] relative">
      <div className="min-h-screen flex flex-col justify-center gap-20 items-center py-10 text-center px-5">
        <div className="space-y-2 z-1">
          <h1 className="text-[45px] md:text-8xl font-bold text-white">
            General Zaragoza
          </h1>
          <span className="text-white text-xl md:text-3xl">
            Pueblo mágico entre cascadas y montañas
          </span>
        </div>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 75 75"
          width="80"
          height="80"
          className="text-white cursor-pointer z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
        >
          <g clipPath="url(#:R18hdkvf7afcq:)">
            <rect
              width={75}
              height={75}
              rx={37.5}
              fill="black"
              fillOpacity={0.4}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75ZM31.6852 27.0487C31.3486 26.8324 30.9208 26.817 30.5696 27.0088C30.2184 27.2005 30 27.5686 30 27.9688V47.6562C30 48.0564 30.2184 48.4245 30.5696 48.6163C30.9208 48.808 31.3486 48.7926 31.6852 48.5763L46.9977 38.7326C47.3107 38.5313 47.5 38.1847 47.5 37.8125C47.5 37.4403 47.3107 37.0937 46.9977 36.8924L31.6852 27.0487Z"
              fill="currentColor"
            />
          </g>
        </motion.svg>

        <div className="flex items-center gap-3 text-white shadow-md bg-black/30 backdrop-blur-md rounded-xl p-5 relative z-1">
          {getIcon(weatherData?.icon ?? <IconCarFan size={20} />)}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-start">
              {weatherData ? "Clima Actual" : "Clima no disponible"}
            </span>
            <span className="text-xs text-start capitalize">
              {weatherData?.description ?? "No se pudo obtener el clima"}
            </span>
          </div>

          <span>|</span>
          <span className="font-bold text-xl">
            {weatherData?.temperature ? `${weatherData.temperature}°` : "--"}
          </span>
        </div>
      </div>

      <ModalVideo isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};
