import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CardElevationInput from "../../../constants/CardElevationInput/CardElevationInput";
import { styles } from "./styled";
import CardElevationListSupply from "../../../constants/CardElevationListSupply/CardElevationInput";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SupplyerInfo() {
  const [teste, setTeste] = useState("");
  const navigation: any = useNavigation();
  let supplyerList: any;

  async function getSupplyerData() {
    supplyerList = await AsyncStorage.getItem("listSupplyer");
    console.log(`{}{}{}{}{} ${supplyerList}`)
    // console.log(supplyerList)
  }

  // useEffect(() => {
  //   getSupplyerData();

  //   return () => {
  //     supplyerList = JSON.parse(supplyerList);
  //     console.log(supplyerList);
  //   };
  // }, []);

 
  getSupplyerData()
  return (
    <View style={styles.root}>
      <View style={styles.marginTop}>
        <CardElevationInput
          nameIcon={"search-outline"}
          placeholderText="Fornecedor"
          onChange={(text: any) => {
            setTeste(text), console.log(teste);
          }}
        />
      </View>
      <FlatList
        data={supplyerList}
        renderItem={({ item }) => (
          <CardElevationListSupply
            onPress={() => {}}
            // key={(item) => {
            //   item.cpf
            // }}
            name={item.name}
            cpf={item.cpf}
            phone={item.phone}
          />
        )}
      />
    </View>
  );
}
