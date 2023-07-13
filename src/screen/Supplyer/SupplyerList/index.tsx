import { View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CardElevationInput from "../../../constants/CardElevationInput/CardElevationInput";
import { styles } from "./styled";
import CardElevationListSupply from "../../../constants/CardElevationListSupply/CardElevationInput";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function SupplyerInfo() {
  const [teste, setTeste] = useState("");
  const navigation: any = useNavigation();
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
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View>
          <CardElevationListSupply
            key={1}
            nameIcon={"search-outline"}
            placeholderText="Fornecedor"
          />
          <CardElevationListSupply
            key={2}
            nameIcon={"search-outline"}
            placeholderText="Fornecedor"
          />
          <CardElevationListSupply
            nameIcon={"search-outline"}
            placeholderText="Fornecedor"
          />
          <CardElevationListSupply
            nameIcon={"search-outline"}
            placeholderText="Fornecedor"
          />
          <CardElevationListSupply
            nameIcon={"search-outline"}
            placeholderText="Fornecedor"
          />
          <CardElevationListSupply
            nameIcon={"search-outline"}
            placeholderText="Fornecedor"
          />
        </View>
      </ScrollView>
    </View>
  );
}
