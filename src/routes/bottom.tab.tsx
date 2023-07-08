import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SupplyerHome from "../screen/Supplyer/SupplyerHome";
import FruitHome from "../screen/Fruit/FruitHome";
import { View, Image } from "react-native";
import imagePath from "../constants/imagePath";
import StackRoutes from "@react-navigation/native";
import { SupplyStack } from "./supplyer.routs";
import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import theme from "../global/theme";
import { FruitStack } from "./fruits.routs";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {} }}>
        <Tab.Screen
          name="SupplyStack"
          component={SupplyStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "people" : "people-outline"}
                  size={36}
                  color={focused ? theme.colors.primary : theme.colors.darkGray}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="FruitStack"
          component={FruitStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "nutrition" : "nutrition-outline"}
                  size={36}
                  color={focused ? theme.colors.primary : theme.colors.darkGray}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
