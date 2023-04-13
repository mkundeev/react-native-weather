import { WeatherType } from "../types/weather.types";

export const getAvarageTemp = (date: string, array: WeatherType[]) => {
  if (array.length === 0) {
    return;
  }
  const arr = array
    .filter((data) => data.dt_txt.includes(date))
    .map((data) => data.main.temp);
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
};
