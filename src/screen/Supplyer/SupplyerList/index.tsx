import { View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CardElevationInput from "../../../constants/CardElevationInput/CardElevationInput";
import { styles } from "./styled";
import CardElevationListSupply from "../../../constants/CardElevationListSupply/CardElevationInput";

export default function SupplyerList() {
  const [teste, setTeste] = useState("");
  const navigation: any = useNavigation();
  return (
    <View style = {styles.root}>
      <View style={styles.marginTop}>
        <CardElevationInput
          nameIcon={"search-outline"}
          placeholderText="Fornecedor"
          onChange={(text: any) => {
            setTeste(text), console.log(teste);
          }}
        />
      </View>
      <View>
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
        <CardElevationListSupply
          nameIcon={"search-outline"}
          placeholderText="Fornecedor"
        />
        <CardElevationListSupply
          nameIcon={"search-outline"}
          placeholderText="Fornecedor"
        />
      </View>
    </View>
  );
}
