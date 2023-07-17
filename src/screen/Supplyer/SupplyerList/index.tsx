import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import CardElevationInput from "../../../constants/CardElevationInput/CardElevationInput";
import { styles } from "./styled";
import CardElevationListSupply from "../../../constants/CardElevationListSupply/CardElevationInput";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SupplyerInfo() {
  const [supplyInfo, setSupplyInfo] = useState<
    { name: string; cpf: string; phone: string; listFruits: [string] }[]
  >([]);
  const [listSupplyer, setListSupplyer] = useState([]);

  useEffect(() => {
    async function getSupplyerData() {
      const supplyerData = await AsyncStorage.getItem("listSupplyer");
      setListSupplyer(supplyerData ? JSON.parse(supplyerData) : []);
      const supplyerInfo = await AsyncStorage.getItem("listSupplyer");
      console.log("SUPPLYER INFO", supplyerInfo);
      const supplyerStringify = JSON.stringify(listSupplyer);
      setSupplyInfo(JSON.parse(supplyerStringify));
      console.log("---- PARSE AQUI ----", supplyInfo);
    }
    getSupplyerData();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.marginTop}>
        <CardElevationInput
          nameIcon={"search-outline"}
          placeholderText="Pesquisar fornecedor"
          onChange={(text: any) => {}}
        />
      </View>
      <FlatList
        style= {{paddingBottom:50}}
        data={supplyInfo}
        renderItem={({ item }) => (
          <CardElevationListSupply
            onPress={() => {}}
            key={item.cpf}
            name={item.name}
            cpf={item.cpf}
            phone={item.phone}
          />
        )}
      />
    </View>
  );
}
