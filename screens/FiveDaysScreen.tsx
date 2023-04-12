import { StyleSheet, SafeAreaView, SectionList, View } from "react-native";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../types/weather.types";

import DataItem from "../components/DataItem";
import CustomText from "../components/CustomText";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root.types";

import { formatDate } from "../helpers/formatDate";
import { formatWeatherData } from "../helpers/formatWeatherData";

type Props = NativeStackScreenProps<RootStackParamList, "FiveDays">;
export default function FiveDaysScreen({ navigation }: Props) {
  const { weather, error } = useSelector((state: StateType) => state);
  error && navigation.navigate("Error");

  const weatherData = useMemo(() => formatWeatherData(weather), [weather]);

  return (
    <View style={styles.container}>
      {weather.length !== 0 && !error && (
        <SafeAreaView style={styles.areaContainer}>
          <SectionList
            sections={weatherData}
            stickySectionHeadersEnabled={true}
            keyExtractor={(item, index) => item.dt_txt + index}
            renderItem={({ item }) => <DataItem data={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <CustomText style={styles.header}>{formatDate(title)}</CustomText>
            )}
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
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    backgroundColor: "white",
    paddingVertical: 4,
    textAlign: "center",
    marginTop: 0,
  },
});
