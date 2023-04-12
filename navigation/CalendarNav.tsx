import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FiveDaysScreen from "../screens/FiveDaysScreen";
import CalendarScreen from "../screens/CalendarScreen";
import { RootStackParamList } from "../types/root.types";
import SvgCalendar from "../components/svg/SvgCalendar";
import SvgPhone from "../components/svg/SvgPhone";

const CalendarNavStack = createBottomTabNavigator<RootStackParamList>();
export default function CalendarNav() {
  return (
    <CalendarNavStack.Navigator>
      <CalendarNavStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "Calendar",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <SvgCalendar fill={focused ? "deepskyblue" : "black"} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <CalendarNavStack.Screen
        name="FiveDays"
        component={FiveDaysScreen}
        options={{
          title: "5 days weather forcast",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <SvgPhone fill={focused ? "deepskyblue" : "black"} />
          ),
          tabBarLabel: "5 days forcast",
          tabBarShowLabel: false,
        }}
      />
    </CalendarNavStack.Navigator>
  );
}
