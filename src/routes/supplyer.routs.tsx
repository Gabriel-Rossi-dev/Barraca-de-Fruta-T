import { createStackNavigator } from "@react-navigation/stack";
import SupplyerHome from "../screen/Supplyer/SupplyerHome";
import SupplyerName from "../screen/Supplyer/SupplyerName";
import SupplyerCPF from "../screen/Supplyer/SupplyerCPF";
import SupplyerPhone from "../screen/Supplyer/SupplyerPhone";
import SupplyerFruits from "../screen/Supplyer/SupplyerFruits";
import SupplyerFinish from "../screen/Supplyer/SupplyerFinish";
import SupplyerList from "../screen/Supplyer/SupplyerList";

import React from "react";
import SupplyerInfo from "../screen/Supplyer/SupplyerInfo";

const { Navigator, Screen } = createStackNavigator();

// rotas da tela de teste
export function SupplyStack() {
  return (
    <Navigator>
      <Screen
        name="SupplyerHome"
        component={SupplyerHome}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SupplyerName"
        component={SupplyerName}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SupplyerCPF"
        component={SupplyerCPF}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SupplyerPhone"
        component={SupplyerPhone}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SupplyerFruits"
        component={SupplyerFruits}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SupplyerFinish"
        component={SupplyerFinish}
        options={{
          headerShown: false,
        }}
      />
       <Screen
        name="SupplyerList"
        component={SupplyerList}
        options={{
          headerShown: false,
        }}
      />
      
      <Screen
        name="SupplyerInfo"
        component={SupplyerInfo}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
