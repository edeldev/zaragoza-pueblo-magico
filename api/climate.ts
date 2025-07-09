import { IWeatherInfo } from "@/interface/weather";
import { ENV } from "@/utils";
import { getWeatherIcon, translateDescription } from "@/utils";

export const getWeather = async (): Promise<IWeatherInfo | null> => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${ENV.CLIMATE.LAT}&lon=${ENV.CLIMATE.LON}&appid=${ENV.CLIMATE.API_KEY_CLIMATE}&units=metric&lang=en`
    );

    if (!res.ok) throw new Error("Ocurrio un error inesperado");

    const data = await res.json();

    const rawDescription = data.weather[0].description.toLowerCase();
    const rawIcon = data.weather[0].icon;

    const description = translateDescription(rawDescription);
    const icon = getWeatherIcon(rawIcon);
    const temperature = Math.round(data.main.temp);

    return { description, temperature, icon };
  } catch (error) {
    console.error("❌ Error al obtener el clima:", error);
    return null;
  }
};
