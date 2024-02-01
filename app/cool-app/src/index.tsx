import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import home from "./app/home";

const Tab = createBottomTabNavigator();

const IndexScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen component={home} name="home" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default IndexScreen;
