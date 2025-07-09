import { TWeatherIconType } from "@/interface/weather";

export const translateDescription = (description: string): string => {
  const translations: Record<string, string> = {
    "clear sky": "cielo despejado",
    "few clouds": "pocas nubes",
    "scattered clouds": "nubes dispersas",
    "broken clouds": "nubes rotas",
    "overcast clouds": "parcialmente nublado",
    "shower rain": "chubascos",
    "light rain": "lluvia ligera",
    "moderate rain": "lluvia moderada",
    "heavy intensity rain": "lluvia intensa",
    thunderstorm: "tormenta eléctrica",
    snow: "nieve",
    "light snow": "nieve ligera",
    mist: "neblina",
    smoke: "humo",
    haze: "calina",
    fog: "niebla",
    sand: "arena",
    dust: "polvo",
    ash: "ceniza volcánica",
    squalls: "ráfagas",
    tornado: "tornado",
  };

  return translations[description] || description;
};

export const getWeatherIcon = (iconCode: string): TWeatherIconType => {
  if (iconCode.startsWith("01")) return "sun";
  if (["02", "03", "04"].some((prefix) => iconCode.startsWith(prefix)))
    return "cloud";
  if (["09", "10", "11"].some((prefix) => iconCode.startsWith(prefix)))
    return "rain";
  return "climate";
};
