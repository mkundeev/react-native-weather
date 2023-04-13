import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-native-calendars";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root.types";
import { StateType, WeatherType } from "../types/weather.types";
import { useIsFocused } from "@react-navigation/native";
import { sagaActions } from "../redux/sagaActions";
import { getAvarageTemp } from "../helpers/getAvarageTemp";

type Props = NativeStackScreenProps<RootStackParamList, "Calendar">;

export default function CalendarScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const { weather, error } = useSelector((state: StateType) => state);
  const isFocused = useIsFocused();

  error && navigation.navigate("Error");

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA });
  }, [dispatch, isFocused]);

  return (
    <View style={styles.container}>
      {weather.length !== 0 && !error && (
        <Calendar
          theme={{
            textDayFontFamily: "Roboto-Regular",
            textMonthFontFamily: "Roboto-Regular",
            textDayHeaderFontFamily: "Roboto-Regular",
          }}
          minDate={weather[0].dt_txt}
          maxDate={weather[weather.length - 1].dt_txt.split(" ")[0]}
          dayComponent={({ date, state }) => {
            return (
              <View style={styles.cell}>
                {date?.dateString && (
                  <TouchableOpacity
                    onPress={() => {
                      if (state !== "disabled")
                        navigation.navigate("OneDay", {
                          date: date.dateString,
                        });
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color:
                          state === "disabled" ? "lightgrey" : "deepskyblue",
                      }}
                    >
                      {date?.day}
                    </Text>
                    {state !== "disabled" && (
                      <Text style={styles.temp}>
                        {getAvarageTemp(date.dateString, weather)}
                        {"\u00b0"}C
                      </Text>
                    )}
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "powderblue",
  },
  cell: {
    height: 40,
    width: "100%",
    paddingHorizontal: 4,
  },
  temp: {
    marginTop: 6,
    textAlign: "center",
  },
});
