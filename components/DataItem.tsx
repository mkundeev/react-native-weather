import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { WeatherType } from "../types/weather.types";
import CustomText from "./CustomText";

type Props = {
  data: WeatherType;
};
export default function DataItem({ data }: Props) {
  const { dt_txt, main, weather } = data;

  return (
    <View style={styles.item}>
      <View>
        <CustomText style={styles.time}>At {dt_txt.slice(-8, -3)}</CustomText>
        <CustomText>
          Temperature: {Math.round(main.temp).toString()} {"\u00b0"}C
        </CustomText>
        <CustomText>Weather: {weather[0].description}</CustomText>
      </View>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        }}
        style={{ width: 60, height: 60 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    color: "white",
    backgroundColor: "powderblue",
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    marginTop: 0,
    fontSize: 16,
  },
});
