import { View } from "react-native";
import React, { useEffect, useState } from "react";
import CardElevationInput from "../../../constants/CardElevationInput/CardElevationInput";
import { styles } from "./styled";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardElevationListFruits from "../../../constants/CardElevationListFruits/CardElevationInput";

export default function SupplyerInfo() {
  const [fruitInfo, setFruitInfo] = useState<
    {
      nameFruit: string;
      priceWeight: string;
      amount: string;
      nameSupply: string;
    }[]
  >([]);

  useEffect(() => {
    async function getFruitsData() {
      const fruitData = await AsyncStorage.getItem("fruitInfo");
      setFruitInfo(fruitData ? JSON.parse(fruitData) : [])
      console.log("CONSOLE LIST ---- ", fruitInfo);

    }
    getFruitsData();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.marginTop}>
        <CardElevationInput
          nameIcon={"search-outline"}
          placeholderText="Pesquisar Fruta"
          onChange={(text: any) => {}}
        />
      </View>
      <FlatList
        style={{ paddingBottom: 50 }}
        data={fruitInfo}
        renderItem={({ item }) => (
          <CardElevationListFruits
            onPress={() => {}}
            key={item.nameFruit}
            nameFruit={item.nameFruit}
            priceWeight={item.priceWeight}
            amount={item.amount}
            nameSupply={item.nameSupply}
          />
        )}
      />
    </View>
  );
}
