import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-native-calendars";
import { View, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root.types";
import { StateType } from "../types/weather.types";
import { useIsFocused } from "@react-navigation/native";
import { sagaActions } from "../redux/sagaActions";

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
          onDayPress={(day) => {
            navigation.navigate("OneDay", { date: day.dateString });
          }}
          minDate={weather[0].dt_txt}
          maxDate={weather[weather.length - 1].dt_txt.split(" ")[0]}
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
});
