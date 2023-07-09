
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FruitHome from "../screen/Fruit/FruitHome";
import FruitFinish from "../screen/Fruit/FruitFinish";
import FruitRegister from "../screen/Fruit/FruitRegister";
import FruitEdit from "../screen/Fruit/FruitEdit";
import FruitList from "../screen/Fruit/FruitList";

const { Navigator, Screen } = createStackNavigator();

export function FruitStack() {
  return (
    <Navigator>
      <Screen
        name="FruitHome"
        component={FruitHome}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="FruitList"
        component={FruitList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="FruitRegister"
        component={FruitRegister}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="FruitEdit"
        component={FruitEdit}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="FruitFinish"
        component={FruitFinish}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
