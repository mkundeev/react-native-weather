import { useSelector } from "react-redux";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root.types";
import { StateType } from "../types/weather.types";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import DataItem from "../components/DataItem";

type Props = NativeStackScreenProps<RootStackParamList, "OneDay">;
export default function OneDayScreen({ route, navigation }: Props) {
  const { weather, error } = useSelector((state: StateType) => state);

  error && navigation.navigate("Error");

  const weatherData = weather.filter((item) =>
    item.dt_txt.includes(route.params.date)
  );

  return (
    <View style={styles.container}>
      {weather.length !== 0 && !error && (
        <SafeAreaView style={styles.areaContainer}>
          <FlatList
            data={weatherData}
            renderItem={({ item }) => <DataItem data={item} />}
            keyExtractor={(item) => item.dt_txt}
          />
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
  },
  areaContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
