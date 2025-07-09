export type TWeatherIconType = "rain" | "sun" | "cloud" | "climate";

export interface IWeatherInfo {
  description: string;
  temperature: number;
  icon: TWeatherIconType;
}
