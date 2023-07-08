
import { createStackNavigator } from "@react-navigation/stack";
import SupplyerHome from "../screen/Supplyer/SupplyerHome";
import SupplyerName from "../screen/Supplyer/SupplyerName";
import SupplyerCPF from "../screen/Supplyer/SupplyerCPF";
import SupplyerPhone from "../screen/Supplyer/SupplyerPhone";
import SupplyerFruits from "../screen/Supplyer/SupplyerFruits";
import SupplyerFinish from "../screen/Supplyer/SupplyerFinish";
import SupplyerInfo from "../screen/Supplyer/SupplyerInfo";
import SupplyerList from "../screen/Supplyer/SupplyerList";
import { NavigationContainer } from "@react-navigation/native";


import React from "react";
import FruitHome from "../screen/Fruit/FruitHome";
import FruitFinish from "../screen/Fruit/FruitFinish";
import FruitRegister from "../screen/Fruit/FruitRegister";
import FruitEdit from "../screen/Fruit/FruitEdit";

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
