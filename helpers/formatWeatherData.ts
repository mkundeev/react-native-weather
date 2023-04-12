import { WeatherType } from "../types/weather.types";
export const formatWeatherData = (data: WeatherType[]) => {
  const arr = new Set(data.map((item) => item.dt_txt.split(" ")[0]));
  const newArr = [...arr].map((title) => {
    const dateArray = data.filter((item) => item.dt_txt.includes(title));
    const day = {
      title,
      data: dateArray,
    };
    return day;
  });
  return newArr;
};
