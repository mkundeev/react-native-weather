import axios from "axios";
import { WeatherResponsType } from "../types/weather.types";

export async function fetchWeather(): Promise<WeatherResponsType> {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=45364f57198295f157c2155d8034c0cd&units=metric`
  );
}
