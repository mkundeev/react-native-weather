import { Text, StyleSheet, TextStyle } from "react-native";
type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  children: string | string[];
};
export default function CustomText({ children, style }: CustomTextProps) {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 8,
    fontFamily: "Roboto-Regular",
  },
});
