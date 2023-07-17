import { View } from "react-native";
import React, { useEffect, useState } from "react";
import CardElevationInput from "../../../constants/CardElevationInput/CardElevationInput";
import { styles } from "./styled";
import CardElevationListSupply from "../../../constants/CardElevationListSupply/CardElevationInput";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SupplyerInfo() {
  const [supplyInfo, setSupplyInfo] = useState<
    { name: string; cpf: string; phone: string; listFruits: [string] }[]
  >([]);

  useEffect(() => {
    async function getSupplyerData() {
      const supplyerData = await AsyncStorage.getItem("listSupplyer");
      setSupplyInfo(supplyerData ? JSON.parse(supplyerData) : []);
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
        style={{ paddingBottom: 50 }}
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
