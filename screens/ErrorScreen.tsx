import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StateType } from "../types/weather.types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root.types";

type Props = NativeStackScreenProps<RootStackParamList, "Error">;
export default function ErrorScreen({ navigation }: Props) {
  const error = useSelector((state: StateType) => state.error);
  !error && navigation.navigate("Calendar");
  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.wrap}>
          <Text style={styles.error}>{`Sorry! ${error}`}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Text style={styles.text}>Return to main</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  wrap: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "skyblue",
    width: 120,
    borderRadius: 4,
  },
  text: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    fontSize: 30,
    color: "red",
    fontFamily: "Roboto-Regular",
  },
});
