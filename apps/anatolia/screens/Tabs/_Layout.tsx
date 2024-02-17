import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import TwoScreen from "./TwoScreen";

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Two" component={TwoScreen} />
    </Tab.Navigator>
  );
}
