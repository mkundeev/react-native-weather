import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OneDayScreen from "../screens/OneDayScreen";
import { RootStackParamList } from "../types/root.types";
import CalendarNav from "./CalendarNav";
import ErrorScreen from "../screens/ErrorScreen";
import { formatDate } from "../helpers/formatDate";

const MainStack = createNativeStackNavigator<RootStackParamList>();
export default function Main() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="CalendarNav"
        component={CalendarNav}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="OneDay"
        component={OneDayScreen}
        options={({ route }) => ({
          title: formatDate(route.params.date),
          headerTitleAlign: "center",
        })}
      />
      <MainStack.Screen
        name="Error"
        component={ErrorScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}
